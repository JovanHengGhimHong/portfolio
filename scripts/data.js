const certifications = [
  {
    id: "deep-learning-keras",
    title: "Introduction to Deep Learning with Keras",
    subtitle: "DataCamp ~ 2025",
    image: "./imgs/certifications/Deep Learning Keras-1.png",
  },
  {
    id: "generative-ai-concepts",
    title: "Generative AI Concepts",
    subtitle: "DataCamp ~ 2025",
    image: "./imgs/certifications/GAN-1.png",
  },
  {
    id: "plotly-data-visualization",
    title: "Introduction to Data Visualization with Plotly in Python",
    subtitle: "DataCamp ~ 2025",
    image: "./imgs/certifications/Intro to Data Viz with Plotly-1.png",
  },
  {
    id: "supervised-learning-scikit-learn",
    title: "Supervised Learning with scikit-learn",
    subtitle: "DataCamp ~ 2024",
    image: "./imgs/certifications/Supervised Learning Scikit certificate-1.png",
  },
  {
    id: "maritime-hackathon",
    title: "Maritime Hackathon",
    subtitle: "NUS ~ 2025",
    image: "./imgs/certifications/maritime hackathon_page-0001.jpg",
  },
  {
    id: "problem-solving-basics",
    title: "Problem Solving Basics",
    subtitle: "Hackerrank ~ 2023",
    image: "./imgs/certifications/problem_solving_basic certificate_page-0001.jpg",
  },
  {
    id: "intro-data-science",
    title: "Introduction to Data Science",
    subtitle: "Cisco ~ 2022",
    image: "./imgs/certifications/Introduction_to_Data_Science_Badge20230728-28-7eecj0_page-0001.jpg",
  },
  {
    id: "intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    subtitle: "Cisco ~ 2022",
    image: "./imgs/certifications/Introduction_to_Cybersecurity_Badge20230728-28-upu8rm_page-0001.jpg",
  },
];

const workExperiences = [
  {
    id: "astar-research-intern",
    role: "Research Intern",
    company: "A*STAR - Agency for Science, Technology and Research",
    type: "Internship",
    period: "Mar 2026 - Present",
    // duration: "6 mos",
    duration: "",
    location: "Hybrid",
    details: [
      "Conducting research in AI/ML systems and model evaluation.",
    ],
  },
  {
    id: "cybercore-software-developer",
    role: "Software Developer",
    company: "CYBERCORE DEVELOPMENT PTE LTD",
    type: "Part-time",
    period: "Feb 2026 - Present",
    // duration: "7 mos",
    duration: "",
    location: "Remote",
    skills: ["Next.js", "React.js"],
    details: [
      "Developing and optimizing web applications and frontend architectures.",
    ],
  },
  {
    id: "singapore-polytechnic",
    role: "Diploma in Applied AI & Analytics",
    company: "Singapore Polytechnic",
    type: "Education",
    period: "2024 - 2027",
    duration: "",
    location: "Singapore",
    skills: ["Python", "PyTorch", "Scikit-Learn", "Data Analytics"],
    details: [
      "Specializing in Machine Learning, Deep Learning, Statistical Analysis, and Computer Vision.",
    ],
  },
];

const projectSections = [
  {
    title: "Research & Machine Learning",
    projects: [
      // {
      //   id: "diagnosing-architecture-demand",
      //   featured: true,
      //   isPaper: true,
      //   title:
      //     "Diagnosing Architecture Demand for Text Classification and its Tradeoffs",
      //   subtitle: ["Preparing for EMNLP 2027", "NLP", "Meta-Learning"],
      //   image: "./imgs/projects/diagnosing-architecture.jpg",
      //   authors: "Anonymized Authors",
      //   description:
      //     "Proposing a lightweight probing framework with deterministic models and statistical feature selection (mRMR + Elastic Net) to predict optimal text classification architectures with high interpretability and minimal compute cost.",
      //   links: {},
      // },
      {
        id: "preprocessing-downstream",
        featured: true,
        title: "Trained On or Read? How Attackers Use Web Images Determines Whether Preprocessing Breaks Adversarial Protection",
        image: "./imgs/projects/wsdm_train_or_read.png",
        subtitle: ["Submitted to WSDM 2027 Short Paper Track"],
        authors: "Anonymized Authors",
        description: "Comparing how attacker preprocessing on perturbation protected images holds ups against generation and inference downstream tasks.",
        links: {
          PDF: "#",
          Code: "#",
        },
      },
      {
        id: "shield-what-matters",
        featured: true,
        title: "When the Service Is the Adversary: Cue-Driven Editing Against VLM Attribute Inference",
        subtitle: ["Submitted to ICLR 2027"],
        image: "./imgs/projects/iclr_service_adversary.png",
        authors: "Anonymized Authors",
        description:
          "Protecting sensitive user images from unauthorized private attribute inference by multimodal reasoning models (VLMs) at service time while preserving core visual utility for downstream tasks.",
        links: {
          PDF: "#",
          Code: "#",
        },
      },
      {
        id: "unofficial-unsafe2safe",
        featured: true,
        title: "Unsafe2Safe Unofficial Model Implementation",
        subtitle: ["Diffusion Models", "Visual Privacy"],
        image: "./imgs/projects/SafeAttention_Unet.png",
        description:
          "Unofficial reproduction of Unsafe2Safe's safe attention module and training dataset to fine-tune an image editing model that is focused on privacy anonymization",
        links: {
          "Original Paper": "https://arxiv.org/pdf/2603.28605",
          Code: "https://github.com/JovanHengGhimHong/Unsafe2Safe_Unofficial_Reproduction",
          Weights: "https://huggingface.co/JovanHengGhimHong/unsafe2safe_checkpoint"
        },
      },
      // {
      //   id: "attention-sequential-models",
      //   title: "How Does Attention Affect Sequential Models in Text Generation?",
      //   subtitle: ["NLP", "Self-Attention", "PyTorch"],
      //   image: "./imgs/projects/attention-sequential.jpg",
      //   description:
      //     "An empirical investigation measuring the quantitative and qualitative impacts of self-attention on text generation quality across LSTM, LSTM + Self-Attention, and Transformer architectures.",
      //   links: {
      //     Preview: "https://song-lyric-generator-self.vercel.app/",
      //     Code: "https://github.com/JovanHengGhimHong/Song-Lyric-Generator/",
      //   },
      // },
      // {
      //   id: "gan-architectures",
      //   title: "Exploring Different GAN Architectures",
      //   subtitle: ["Generative AI", "Computer Vision", "PyTorch"],
      //   image: "./imgs/projects/gan-architectures.jpg",
      //   description:
      //     "A systematic comparative study assessing the generation fidelity, convergence stability, and mode collapse behaviors of DCGAN, WGAN-GP, and VAE-GAN on the EMNIST dataset.",
      //   links: {
      //     Preview: "https://gan-architecture-comparisons.vercel.app/",
      //     Code: "https://github.com/JovanHengGhimHong/GAN-Architecture-Comparisons",
      //   },
      // },
      // {
      //   id: "spam-email-detector",
      //   title:
      //     "Lightweight Classifiers vs Sequential Models for Spam Detection",
      //   subtitle: ["Machine Learning", "NLP", "Benchmarking"],
      //   image: "./imgs/projects/spam-email-detector.jpg",
      //   description:
      //     "Investigated whether sparse text representations with lightweight classifiers can match or outperform deep sequential models on spam classification tasks when measured across recall, training cost, and model footprint.",
      //   links: {
      //     Code: "https://github.com/JovanHengGhimHong/Spam-Email-Detector",
      //   },
      // },
      // {
      //   id: "movie-review-sentiment-analysis",
      //   title: "Movie Review Sentiment Analysis",
      //   subtitle: ["Keras", "RNN", "NLP"],
      //   image: "./imgs/projects/movie-review-sentiment.jpg",
      //   description:
      //     "Built a sentiment analysis model for movie review classification using recurrent neural networks in Keras.",
      //   links: {
      //     Code: "https://github.com/JovanHengGhimHong/movie-Review-Sentiment-Analysis",
      //   },
      // },
    ],
  },
  {
    title: "Web, IoT & Software Systems",
    projects: [
      {
        id: "discord-bot",
        title: "Discord Administration & Utility Bot",
        subtitle: ["Node.js", "Discord.js", "MongoDB"],
        image: "./imgs/projects/discord-bot-banner.png",
        description:
          "Discord administration bot providing server moderation, 1-to-1 staff ticketing, and YouTube audio streaming.",
        links: {
          Code: "https://github.com/stupidbutsmart/Veratu",
        },
      },
      {
        id: "room-status-monitoring",
        title:
          "Room Status Monitoring and Booking System",
        subtitle: ["IoT", "Machine Learning", "Embedded Systems"],
        image: "./imgs/projects/room-status-monitoring.jpg",
        description:
          "A smart-campus prototype that monitors environmental conditions (noise, temperature, humidity) and uses ML to predict room comfort, allowing students to seamlessly book seats.",
        links: {
          Code: "https://github.com/JovanHengGhimHong/Python-Iot-Mini-Project-",
        },
      },
      {
        id: "affordable-housing-analysis",
        title: "Affordable Housing Analysis in Singapore",
        subtitle: ["Tableau", "Data Analysis", "Public Policy"],
        image: "./imgs/projects/affordable_housing.png",
        description:
          "Analysed public housing affordability thresholds and town-by-town price impacts for lower income families in Singapore.",
        links: {
          Preview:
            "https://public.tableau.com/app/profile/jovan.heng/viz/AnalysisonAffordableHousinginSingaporeforLowerIncomeGroups/Story1",
        },
      },
      // {
      //   id: "file-conversion-website",
      //   title: "File Conversion Website",
      //   subtitle: ["React", "REST APIs", "Web"],
      //   image: "./imgs/projects/file-conversion.jpg",
      //   description:
      //     "A proof-of-concept web application for uploading and converting files across multiple formats in real time.",
      //   links: {
      //     Code: "https://github.com/stupidbutsmart/File-Converter-Website",
      //   },
      // },
    ],
  },
];

const commandData = [
  {
    name: "help",
    alias: ["ls", "h", "dir"],
    type: "help",
  },
  {
    name: "whoami",
    alias: ["about"],
    type: "whoami",
  },
  {
    name: "projects",
    alias: ["p"],
    type: "projects",
  },
  {
    name: "experience",
    alias: ["work", "exp"],
    type: "experience",
  },
  {
    name: "email",
    alias: ["contact"],
    type: "email",
  },
];
