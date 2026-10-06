// Single source of truth. Edit ONLY this file to update the site.
// Empty optional fields (links, resume, period) are hidden automatically.
export const profile = {
  name: 'Praveen Kumar V',
  role: 'Full-Stack Software Developer (Fresher)',
  tagline: 'B.Tech IT graduate who builds full-stack applications with Java, Spring Boot, React.js, TypeScript and MySQL. Ready to contribute to a real engineering team.',
  about: [
    'I am a B.Tech Information Technology graduate looking for my first role as a Software Developer. I build full-stack applications with Java, Spring Boot, React.js, TypeScript and MySQL.',
    'My academic projects include web applications and VR experiences. I enjoy breaking a problem into clear steps until the solution works, and I have led teams at college events, so I am comfortable working with others.',
  ],
  // Contact links. Leave a value empty ('') to hide it from the site.
  email: 'praveen9053k@gmail.com',
  github: 'https://github.com/praveen120k',
  linkedin: 'https://www.linkedin.com/in/praveen120k',
  resumeUrl: '', // Add resume.pdf to /public, then set '/resume.pdf' to show the download button
}

export const strengths = [
  { title: 'Problem solving', text: 'Break problems into clear steps and build working solutions.' },
  { title: 'Teamwork', text: 'Collaborate with peers on projects and college events.' },
  { title: 'Leadership', text: 'Led a college symposium and headed sports at an inter-college fest.' },
]

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'SQL'] },
  { title: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
  { title: 'Backend and data', items: ['Spring Boot', 'MySQL'] },
  { title: 'Tools and game dev', items: ['Git', 'GitHub', 'Unity'] },
  { title: 'Ways of working', items: ['Full-stack development', 'Problem solving', 'Teamwork', 'Leadership'] },
]

// Add real links to any project with `github` and `live`. A button appears only when its URL is set, e.g.
//   github: 'https://github.com/praveen120k/repository-name',
//   live: 'https://your-deployed-site.com',
export interface Project { title: string; type: string; description: string; problem: string; solution: string; features: string[]; tech: string[]; github?: string; live?: string }
export const projects: Project[] = [
  { title: 'Carevix Healthcare', type: 'Healthcare web application', description: 'A healthcare ecosystem that brings patient-facing services into one platform.',
    problem: 'Healthcare services are often spread across separate tools, which makes them harder for patients to use.',
    solution: 'A single platform that brings these services together in one place.',
    features: ['Healthcare services in one platform', 'React.js and TypeScript front end', 'Spring Boot back end with a MySQL database'],
    tech: ['React.js', 'TypeScript', 'Spring Boot', 'MySQL'] },
  { title: 'Joo Dessert', type: 'E-commerce', description: 'A dessert e-commerce website for browsing and ordering.',
    problem: 'A dessert business needs an easy way to show its products and take orders online.',
    solution: 'An e-commerce site where customers can browse desserts and place orders.',
    features: ['Dessert e-commerce storefront', 'React.js, TypeScript and Vite front end', 'Spring Boot back end with a MySQL database'],
    tech: ['React.js', 'TypeScript', 'Vite', 'Spring Boot', 'MySQL'] },
  { title: 'Forklifter VR', type: 'Periodic table VR game', description: 'An educational VR game that teaches the periodic table through play.',
    problem: 'The periodic table is hard to memorise from a static chart.',
    solution: 'A VR game where learners explore the periodic table through play.',
    features: ['Educational VR game on the periodic table', 'Built with Unity and C#', '3D content created with Blender'],
    tech: ['Unity', 'C#', 'Blender', 'VR'] },
  { title: 'Pop-Up Medical Lab VR', type: 'VR experience', description: 'A virtual medical lab built for immersive learning.',
    problem: 'Students rarely get hands-on access to a medical lab environment.',
    solution: 'A virtual pop-up lab that learners can explore in VR.',
    features: ['Virtual medical lab environment in VR', 'Built with Unity and C#', '3D content created with Blender'],
    tech: ['Unity', 'C#', 'Blender', 'VR'] },
  { title: 'Smart Sentiment Analyzer', type: 'Text analysis tool', description: 'A tool that identifies the sentiment expressed in text.',
    problem: 'Judging the tone of large amounts of text by reading is slow.',
    solution: 'A tool that analyzes text and reports its sentiment.',
    features: ['Analyzes text to identify sentiment', 'Built with Java using AI and NLP techniques'],
    tech: ['Java', 'AI', 'NLP'] },
]

// Only real entries. Add internships or jobs here when you have them.
export const experience: { title: string; org: string; period: string; points: string[] }[] = [
  { title: 'Academic and project work', org: 'B.Tech Information Technology', period: '', points: [
    'Built web applications, including a healthcare platform and a dessert e-commerce site.',
    'Developed two VR projects in Unity and C#: a periodic table game and a virtual medical lab.',
    'Built a text sentiment analysis tool.',
  ] },
]

export const leadership = [
  { title: 'Symposium lead', org: 'College symposium', description: 'Led a college symposium event and coordinated the team behind it.' },
  { title: 'Sports Head', org: 'Inter-college fest', description: 'Led the sports events at an inter-college fest and worked with the organizing team.' },
]

export const education = [
  { degree: 'B.Tech, Information Technology', period: '' /* optional, e.g. '2021 – 2025' */ },
]

// Add real certifications here. The section stays hidden while this list is empty.
export const certifications: { name: string; issuer: string; year?: string; url?: string }[] = []

export const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Leadership', 'Education', 'Certifications', 'Contact']
