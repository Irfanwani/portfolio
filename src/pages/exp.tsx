import ExpSingle from "../components/expsingle";
import {
  Appsdeployer,
  Frejun,
  FrejunIntegrationManager,
  FrejunSDE,
  FrejunSeniorSDE,
  NITSri,
  Solvevolve,
} from "../components/desc";

const Exp = () => {
  return (
    <section className="section section-experience reveal">
      <span className="section-label">✦ Chapter 02</span>
      <h2 className="section-title">Experience</h2>
      <div className="exp-timeline">
        <ExpSingle title="Frejun" date="June-2025 to Present" href="https://frejun.com">
          <FrejunSeniorSDE />
        </ExpSingle>
        <ExpSingle title="Frejun" date="November-2024 to Present" href="https://frejun.com">
          <FrejunIntegrationManager />
        </ExpSingle>
        <ExpSingle title="Frejun" date="June-2024 to June-2025" href="https://frejun.com">
          <FrejunSDE />
        </ExpSingle>
        <ExpSingle title="Frejun" date="April-2023 to July-2023" href="https://frejun.com">
          <Frejun />
        </ExpSingle>
        <ExpSingle title="Appsdeployer" date="Oct-2022 to Oct-2023" href="https://appsdeployer.com">
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
    </section>
  );
};

export default Exp;
