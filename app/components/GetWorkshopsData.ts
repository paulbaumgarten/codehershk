export default function getWorkshopsData () {
  // const file = await fs.readFile(process.cwd() + '/app/data/workshops.json', 'utf8');
  // const workshopData = JSON.parse(file)

  const workshopData = {
    "workshops": [
       {
          "id": "1",
          "title": "PyGame (Game Devlopment): Pong",
          "category": "Beginner",
          "description": "In our PyGame workshop, you'll dive into the world of game programming and learn how to code the classic 2D game of Pong. This beginner-friendly workshop (optional - suitable for those who will have attended the Intro to Python workshop offered or have some basic knowledge of Python). We hope it will provide you with the skills and hands-on practice to program your own game ideas!",
          "by": "Amy, Macy, Phoebe (STC)"
       },
       {
          "id": "2",
          "title": "PyGame (Game Devlopment): Chrome Dino Game",
          "category": "Beginner",
          "description": "In our PyGame Game Development workshop, you'll enter the world of game programming and learn how to code the iconic 2D game: the Chrome Dinosaur Game, using PyGame - a Python library. This beginner-friendly workshop (optional: attending the \"Python Beginner\" workshop prior - encouraged) will provide you with the skills and hands-on practice to program your own personalized game ideas!",
          "by": "Amy, Macy, Phoebe (STC)"
       },
       {
          "id": "3",
          "title": "PyGame (Game Devlopment): Snake",
          "category": "Intermediate",
          "description": "In this PyGame Game Development workshop, you'll learn to code a classic Snake game using Python. This is an intermediate workshop for those who have a basic understanding of Python, particularly understanding of arrays (including 2d arrays).",
          "by": "Amy, Macy, Phoebe (STC)"
       },
       {
          "id": "4",
          "title": "Android App Development",
          "category": "Intermediate",
          "description": "The Android App Development workshop aims to introduce participants to the necessary skills and knowledge to develop mobile applications for the Android platform. The workshop will provide a brief introduction to aspects of Android app development, including tools, frameworks, user interface design, debugging, and testing. By the end of the workshop, participants will create a simple Android application, following industry best practices and staying up-to-date with the latest trends in the field.",
          "by": "Cici, Shuwen (CIS)"
       },
       {
          "id": "5",
          "title": "Intro to AI",
          "category": "Beginner",
          "description": "In this Intro to AI workshop, we aim to demystify the subject for those with zero prior knowledge or coding experience. We\u2019ll play around and experiment with Teachable Machine, a beginner-friendly tool developed by Google, and use it to model fundamental concepts of machine learning. By the end of the workshop, you will have a clear understanding of AI, including its applications and potential, as well as an awareness of its limitations and ethical considerations.",
          "by": "Shannon (STC), Adora (GSIS)"
       },
       {
          "id": "6",
          "title": "Web Development (HTML & CSS)",
          "category": "Beginner",
          "description": "In our Web Development workshop, you'll embark on an exciting journey to master the fundamentals of HTML and CSS, empowering you to create unique & personalized websites from scratch. Through hands-on learning, you'll gain practical skills in constructing and customizing websites, enabling you to bring your own vision to life.",
          "by": "Charisse (WIS/HKIS), Navya (WIS), Ishita (WIS), Abigail(STC)"
       },
       {
          "id": "7",
          "title": "Generative AI Art",
          "category": "Beginner",
          "description": "In the Generative AI art session, we will teach you about Generative AI and its ethics, focusing on AI art specifically. At the end, we'll give you the opportunity to play around with stable diffusion and you will have a chance to win small prizes for generating the best art.",
          "by": "Lucia (GSIS), Audrey (STC), Scarlett (STC)"
       },
       {
          "id": "8",
          "title": "Coding ASCII Art ",
          "category": "Beginner",
          "description": "Do you like making art as well as coding?  Let your creativity flow with the ASCII art workshop. We aim to introduce you to the world of ASCII art as well as teach you how to make some of your own! The medium we will be using to make the art is python so some experience with coding is needed. ",
          "by": "Bethany, Josephine, Andrea (Harrow)"
       },
       {
          "id": "9",
          "title": "JAVA Programming",
          "category": "Beginner",
          "description": "The JAVA programming workshop will cover fundamental concepts of the JAVA coding language such as Data Types, control structures, loops, methods, and object-oriented principles. Whether you're a beginner or have some programming knowledge in another langauge, this workshop will equip you with the skills to build robust, clean and effective code in JAVA. Get ready to dive into the world of JAVA programming and unlock its vast potential!",
          "by": "Sophia YIM (SIS)"
       },
       {
          "id": "10",
          "title": "HKUST Robotics",
          "category": "No coding",
          "description": "HKUST Robotics Team, founded in 2003, has joined competitions, organized community activities, workshops, underwater and ground robot competitions for youths to inspire students who are underprivileged, of ethnic minorities or with special educational needs.\nIn 2019, they received All-Round Championship for the second time, and won the Engineering Presentation Champion, marking their 101th awards.\nAs the first ever university team from Hong Kong in the RoboGames 2023 held in California, one of the world\u2019s largest robot competitions, they won 3 gold, 4 silver and 1 bronze medals.\nAs of May 2023, they have earned 130 awards, including 55 at local, 27 at the national, and 48 at the international levels.",
          "by": "Raymond Wong and team (HKUST)"
       },
       {
          "id": "11",
          "title": "Gamify: IOS Game Development",
          "category": "Beginner",
          "description": "Have you ever wondered how IOS game apps are made? This workshop aims to introduce the basics of Swift, a programming language used to build many IOS apps, and specifically focuses on video game development. At the end of the lesson, participants will understand Swift syntax and begin creating functioning apps. ",
          "by": "Sherry, Alvin, Katie (CIS)"
       },
       {
          "id": "12",
          "title": "Remote Control Cars",
          "category": "No coding",
          "description": "A brief introduction to the exciting world of remote control cars. Our workshop aims to provide students with a base understanding of how a remote control car works, and potentially provide the opportunity to make one themselves.",
          "by": "Valentina (KGV), Maddie (WIS)"
       },
       {
          "id": "13",
          "title": "Circuit Design",
          "category": "No coding",
          "description": "An introduction to circuit design, preferably for complete beginners to circuit design but have a basic understanding of simple circuits and electricity. ",
          "by": "Tracy (Harrow)"
       },
       {
          "id": "14",
          "title": "Intro to React.js Web Development",
          "category": "Intermediate",
          "description": "In this React.js Web Development workshop, you'll gain a solid understanding of the core concepts and principles of React.js. Through hands-on exercises and demonstrations, you'll learn how to create dynamic and interactive web applications using React's component-based architecture and state management. By the end of this workshop, you will be able to create simple modern web interfaces on your own and be able to deploy them to the web! ",
          "by": "Audrey Lai (STC)"
       },
       {
          "id": "15",
          "title": "Python Beginner",
          "category": "Beginner",
          "description": "In this Python beginner workshop, immerse yourself in the fundamentals of Python programming. Engage in interactive activities and hands-on exercises as you explore the essential building blocks of coding, including variables, inputs, and basic mathematical operators. By the end of the workshop, put your skills to the test with a short coding challenge, setting you on a path to kickstart your programming journey.",
          "by": "Anna Davies, Savannah Hung, Nicole Chan, Nicole Sun"
       },
       {
          "id": "16",
          "title": "Python Intermediate",
          "category": "Intermediate",
          "description": "In this Python intermediate workshop, you will complete the stimulating and interactive activity of creating your very own weather app! Through this exercise, you will be able to both gain and develop a variety of skills, namely, problem solving, critical thinking, and technical skills such as web scraping. Start your journey right now and evolve your knowledge and understanding of coding!",
          "by": "Anna Davies, Savannah Hung, Nicole Chan, Nicole Sun"
       },
       {
          "id": "17",
          "title": "Gradient Descent in machine learning\n",
          "category": "No coding",
          "description": "In the ever-evolving field of machine learning, gradient descent remains a critical optimization algorithm that facilitates effective model training. This workshop aims to provide a fundamental understanding of the gradient descent algorithm and its practical applications in machine learning. Participants will gain valuable insights into the fundamentals of optimization and the role of gradient descent in minimizing loss functions. The workshop will highlight the utilization of a neural networks, specifically tailored for a natural language processing task, emphasizing its practical application.",
          "by": "Dr Dirk Schneiders (HKU)"
       },
       {
          "id": "18",
          "title": "Code Your Own Retro Platformer Game",
          "category": "Beginner",
          "description": "Start here to learn the basics of coding and game development. Create a side-scrolling platformer where players jump to collect coins and avoid crashing into walls! This workshop will cover HTML, CSS and JavaScript.",
          "by": "BSD"
       },
       {
          "id": "19",
          "title": "Artificial intelligence and App development",
          "category": "Beginner",
          "description": "Explore Artificial Intelligence & App Development (through Thunkable)",
          "by": "Ms Yuuki, Cobo Academy"
       },
       {
          "id": "20",
          "title": "Coding benefits for non-STEM careers",
          "category": "No coding",
          "description": "There is more to Computer Science than just working for companies like Facebook or Google. Having an understanding of Computer Science can benefit many more career pathways than you might have thought possible. Come and learn about some of the benefits for non-STEM careers.",
          "by": "Zhiyue Tan & Emmanuel Rialland (KT Byte)"
       },
       {
          "id": "21",
          "title": "Computational Art with Turtle Drawings",
          "category": "Beginner",
          "description": "Learn to code by creating colourful, computational, pattern based art using Python\u2019s Turtle library. Students of all coding experience level may attend.",
          "by": "Emma Brown, ISF"
       },
       {
          "id": "22",
          "title": "Q&A chat with an industry mentor",
          "category": "No coding",
          "description": "Have a relaxed discussion with women working in the technology industry, have your questions answered. Joining you will be Sophiya Chiang (I am the CTO and Co-founder of Deploy, a VC-infrastructure startup based in HK. I studied Computer Science for my undergraduate and Advanced Computing for my masters) and Taeko Sakai (I am a data consultant working in financial services and I code Python and SQL.I speak English, French and Japanese)",
          "by": "Inspiring girls HK"
       },
       {
          "id": "23",
          "title": "Research opportunities in high school",
          "category": "No coding",
          "description": "While still a student at DGS, Evelyn recently co-authored and published a research paper on the subject of Generative AI, for which she travelled to MIT in Boston to present the paper at an academic conference. Hear her story and her advice for finding research opportunities as a high school student.",
          "by": "Evelyn Fung (DGS)"
       },
       {
          "id": "24",
          "title": "Creating your own AI-being avatar",
          "category": "No coding",
          "description": "Dr Lim will share the vision behind what beingAI is creating, and the technology being used to build it. Students will get a hands-on opportunity to interact with this immersive technology and create their very own AI avatar.",
          "by": "Dr Jeanne Lim (beingAI)"
       },
       {
          "id": "25",
          "title": "Data analytics with Spotify",
          "category": "Beginner",
          "description": "Learn to analyse \"big data\" using Python. Study your spotify history through code to answer questions such as: What times in the day/week/year do you listen to the most music? Are there any noticable trends as to when you listen to music of different \"moods\" or genres? Use Python to create charts and graphs from your play history.",
          "by": "Emma Brown, ISF"
       },
       {
          "id": "26",
          "title": "Scratch game programming",
          "category": "Beginner",
          "description": "In the Scratch programming workshop, you'll learn Scratch fundamentals like how to drag and drop blocks to write programs, add sprites and backdrops, and more. No prior coding experience is needed - we'll start from the very beginning. By the end of the session, you'll be able to start designing and coding your own Scratch projects.",
          "by": "Sanaz Momeni & Nitu Nahar (CIS)"
       }
    ]
  }

  return workshopData["workshops"];
}