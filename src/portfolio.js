const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://example.com',
  title: 'FK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fletcher Kidwell',
  role: 'Cybersecurity & DevOps Enthusiast',
  description:
    '     I’m a high school student passionate about cybersecurity, and ethical hacking. I’m actively learning DevOps tools like Docker and Linux, and exploring how to secure and deploy applications efficiently. With a curiosity for pentesting and hands-on projects, I’m building the skills to become a future cybersecurity professional and infrastructure engineer.',
  resume: 'https://example.com',
  social: {
    linkedin: 'www.linkedin.com/in/fletcher-kidwell',
    github: 'https://github.com/n0mad567',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ACT',
    description:
      'Composite: 33\nEnglish: 34\nMath: 35\nReading: 28\nScience: 33',
    stack: ['Standardized Test Score'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'GPA',
    description:
      '4.417 as of the end of the 2025 school year, weighted GPA. This is calculated using a 4.0 scale with additional points for honors and IB courses.',
    stack: ['weighted'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Course Load',
    description:
      'I am currently enrolled in the International Baccalaureate Diploma Programme (IBDP), taking the most rigorous courses available at my school. I have also self-studied and passed four AP exams.',
    stack: ['IB', 'AP', 'Calculus I/II'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Homelab Server',
    description:
    'I have designed, built, customized, and maintained a homelab server using TrueNAS Scale, which serves as a personal cloud storage solution, minecraft server, and website host. This project has strengthened my skills in system administration, networking, data management, and security.',
    stack: ['Cybersecurity', 'Networking', 'Self-Hosting'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'FRC Robotics',
    description:
      'I am the programming leader of the FIRST Robotics Competition (FRC) team at my school, where I contribute to the programming of robots for competitive events. I have gained hands-on experience in robotics, teamwork, leading, and problem-solving.',
    stack: ['FRC', 'Robotics', 'Teamwork'],
    sourceCode: '',
    livePreview: 'https://www.tigerbytes1775.org/',
  },
  {
    name: 'Personal Website',
    description:
      'This website is built using React and showcases my skills, projects, and interests in cybersecurity and DevOps. It serves as a portfolio to demonstrate my abilities and projects to potential employers and collaborators.',
    stack: ['React', 'Portfolio'],
    sourceCode: 'https://github.com/n0mad567/Portfolio',
    livePreview: 'https://fletcherkidwell.com',
  },
  {
    name: 'Math Club President',
    description:
      'I am the president of the Math Club at my school, where I lead discussions and presentations, organize events/fundraisers, and promote interest in mathematics among students. This role has enhanced my leadership, communication, and organizational skills.',
  
    stack: ['Leadership', 'Math Club', 'Community Engagement'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Linux',
  'Docker',
  'Git',
  'Bash',
  'Networking',
  'Cybersecurity',
  'Cryptography',
  'Reverse Engineering',
  'Robotics',
  'Python',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}

export { header, about, projects, skills, contact }
