const contributions = [
  {
    id: 1,
    title: 'Project A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. In hac habitasse platea dictumst vestibulum rhoncus est. Sit amet purus gravida quis blandit. Amet est placerat in egestas erat imperdiet. Viverra mauris in aliquam sem fringilla ut morbi. At elementum eu facilisis sed. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. In hac habitasse platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac turpis egestas.',
    contributors: [101, 102],
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Ut tristique et egestas quis. Et netus et malesuada fames ac turpis egestas integer eget. Nunc id cursus metus aliquam eleifend. Egestas purus viverra accumsan in nisl nisi scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Ac turpis egestas integer eget aliquet. Enim sed faucibus turpis in eu mi. Nec ullamcorper sit amet risus nullam eget felis. Vulputate eu scelerisque felis imperdiet proin. Nec tincidunt praesent semper feugiat. Arcu vitae elementum curabitur vitae nunc. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum.',
    contributors: [103, 104],
  }
]

const contributors = [
  {
    id: 101,
    name: 'Paul Santos',
    role: 'Developer',
    image: '/images/core-contributors/Paul-Santos.png',
    bio: "<p>Native to Los Angeles, California, Paul is a full-stack software engineer specializing in front-end development, particularly in building React.js and Next.js applications. His love for languages began in high school when he first started learning French, and he furthered his studies by pursuing a minor in French and Francophone Studies at UCLA. Through KnowNative, Paul is able to combine his passion for software development with his love for language and linguistics, and he is excited to continue contributing to the application. In addition to software engineering and languages, Paul's hobbies include Tahitian dance, yoga, hip hop dance, hiking, and escape rooms. Before transitioning to software engineering, Paul also worked as a home health physical therapist. With his unique blend of experiences, he aspires to break into the healthcare tech space in the future.</p>",
    linkedin: 'https://www.linkedin.com/in/paulsantos2107/',
    github: 'https://github.com/psantos2107'
  },
  {
    id: 102,
    name: 'Zephyr Worthington',
    role: 'Back-End Developer',
    image: '/images/core-contributors/Zephyr-Worthington.png',
    bio: '<p>A theatre kid turned software engineer, Zephyr is a versatile full-stack developer with a passion for solving complex technical puzzles. When not coding, you can find them rock climbing, hanging out with their dog, trying a new cupcake recipe, or working on their latest crochet project.</p>',
    linkedin: 'https://www.linkedin.com/in/zephyrworthington',
    github: 'https://github.com/zephyr-c'
  },
  {
    id: 103,
    name: 'Ellie Wright',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Ellie-Wright.png',
    bio: '<p>Ellie Wright is a software developer with experience in various languages and libraries, including HTML/CSS, JavaScript, and React. She uses these skills to improve the structure, layout/styling, and components of the KnowNative frontend.</p><p>Graduating with a BA in Psychology in 2022, Ellie began her switch to the software field in 2023, completing her Software Development bootcamp in 2024. She is based in the Kansas City Metropolitan Area.</p>',
    linkedin: 'https://www.linkedin.com/in/ellewri/',
    github: 'https://github.com/ellewright'
  },
  {
    id: 104,
    name: 'Christina Pham',
    role: 'UX/UI Designer',
    image: '/images/core-contributors/Christina-Pham.png',
    bio: '<p>Christina is a software engineer with a passion for creating user-friendly applications. She has experience in front-end development, particularly with React and CSS, and is always eager to learn new technologies. Christina is excited to contribute to KnowNative and help make language learning more accessible and enjoyable for everyone.</p>',
    linkedin: 'https://www.linkedin.com/in/christina-pham-592010291/',
    portfolio: 'https://hien.framer.website/',
  }
]

const enrichedContributions = contributions.map(contribution => {
  return {
    ...contribution,
    contributors: contribution.contributors.map(contributorId => {
      return contributors.find(contributor => contributor.id === contributorId)
    })
  }
})

console.log(JSON.stringify(enrichedContributions, null, 2));
export default { contributions, contributors, enrichedContributions };
