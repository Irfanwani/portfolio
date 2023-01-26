import Card from "../components/card";
import ExpSingle from "../components/expsingle";
import { Appsdeployer } from "../components/desc";

const Exp = () => {
  return (
    <Card>
      <div>
        <div className="title titlecolor">Experience</div>
        <ExpSingle title="Appsdeployer" date="Oct-2022 to Present">
          <Appsdeployer />
        </ExpSingle>
      </div>
    </Card>
  );
};

export default Exp;
