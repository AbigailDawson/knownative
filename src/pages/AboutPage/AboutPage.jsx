import { useState } from 'react'
import LandingPageNav from '../../components/LandingPageNav/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter/LandingPageFooter';
import './AboutPage.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function AboutPage() {
  const [show, setShow] = useState(null); // Change initial state to null
  
  const handleClose = () => setShow(null); // Set show to null on close
  const handleShow = (name) => setShow(name); // Set show to the contributor's name so that only that contributor's modal opens

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
  {name: "Sarma Akondi",
    image: "/images/core-contributors/Sarma-Akondi.png",
    bio: "<p>Sarma made the big move from India to Australia in January 2024 and jumped straight into the tech world, graduating from the Software Engineering Immersive bootcamp at General Assembly, Sydney, in August 2024. Right now, Sarma is having a blast working with the team at KnowNative, where he is putting my skills to good use. When he is not coding, he is probably diving into some anime, hitting the gym, or just chilling with a book or some tunes—Sarma's taste in music is all over the place!</p>",
    linkedin: "https://www.linkedin.com/in/sarmaakondi/",
    github: "https://github.com/sarmaakondi",
    portfolio: "https://sarmaakondi.github.io/portfolio/"
  },
  {name: "Seanna Arnold",
    image: "/images/core-contributors/Seanna-Arnold.png",
    bio: "<p>A software engineer driven by a passion for creative problem-solving and user-centric innovation. With a multicultural upbringing spanning Africa and Asia, I am able to build natural rapport with others from various regions and backgrounds and Seanna is eager to contribute her technical skills and creativity to help drive business needs forward.</p>",
    linkedin: "https://www.linkedin.com/in/seanna-arnold/",
    github: "https://seanna-arnold.com/",
    portfolio: "https://github.com/Seanna-Arnold"
  },
  {name: "Mel Boyajian",
    image: "/images/core-contributors/Mel-Boyajian.png",
    bio: "<p>Mel is an aspiring full-stack software developer 🖥 proficient in JavaScript and Python, back-end and front-end technologies who has worked as an LGBTQ advocate 🏳️‍🌈, video producer 🎥 , professor of video/photography👨🏻‍🏫, and baker 🥐. Mel's 10+ years of experience in media arts lent them a great eye for composition and design and taught them the importance of collaboration and resourcefulness. The culmination of Mel's experience in higher education, direct services, and culinary arts has given them excellent leadership skills, experience working with diverse populations, and great organizational and time management skills. In Mel's spare time they enjoy going on hikes 🥾and picnics 🧺, being in forests 🌲, and playing video games 🎮 and board games 🎲.</p>",
    linkedin: "https://www.linkedin.com/in/mel-boyajian",
    github: "https://github.com/m-boyajian",
  },
  {name: "Renna Carver",
    image: "/images/core-contributors/Renna-Carver.png",
    bio: "<p>Renna is a software engineer dedicated to making education more accessible through interactive learning tools. When Renna is not working on a project or teaching, you can find her lacing up my roller skates and hitting the pavement or learning a new language. Current stack: React, Node, Express, and MongoDB.</p>",
    linkedin: "https://www.linkedin.com/in/rennacarver",
    github: "http://github.com/rennacarver",
    portfolio: "https://www.projectcarver.com/portfolio"
  },
    {name: "Alex Grimes",
    image: "/images/core-contributors/Placeholder-image.png",
    bio: "<p> Alex is a software developer with experience in React, TypeScript, Next.js, and Python. Alex spent two years in Japan as an English teaching assistant, where she worked with local teachers to create engaging learning activities. Along the way, she gained intermediate proficiency in Japanese and passed the N3 JLPT exam.</p><p>As an IT Junior Software Engineer, Alex managed a Python project that analyzed website performance metrics using API results, optimized data retrieval with stored procedures, and leveraged Power BI for insightful visualizations. Alex's experience includes migrating services to third-party APIs with Flask and writing a comprehensive suite of parameterized unit tests to ensure high code quality. In a previous role in accounting, she used Power Automate to shift from a paper-based approval system to an online one, speeding up approvals and making processes more efficient.</p>",
    linkedin: "https://www.linkedin.com/in/alex-grimes-dev/",
    github: "https://github.com/agrimes23",
    portfolio: "https://alex-grimes-software-engineer.vercel.app/"
  },
  {name: "Jason Houn",
    image: "/images/core-contributors/Placeholder-image.png",
    bio: "<p>Jason is a software developer driven by a passion for music and language. With over 6 years in the music industry and a strong background in language learning, Jason strives to blend his experiences with his programming skills to contribute to impactful projects!</p>",
    linkedin: "https://www.linkedin.com/in/jason-houn/",
    github: "https://github.com/jsnhn",
  },
  {name: "Kate McElhaney",
  image:"/images/core-contributors/Placeholder-image.png",
  bio:"<p>Kate started her career in project management in the nonprofit and quasi-government sectors where she implemented, designed, launched, and managed customer relationship Management (CRM) systems and other efficiency web based tools. This is where her love of building tech tools that enhance workflows and make life a little more efficient blossomed to the point that she took the deep dive into software engineering and enrolled in an immersive software engineering program. She successfully completed the program and her passion for building full stack applications, particularly in React, continues as she gets to work with the KnowNative team.</p>",
  linkedin:"https://www.linkedin.com/in/kate-mcelhaney/",
  github:"https://github.com/K8MacEl",
  portfolio: "https://katemcelhaney.com/"
  },
  {name:"Paul Santos",
    image:"/images/core-contributors/Placeholder-image.png",
    bio:"<p>Native to Los Angeles, California, Paul is a full-stack software engineer with a specialty in front-end development, particularly in developing React.js and Next.js applications. Paul's love for languages began in high school when he first started learning French. He furthered his studies in French language by pursuing a French and Francophone Studies minor at UCLA. Through KnowNative, Paul is able to combine his passion for software development with his love for language and linguistics, and he is excited to continue contributing to the application. In addition to software engineering and languages, Paul's hobbies include Tahitian dance, yoga, hip hop dance, hiking, and escape rooms. Before transitioning to software engineering, Paul also worked as home health physical therapist. With his unique blend of experiences, he aspires to break into the healthcare tech space in the future.</p>",
    linkedin:"https://www.linkedin.com/in/paulsantos2107/",
    github:"https://github.com/psantos2107"
    },
    {name: "Nakita Strangeways",
      image:"/images/core-contributors/Placeholder-image.png",
      bio:"<p>Nakita is a dedicated Software Engineer with 4+ years of experience specializing in front-end web development using React and CSS. Adept at creating intuitive, and visually appealing user interfaces. In her spare time, she enjoys gaming, hanging out with her pets, and expanding her experiences with trips and knowledge.</p>",
      linkedin:"https://www.linkedin.com/in/nakita-strangeways/",
      github:"https://github.com/nakita-strangeways" 
      },
      {name: "Zephyr Worthington",
        image:"/images/core-contributors/Placeholder-image.png",
        bio: "<p>A theatre kid turned software engineer, Zephyr is a versatile full-stack developer with a passion for solving complex technical puzzles. When not coding, you can find them rock climbing, hanging out with their dog, trying a new cupcake recipe, or working on their latest crochet project.</p>",
        linkedin: "https://www.linkedin.com/in/zephyrworthington",
        github:"https://www.github.com/zephyr-c",
        },
        {name:"Ellie Wright",
          image:"/images/core-contributors/Placeholder-image.png",
          bio:"<p>Ellie Wright is a software developer with experience in many languages and libraries, including HTML/CSS, JavaScript, and React. She uses these skills to improve the structure, layout/styling, and components of the KnowNative frontend.</p><p>Graduating with a BA in Psychology in 2022, Ellie began her switch to the software field in 2023, graduating from her Software Development bootcamp in 2024. She is based in the Kansas City Metropolitan Area.</p>",
          linkedin:"https://www.linkedin.com/in/ellewri/",
          github:"https://github.com/ellewright",
          },
          {name:"Lisa Young",
            image:"/images/core-contributors/Placeholder-image.png",
            bio:"<p> Lisa is always looking to learn something new and improve their approach to what they already know. With nine years of professional experience as the team member who evaluates workflows to save time and increase revenue, Lisa uses their sharp eye for detail to improve communication, automate routine processes, and turn unruly data into insights, leading to more efficient work and happier customers.</p>",
            linkedin:"https://www.linkedin.com/in/lisa-young-eayand/",
            github:"https://github.com/eayand",
            portfolio: "https://eayand.com/"
            }

]

  return (
    <>
    <div className="container">
    <LandingPageNav />
    <section className="intro">
        <div>
          <h1 className="about-header">What is KnowNative?</h1>
          <p className="about-body">KnowNative provides a refreshing alternative to traditional textbooks, helping learners of traditional Chinese enhance their reading comprehension through an immersive and personalized study experience. By engaging with authentic language materials, learners gain a deeper understanding of how native speakers naturally communicate. With KnowNative, anyone can collect, annotate, and study their chosen materials, taking charge of their own learning journey.</p>
        </div>
      </section>
      <section className="creator">
        <div>
          <div className="creator-container">
            <div className="creator-container-left">
              <h3 className="creator-heading">Meet Abigail, owner and creator of the KnowNative project</h3>
              <p>Hi! I'm Abigail, the creator and owner of the KnowNative project.</p>
              <p>My love for languages began with my first Japanese class in college. During my first semester, I had my first real conversation with an exchange student entirely in [broken] Japanese, and I was immediately hooked!</p>
              <p>I poured myself into my language study, traveling to Japan for a year to live with a host family and study at Waseda University. I began teaching myself Mandarin, traveling to Taipei for another year in an immersion program at National Taiwan University. Having attained advanced proficiency in both Mandarin and Japanese, I returned to the US to pursue my M.A. in Asian Studies from Georgetown University, where I immersed myself in historical research of the Japanese colonial period in Taiwan.</p>
              <p>After years of rigorous study, I stepped back from academia to seek out different experiences and figure out where exactly I could make an impact in the world. I worked with therapeutic horseback riding programs, managed a barn, traveled across the country and tutored English online. Finally, I decided to pursue a certification in software engineering to equip myself with a versatile skillset that would enable me to bring my own ideas to life through software.</p>
              <p>The concept for KnowNative began as a daydream of the language learning app I wanted to see in the world, but it's since expanded beyond how I'd ever imagined it!</p>

              
            </div>
            <div className="creator-container-right">
              <img className="abigail-taiwan" src="./images/abigail-taiwan.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="core-contributors">
          <h1>Core Contributors</h1>
          <div className="row">
            {coreContributors.map((contributor) => (
              <div className="col-3" key={contributor.name}>
                <div className="core-container">
                  <Button variant="light" onClick={() => handleShow(contributor.name)} className="btn-outline-secondary">
                    <img src={contributor.image} alt={contributor.name} className="rounded-circle" width="200" height="200" />
                    <div className="contributor-name">
                      <h4>{contributor.name}</h4>
                    </div>
                  </Button>
                  <Modal
                    show={show === contributor.name}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{contributor.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="grid-example">
                      <Container>
                        <Row>
                          <Col xs={12} md={5}>
                            <img src={contributor.image} alt={contributor.name} width="100%" />
                            <div className="contributor-links">
                              <a rel="noopener noreferrer" href={contributor.linkedin} target="_blank">
                                <img src="/images/linkedin-icon.png" width="32" height="32" alt="LinkedIn" />
                              </a>
                              <a rel="noopener noreferrer" href={contributor.github} target="_blank">
                                <img src="/images/github-icon.png" width="32" height="32" alt="Github" />
                              </a>
                              {contributor.portfolio && (
                                <a rel="noopener noreferrer" href={contributor.portfolio} target="_blank">
                                  <img src="/images/portfolio-icon.png" width="32" height="32" alt="WWW Icon" />
                                </a>
                              )}
                            </div>
                          </Col>
                          <Col xs={12} md={7}>
                            <div dangerouslySetInnerHTML={{ __html: contributor.bio }} />
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="contributor-links">
                              <a rel="noopener noreferrer" href={contributor.linkedin} target="_blank">
                                <img src="/images/linkedin-icon.png" width="32" height="32" alt="LinkedIn" />
                              </a>
                              <a rel="noopener noreferrer" href={contributor.github} target="_blank">
                                <img src="/images/github-icon.png" width="32" height="32" alt="Github" />
                              </a>
                              {contributor.portfolio && (
                                <a rel="noopener noreferrer" href={contributor.portfolio} target="_blank">
                                  <img src="/images/portfolio-icon.png" width="32" height="32" alt="WWW Icon" />
                                </a>
                              )}
                            </div>
              </div>
            ))}
          </div>
        </section>
        <section className="how-to-contribute">
        <div className="how-to-contribute-grid">
          <div className="how-to-contribute-left">
            <h1>How to contribute</h1>
            <p className="about-body">KnowNative is a community-driven project that thrives on the ideas, inspiration and expertise from our contributors. We're eager to collaborate with community members skilled in software development, UX/UI design, graphic art and illustration, branding, copywriting and content creation. If you have an interest in linguistics or language study, we invite you to join us in shaping KnowNative's development!</p>
          </div>
          <div className="how-to-contribute-right">
            <ul>
            <li>
              <span className="li-header">Contribute to the open source project</span>
              Software developers are welcome to contribute code to the project! Any kind of contribution is meaningful, whether it's a few lines of CSS to improve some styling or an entirely new feature. To contribute to the open source project, follow the instructions on <a href="https://github.com/AbigailDawson/knownative" target="_blank" rel="noreferrer">GitHub</a> to run KnowNative locally, create your own branch and submit a pull request!
            </li>
            <li>
              <span className="li-header">Become a Core Contributor</span>
              Core Contributors are involved in the long-term creative vision for the KnowNative project. We work together as a team to plan and implement new features and improve the app experience for our users. Core Contributors commit to participating in regular team meetings and contribute to the project on a regular consistent basis. If you're interested in becoming a Core Contributor, please reach out to Abigail on <a href="https://www.linkedin.com/in/abigaildawsondev/" target="_blank" rel="noreferrer">LinkedIn</a>.
            </li>
          </ul>
          </div>
        </div>
      </section>
      <section className="backstory" id="backstory">
        <div>
          <h1 className="about-header">The story of KnowNative</h1>
          <div className="backstory-grid">
            <div className="backstory-grid-left">
              <h4>How it all began</h4>
              <p>The concept for KnowNative began as a daydream during a tedious Chinese study session. Like most days, I sat in front of my computer screen and manually copy-and-pasted vocabulary words from a Taiwanese news article into my dictionary app, and then transferred them one by one into my Anki flashcard deck to study.</p>
              <p>Frustrated by the tedium and inefficiency of this process, I began to imagine the language learning app I wanted to see in the world — something that would help me create my own personalized study guide, made from authentic materials that I was <i>actually interested in</i>.</p> 
              <p>My dream app would allow me to easily look up definitions, automatically generate flashcards from the words I chose, and show me full-sentence translations without ever having to leave the page. I knew a tool like this could help other people learn languages, too.</p>
            </div>
            <div className="backstory-grid-middle">
              <h4>Building KnowNative</h4>
              <p>It was a long time between learning Chinese and pursuing my certificate in software engineering, but eventually I found in my hands all the tools I'd need to create the app I'd imagined years ago.</p>
              <p>I worked tirelessly for three weeks straight to create the first version of KnowNative, which I submitted as my capstone project for my bootcamp program at General Assembly. As soon as I turned it in, I knew this was only the beginning of my dream.</p>
              <p>In April 2024, I decided to open the KnowNative project to collaborators, seeking like-minded language enthusiasts who wanted to contribute to the development of the app. I was thrilled to be joined by a self-taught UX designer and a small group of early-career software developers as excited about the project as I was.</p>
              <p>From that point on, the door was open for new contributors to join the team, and it is only with the hard work of this team that KnowNative has become what it is today.</p>
            </div>
            <div className="backstory-grid-right">
              <h4>Where we're headed</h4>
              <p>In October 2024, our team launched our new website and the KnowNative demo app - a playground for anyone to explore KnowNative and try out the features we've spent months perfecting.</p>
              <p>Now, our attention has turned to creating the <i>full KnowNative app</i>, which will allow users to create an account where they can import their own articles, save their vocabulary words and create their own personalized study experience, just like I'd envisioned back when I was immersed in language learning myself.</p>
              <p>KnowNative's development would not be possible without the support of our contributors! The KnowNative project is now completely open-source, and I encourage anyone from the community to share feature ideas, submit code and help our team make KnowNative the best it can be!</p>
            </div>
          </div>
          
        </div>
      </section>
    <LandingPageFooter />
    </div>
    </>
  );
};