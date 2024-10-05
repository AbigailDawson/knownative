const coreContributors = [
  // when adding new in contributors add in by last name alphabetical order
  // fomatting for each contributor is as follows (delete portfolio if they do not have one):
  // {name: first last
  //   image: ***New Contributors will need an image saved in images/core-contributors in a  500px x 500 px png and naming convention should be First-Last.png**,
  //   bio: in html with <p> elements
  //   linkedin: full url
  //   github: full url
  //   portfolio: delete if not provided
  //   }
  {
    name: 'Sarma Akondi',
    role: 'Developer',
    image: '/images/core-contributors/Sarma-Akondi.png',
    bio: "<p>Sarma made the big move from India to Australia in January 2024 and jumped straight into the tech world, graduating from the Software Engineering Immersive bootcamp at General Assembly, Sydney, in August 2024. Currently, Sarma is having a blast working with the team at KnowNative, where he is putting his skills to good use. When he's not coding, he's probably diving into some anime, hitting the gym, or just chilling with a book or some tunes—Sarma's taste in music is all over the place!</p>",
    linkedin: 'https://www.linkedin.com/in/sarmaakondi/',
    github: 'https://github.com/sarmaakondi',
    portfolio: 'https://sarmaakondi.github.io/portfolio/'
  },
  {
    name: 'Seanna Arnold',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Seanna-Arnold.png',
    bio: '<p>Seanna is a software engineer driven by a passion for creative problem-solving and user-centric innovation. With a multicultural upbringing spanning Africa and Asia, she is able to build natural rapport with others from various regions and backgrounds and is eager to contribute her technical skills and creativity to help drive business needs forward. Her specialty lies in UI development, specifically React and CSS, with a strong focus on accessibility and UX principles.</p>',
    linkedin: 'https://www.linkedin.com/in/seanna-arnold/',
    github: 'https://github.com/Seanna-Arnold',
    portfolio: 'https://seanna-arnold.com/'
  },
  {
    name: 'Renna Carver',
    role: 'Developer',
    image: '/images/core-contributors/Renna-Carver.png',
    bio: '<p>Renna is a software engineer dedicated to making education more accessible through interactive learning tools. When Renna is not working on a project or teaching, you can find her lacing up her roller skates and hitting the pavement or learning a new language. Current stack: React, Node, Express, and MongoDB.</p>',
    linkedin: 'https://www.linkedin.com/in/rennacarver',
    github: 'http://github.com/rennacarver',
    portfolio: 'https://www.projectcarver.com/portfolio'
  },
  {
    name: 'Alex Grimes',
    role: 'Developer',
    image: '/images/core-contributors/Alex-Grimes.png',
    bio: "<p> Alex is a software developer with experience in React, TypeScript, Next.js, and Python. Alex spent two years in Japan as an English teaching assistant, where she worked with local teachers to create engaging learning activities. Along the way, she gained intermediate proficiency in Japanese and passed the N3 JLPT exam.</p><p>As an IT Junior Software Engineer, Alex managed a Python project that analyzed website performance metrics using API results, optimized data retrieval with stored procedures, and leveraged Power BI for insightful visualizations. Her experience includes migrating services to third-party APIs with Flask and writing a comprehensive suite of parameterized unit tests to ensure high code quality. In a previous role in accounting, she used Power Automate to shift from a paper-based approval system to an online one, speeding up approvals and making processes more efficient.</p>",
    linkedin: 'https://www.linkedin.com/in/alex-grimes-dev/',
    github: 'https://github.com/agrimes23',
    portfolio: 'https://alex-grimes-software-engineer.vercel.app/'
  },
  {
    name: 'Jason Houn',
    role: 'Developer',
    image: '/images/core-contributors/Jason-Houn.png',
    bio: '<p>Jason is a software developer driven by a passion for music and language. With over 6 years in the music industry and a strong background in language learning, Jason strives to blend his experiences with his programming skills to contribute to impactful projects!</p>',
    linkedin: 'https://www.linkedin.com/in/jason-houn/',
    github: 'https://github.com/jsnhn'
  },
  {
    name: 'Kate McElhaney',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Kate-McElhaney.png',
    bio: '<p>Kate started her career in project management within the nonprofit and quasi-government sectors, where she implemented, designed, launched, and managed Customer Relationship Management(CRM) systems and other efficiency web based tools.  It was during this time that her love for building tech tools to enhance workflows and improve efficiency blossomed, ultimately leading her to take a deep dive into software engineering by enrolling in an immersive software engineering program. She successfully completed the program, and her passion for building full stack applications, particularly in React, continues as she gets to work with the KnowNative team.</p>',
    linkedin: 'https://www.linkedin.com/in/kate-mcelhaney/',
    github: 'https://github.com/K8MacEl',
    portfolio: 'https://katemcelhaney.com/'
  },
  {
    name: 'Paul Santos',
    role: 'Developer',
    image: '/images/core-contributors/Paul-Santos.png',
    bio: "<p>Native to Los Angeles, California, Paul is a full-stack software engineer specializing in front-end development, particularly in building React.js and Next.js applications. His love for languages began in high school when he first started learning French, and he furthered his studies by pursuing a minor in French and Francophone Studies at UCLA. Through KnowNative, Paul is able to combine his passion for software development with his love for language and linguistics, and he is excited to continue contributing to the application. In addition to software engineering and languages, Paul's hobbies include Tahitian dance, yoga, hip hop dance, hiking, and escape rooms. Before transitioning to software engineering, Paul also worked as a home health physical therapist. With his unique blend of experiences, he aspires to break into the healthcare tech space in the future.</p>",
    linkedin: 'https://www.linkedin.com/in/paulsantos2107/',
    github: 'https://github.com/psantos2107'
  },
  {
    name: 'Nakita Strangeways',
    role: 'Developer',
    image: '/images/core-contributors/Nakita-Strangeways.png',
    bio: '<p>Nakita is a dedicated Software Engineer with over 4 years of experience, specializing in front-end web development using React and CSS. She is adept at creating intuitive and visually appealing user interfaces. In her spare time, she enjoys gaming, spending time with her pets, and expanding her horizons through travel and learning.</p>',
    linkedin: 'https://www.linkedin.com/in/nakita-strangeways/',
    github: 'https://github.com/nakita-strangeways'
  },
  {
    name: 'Zephyr Worthington',
    role: 'Back-End Developer',
    image: '/images/core-contributors/Zephyr-Worthington.png',
    bio: '<p>A theatre kid turned software engineer, Zephyr is a versatile full-stack developer with a passion for solving complex technical puzzles. When not coding, you can find them rock climbing, hanging out with their dog, trying a new cupcake recipe, or working on their latest crochet project.</p>',
    linkedin: 'https://www.linkedin.com/in/zephyrworthington',
    github: 'https://www.github.com/zephyr-c'
  },
  {
    name: 'Ellie Wright',
    role: 'Front-End Developer',
    image: '/images/core-contributors/Ellie-Wright.png',
    bio: '<p>Ellie Wright is a software developer with experience in various languages and libraries, including HTML/CSS, JavaScript, and React. She uses these skills to improve the structure, layout/styling, and components of the KnowNative frontend.</p><p>Graduating with a BA in Psychology in 2022, Ellie began her switch to the software field in 2023, completing her Software Development bootcamp in 2024. She is based in the Kansas City Metropolitan Area.</p>',
    linkedin: 'https://www.linkedin.com/in/ellewri/',
    github: 'https://github.com/ellewright'
  },
  {
    name: 'Lisa Young',
    role: 'Back-End Developer',
    image: '/images/core-contributors/Lisa-Young.png',
    bio: '<p> Lisa is always looking to learn something new and improve their approach to what they already know. With nine years of professional experience as the team member who evaluates workflows to save time and increase revenue, Lisa uses their sharp eye for detail to improve communication, automate routine processes, and turn unruly data into insights, leading to more efficient work and happier customers.</p>',
    linkedin: 'https://www.linkedin.com/in/lisa-young-eayand/',
    github: 'https://github.com/eayand',
    portfolio: 'https://eayand.com/'
  }
];

const pastCoreContributors = [
  {
    name: 'Mel Boyajian',
    role: 'Developer'
  },
  {
    name: 'Light Liu',
    role: 'UX/UI Designer'
  }
];

export default { coreContributors, pastCoreContributors };
