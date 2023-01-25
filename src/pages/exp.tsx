import Card from "../components/card";

const Exp = () => {
  return (
    <Card>
      <div>
        <div className="title titlecolor">Experience</div>
        <div className="center spacebetween">
          <div className="column marginright">
            <a
              href="https://appsdeployer.com"
              target="_blank"
              className="title titlecolor"
            >
              Appsdeployer
            </a>
            <div className="date descolor">Oct-2022 to Present</div>
          </div>
          <div className="description descolor">
            Working as a mobile app developer, upgraded and published multiple
            versions of multiple apps on respective app stores. Some of the
            projects are:
            <ul>
              <li>
                <a
                  className="a"
                  href="https://play.google.com/store/apps/developer?id=Rock+Pros+USA+LLC&hl=en&gl=US"
                >
                  Rocks Pro Android Apps
                </a>
              </li>
              <li>
                <a
                  className="a"
                  href="https://apps.apple.com/in/developer/rock-pros/id1604082793"
                >
                  Rocks Pro iOS apps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ width: "50%" }} />
      </div>
    </Card>
  );
};

export default Exp;
