import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { profile } from '../data/profile'
import { Icon } from './ui'

/**
 * ContactForm — posts to Formspree.
 *
 * SETUP
 * 1. Create a form at https://formspree.io (free tier, 50 submissions/month)
 * 2. Register the account with the address that should receive mail:
 *    irfanwani347@gmail.com
 * 3. Copy the form ID from the endpoint it gives you, e.g.
 *    https://formspree.io/f/xabcdefg
 * 4. Put it in a .env file at the project root:
 *    VITE_FORMSPREE_ID=xabcdefg
 *
 * The ID is read at build time from import.meta.env, so it is never hardcoded
 * and never committed. With no ID configured the form renders in a disabled
 * state that explains what to do, rather than failing silently on submit.
 *
 * Notes on the payload:
 *  · `_replyto`  — Formspree sets the Reply-To header, so hitting Reply
 *                  answers the sender directly.
 *  · `_subject`  — the email subject line.
 *  · `_gotcha`   — honeypot. Real users never see it; bots fill it in and we
 *                  silently accept without sending anything.
 */
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID
const ENDPOINT = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const EMPTY = { name: '', email: '', subject: '', message: '' }

const Field = {
  input:
    'w-full border border-stroke bg-void/60 px-3 py-2.5 font-mono text-[12px] text-ice placeholder:text-ice/40 outline-none transition-colors focus:border-cyan/60 focus:bg-void/80',
  label:
    'mb-1.5 block font-mono text-[9px] tracking-[0.2em] uppercase text-ice/58',
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Required'
    if (!values.email.trim()) e.email = 'Required'
    else if (!EMAIL_RE.test(values.email.trim())) e.email = 'Enter a valid email'
    if (values.message.trim().length < 10) e.message = 'A little more detail, please'
    return e
  }

  async function onSubmit(e) {
    e.preventDefault()

    // Bot filled the honeypot — look successful, send nothing.
    if (honeypot) {
      setStatus('sent')
      setValues(EMPTY)
      return
    }

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    if (!ENDPOINT) {
      setStatus('error')
      setServerError(
        'No Formspree form is configured. Set VITE_FORMSPREE_ID in your .env file.'
      )
      return
    }

    setStatus('sending')
    setServerError('')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim() || 'Portfolio enquiry',
          message: values.message.trim(),
          _replyto: values.email.trim(),
          _subject: `Portfolio enquiry — ${values.subject.trim() || values.name.trim()}`,
          _gotcha: honeypot,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        // Surface per-field messages when Formspree sends them
        if (Array.isArray(data?.errors) && data.errors.length) {
          const mapped = {}
          for (const err of data.errors) {
            if (err.field) mapped[err.field] = err.message || 'Invalid'
          }
          if (Object.keys(mapped).length) setErrors(mapped)
        }
        throw new Error(
          data?.errors?.[0]?.message ||
            `Formspree rejected the submission (${res.status}).`
        )
      }

      setStatus('sent')
      setValues(EMPTY)
    } catch (err) {
      setStatus('error')
      setServerError(
        err?.message === 'Failed to fetch'
          ? 'Network error — check your connection, or email me directly below.'
          : err?.message || 'Something went wrong. Please try again.'
      )
    }
  }

  /* ---------------- sent ---------------- */
  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-lime/35 bg-lime/[0.05] p-6"
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center border border-lime/40 text-lime">
            <Icon.check size={16} />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[12px] tracking-[0.1em] text-lime">
              TRANSMISSION RECEIVED
            </p>
            <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-ice/72">
              Thanks — that landed in my inbox at{' '}
              <span className="text-cyan">{profile.email}</span>. I reply to
              everything, usually within a day.
            </p>
            <button
              onClick={() => setStatus('idle')}
              data-hot
              className="mt-4 flex items-center gap-2 border border-stroke px-3 py-1.5 font-mono text-[9.5px] tracking-[0.16em] text-ice/63 transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <Icon.chevron size={11} className="rotate-180" />
              SEND ANOTHER
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  /* ---------------- form ---------------- */
  const sending = status === 'sending'
  const unconfigured = !ENDPOINT

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 font-mono">
      {/* command line */}
      <p className="text-lime/92">
        <span className="text-lime/65">$</span> ./open_channel --to engineer
      </p>

      {/* honeypot — visually and programmatically hidden from humans */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="company-website">Company website</label>
        <input
          id="company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={Field.label}>
            Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ada Lovelace"
            value={values.name}
            onChange={set('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            className={Field.input}
          />
          {errors.name && (
            <p id="cf-name-err" className="mt-1 text-[10px] text-rose">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className={Field.label}>
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={set('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            className={Field.input}
          />
          {errors.email && (
            <p id="cf-email-err" className="mt-1 text-[10px] text-rose">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="cf-subject" className={Field.label}>
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          placeholder="Integration role at…"
          value={values.subject}
          onChange={set('subject')}
          className={Field.input}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="cf-message" className={Field.label}>
          Message *
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="What are you building?"
          value={values.message}
          onChange={set('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
          className={`${Field.input} resize-y`}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1 text-[10px] text-rose">
            {errors.message}
          </p>
        )}
      </div>

      {/* submit row */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="submit"
          disabled={sending || unconfigured}
          data-hot
          className={`group relative inline-flex items-center gap-2 overflow-hidden border px-5 py-3 font-mono text-[11px] tracking-[0.18em] transition-all duration-300 ${
            unconfigured
              ? 'cursor-not-allowed border-stroke bg-white/[0.02] text-ice/45'
              : sending
                ? 'cursor-wait border-cyan/50 bg-cyan/10 text-cyan'
                : 'border-cyan/50 bg-cyan/15 text-cyan hover:bg-cyan hover:text-void hover:shadow-[0_0_34px_-6px_rgba(34,211,238,0.8)]'
          }`}
        >
          {sending ? (
            <>
              <motion.span
                className="h-3 w-3 rounded-full border border-cyan border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
              />
              TRANSMITTING…
            </>
          ) : (
            <>
              <Icon.rocket
                size={14}
                className="transition-transform duration-500 group-hover:-translate-y-0.5"
              />
              SEND MESSAGE
            </>
          )}
        </button>

        {/* direct-email fallback stays available */}
        <a
          href={`mailto:${profile.email}`}
          data-hot
          className="inline-flex items-center gap-2 border border-stroke px-4 py-3 font-mono text-[10px] tracking-[0.16em] text-ice/63 transition-colors hover:border-violet/40 hover:text-violet"
        >
          <Icon.mail size={13} />
          EMAIL INSTEAD
        </a>
      </div>

      {/* status line — announced to screen readers */}
      <p
        role="status"
        aria-live="polite"
        className="mt-3 min-h-[16px] font-mono text-[10px] tracking-[0.12em] text-ice/58"
      >
        {unconfigured ? (
          <span className="text-amber/90">
            ⚠ Form not connected — set VITE_FORMSPREE_ID in .env, or use “EMAIL
            INSTEAD”.
          </span>
        ) : status === 'error' ? (
          <span className="text-rose">✗ {serverError}</span>
        ) : sending ? (
          <span className="text-cyan">▸ establishing connection…</span>
        ) : (
          <span className="text-ice/58">
            Delivered over HTTPS · replies go straight to{' '}
            <span className="text-cyan/80">{profile.email}</span>
          </span>
        )}
      </p>
    </form>
  )
}