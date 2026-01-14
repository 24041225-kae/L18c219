// src/components/Pages/ModuleDetailPage.js
import { useParams } from 'react-router-dom';

const MODULE_DB = {
  /* DBIS R13 -------------------------------------------------------------- */
  'Business Intelligence': {
    outline: 'This module introduces students to the fundamentals of Business Intelligence (BI) and how data is transformed into meaningful insights for decision-making. Students will learn to collect, clean, analyse, and visualise data using industry-relevant tools and dashboards. Emphasis is placed on understanding business problems, interpreting data trends, and communicating insights clearly to support strategic and operational decisions. By the end of the module, students will be able to design simple BI reports and dashboards that provide actionable insights for real-world business scenarios.',
    chair: 'Hew Ka Kian'
  },
  'Marketing': {
    outline: 'This module provides students with a comprehensive understanding of marketing principles, strategies, and tactics. Students will explore key concepts such as market research, consumer behavior, branding, digital marketing, and advertising. The course emphasizes the development of marketing plans, campaign management, and the use of data analytics to measure marketing effectiveness. By the end of the module, students will be able to design and implement marketing strategies that align with business goals and communicate value to target audiences effectively.',
    chair: 'Wang Wei Shyuan'
  },

  /* D3D R47 -------------------------------------------------------------- */
  'UIUX Design for Apps': {
    outline: 'This module focuses on designing user interfaces (UI) and user experiences (UX) for mobile applications using Figma. Students will learn design principles such as usability, accessibility, and interaction design to create intuitive and engaging app interfaces. The course covers wireframing, prototyping, and user testing within Figma, emphasizing the creation of high-fidelity designs and interactive prototypes. By the end of the module, students will be able to design and prototype mobile apps with a focus on user-centered design, ensuring seamless and visually appealing experiences.',
    chair: 'Azhar Kamar'
  },
  'Immersive Technologies': {
    outline: 'This module introduces students to the development of immersive technologies, focusing on Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) using Unity. Students will learn to create interactive 3D environments, integrate sensors and devices, and design engaging user experiences. The course covers key topics such as scene creation, object manipulation, user interaction, and real-time rendering within Unity. By the end of the module, students will have hands-on experience in developing immersive applications and understanding how these technologies can be applied in fields like gaming, education, and training.',
    chair: 'Amran Mohamed'
  },

  /* Fintech R18 -------------------------------------------------------------- */
  'Distributed Ledger Technologies': {
    outline: 'This module introduces students to the principles and applications of Distributed Ledger Technologies (DLT), with a focus on blockchain. Students will explore the fundamentals of decentralized networks, consensus algorithms, smart contracts, and cryptographic techniques that underpin blockchain systems. The course covers the practical use cases of DLT across industries such as finance, supply chain, and healthcare, as well as the challenges and opportunities associated with its implementation. By the end of the module, students will understand how distributed ledgers work and be able to develop simple blockchain applications.',
    chair: 'Marlina Mastor'
  },
  'Entrepreneurship': {
    outline: 'This module provides students with the foundational knowledge and practical skills necessary to start and grow a successful business. Students will explore key entrepreneurial concepts such as opportunity identification, business planning, funding strategies, and marketing. The course also covers financial management, risk assessment, and scaling strategies. Emphasis is placed on developing an entrepreneurial mindset, innovative thinking, and understanding the challenges of launching and sustaining a business in a dynamic environment. By the end of the module, students will be equipped to create a viable business plan and pitch their entrepreneurial ideas effectively.',
    chair: 'Andy Au Yong'
  },

  /* DISM R55 -------------------------------------------------------------- */
  'Ethical Hacking': {
    outline: 'This module introduces students to the fundamentals of ethical hacking and cybersecurity. Students will learn how to identify vulnerabilities in systems, conduct penetration testing, and apply techniques to secure networks and applications. The course covers topics such as threat analysis, network security, cryptography, social engineering, and risk management. Students will also explore ethical and legal issues related to hacking, ensuring they understand the responsibility of using hacking skills for security purposes. By the end of the module, students will be able to conduct basic ethical hacking practices and understand the importance of securing digital environments.',
    chair: 'Ashikin Abd Ghani'
  },
  'Intelligent Networks': {
    outline: 'This module explores the concept of intelligent networks, focusing on their role in enhancing communication systems through automation, data-driven decision-making, and network optimization. Students will learn about the integration of AI, machine learning, and IoT in creating adaptive, efficient, and self-managing networks. The course covers topics such as network architecture, traffic analysis, quality of service (QoS), and network security, with a focus on smart network protocols and real-time data processing. By the end of the module, students will understand how intelligent networks can optimize performance and reliability in both telecommunications and enterprise environments.',
    chair: 'Nicholas Goh'
  },

  /* DIT R12  --------------------------------------------------------- */
  'IT Service Delivery': {
    outline: 'This module focuses on the management and delivery of IT services, ensuring that they meet business needs and customer expectations. Students will learn key concepts such as ITIL (Information Technology Infrastructure Library), service management frameworks, incident and problem management, change management, and service level agreements (SLAs). The course emphasizes the importance of aligning IT services with business objectives, improving efficiency, and ensuring customer satisfaction. By the end of the module, students will be able to design, implement, and manage IT service delivery processes effectively, contributing to the success of organizations in the digital age.',
    chair: 'Koh Thong Hwee'
  },
  'Linux Administration and Containerisation': {
    outline: 'This module provides students with the essential skills for managing Linux-based systems and implementing containerization technologies. Students will learn Linux system administration fundamentals, including file management, user permissions, process management, and system troubleshooting. The course also covers containerization tools like Docker, focusing on creating, deploying, and managing containers for scalable application development. Additionally, students will explore orchestration tools like Kubernetes for managing containerized applications in production environments. By the end of the module, students will be proficient in administering Linux systems and leveraging containerization to improve development and deployment workflows.',
    chair: 'Sharmila Kanna'
  }
  /* (Common ICT has 0 modules – falls through to default) */
};

/* ---------- helpers ------------------------------------------------- */
function kebabToWords(str) {
  return str.replace(/-/g, ' ');
}

/* ---------- component ----------------------------------------------- */
export default function ModuleDetailPage() {
  const { modId } = useParams();
  const realKey = kebabToWords(modId);
  const mod = MODULE_DB[realKey];

  if (!mod) {
    return (
      <>
        <h2>{realKey}</h2>
        <p>This programme does not contain individual module details.</p>
      </>
    );
  }

  return (
    <>
      <h2>{realKey}</h2>

      <h4>Module Outline</h4>
      <ul style={{ listStyle: 'disc', paddingLeft: '1.25em', paddingBottom: '1.5em' }}>
        {mod.outline}
      </ul>

      <h4>Module Chair</h4>
      <div style={{ borderLeft: '4px solid #FF6A00', paddingLeft: '0.75rem' }}>
        <strong>{mod.chair}</strong>
      </div>
    </>
  );
}