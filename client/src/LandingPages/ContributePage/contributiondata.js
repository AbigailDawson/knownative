const contributions = [
  // Contributions should be added by project owner Abigail Dawson only. If your contribution is missing from this page, please reach out via Discord: https://discord.gg/Rsc7TAyw3T
  // All new contributions should be added to the BOTTOM of the list.
  // Most recent contributions (highest ID numbers) will be displayed first on the page.
  // Fomatting for each contribution is as follows:
  // id: Increment 1 from the previous
  // title: 1-5 words
  // image: All contributions will need an image saved in images/core-contributions in a square png and naming convention should be id.png.
  // description: Single paragraph description of the work. Include any relevant about the significance of the work, how it improved KnowNative, and what next steps remain for future contributors.
  // contributors: Array of contributor ids. See below for contributor details.
  {
    id: 1,
    title: '2024 KnowNative Redesign',
    timeline: 'April - July 2024',
    description: 'When I built KnowNative as my capstone for my software engineering bootcamp program, I prioritized functionality over the appearance of the user interface. Thankfully, when I opened the project to contributors in April 2024, Parker joined the team and completely transformed the KnowNative UI with the first complete redesign and new design system. At this time, Kate developed a new logo for the project, which is still being used today. Our developers worked hard to refactor the entire project to implement the new designs. Creating the KnowNative user experience has been a collaborative process, and the design direction is continuing to evolve as we welcome fresh perspectives and feedback from the community.',
    contributors: [106, 113, 114, 104, 108, 103, 109, 101],
  },
  {
    id: 2,
    title: 'Frontend Styles Refactor',
    timeline: 'October - November 2024',
    description: 'Thanks to several team members who collaborated on refactoring the entire KnowNative codebase to use SaSS/SCSS, the project is now much more organized and maintainable than it was a year ago. This refactor was a significant undertaking, and the team members who contributed to this effort have made a lasting impact on the project. In addition to refactoring the entire source code, Renna and JP also created the SASS Fundamentals and CSS Style Guide to help future contributors get up to speed on the new best practices.',
    contributors: [114, 101],
  },
  {
    id: 3,
    title: 'File Structure Refactor & Reusable Components',
    timeline: 'September - November 2024',
    description: 'Nakita took on the challenge of refactoring the entire KnowNative codebase to improve the file structure and create reusable components. The new file structure has made it much easier for contributors to find the files they need, and reusable components such as modals and buttons have helped us achieve a more consistent look and feel across the app. There are still several components that can be refactored to be more modular and reusable, so we welcome any additional contributions in this area!',
    contributors: [112, 103, 109, 114],
  },
  {
    id: 4,
    title: 'User Login & Signup',
    timeline: 'September 2024 - present',
    description: 'After shipping the KnowNative demo app, our attention turned to implementing a system for users to create their own KnowNative account, where they could import their own texts, create flashcards and save their progress. Paul and JP took the lead on this project, with creating a secure user authentication system to create and log in to an account. While Paul and JP worked on developing the functionality, Sara created designs for a seamless experience for the user. The work is ongoing, as we add advanced functionality like password reset and email verification.',
    contributors: [108, 102, 105, 110],
  },
  {
    id: 5,
    title: 'State Management',
    timeline: 'August 2024 - present',
    description: 'The original KnowNative project was quite disorganized in terms of state management, relying on useState and useEffect hooks to manage state in various components. Zephyr and Paul took on the challenge of refactoring the project to use useReducer and Context to manage global state. The work has begun with the demo app and will continue with the main app as development continues.',
    contributors: [109, 108],
  },
  {
    id: 6,
    title: 'Responsive Design - Demo',
    timeline: 'November 2024 - February ',
    description: 'KnowNative was originally designed and created with desktop users in mind, but it has always been a goal to make the interface accessible for mobile and tablet users. Christina has taken the lead on this project, creating a responsive design for the KnowNative demo that adapts to different screen sizes and orientations while maintaining visual consistency with the desktop interface.',
    contributors: [111],
  },
  {
    id: 7,
    title: 'User Accounts',
    timeline: 'November 2024 - present ',
    description: 'While our demo app allows anybody to see what KnowNative is all about, our team is hard at work building user accounts — where you will be able to create an account, import your own texts, generate flashcards and save your progress. We are working full steam ahead on developing the core functionality and designs for an intuitive user experience. We are excitedly planning to launch an MVP of user accounts in KnowNative in Spring 2025 — stay tuned!',
    contributors: [102, 103, 105, 106, 108, 101, 110],
  },
  {
    id: 8,
    title: 'AI Text Tokenization & Translations',
    timeline: 'December 2024 - present ',
    description: 'KnowNative is currently relying on the chinese-tokenizer package for single-word lookups and Google Translate for full sentence translations. These both present several limitations in accuracy and word parsing. We are in the process of replacing chinese-tokenizer and Google Translate with AI-powered language processing, which will allow for more accurate and context-aware word lookups and translations, and lay the foundation for advanced study features.',
    contributors: [107, 108, 102],
  }
]

const contributors = [
  // All new contributors should be added to the BOTTOM of this list.
  // Fomatting for each contributor is as follows (delete social links if they do not have one):
  // id: increment 1 from the previous
  // name: first last
  // image: ** New contributors will need an image saved in images/core-contributors in a square png and naming convention should be First-Last.png **,
  // bio: in html with <p> elements
  // linkedin: full url  (delete if not provided)
  // github: full url  (delete if not provided)
  // portfolio: full url (delete if not provided)
  {
    id: 101,
    name: 'Seanna Arnold',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Seanna-Arnold.png',
    bio: '<p>Seanna is a software engineer driven by a passion for creative problem-solving and user-centric innovation. With a multicultural upbringing spanning Africa and Asia, she is able to build natural rapport with others from various regions and backgrounds and is eager to contribute her technical skills and creativity to help drive business needs forward. Her specialty lies in UI development, specifically React and CSS, with a strong focus on accessibility and UX principles.</p>',
    linkedin: 'https://www.linkedin.com/in/seanna-arnold/',
    github: 'https://github.com/Seanna-Arnold',
    portfolio: 'https://seanna-arnold.com/'
  },
  {
    id: 102,
    name: 'JP Escobari',
    role: 'Developer',
    image: '/images/core-contributors/JP-Escobari.png',
    bio: '<p>JP is a bilingual full-stack software developer with a background in Cybersecurity and Computer Networks Engineering. He&apos;s got a deep passion for React, CSS, and crafting responsive, user-friendly designs, although really, he&apos;s always been the type to dive into anything that&apos;s new and cool in tech - from building custom PCs to exploring the latest in gaming. His background naturally brings a lot of attention to detail and a unique perspective to his development work. JP&apos;s continuous curiosity and enthusiasm for tech make him a versatile developer who&apos;s excited to keep growing in the ever-evolving world of software.</p>',
    linkedin: 'https://www.linkedin.com/in/juanpabloescobari/',
    github: 'https://github.com/JPEscobari'
  },
  {
    id: 103,
    name: 'Alex Grimes',
    role: 'Developer',
    image: '/images/core-contributors/Alex-Grimes.png',
    bio: '<p> Alex is a software developer with experience in React, TypeScript, Next.js, and Python. Alex spent two years in Japan as an English teaching assistant, where she worked with local teachers to create engaging learning activities. Along the way, she gained intermediate proficiency in Japanese and passed the N3 JLPT exam.</p><p>As an IT Junior Software Engineer, Alex managed a Python project that analyzed website performance metrics using API results, optimized data retrieval with stored procedures, and leveraged Power BI for insightful visualizations. Her experience includes migrating services to third-party APIs with Flask and writing a comprehensive suite of parameterized unit tests to ensure high code quality. In a previous role in accounting, she used Power Automate to shift from a paper-based approval system to an online one, speeding up approvals and making processes more efficient.</p>',
    linkedin: 'https://www.linkedin.com/in/alex-grimes-dev/',
    github: 'https://github.com/agrimes23',
    portfolio: 'https://alex-grimes-software-engineer.vercel.app/'
  },
  {
    id: 104,
    name: 'Jason Houn',
    role: 'Developer',
    image: '/images/core-contributors/Jason-Houn.png',
    bio: '<p>Jason is a software developer driven by a passion for music and language. With over 6 years in the music industry and a strong background in language learning, Jason strives to blend his experiences with his programming skills to contribute to impactful projects!</p>',
    linkedin: 'https://www.linkedin.com/in/jason-houn/',
    github: 'https://github.com/jsnhn'
  },
  {
    id: 105,
    name: 'Sara Korman',
    role: 'UX/UI Designer',
    image: '/images/core-contributors/Sara-Korman.png',
    bio: '<p>Sara is a UX/UI designer passionate about crafting intuitive and engaging digital experiences. With a keen eye for user needs, Sara designs seamless interfaces that enhance accessibility and usability. When not working on a project, you can find her exploring new design trends, playing with her dog, or watching a good sunset.</p>',
    linkedin: 'https://www.linkedin.com/in/sarakorman/',
    portfolio: 'https://www.sarakorman.com/'
  },
  {
    id: 106,
    name: 'Parker Machemer',
    role: 'UX/UI Designer',
    image: '/images/core-contributors/Parker-Machemer.png',
    bio: '<p>Parker is a UI/UX designer for KnowNative. With backgrounds in tech, art, language learning, and translation, he is excited to contribute in various ways while improving his design skills.</p>',
    linkedin: 'https://www.linkedin.com/in/parker-machemer/',
    portfolio: 'https://www.kupobox.com/'
  },
  {
    id: 107,
    name: 'Austin Rzansa',
    role: 'Developer',
    image: '/images/core-contributors/Austin-Rzansa.png',
    bio: '<p>Austin is a passionate software engineer and language learner with 5 years of experience working on enterprise applications. He has filled many hats, from QA to production support as well as database developer. More recently, he has pivoted into cloud architecture and web development. His love for languages has led him to reach an intermediate level in Chinese.</p>',
    linkedin: 'https://www.linkedin.com/in/austin-rzansa/',
    github: 'https://github.com/arzansa'
  },
  {
    id: 108,
    name: 'Paul Santos',
    role: 'Developer',
    image: '/images/core-contributors/Paul-Santos.png',
    bio: "<p>Native to Los Angeles, California, Paul is a full-stack software engineer specializing in front-end development, particularly in building React.js and Next.js applications. His love for languages began in high school when he first started learning French, and he furthered his studies by pursuing a minor in French and Francophone Studies at UCLA. Through KnowNative, Paul is able to combine his passion for software development with his love for language and linguistics, and he is excited to continue contributing to the application. In addition to software engineering and languages, Paul's hobbies include Tahitian dance, yoga, hip hop dance, hiking, and escape rooms. Before transitioning to software engineering, Paul also worked as a home health physical therapist. With his unique blend of experiences, he aspires to break into the healthcare tech space in the future.</p>",
    linkedin: 'https://www.linkedin.com/in/paulsantos2107/',
    github: 'https://github.com/psantos2107'
  },
  {
    id: 109,
    name: 'Zephyr Worthington',
    role: 'Back-End Developer',
    image: '/images/core-contributors/Zephyr-Worthington.png',
    bio: '<p>A theatre kid turned software engineer, Zephyr is a versatile full-stack developer with a passion for solving complex technical puzzles. When not coding, you can find them rock climbing, hanging out with their dog, trying a new cupcake recipe, or working on their latest crochet project.</p>',
    linkedin: 'https://www.linkedin.com/in/zephyrworthington',
    github: 'https://github.com/zephyr-c'
  },
  {
    id: 110,
    name: 'Ellie Wright',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Ellie-Wright.png',
    bio: '<p>Ellie Wright is a software developer with experience in various languages and libraries, including HTML/CSS, JavaScript, and React. She uses these skills to improve the structure, layout/styling, and components of the KnowNative frontend.</p><p>Graduating with a BA in Psychology in 2022, Ellie began her switch to the software field in 2023, completing her Software Development bootcamp in 2024. She is based in the Kansas City Metropolitan Area.</p>',
    linkedin: 'https://www.linkedin.com/in/ellewri/',
    github: 'https://github.com/ellewright'
  },
  {
    id: 111,
    name: 'Christina Pham',
    role: 'UX/UI Designer',
    image: '/images/core-contributors/Christina-Pham.png',
    bio: '<p>Christina is a software engineer with a passion for creating user-friendly applications. She has experience in front-end development, particularly with React and CSS, and is always eager to learn new technologies. Christina is excited to contribute to KnowNative and help make language learning more accessible and enjoyable for everyone.</p>',
    linkedin: 'https://www.linkedin.com/in/christina-pham-592010291/',
    portfolio: 'https://hien.framer.website/',
  },
  {
    id: 112,
    name: 'Nakita Strangeways',
    role: 'Developer',
    image: '/images/core-contributors/Nakita-Strangeways.png',
    bio: '<p>Nakita is a dedicated Software Engineer with over 4 years of experience, specializing in front-end web development using React and CSS. She is adept at creating intuitive and visually appealing user interfaces. In her spare time, she enjoys gaming, spending time with her pets, and expanding her horizons through travel and learning.</p>',
    linkedin: 'https://www.linkedin.com/in/nakita-strangeways/',
    github: 'https://github.com/nakita-strangeways'
  },
  {
    id: 113,
    name: 'Kate McElhaney',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Kate-McElhaney.png',
    bio: '<p>Kate started her career in project management within the nonprofit and quasi-government sectors, where she implemented, designed, launched, and managed Customer Relationship Management(CRM) systems and other efficiency web based tools.  It was during this time that her love for building tech tools to enhance workflows and improve efficiency blossomed, ultimately leading her to take a deep dive into software engineering by enrolling in an immersive software engineering program. She successfully completed the program, and her passion for building full stack applications, particularly in React, continues as she gets to work with the KnowNative team.</p>',
    linkedin: 'https://www.linkedin.com/in/kate-mcelhaney/',
    github: 'https://github.com/K8MacEl',
    portfolio: 'https://katemcelhaney.com/'
  },
  {
    id: 114,
    name: 'Renna Carver',
    role: 'Developer',
    image: '/images/core-contributors/Renna-Carver.png',
    bio: '<p>Renna is a software engineer dedicated to making education more accessible through interactive learning tools. When Renna is not working on a project or teaching, you can find her lacing up her roller skates and hitting the pavement or learning a new language. Current stack: React, Node, Express, and MongoDB.</p>',
    linkedin: 'https://www.linkedin.com/in/rennacarver',
    github: 'http://github.com/rennacarver',
    portfolio: 'https://www.projectcarver.com/portfolio'
  },
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
