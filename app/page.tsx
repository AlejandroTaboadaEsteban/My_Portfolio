"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ParticleBackground from "./components/particle-background"
import Image from "next/image"
import { ProjectDialog } from "./components/project-dialog"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('overview')
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [typingText, setTypingText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const text = "Engineer"
    let index = 0

    const typeWriter = () => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1))
        index++
        setTimeout(typeWriter, 150)
      }
    }

    // Start typing animation when component mounts or when home is clicked
    const startTyping = () => {
      setTypingText("")
      index = 0
      setTimeout(typeWriter, 500)
    }

    startTyping()

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [activeSection === "home"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:taboadaestebanalex@gmail.com"
  }

  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced data visualization platform with machine learning insights",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      details:
        "A comprehensive analytics dashboard that leverages artificial intelligence to provide real-time insights from complex datasets. Features include predictive modeling, automated report generation, and interactive data visualizations.",
      color: "blue",
    },
    {
      id: 2,
      title: "Neural Network Optimizer",
      description: "Deep learning model optimization tool for enhanced performance",
      technologies: ["PyTorch", "CUDA", "Docker", "FastAPI"],
      details:
        "An advanced optimization tool designed to enhance neural network performance through automated hyperparameter tuning and architecture search. Reduces training time by up to 40% while improving model accuracy.",
      color: "purple",
    },
    {
      id: 3,
      title: "Smart IoT Management System",
      description: "Centralized platform for managing IoT devices and data streams",
      technologies: ["Node.js", "MongoDB", "MQTT", "React Native"],
      details:
        "A comprehensive IoT management platform that enables real-time monitoring, control, and analytics of connected devices. Features include device provisioning, data visualization, and automated alert systems.",
      color: "green",
    },
    {
      id: 4,
      title: "Blockchain Security Protocol",
      description: "Enhanced security framework for decentralized applications",
      technologies: ["Solidity", "Web3.js", "Ethereum", "TypeScript"],
      details:
        "A robust security protocol designed to protect decentralized applications from common vulnerabilities. Implements advanced cryptographic techniques and smart contract auditing tools.",
      color: "orange",
    },
  ]

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Python",
    "Node.js",
    "Machine Learning",
    "Data Analysis",
    "Cloud Computing",
    "DevOps",
    "Database Design",
    "API Development",
    "UI/UX Design",
    "Agile Methodology",
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-slate-900" : "bg-white"}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center min-h-16 py-2">
            {/* Left side - Name (hidden on small screens) */}
            <div className="hidden lg:block text-xl font-semibold text-black dark:text-white">
              Alejandro Taboada Esteban
            </div>

            {/* Right side - Navigation and theme toggle */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base md:text-lg font-medium transition-colors ${
                    activeSection === "home"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base md:text-lg font-medium transition-colors ${
                    activeSection === "about"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  About me
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base md:text-lg font-medium transition-colors ${
                    activeSection === "projects"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base md:text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Contact
                </button>
              </div>
              <Button variant="ghost" size="lg" className="p-2 flex-shrink-0" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Moon className="h-5 w-5 sm:h-6 sm:w-6" /> : <Sun className="h-5 w-5 sm:h-6 sm:w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <ParticleBackground darkMode={darkMode} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Left side - Photo */}
            <div className="flex justify-center lg:justify-center lg:pl-12">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/foto_mia_orla_recortada.jpg"
                  alt="Alejandro Taboada Esteban"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left lg:pl-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
                Alejandro Taboada Esteban
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 font-medium">
                <span className="text-black dark:text-white">AI </span>
                <span className="text-blue-600 dark:text-blue-400">
                  {typingText}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl lg:max-w-none">
                Graduate in Data Science and Engineering from Universidad Carlos III de Madrid, passionate about creating AI-based
                systems and transforming innovative ideas into real-world solutions. Committed to leveraging data and artificial
                intelligence to build impactful products that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://www.linkedin.com/in/alejandro-taboada-esteban/", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
                  onClick={handleEmailClick}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover my journey, skills, and what drives my passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  From earning my B.Sc. in Data Science & Engineering at Universidad Carlos III de Madrid to a very enriching exchange year at the University of California, I've always looked for places that push my curiosity and technical skills, and during that journey I confirmed my passion for using AI to solve real-world problems.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  In my final year I balanced studies with back-to-back internships, first at Altia, where I developed my first professional skills with projects like RAG-powered chatbots, and then at Bertrandt Technologies, developing computer-vision AI systems to keep drivers safe. Simultaneously, I held a part-time AI Engineer role at Missio IA, where I enjoyed turning ideas into user-oriented products.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Currently, I'm working at Inditex developing internal AI-driven applications to enhance data-informed decision making and business processes, where I continue to grow my skills and apply cutting-edge technology to real-world challenges. These experiences fuel the way I build, learn and collaborate every day, and I'm looking forward to keep doing it.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Personal Attributes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6 text-gray-600 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Curiosity-driven learner with strong initiative</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Innovation-oriented and entrepreneurial mindset</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Efficient problem solver with attention to detail</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Quick adapter to new technologies and challenges</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Strong analytical and critical thinking skills</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Collaborative team player with leadership abilities</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Proactive approach to learning and growth</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Resilient under pressure and deadlines</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                    <span>Results-driven with a focus on quality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">R</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Matlab</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">SQL</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Kotlin</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Frameworks & APIs</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Next</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Flask</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">FastAPI</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">TensorFlow</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">PyTorch</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Keras</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Scikit-learn</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">XGBoost</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">OpenAI API</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Anthropic API</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Tools & Cloud</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Git</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">GCP</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Azure</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Firebase</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">MySQL</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Oracle</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Excel</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore some of my recent work and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                  <div className="text-white text-6xl">🧠</div>
                </div>
                <CardTitle className="text-xl">Missio OS: AI-Driven Digital Assistant for Task Optimization</CardTitle>
                <CardDescription>
                  A proactive assistant that links Gmail, Calendar, Trello, GitHub & Drive of a company to plan your day and cut coordination overhead and acts as an advanced chatbot with additional capabilities inside the company workflow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Next</Badge>
                  <Badge variant="secondary">OpenAI</Badge>
                  <Badge variant="secondary">Google Cloud</Badge>
                  <Badge variant="secondary">Firebase Functions</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="Missio OS: AI-Driven Digital Assistant for Task Optimization"
                      content={{
                        overview: `For my bachelor thesis with the company Missio IA, I designed, 
                          built and deployed "Missio OS", an AI-powered digital assistant 
                          that integrates via the Model Context Protocol with Gmail, Google Calendar, 
                          Trello, GitHub and Drive. 
                          <br /><br />
                          Overnight it scans every data source to draft a 
                          personalised plan for each team member, and find hidden blockers inside the 
                          company workflow and proposes solutions for them; during working hours it acts 
                          like a chatbot inside the company workflow, responding to all user requests, 
                          that include advanced actions, such as surfacing receiving a meeting transcription 
                          and analysing it, by creating summaries and automating tasks derived from that 
                          meeting. It also analyses every received email and if it comes from a client or 
                          potential client it creates all the necessary tasks, starts them, and assigns 
                          them to the ideal team member for them.
                          <br /><br />
                          It represents a huge leap from previous enterprise digital assistants because it 
                          adds key functionalities and characteristics such as proactivity and predefined
                          workflows. `,
                        methodology: [
                          "Architecture design using MCP for seamless tool orchestration",
                          "Connector development: Gmail, Calendar, Trello, GitHub, Drive & custom MCP servers",
                          "Agent orchestration with prompt-based chaining (Chain-of-Thought) and error-recovery routines",
                          "Evaluation via task-success benchmarks, latency & cost analysis",
                          "Human-in-the-loop testing with Missio IA staff feedback cycles"
                        ],
                        results: [
                          "89.65% task-success rate on first try (above 85% human-reliability target)",
                          "~35% reduction in integration code & 68% engineering time saved on routine tasks",
                          "Coordination overhead cut by ≈4 hours/week for a 5-person team",
                          "Demonstrated prototype readiness for enterprise rollout"
                        ],
                        technologies: [
                          "Python",
                          "FastAPI",
                          "React",
                          "OpenAI o4-mini & GPT-4",
                          "Model Context Protocol (MCP)",
                          "Google Cloud Run",
                          "Docker & CI/CD",
                          "REST & JSON-RPC",
                          "Trello, Gmail, Calendar, GitHub APIs"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600">
                  <div className="text-white text-6xl">📚</div>
                </div>
                <CardTitle className="text-xl">Samplex: AI-Powered Exam Prep App</CardTitle>
                <CardDescription>
                  A mobile app that generates personalized study roadmaps, streak tracking and emergency one-day prep to make exam season smoother and help students to prepare for their exams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Kotlin</Badge>
                  <Badge variant="secondary">Jetpack Compose</Badge>
                  <Badge variant="secondary">Firebase Functions</Badge>
                  <Badge variant="secondary">Firestore</Badge>
                  <Badge variant="secondary">OpenAI</Badge>
                  <Badge variant="secondary">Android</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="Samplex: AI-Powered Exam Prep App"
                      content={{
                        overview: `Samplex is a mobile app built with Jetpack Compose and Kotlin to make 
                        exam preparation simpler, smarter and deeply personalized. Students start by 
                        entering an exam date, course name and uploading a PDF of their course material. 
                        Behind the scenes, our app extracts text from the PDF and calls three chained 
                        OpenAI o4-mini models, deployed as Firebase Cloud Functions, in order to first draft a 
                        day-by-day roadmap structure, then generate theory summaries, and finally produce 
                        quizzes and long-answer questions in JSON format.
                        <br /><br />
                        Once the roadmap is ready, it's saved in Firestore under each user's “exams” 
                        collection and rendered as an interactive timeline: past days turn green, upcoming 
                        days stay blue, today's block is highlighted purple, and the final “emergency” day 
                        glows yellow. Tapping any completed or current day opens its activities, summaries, 
                        multiple-choice mini-tests and AI-graded essays, while future days remain locked. 
                        All responses are stored so that students can revisit their answers and corrections 
                        at any time
                        <br /><br />
                        On the main screen, users see all their active plans at a glance: completed exams 
                        marked in green, pending ones in blue, plus a motivational quote fetched randomly 
                        each session. A calendar view displays exam dates with red dots, and a visible 
                        streak counter rewards daily consistency,missing a day resets it to zero, adding a 
                        gamified twist. Secure authentication comes via email/password or Google Sign-In, 
                        with robust validation and clear in-app error messaging. For last-minute crammers, 
                        the “Emergency Exam” mode automatically shifts the exam date to tomorrow and 
                        generates an intensive one-day plan. Meanwhile, a Firebase-driven notification 
                        system pings any student who hasn't completed their daily work at 14:00, helping 
                        sustain momentum throughout exam season
                        <br /><br />
                        Combined with a MVVM architecture, modular Kotlin code and Firebase's 
                        real-time database, Samplex delivers a seamless, end-to-end AI-powered study 
                        companion.`,
                        methodology: [
                          "Agile development pipeline using GitHub feature branches, pull requests and CI/CD for rapid, high-quality iterations",
                          "AI orchestration via Firebase Cloud Functions, coordinating three OpenAI o4-mini models for roadmap structure, content generation and quiz correction.",
                          "Robust prompt engineering and error-recovery routines to ensure reliable JSON outputs and minimize costly model calls.",
                          "MVVM architecture in Kotlin with JSON-driven modules for dynamic roadmap rendering and quiz workflows."
                        ],
                        results: [
                          "Demonstrated feasibility of an Android exam-prep assistant with dynamic AI-generated roadmaps",
                          "Enabled students to maintain multi-plan streaks, boosting consistency and motivation",
                          "Provided \"Emergency Exam\" workflows for one-day intensive prep, reducing setup time to < 1 min",
                          "Team gained hands-on mastery of Jetpack Compose, Firebase services and AI integration"
                        ],
                        technologies: [
                          "Kotlin",
                          "Jetpack Compose",
                          "Firebase Firestore & Auth",
                          "Firebase Cloud Functions",
                          "OpenAI o4-mini",
                          "Google Sign-In API",
                          "GitHub & CI/CD",
                          "PDF Parsing"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600">
                  <div className="text-white text-6xl">💓</div>
                </div>
                <CardTitle className="text-xl">Anomaly Detection & Prediction in ICUs</CardTitle>
                <CardDescription>
                  A Real-time monitoring system that flags and predicts critical patient events using time-series analysis and ML in the ICU, designed with the Hospital Infantil Niño Jesús, in order to reduce alarm fatigue and improve clinical response times.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Scikit-learn</Badge>
                  <Badge variant="secondary">Keras</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">ML</Badge>
                  <Badge variant="secondary">Time Series</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="Anomaly Detection & Prediction in ICUs"
                      content={{
                        overview: `In collaboration with the Pediatric University Hospital Niño Jesús, this 
                        project built a real-time anomaly detection and change-point prediction system on 
                        continuous ICU sensor streams (vital signs such as ECG, blood pressure, SpO₂ and 
                        respiratory rate) drawn from the open VitalDB dataset. After addressing legal 
                        roadblocks that prevented us from using the hospital's proprietary data, we leveraged VitalDB's 
                        486,000+ numeric and waveform tracks from 6,388 surgical cases to prototype a full end-to-end pipeline 
                        that filters out noise, normalizes and sequences signals via sliding windows, and flags only the most 
                        significant deviations for clinical review
                        <br /><br />
                        The core processing pipeline combines traditional statistical models, ARIMA forecasting for threshold-based 
                        alarms and CUSUM change-point tests, with unsupervised learners (One-Class SVM, Isolation Forest) and 
                        deep-learning predictors (LSTM, dense/CNN/Transformer autoencoders). Each module generates its own 
                        set of alerts, and we apply a consensus filter to suppress false positives. A lightweight Python 
                        service ingests live streams, batches them into overlapping 100-500-sample windows, applies Min-Max 
                        or Z-score normalization, and dispatches each window through the ensemble models for parallel scoring
                        <br /><br />
                        To bridge research and practice, we built a simple dashboard that highlights detected anomalies on 
                        synchronized time axes, overlays change-point markers when patients' vitals undergo sudden regime 
                        shifts, and allows clinicians to zoom into any flagged segment for detailed waveform inspection. 
                        By correlating alerts across multiple signal types (e.g., spikes in heart rate without matching 
                        arterial pressure changes), the system aims to reduce alarm fatigue, provide a 10-15 minute early 
                        warning window before critical events, and ultimately integrate seamlessly into existing ICU 
                        monitoring workflows.`,
                        methodology: [
                          "Data sourcing & preprocessing: Subsampled VitalDB; handled missing values via dropna and window-based continuous segments; Min-Max & Z-score normalization.",
                          "Sliding-window framing: Converted each signal to overlapping sequences (lengths 100-1 000, overlaps 20–200) for temporal context.",
                          "Statistical models: ARIMA forecasting for threshold-based anomaly flags; CUSUM & likelihood-ratio change-point detection on smoothed vitals.",
                          "Unsupervised ML: Trained One-Class SVM & Isolation Forest on multivariate sequences to isolate outliers in heart rate & arterial pressure.",
                          "Deep learning: Built LSTM predictors and three autoencoder variants (Dense, CNN, Transformer) to reconstruct normal baselines and flag high-error events.",
                          "Change-point detection: Employed Ruptures library's Bottom-Up & kernel-based methods to pinpoint regime shifts in patient state.",
                          "Evaluation & tuning: Benchmarked detection precision vs. recall, tuned sequence/window parameters via visual inspection and task-success proxies."
                        ],
                        results: [
                          "Up to 92% true-positive rate for simulated anomalies on held-out VitalDB segments, reducing false-alarm rate by ~30% compared to raw thresholding.",
                          "35% fewer nuisance alerts in heart rate monitoring, validated through cross-validation on 5,000+ HR sequences.",
                          "Early warning window of 10-15 min before simulated critical events via ARIMA & LSTM trend forecasts.",
                          "Change-point detection accuracy of 87% in detecting regime shifts, aiding clinicians in recognizing transitions (e.g., onset of tachycardia).",
                          "Prototype achieved real-time throughput (~50 ms per sliding window) when deployed on Google Cloud Run."
                        ],
                        technologies: [
                          "Python",
                          "pandas, NumPy, SciPy",
                          "scikit-learn (OCSVM, IsolationForest)",
                          "statsmodels (ARIMA), ruptures",
                          "TensorFlow / Keras (LSTM, Autoencoders)",
                          "PyTorch (Transformer)",
                          "VitalDB dataset",
                          "Docker & Google Cloud Run",
                          "Matplotlib & Plotly for visualization"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600">
                  <div className="text-white text-6xl">⚽</div>
                </div>
                <CardTitle className="text-xl">Football Player Performance Prediction App</CardTitle>
                <CardDescription>
                  A web application that scrapes match & fantasy stats to forecast outcomes, player scores and market value, designed to assist fantasy football managers. Using generative AI, it also provides recommendations for players to buy or sell.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Selenium</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node</Badge>
                  <Badge variant="secondary">Scikit-learn</Badge>
                  <Badge variant="secondary">ML</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="Football Player Performance Prediction App"
                      content={{
                        overview: `This web application helps fantasy-football managers make data-backed decisions. 
                        We scrape LaLiga match data, player statistics and official Fantasy Football scores using a 
                        mix of public APIs and Selenium-driven browser automation. That raw data is then cleaned. handling 
                        missing entries, normalising per-90 statistics and encoding categorical features like position 
                        and opponent strength, before being fed into our prediction models.
                        <br /><br />
                        Behind the scenes, we engineer a rich set of time-windowed features: recent form trends, goal 
                        involvement rates, fixture difficulty and rolling averages over 7/14/30-day spans. These 
                        features power both our Random Forest classifier for match outcomes and a suite of 
                        regressors (Gradient Boosting & Random Forest) that forecast individual player scores and 
                        projected market values. To ensure robustness, we retrain models weekly on the latest 
                        fixtures and automatically validate performance using a reserved hold-out set.
                        <br /><br />
                        The results are served through a sleek Node.js/Express backend and a React frontend that lets 
                        users filter by team, position or upcoming matchday. Each prediction comes with SHAP-generated 
                        explanations, so managers can see exactly why a player's score or value moved in a certain 
                        direction. Under the hood, Docker-ized services run the full scrape→train→serve pipeline in under 
                        two minutes, making it easy to deploy updated forecasts and keep the app responsive during 
                        high-traffic matchweeks.
                        `,
                        methodology: [
                          "Data Extraction: Automated scraping with Selenium + direct API pulls for match events, player metrics and fantasy points",
                          "Outcome Modeling: Random Forest classifier (100 trees, max depth 20) trained on 154 played vs. 226 upcoming games (80/20 split) to predict match results",
                          "Score Prediction: Gradient Boosting & Random Forest regressors (R²≈0.10–0.13) using game context and historic points per player per match week",
                          "Market-Value Forecasting: Gradient Boosting (R²≈0.40) on merged value-over-time datasets, incorporating point trends over 7/14/30-day windows",
                          "Explainability: SHAP-based insights reveal feature importances, such as form, opponent strength, price momentum, so users see 'why' behind each pick",
                        ],
                        results: [
                          "Match-result accuracy: ~68% on held-out fixtures (beating baseline odds)",
                          "Score R²: 0.13 for Random Forest, 0.10 for Gradient Boosting, enough signal to rank top-performers reliably",
                          "Market-value R²: 0.40, enabling smart 'buy low, sell high' alerts for players whose value lags their form",
                          "User uptake: Prototype dashboard saw 80% positive feedback in usability tests, with managers citing explainability as key",
                          "Load performance: Full pipeline (scrape → predict → serve) runs end-to-end in under 2 minutes"
                        ],
                        technologies: [
                          "Python",
                          "Selenium",
                          "pandas, NumPy",
                          "scikit-learn (RF, GBM)",
                          "SHAP",
                          "Node.js / Express",
                          "React",
                          "MongoDB",
                          "Docker & CI/CD"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600">
                  <div className="text-white text-6xl">♻️</div>
                </div>
                <CardTitle className="text-xl">Deep Learning Model to Promote Recycling</CardTitle>
                <CardDescription>
                  A program that allows to upload a waste photo and get instant classification into the correct dumpster using an EfficientNet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Neural Networks</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="Deep Learning Model to Promote Recycling"
                      content={{
                        overview: `In a two person team, we built a web-based tool that lets users snap or 
                        upload a photo of household waste and instantly identifies its type, plastic, paper,   
                        glass, metal or organic, and suggests the right dumpster. A custom image dataset of over 
                        5 000 labeled photos was assembled, and we implemented data-cleaning pipelines to normalize 
                        lighting, remove backgrounds and augment samples through rotations, flips and color jitter
                        <br /><br />
                        The core classification model is a lightweight CNN based on MobileNetV2, trained in Keras 
                        with an 80/20 split and early stopping on validation loss. We compared it against custom 
                        5-layer and VGG16-based architectures, ultimately choosing MobileNetV2 for its balance of 
                        speed and accuracy. Training used the Adam optimizer (lr=1e-4) over 50 epochs with batch size 
                        32, and performance was evaluated via overall accuracy, per-class precision/recall and 
                        confusion-matrix analysis.
                        <br /><br />
                        For deployment, the final model was wrapped in a Flask REST API and Docker-ized for easy 
                        local or cloud hosting. Inference runs at roughly 25 ms per image on a standard CPU, 
                        delivering near-instant feedback. A simple HTML/CSS front end calls the API, displays the 
                        classification result and recommended dumpster icon, and because the entire pipeline lives 
                        in a single container, it can be spun up on any machine with Docker installed for plug-and-play 
                        recycling assistance.
                        `,
                        methodology: [
                          "Data Preprocessing: Resized all images to 224x224 px, applied color-normalization and synthetic augmentation (rotation, zoom, shifts) to boost dataset to ~20,000 samples.",
                          "Model Prototyping: Compared three CNN architectures: custom 5-layer CNN, transfer-learned VGG16 and MobileNetV2, initialized with ImageNet weights.",
                          "Training Pipeline: 80/20 train/val split; Adam optimizer (lr=1e-4); early stopping on val loss; batch size 32; trained 50 epochs per model.",
                          "Evaluation: Used accuracy, precision/recall per class and confusion matrix to select the best model. MobileNetV2 hit the sweet spot of speed vs. performance.",
                          "Deployment: Wrapped the final MobileNetV2 model as a REST API with Flask, Docker-ized for easy local or cloud deployment."
                        ],
                        results: [
                          "Overall Accuracy: 91.8% on the held-out test set.",
                          "Per-class F1-scores: Plastic 0.93, Paper 0.90, Glass 0.89, Metal 0.92, Organic 0.93.",
                          "Confusion Analysis: Most confusion between glass & plastic in low-light images, addressed via targeted augmentation.",
                          "Inference Speed: ~25 ms per image on CPU (Intel i5), enabling near-instant feedback.",
                          "Dockerized App: End-to-end pipeline (upload → classify → response) runs in under 500 ms inside a container."
                        ],
                        technologies: [
                          "Python",
                          "TensorFlow / Keras",
                          "OpenCV",
                          "Flask & Docker",
                          "MobileNetV2, VGG16",
                          "NumPy & pandas",
                          "Matplotlib & Seaborn",
                          "Git & GitHub",
                          "HTML / CSS / JavaScript"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                  <div className="text-white text-6xl">👻</div>
                </div>
                <CardTitle className="text-xl">PacMan ML: Ghost-Chasing AI Agent</CardTitle>
                <CardDescription>
                  An intelligent Pac-Man agent trained with Q-learning to hunt ghosts as quickly as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Q-Learning</Badge>
                  <Badge variant="secondary">NumPy</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">Matplotlib</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="PacMan ML: Ghost-Chasing AI Agent"
                      content={{
                        overview: `In this project, I extended the classic Pac-Man game with a custom AI agent that learns to chase and eat ghosts optimally.
                          Using Python, we instrumented the game environment to expose state features (Pac-Man and ghost positions, distances, remaining power-pellets) and reward signals (positive for eating ghosts, negative for being caught).
                          Over thousands of episodes, the agent gradually discovers which moves lead to faster ghost captures without dying, transforming raw game code into a learning playground.`,
                        methodology: [
                          "State Representation: Encoded discretized grid positions, Manhattan distances to nearest ghosts and power-pellet status into state tuples.",
                          "Q-Learning: Implemented Q-table (qtable.txt) with ε-greedy policy, learning rate α=0.1 and discount γ=0.95 over 50,000 training episodes.",
                          "Reward Shaping: +10 for eating a ghost, –1 per time step, –50 for being caught; normalized rewards to stabilize learning.",
                          "Training Pipeline: Batch updates in inference.py, periodic evaluation runs to track performance improvements and adjust ε decay.",
                          "Benchmark Agents: Compared against random and heuristic agents (RandomAgents.py, keyboardAgents.py) to validate learning gains."
                        ],
                        results: [
                          "Average Ghosts Eaten: Increased from ~2 per game (random) to ~15 per game after convergence.",
                          "Survival Rate: Agent survives 3× longer on average compared to heuristic baseline, navigating away from dangerous corners.",
                          "Convergence: Q-values stabilized after ~30,000 episodes, with win-rate > 80% in test runs.",
                          "Policy Visualization: Generated heatmaps of preferred moves in graphicsDisplay.py, showing strategic ghost-pursuit regions."
                        ],
                        technologies: [
                          "Python",
                          "Custom Pac-Man framework",
                          "Q-Learning (NumPy)",
                          "Matplotlib for visualization",
                          "Flask (demo server)",
                          "Git & GitHub"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600">
                  <div className="text-white text-6xl">🎮</div>
                </div>
                <CardTitle className="text-xl">Super Mario Bros Game</CardTitle>
                <CardDescription>
                  A faithful Pyxel-powered remake of classic Super Mario Bros game with custom physics, enemies and interactive blocks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-between mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Pyxel</Badge>
                  <Badge variant="secondary">Game Dev</Badge>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[600px]">
                    <ProjectDialog
                      title="Super Mario Bros Game"
                      content={{
                        overview: `Working in a two-person team at Universidad Carlos III, we recreated the classic Super Mario Bros experience using Pyxel. We architected the game around a central 'Board' class that handles rendering and game logic, and built seven supporting classes (Mario, Blocks, Floor, Enemies, Score, Collisions and Main) to manage sprites, physics and interactions.
                          Mario can run, sprint and jump with gravity, collect coins, power up with mushrooms and reach the end-of-level flag, while Goombas and Koopa Troopas patrol the map and interact via custom collision logic. We even added life, score and time systems, victory & game-over screens, and used randomized enemy spawning to mirror the original's unpredictability.`,
                        methodology: [
                          "Class-based design: Seven cohesive classes (Board, Mario, Blocks, Floor, Enemies, Score, Collisions) to separate rendering, input, physics and game state",
                          "Physics & movement: Implemented gravity, double-jump prevention, sprint speed and sprite switching for Big/Small Mario via 'move' & 'jump' methods",
                          "Collision system: Deep collision logic covering Mario–block, Mario–enemy and block–item interactions, handling mushrooms, flag triggers, life loss and enemy kills",
                          "Enemy behavior: Randomized Goomba/Koopa Troopa spawning with probability, shared movement routines, and death logic via 'die_mario'/'kill_mario' methods",
                          "Game state & UI: Score class for lives, coins, time countdown (from 400s) and screens (play, win, game over), updated each frame in 'show_screen'",
                          "Iterative testing: Lowered frame rate to 5–10 FPS for fine-grained debugging of collisions and sprite timing, then optimized back to smooth play."
                        ],
                        results: [
                          "Fully playable prototype replicating core Super Mario mechanics: running, jumping, enemy interactions and level completion.",
                          "Robust collision handling across 5 block types, mushrooms and flag triggers, with zero major bugs after iterative testing.",
                          "Dynamic enemy system: 25% chance Koopa Troopa, 75% Goomba, each with correct hitboxes and behavior.",
                          "UI & scoring: lives, coins and time tracked accurately; victory and game-over screens display final stats.",
                          "Learning outcomes: Significant mastery of Python, Pyxel, OOP design and game-loop debugging project served as final course deliverable."
                        ],
                        technologies: [
                          "Python 3",
                          "Pyxel (2D rendering & input)",
                          "Object-oriented design",
                          "Sprite management & tilemaps",
                          "Custom collision detection",
                          "time.time() for countdown",
                          "Git & GitHub",
                          "Frame-rate debugging"
                        ]
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm currently available for new opportunities and exciting collaborations. Whether you have a project in
            mind or just want to connect, I'd love to hear from you. Reach out through LinkedIn or send me an email for
            any professional inquiries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <h3 className="font-semibold text-xs sm:text-sm">Email</h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-all">taboadaestebanalex@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <h3 className="font-semibold text-xs sm:text-sm">Phone</h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">+34 611 018 171</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <h3 className="font-semibold text-xs sm:text-sm">LinkedIn</h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">alejandro-taboada-esteban</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <h3 className="font-semibold text-xs sm:text-sm">Location</h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">A Coruña, Spain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.linkedin.com/in/alejandro-taboada-esteban/", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Connect on LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 Alejandro Taboada Esteban</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
