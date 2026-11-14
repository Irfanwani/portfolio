import { profile } from '../data/profile'

export default function ProfileSummary() {
  return profile.summary.split(/(FreJun)/g).map((part, index) =>
    part === 'FreJun' ? (
      <a
        key={index}
        href="https://frejun.com"
        target="_blank"
        rel="noreferrer noopener"
        className="text-cyan underline decoration-cyan/40 underline-offset-2 transition-colors hover:text-cyan/80"
      >
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}
