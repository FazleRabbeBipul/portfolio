/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bipuls Cloud",
  title: "Hi all, I'm Fazle Rabbe Bipul",
  subTitle: emoji(
    "B-JET Trainee Engineer | ICPC Asia West Finalist | 2x ICPC Dhaka Regionalist | Programming Instructor | 2000+ Problem Solves"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Gn9H6rimK-FiCkmi0yd5JHi3ymwRdlhj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FazleRabbeBipul",
  linkedin: "https://www.linkedin.com/in/fazle-rabbe-bipul/",
  gmail: "rabbecse1677@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/fazlerabbe.bipul.7",
  medium: "https://medium.com/@rabbecse1677",
  stackoverflow: "https://stackoverflow.com/users/23485463/fazle-rabbe-bipul",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "COMPETITIVE PROGRAMMER WHO WRITES CODE TO OPTIMIZE FOR A BETTER WORLD, WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ C++"),
    emoji("⚡ Python"),
    emoji("⚡ JavaScript / TypeScript"),
    emoji("⚡ Algorithmic Problem Solving (solved 2000+ problems on various online platforms)"),
    emoji("⚡ Data Structures and Algorithms"),
    emoji("⚡ Competitive Programming"),
    emoji("⚡ Backend Engineering"),
    emoji("⚡ Full Stack Development")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Patuakhali Science and Technology University",
      logo: require("./assets/images/pstu.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "January 2018 - September 2023",
      desc: "Patuakhali, Bangladesh"
    },
    {
      schoolName: "Govt. Science College",
      logo: require("./assets/images/govt.png"),
      subHeader: "Higher Secondary in Science",
      duration: "January 2014 - August 2016",
      desc: "Dhaka, Bangladesh"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false// Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Trainee Engineer",
      company: "B-JET",
      companylogo: require("./assets/images/bjet.png"),
      date: "June 2024 – Present",
      desc: "B-JET — Bangladesh-Japan ICT Engineers' Training Program under the University of Miyazaki. As a B-JET trainee, I am learning...",
      descBullets: [
        "Learning Japanese language (Irodori)",
        "Learning Japanese business culture",
        "Practicing Software engineering through BJIT Engineers"
      ]
    },
    {
      role: "Programming Trainer",
      company: "CSE Faculty, PSTU",
      companylogo: require("./assets/images/pstu.png"),
      date: "Nov 2022 – Jun 2024",
      desc: "at the CSE Faculty, Patuakhali Science & Technology University, sponsored by VIVASOFT Limited:",
      descBullets: [
        "Guided students in Programming Fundamentals (C, C++, Java OOP)",
        "Data Structures, Algorithms, and problem-solving techniques for IUPC, ICPC",
        "Organized regular programming contests with custom problem sets"
      ]
    },
    {
      role: "Club President",
      company: "CSE CLUB, PSTU",
      companylogo: require("./assets/images/club.png"),
      date: "Jun 2022 – Jan 2024",
      desc: "CSE CLUB, PSTU is a non-profit organization led by faculty and over 100 student executives across 11 wings, dedicated to advancing CS students' skills.",
      descBullets: [
        "Led and organized 'PSTU IT Carnival 2023', divisional mega IT event with 750+ participants, featuring programming contests, hackathons, gaming events etc.",
        " ",
        "Hosted BdOI 2023 as the Barishal Divisional host through CSE CLUB, PSTU",
        "Arranged 20+ learning seminars and established a student fund to provide financial support for contest participation"
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I BUILD",
  projects: [
    {
      image: require("./assets/images/pstuoj.png"),
      projectName: "PSTU Online Judge",
      projectDesc: "Programming practice platform supporting multiple languages, Featuring live contests, a vast problem collection, and categorized learning resources, Users submit solutions in multi lang, Verdicts by the system, fostering coding skill enhancement",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/FazleRabbeBipul/PSTU-Online-Judge"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sohojbazar.png"),
      projectName: "Sohoj Bazar",
      projectDesc: "Online market platform for buying and selling products, Features include user authentication, product management(CRUD), advanced Search, real-time communication between buyers and sellers, product status, and personalized dashboards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/FazleRabbeBipul/SohojBazar"
        }
      ]
    },
    {
      image: require("./assets/images/acmicpc.png"),
      projectName: "ACM-ICPC Library",
      projectDesc: "Online market platform for buying and selling products, Features include user authentication, product management(CRUD), advanced Search, real-time communication between buyers and sellers, product status, and personalized dashboards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/FazleRabbeBipul/ACM-ICPC"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICPC ASIA WEST Continental Finalist",
      subtitle:
        "First team from my university to be selected for this major contest, the Asia West Continental Contest, with 65 teams participating from Afghanistan, Bangladesh, India, Iran, Pakistan, and Sri Lanka. Our team was the 16th team from Bangladesh.",
      image: require("./assets/images/icpcimg.png"),
      imageAlt: "ICPC logo",
      footerLink: [
        {
          name: "Invitation for finals",
          url: "https://drive.google.com/file/d/1gSBbTVEHyt6am-EjKStYMl-shSKIIxi9/view?usp=drive_link"
        },
        {
          name: "PSTU_Renaissance",
          url: "https://icpc.codedrills.io/contests/icpc-asia-west-continent-finals-2021/teams/26051"
        }
      ]
    },
    {
      title: "Ranked 34th, ICPC DHAKA REGIONAL FINAL CONTEST",
      subtitle:
        "Achieved 34th place in the highly competitive ICPC Dhaka Regional, showcasing strong problem-solving skills and teamwork among top programming teams.",
      image: require("./assets/images/icpcimg.png"),
      imageAlt: "icpc",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1K5i_u0ay9Y8t9MehyUG2WmtREqel3QLD/view?usp=drive_link"
        },
        {
          name: "Rankings & Memories",
          url: "https://github.com/FazleRabbeBipul/ICPC-Diary/blob/main/ICPC%202022/description.md"
        }
      ]
    },
    {
      title: "Top 3%, Ranked 55th out of 1700+ teams, ICPC Asia Dhaka Regional Online Preliminary Contest",
      subtitle:
        "Achieved top 3% in the ICPC Asia Dhaka Regional Online Preliminary Contest, competing among 1700+ teams from public and private universities across Bangladesh.",
      image: require("./assets/images/icpcimg.png"),
      imageAlt: "icpc",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1ZMF3aTt7bJMpGWc-HAkcC4XPFSNFE7qV/view?usp=drive_link"
        },
        {
          name: "Rankings@codemarshal",
          url: "https://algo.codemarshal.org/contests/icpc-dhaka-22-preli"
        }
      ]
    },
    {
      title: "Ranked 30th, BUET Inter University Programming Contest 2022",
      subtitle: "Secured 30th place in the BUET Inter University Programming Contest 2022, competing among top teams from leading universities across Bangladesh.",
      image: require("./assets/images/buetlogo.png"),
      imageAlt: "buet",
      footerLink: [
        {name: "Rankings", url: "https://toph.co/c/buet-inter-university-2022/standings"},
      ]
    },
    {
      title: "1st Runner Up, PSTU Mujib Borsho IT Carnival 2022",
      subtitle:
        "Achieved 1st Runner-Up in the PSTU Mujib Borsho IT Carnival 2022, showcasing exceptional skills in an intra-university programming contest. Team PSTU_URAAA",
      image: require("./assets/images/pstuit.png"),
      imageAlt: "itcarnival",
      footerLink: [
        {
          name: "Rankings & Memories",
          url: "https://www.coderoj.com/c/pstu-intra-2022/arena"
        }
      ]
    },
    {
       
      title: "Champion, B-JET 14th Batch Programming Contest",
      subtitle:
        "Individual Trainee Contest Champion in the B-JET 14th Batch Programming Contest, organized by BJIT",
      image: require("./assets/images/bjetcontest.png"),
      imageAlt: "bjetcontest",
      footerLink: [
        {
          name: "Rankings & Memories",
          url: "https://drive.google.com/file/d/1SryXFota_h2_LVbyXjeNdxuKNlpXqXLf/view?usp=drive_link"
        }
      ]
    },
    {
       
      title: "Meta HackerCup 2023",
      subtitle:
        "Individual Contest, Participated Round 02 Meta HackerCup 2023 Programming Contest, organized by Meta",
      image: require("./assets/images/meta.png"),
      imageAlt: "bjetcontest",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/767763327763037"
        }
      ]
    }
     
    


  ],
  display: true // Set false to hide this section, defaults to true
};

// problem solving

const achievementSectionCoding = {
  title: "Problem Solving",
  subtitle: "ONLINE PLATFORMS WHERE I PRACTICE COMPETITIVE PROGRAMMING",

  achievementsCards: [
    {
      title: "Codeforces",
      subtitle: "Total Solved:1650, Max Rating: 1437 ",
      image: require("./assets/images/codeforces.png"),
      imageAlt: "Codeforces Logo",
      footerLink: [
        {
          name: "Handle",
          url: "https://codeforces.com/profile/__FireBlade__"
        }
      ]
    },
    {
      title: "Codechef",
      subtitle:
        "Max Rating: 1778",
      image: require("./assets/images/codechef.png"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "Handle",
          url: "https://www.codechef.com/users/bipul_15"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// const problemSolvingSection = {
//   title: "Problem Solving",
//   subtitle: "ONLINE PLATFORMS WHERE I PRACTICE COMPETITIVE PROGRAMMING",
//   platforms: [
//     {
//       image: require("./assets/images/codeforces.png"), // Add the platform logo in the assets folder
//       platformName: "Codeforces",
//       handle: "https://codeforces.com/profile/__FireBlade__",
//       totalSolved: "1650+", // Update with your total solved problems
//       maxRating: "1439", // Replace with your maximum rating
//       footerLink: [
//         {
//           name: "Visit Profile",
//           url: "https://codeforces.com/profile/__FireBlade__"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/codechef.png"),
//       platformName: "CodeChef",
//       handle: "https://www.codechef.com/users/bipul_15",
//       totalSolved: "300+", // Replace with actual number
//       maxRating: "1778", // Replace with your maximum rating
//       footerLink: [
//         {
//           name: "Visit Profile",
//           url: "https://www.codechef.com/users/bipul_15"
//         }
//       ]
//     }
//     // Add more platforms as needed
//   ],
//   display: true // Set false to hide this section, defaults to true
// };


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
         "I love to write something interesting about DSA, algorithms, and mathematics.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  
  blogs: [
   
     {
      url: "https://medium.com/@rabbecse1677/bellman-ford-algorithm-e9a0ba0427c8",

      title: " Bellman-Ford Algorithm / বেলম্যান-ফোর্ড এলগরিদম দিয়ে Shortest Path ",
      description:
        "Learn how the Bellman-Ford Algorithm works for finding the shortest path and detecting negative cycles. This blog provides a clear explanation with code examples in Bengali!"
    },
    {
      url: "https://medium.com/@rabbecse1677/dijkstras-algorithm-40e3551f8581",
      title: "Dijkstra’s Algorithm / ডায়াক্সট্রা এলগরিদম",
      description:
        "Learn how Dijkstra's Algorithm efficiently finds the shortest path between two nodes in a graph using a priority queue. This algorithm runs faster than Bellman-Ford, and is key to solving real-world graph problems."
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+880-1301479582",
  email_address: "rabbecse1677@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  achievementSectionCoding,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
