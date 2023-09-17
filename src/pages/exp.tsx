import Card from "../components/card";
import ExpSingle from "../components/expsingle";
import { Appsdeployer, Frejun, NITSri, Solvevolve } from "../components/desc";

const Exp = () => {
  return (
    <Card>
      <div>
        <ExpSingle
          title="Frejun"
          date="April-2023 to July-2023"
          href="https://frejun.com"
        >
          <Frejun />
        </ExpSingle>
        <ExpSingle
          title="Appsdeployer"
          date="Oct-2022 to Present"
          href="https://appsdeployer.com"
        >
          <Appsdeployer />
        </ExpSingle>

        <ExpSingle
          title="Solvevolve"
          date="Oct-2022 to Dec-2022"
          href="https://www.linkedin.com/company/solvevolve/"
        >
          <Solvevolve />
        </ExpSingle>

        <ExpSingle
          title="NIT Srinagar"
          date="Jun-2022 to Jul-2022"
          href="https://nitsri.ac.in/Department/Deptindex.aspx?page=a&ItemID=cs&nDeptID=cs"
        >
          <NITSri />
        </ExpSingle>
      </div>
    </Card>
  );
};

export default Exp;
