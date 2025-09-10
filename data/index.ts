export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Next.js AI powered Resume annalizer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 4,
    title: "NovaPrep - AI Interview Prep",
    des: "Get interview-ready with AI-powered practice & feedback. Practice on real interview questions and get instant feedback.",
    img: "/novaprep.png", // Export the screenshot or create a logo-like image (like we did for mimovies)
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/openai.svg"], // Example stack, adjust based on what you used
    link: "https://nova-prep.vercel.app",
  },

  {
    id: 5,
    title: "MiMovie – Movie Recommendation App",
    des: "Discover and enjoy movies effortlessly with MiMovie. Get personalized recommendations and explore trending titles without the hassle.",
    img: "/movie-app.png", // save your screenshot as public/movie-app.png
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"], // adjust icons
    link: "https://mi-movie-six.vercel.app", // live deployed link
  },
];

export const testimonials = [
  {
    quote:
      "Partnering with Adima Paul was seamless from day one. His ability to quickly understand our vision and translate it into a functional, polished solution exceeded expectations. The project was delivered on time, with exceptional quality and attention to detail. I’d highly recommend Adima to anyone looking to bring their digital ideas to life.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Adima Paul consistently demonstrated professionalism, adaptability, and strong problem-solving skills. His proactive approach and collaborative spirit made him a valuable member of our team. He not only delivered high-quality work but also inspired those around him to push for excellence.",
    name: "Laura Chen",
    title: "Engineering Manager, TechCore Labs",
  },
  {
    quote:
      "It’s rare to come across someone as motivated and detail-oriented as Adima Paul. His enthusiasm for tackling complex challenges, combined with his willingness to support teammates, made working together both productive and enjoyable. Any team would be lucky to have him.",
    name: "David Miller",
    title: "Software Engineer, InnovateX",
  },
  {
    quote:
      "What sets Adima Paul apart is his eagerness to learn and ability to quickly apply new knowledge in practical ways. His dedication to continuous improvement and commitment to delivering impact make him a standout professional with enormous potential for growth.",
    name: "Sophia Rodriguez",
    title: "Senior Advisor, Digital Solutions Group",
  },
  {
    quote:
      "Working with Adima Paul was an outstanding experience. His technical expertise, creativity, and clear communication ensured our project not only met but exceeded expectations. Adima’s dedication to excellence and his ability to deliver under tight deadlines make him an invaluable asset to any organization or project.",
    name: "Rachel Thompson",
    title: "Founder & CEO, BrightWave Media",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Agiz Tech",
    desc: "Designed and developed mobile app for Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Agiz-code",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/codes_ware",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/adima-paul-agi-3249551b4/",
  },
];
