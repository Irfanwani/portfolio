import Card from "../components/card";

const Home = () => {
  return (
    <Card>
      <div className="center column titlecolor">
        <div className="title">Hello World!</div>

        <h3 className="descolor">
          This is Irfan wani. Welcome to my Portfolio!!!
          <br />
        </h3>
        <h2>Who am I?</h2>
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
