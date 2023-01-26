import Card from "../components/card";
import ExpSingle from "../components/expsingle";
import { Appsdeployer, Solvevolve } from "../components/desc";

const Exp = () => {
  return (
    <Card>
      <div>
        <ExpSingle
          title="Appsdeployer"
          date="Oct-2022 to Present"
          href="https://appsdeployer.com"
        >
          <Appsdeployer />
        </ExpSingle>
        <hr className='divider' />
        <ExpSingle
          title="Solvevolve"
          date="Oct-2022 to Dec-2022"
          href="https://www.linkedin.com/company/solvevolve/"
        >
          <Solvevolve />
        </ExpSingle>
      </div>
    </Card>
  );
};

export default Exp;
