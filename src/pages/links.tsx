import Card from "../components/card";

const Links = () => {
  return (
    <Card className="flexend">
      <div className="titlecolor">
        Checkout my github
        <li>
          <a target="_blank" href="https://github.com/irfanwani">
            Github
          </a>
        </li>
        Make sure to follow me on
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/irfan-wani-6891b1181/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/irfanwani347/">
            Instagram
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/Irfan__wani">
            Twitter
          </a>
        </li>
        Email me at
        <li>
          <a href="mailto:irfanwani347@gmail.com">Email</a>
        </li>
      </div>
    </Card>
  );
};

export default Links;
