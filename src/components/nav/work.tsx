import {
  FunctionComponent,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import IdCard3D from "../id-card";
import { useInView } from "framer-motion";

interface WorkProps {}

const myWorks = [
  {
    company: "Uber",
    role: "Software Engineer (L4)",
    dates: "09/2023 - Present",
    location: "Chennai, Tamil Nadu, India",
    logo: "/company-logo/uber.jpg",
    responsibilities: [
      "Led the migration of a comprehensive React project from Flow to TypeScript, enhancing code maintainability and type safety.",
      "Developed a robust unit testing framework for Apollo GraphQL, significantly streamlining the process of mocking queries.",
      "Implemented end-to-end (E2E) testing using Playwright, which eliminated the need for manual testing and boosted code reliability.",
      "Created a modular hook to efficiently manage multiple modals in a modal-heavy application, improving user interaction handling.",
      "Collaborated with stakeholders and directed a team of 4 developers to design and implement comprehensive billing tools, thereby accelerating the sales process and increasing deal closure rates.",
      "Enhanced developer productivity by optimizing build times for deployments and implementing multi-tenancy for E2E testing.",
    ],
  },
  {
    company: "StanzaLiving",
    role: "React Native Frontend Engineer (SDE 3)",
    dates: "03/2022 - 12/2022",
    location: "Chennai, Tamil Nadu, India",
    responsibilities: [
      "Spearheaded the development and integration of new features in the main resident app, significantly enhancing user experience.",
      "Successfully reduced the app size by 50%, improving loading times and performance.",
      "Elevated code quality by implementing best coding practices and conducting regular code reviews.",
      "Recommended and implemented a remote configuration system, which substantially reduced development effort and increased flexibility.",
      "Led a team of 5 developers and 1 QA engineer, overseeing project delivery and ensuring adherence to high-quality standards.",
    ],
  },
  {
    company: "Housing.com",
    role: "React Frontend Engineer (SDE 2)",
    dates: "07/2021 - 12/2021",
    location: "Chennai, Tamil Nadu, India",
    responsibilities: [
      "Revamped the website’s landing page, resulting in improved user engagement and conversion rates.",
      "Integrated comprehensive analytics throughout the site, enabling better user behavior tracking and data-driven decision-making.",
      "Enhanced developer experience by introducing tools and practices that streamlined the development process and reduced friction.",
    ],
  },
  {
    company: "Zoho CRM - CRM Solutions",
    role: "CRM Solutions Engineer",
    dates: "03/2020 - 06/2021",
    location: "Chennai, Tamil Nadu, India",
    responsibilities: [
      "Reduced the number of CRM modules from 30 to 14, leading to increased system efficiency and user productivity.",
      "Designed and implemented 8 React JS widgets, enriching the CRM’s functionality and user interface.",
      "Developed and automated over 25 email alert systems, providing timely notifications and updates.",
      "Wrote data reconciliation scripts to ensure data integrity and successfully migrated a 20-year-old database into Zoho CRM.",
      "Acted as the primary liaison between Zoho and media companies, managing relationships and gathering requirements.",
    ],
  },
  {
    company: "Zoho CRM - CRM Core",
    role: "CRM Core Engineer",
    dates: "08/2019 - 06/2021",
    location: "Chennai, Tamil Nadu, India",
    responsibilities: [
      "Migrated Outlook and Word plugins to OAuth 2.0, enhancing security and compliance.",
      "Redesigned API endpoints to conform to OAuth 2.0 standards, improving integration and security.",
      "Acquired C# proficiency to implement browser-based device authentication, expanding functionality and user access.",
      "Provided support for new features developed by other teams, ensuring seamless integration and functionality.",
    ],
  },
];
export type Work = (typeof myWorks)[number];

const Work: FunctionComponent<WorkProps> = () => {
  const [currentWork, setCurrentWork] = useState(myWorks[0]);

  return (
    <motion.div
      // initial={{ scale: 0.5 }}
      // animate={{ scale: 1 }}
      // transition={{ duration: 0.5 }}
      className="flex flex-col fixed overflow-hidden flex-1 h-full  z-0"
    >
      <div className="text-4xl text-white pt-8">WORK</div>

      <div className="flex flex-row h-[60rem] items-center px-20">
        <div className="h-full flex-1 overflow-scroll snap-y snap-mandatory hide-scroll ">
          {myWorks.map((work, index) => {
            return (
              <WorkCard
                key={index}
                work={work}
                setCurrentWork={setCurrentWork}
              />
            );
          })}
        </div>
        <div className="flex-1 flex justify-center h-full items-center relative">
          <Suspense fallback={<div>Loading</div>}>
            <IdCard3D work={currentWork} />
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

type WorkCardProps = {
  work: (typeof myWorks)[0];
  setCurrentWork: (work: (typeof myWorks)[0]) => void;
};

function WorkCard(props: WorkCardProps) {
  const { work, setCurrentWork } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      setCurrentWork(work);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="h-full w-full snap-start text-left">
      <div className="w-full h-full  text-white flex items-start pt-8 justify-start">
        <div className=" w-full bg-black/80 p-6 rounded-lg shadow-lg ">
          <h1 className="text-6xl font-bold mb-4  text-yellow-400">
            {work.company}
          </h1>
          <h2 className="text-xl mb-2">{work.role}</h2>
          <p className="text-sm mb-2">{work.dates}</p>
          <p className="text-sm mb-4">{work.location}</p>
          <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
          <ul className="list-disc list-inside space-y-2">
            {work.responsibilities.map((responsibility) => {
              return <li key={responsibility}>{responsibility}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
