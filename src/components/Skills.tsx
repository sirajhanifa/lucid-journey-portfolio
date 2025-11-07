import { useEffect, useRef, useState } from "react";
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      technologies: ["HTML5","CSS3","JavaScript","React.js",  "Tailwind CSS",],
    },
    {
      icon: Server,
      title: "Backend Development",
      technologies: ["Node.js", "Express", "Python", "RESTful APIs"],
    },
    {
      icon: Database,
      title: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      technologies: ["Figma", "Responsive Design", "Accessibility", "Animations"],
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      technologies: ["GitHub Actions", "Vercel"],
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile Development",
    //   technologies: ["React Native", "Progressive Web Apps", "Mobile-First"],
    // },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
