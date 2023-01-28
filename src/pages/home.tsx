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
          Self Taught Full stack web and app developer, building nice things
          from last 3 YEARS.
        </h3>
        <h2 className="descolor">Keep Scrolling to explore more about ME!</h2>
      </div>
    </Card>
  );
};

export default Home;
