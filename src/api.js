const diplomas = [
  {
    id: 'R13',
    name: 'Business Information Systems',
    desc: 'Through the Diploma in Business Information Systems (DBIS), you will learn how to apply technology to solve business challenges. As you master a combination of technology skills, core business knowledge and business and data analysis techniques, you will be able to understand business requirements, as well as to propose and implement solutions using IT.',
    modules: ['Marketing', 'Business Intelligence'],
    roles: ['Application Developer', 'IT executive', 'Application Support', 'Associate Business Analyst']
  },
  {
    id: 'R47',
    name: 'Digital Design & Development',
    desc: 'Learn to design and build immersive experiences for next-generation digital platforms with voice commands for smart assistants, like Google Home and Amazon Echo, and even Virtual Reality apps for head-mounted devices. Key current technology concepts such as machine learning, business intelligence, software testing, and analytics will be taught. With a holistic learning experience gained at DDDD, you will be well prepared for an exciting career.',
    modules: ['Immersive Technologies','UIUX Design for Apps'],
    roles: ['Mobile and Web App Developer', 'Systems Analyst', 'UI designer', 'UX designer']
  },
  {
    id: 'R18',
    name: 'Financial Technology',
    desc: 'Develop software development skills relevant to the financial services sector through the Diploma in Financial Technology (DFT). You will be equipped with key FinTech concepts, relevant business models and technologies to provide innovative IT ideas and applications in the industry.',
    modules: ['Distributed Ledger Technologies', 'Entrepreneurship'],
    roles: ['Application Developer', 'Associate Business Analyst', 'FinTech Entrepreneur']
  },
  {
    id: 'R55',
    name: 'Infocomm Security Management',
    desc: 'With the issue of cyber security becoming more pertinent than ever, the Diploma in Infocomm Security Management (DISM) prepares you to be an in-demand specialist. Get equipped with the skills to develop IT technology to resist cyber-attacks, and resolve home and work security system loopholes.',
    modules: ['Ethical Hacking', 'Intelligent Networks'],
    roles: ['Cloud Security Officer', 'Computer Forensic Examiner', 'IT Audit Officer', 'IT Security Analyst']
  },
  {
    id: 'R12',
    name: 'Information Technology',
    desc: 'The Diploma in Information Technology (DIT) equips you with a broad understanding of IT management, opening opportunities for you in every industry. Gain a solid foundation in the IT fundamentals — learn how IT systems are designed and developed, how to manage cloud services and how to deploy secure wired and wireless networks. You’ll reap insights into the issues faced by organisations today and develop the skills to resolve them. Have a go at creating your own software and web-based applications, with the extensive hands-on training incorporated in the course.',
    modules: ['IT Service Delivery', 'Linux Administration and Containerisation'],
    roles: ['Cloud Operation Engineer', 'IT Analyst', 'Software Developer', 'System and Network Administrator', 'Technical Support Engineer']
  },
  {
    id: 'R58',
    name: 'Common ICT Programme',
    desc: 'ICT is a constantly-evolving industry with a host of career options. Why not experience the range it encompasses, to better discover where your interest lies? Through the Common ICT Programme (CIP), you’ll develop solid technical skills and encounter real-world issues, all in the first semester of your first year of study. This forms the foundation for your studies that follow, when you can choose from the following IT-related diploma programmes: Business Information Systems, Digital Design & Development, Financial Technology, Infocomm Security Management, Information Technology.',
    modules: ['There are no specialisation modules for CIP'],
    roles: ['After CIP, you may choose to specialise in any of the following diplomas: Business Information Systems, Digital Design & Development, Financial Technology, Infocomm Security Management, Information Technology.']
  }
];

export const getAllDiplomas = () => diplomas.map(d => ({ id: d.id, name: d.name }));

export const getDiplomaById = diplomaId => diplomas.find(d => d.id === diplomaId);

export const getDiplomaTitle = id => {
  const d = diplomas.find(x => x.id === id);
  return d ? `Diploma in ${d.name}` : '';
};