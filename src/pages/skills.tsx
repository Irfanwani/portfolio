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
              <li>Solidity</li>
            </ul>
          </li>
          <li className="titlecolor">
            Frameworks and Libraries
            <ul>
              <li>React Native</li>
              <li>React</li>
              <li>Redux</li>
              <li>Redux Toolkit and RTK query</li>
              <li>Three js</li>
              <li>GraphQL</li>
              <li>Socket io</li>
              <li>Expo</li>
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>Flask</li>
              <li>Matplotlib</li>
              <li>Brownie</li>
              <li>Hardhat</li>
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
            </ul>
          </li>
        </ul>

        <h3 className="titlecolor">Last But not the least</h3>
        <li>HTML and CSS</li>
      </div>
    </Card>
  );
};

export default Skills;
