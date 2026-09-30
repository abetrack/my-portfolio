// Every span in the career trace. `end: null` means still running.
// Dates are month starts; an end date is the first day of the month after the last month worked.
export const TIMELINE_START = new Date(2020, 7, 1);

export const spans = [
  {
    id: "unh",
    label: "unh.computer-science",
    kind: "school",
    start: new Date(2020, 7, 1),
    end: new Date(2024, 5, 1),
    href: "#education",
  },
  {
    id: "iol",
    label: "iol.ipv6-testing",
    kind: "work",
    start: new Date(2022, 1, 1),
    end: new Date(2023, 5, 1),
    href: "#role-iol",
  },
  {
    id: "ally",
    label: "ally.microservices",
    kind: "work",
    start: new Date(2023, 4, 1),
    end: new Date(2023, 8, 1),
    href: "#role-ally",
  },
  {
    id: "leap",
    label: "fidelity.leap",
    kind: "work",
    start: new Date(2024, 5, 1),
    end: new Date(2024, 9, 1),
    href: "#role-leap",
  },
  {
    id: "fidelity",
    label: "fidelity.platform",
    kind: "work",
    start: new Date(2024, 9, 1),
    end: null,
    href: "#role-fidelity",
  },
];

export const roles = [
  {
    id: "fidelity",
    title: "Full Stack Software Engineer",
    company: "Fidelity Investments",
    place: "Merrimack, NH",
    when: "Oct 2024 – present",
    bullets: [
      "Build backend services and REST APIs in Java (Spring Boot) and Python for a dual-region AWS EKS platform that integrates Amazon S3 and Snowflake and serves millions of requests a day.",
      "Deploy and run containerized microservices on production Kubernetes clusters, with high-availability rollouts.",
      "Own Apache Kafka event-driven workflows that move hundreds of thousands of messages between backend services.",
      "Cut API response times by 70% through performance tuning and architecture changes.",
      "Maintain the Jenkins and Groovy pipelines that build, test and release our services, and hold automated coverage above 80% with JUnit, Pytest, Karate, Sealights and SonarQube.",
    ],
    figures: ["70%", "80%"],
    stack: ["Java", "Spring Boot", "Python", "AWS EKS", "Kafka", "Snowflake", "Jenkins", "Groovy"],
  },
  {
    id: "leap",
    title: "LEAP Program, Associate Full Stack Software Engineer",
    company: "Fidelity Investments",
    place: "Merrimack, NH",
    when: "Jun 2024 – Oct 2024",
    bullets: [
      "Built 3-tier applications with Angular, Spring Boot and Oracle SQL and wired them together over REST.",
      "Practiced CI/CD with Jenkins and GitHub workflows, promoting builds through dev, QA and prod.",
      "Applied secure coding and testing practice with JUnit, Cucumber and Angular Testing Library.",
    ],
    figures: [],
    stack: ["Angular", "Spring Boot", "Oracle SQL", "Jenkins", "Cucumber"],
  },
  {
    id: "ally",
    title: "Software Development Intern",
    company: "Ally Financial",
    place: "Charlotte, NC",
    when: "May 2023 – Aug 2023",
    bullets: [
      "Developed secure microservices in Java, Spring Boot and Oracle, integrating with REST and SOAP APIs.",
      "Designed and carried out the migration of legacy services to AWS with Terraform.",
      "Tested with Postman, Tomcat and JUnit, then shipped to production at enterprise scale.",
      "Worked alongside the Scrum Master, product owners and lead engineers through Agile sprints.",
    ],
    figures: [],
    stack: ["Java", "Spring Boot", "Oracle", "Terraform", "AWS"],
  },
  {
    id: "iol",
    title: "IPv6 Technician Intern",
    company: "UNH InterOperability Lab",
    place: "Durham, NH",
    when: "Feb 2022 – May 2023",
    bullets: [
      "Tested and certified hosts and routers for IPv6 adoption, running conformance and interoperability tests against ISO/IEC standards.",
      "Scripted device drivers in Tcl and Expect so the test suites could run against new hardware.",
      "Debugged and troubleshot failures through each agile test cycle, and wrote the conformance and interoperability reports on deadline.",
    ],
    figures: [],
    stack: ["IPv6", "Tcl", "Expect", "Networking"],
  },
];

export const skillGroups = [
  {
    name: "Services",
    core: ["Java", "Spring Boot", "Python"],
    rest: ["Scala", "TypeScript", "JavaScript", "SQL"],
  },
  {
    name: "Data and messaging",
    core: ["Apache Kafka", "Snowflake"],
    rest: ["Amazon S3", "Oracle SQL", "PostgreSQL", "Flyway"],
  },
  {
    name: "Cloud and delivery",
    core: ["AWS EKS", "Kubernetes", "Jenkins"],
    rest: ["Docker", "Terraform", "Groovy", "GitHub", "GitLab", "Maven", "Azure", "Apigee"],
  },
  {
    name: "Quality",
    core: ["JUnit", "Pytest", "SonarQube"],
    rest: ["Karate", "Sealights", "Cucumber", "Vitest", "React Testing Library", "Postman"],
  },
  {
    name: "Front end",
    core: ["React", "Next.js"],
    rest: ["Angular", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Also",
    core: [],
    rest: ["Anthropic Claude API", "Chrome extensions", "Spring Security", "C", "C++", "C#", "Jira"],
  },
];

export const certifications = [
  { title: "Learn TTD in Java", issuer: "Udemy", image: "/certs/ttd.jpg" },
  { title: "Master Java Web Services and REST API with Spring Boot", issuer: "Udemy", image: "/certs/rest-api.jpg" },
  { title: "Terraform for AWS", issuer: "Udemy", image: "/certs/terraform.jpg" },
];

export const links = {
  email: "abhinav.sharma2636@gmail.com",
  github: "https://github.com/abhinavsharma2636",
  linkedin: "https://www.linkedin.com/in/abhinav-sharma-0259091b0",
  resume: "/Resume.pdf",
  careeros: "https://github.com/abhinavsharma2636/CareerOS",
};
