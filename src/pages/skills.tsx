import Card from "../components/card";

const Skills = () => {
  return (
    <Card className="flexstart">
      <div>
        <ul>
          <li className="titlecolor">
            Programming Languages
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>SQL</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
          </li>
          <li className="titlecolor">
            Frameworks and Libraries
            <ul>
              <li>React Native</li>
              <li>Redux</li>
              <li>Redux Toolkit and RTK query</li>
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>React</li>
              <li>Three js</li>
              <li>GraphQL</li>
              <li>Socket io</li>
              <li>Matplotlib</li>

            </ul>
          </li>
          <li className="titlecolor">
            Databases
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Sqlite3</li>
            </ul>
          </li>
          <li className="titlecolor">
            Extras
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>HTML and CSS</li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Skills;
