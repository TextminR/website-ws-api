export const team = [
  { 
    name: 'Yusuf Akalin', role: 'Data Engineer & Project Lead',
    image: { src: '~/assets/images/team/Yakalin.png', alt: 'Yusuf Akalin' },
    email: 'yakalin@student.tgm.ac.at',
  },
  { 
    name: 'Benjamin Kissinger', role: 'Data Scientist',
    image: { src: '~/assets/images/team/Bkissinger.png', alt: 'Benjamin Kissinger' },
    email: 'bkissinger@student.tgm.ac.at',
  },
  {
    name: 'Alexander Hauser', role: 'Data Scientist',
    image: { src: '~/assets/images/team/Ahauser.png', alt: 'Alexander Hauser' },
    email: 'ahauser@student.tgm.ac.at',
  }
];

export const features = [
  {
    title: 'API',
    description: 'A super fast gateway to the world of literature.',
    icon: 'flat-color-icons:document',
  },
  {
    title: 'Webscraping',
    description: 'Discovering the latest news by scraping multiple newspapers.',
    icon: 'flat-color-icons:template',
  },
  {
    title: 'Text Extraction',
    description: 'Analyse your own texts by uploading them to our webapp.',
    icon: 'flat-color-icons:voice-presentation',
  },
];

export const milestones = [
  {
    title: 'Exploration',
    description: "Comparison of different Frameworks.",
    deadline: new Date('2023-10-02'),
    active: true,
    icon: 'tabler:search',
  },
  {
    title: 'Prototyping',
    description: "Already collected useful Data & created an API prototype.",
    deadline: new Date('2023-11-13'),
    active: false,
    icon: 'tabler:robot',
  },
  {
    title: 'Webscraping',
    description: "Developed a working Webscraping software.",
    deadline: new Date('2023-12-04'),
    active: false,
    icon: 'tabler:app-window',
  },
  {
    title: "Uploading texts",
    description: " Successfully implemnted a function that allows user to upload their own texts & created an working API.",
    deadline: new Date('2023-12-25'),
    active: false,
    icon: 'tabler:gavel',
  },
  {
    title: "Finished project",
    description: "All functionalities were implemented correctly and tested.",
    deadline: new Date('2024-01-22'),
    active: false,
    icon: 'tabler:tags',
  },
];
