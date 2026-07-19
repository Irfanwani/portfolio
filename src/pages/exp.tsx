import Card from "../components/card";

const Exp = () => {
  return (
    <section className="section" id="experience">
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>
      </div>
      <div className="timeline">
        <Card
          title="Senior Software Development Engineer & Integration Manager"
          date="Jun-2025 to Present"
          description="Leading the integration team and developing integration solutions. I oversee the full lifecycle of integrations from planning and development to deployment and maintenance, ensuring seamless data flow and reliability. Designing and maintaining robust APIs, implementing webhooks and SDKs, and supporting external teams in integrating with our platform. Managing mobile application development, contributing to backend systems, and shaping the future of our integration architecture."
        />

        <Card
          title="Software Development Engineer"
          date="Jun-2024 to Jun-2025"
          description="Working across backend systems and mobile application development to build scalable, high-performance solutions. Primarily using Django and Django REST Framework to develop robust APIs, manage databases, and handle complex business logic. Building and maintaining cross-platform apps using React Native with a focus on delivering smooth, responsive user experiences on Android. Collaborating with product, design, and integration teams to deliver features efficiently. Experience with AWS services for cloud-based application deployment and management."
        />

        <Card
          title="React Native Intern — SIP Calling"
          date="Apr-2023 to Jul-2023"
          description="Built Android and iOS applications using React Native with a strong focus on integrating SIP-based calling functionality. Implemented key features for real-time communication, optimized performance, and ensured a smooth, reliable user experience across calling flows and UI interactions."
        />

        <Card
          title="React Native Intern — Full Stack"
          date="Oct-2022 to Oct-2023"
          description="Contributed to the development of various React Native applications, focusing on building intuitive user interfaces and smooth performance for Android and iOS. Assisted in backend development tasks including API integration and debugging to support full-stack feature delivery and improve overall app functionality."
        />

        <Card
          title="React Native Intern — Android Focus"
          date="Oct-2022 to Dec-2022"
          description="Focused on building and optimizing Android applications using React Native, delivering smooth UI experiences and reliable performance. Supported both frontend and backend teams by helping debug and implement features, ensuring seamless integration across the application stack."
        />

        <Card
          title="Blockchain Intern"
          date="Jun-2022 to Jul-2022"
          description="Explored core blockchain concepts including NFTs, decentralized applications (dApps), smart contracts, and cryptocurrencies. Gained hands-on experience with blockchain development tools and platforms while deepening understanding of Web3 technologies and decentralized ecosystems."
        />
      </div>
    </section>
  );
};

export default Exp;
