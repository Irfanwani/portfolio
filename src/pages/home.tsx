import Card from "../components/card";

const Home = () => {
  return (
    <Card className="first">
      <div className="center column">
        <div className="title titlecolor">Hello World!</div>

        <h3 className="descolor">
          This is Irfan wani. Welcome to my Portfolio!!!
          <br />
        </h3>
        <h2 className="descolor">Who am I?</h2>
        <h3 className="descolor">
          A Software Development Engineer and
          Integration Manager with a passion for crafting seamless digital
          experiences. I specialize in building and integrating scalable
          systems, with hands-on expertise in mobile application development.
          From backend architecture to intuitive mobile interfaces, I bridge the
          gap between robust engineering and smooth user experiences. Welcome to
          my portfolio — where innovation meets execution.
        </h3>
        <h2 className="descolor">Keep Scrolling to explore more about ME!</h2>
      </div>
    </Card>
  );
};

export default Home;
