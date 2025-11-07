import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      type: "work",
      title: "Full-Stack Developer Intern",
      organization: "Fabs Infotech, Dubai",
      period: "6 Months Internship",
      description: "Developed and enhanced web applications using modern technologies. Collaborated with the development team to build scalable solutions while gaining hands-on experience in both frontend and backend systems.",
    },
    {
      type: "work",
      title: "Full-Stack Developer (Academic Projects)",
      organization: "Freelance / College Projects",
      period: "2024 - 2026",
      description: "Designed and developed several academic and personal projects using Django (Python) and the MERN stack (MongoDB, Express.js, React.js, Node.js). Focused on building responsive UI, REST APIs, and database-driven features.",
    },
    {
      type: "education",
      title: "Master of Computer Applications (MCA)",
      organization: "Jamal Mohamed College, Tiruchirappalli",
      period: "2024 – Present",
      description: "Pursuing MCA with a strong focus on advanced software development, web technologies, database management, and modern application architecture. Actively working on real-world projects and expanding expertise in full-stack development.",
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Jamal Mohamed College, Tiruchirappalli",
      period: "2021 – 2024",
      description: "Completed BCA with solid foundation in computer science concepts, programming, data structures, and web development. Engaged in academic and personal projects contributing to practical learning and technical growth.",
    },

    // {
    //   type: "work",
    //   title: "Junior Developer",
    //   organization: "Startup Ventures",
    //   period: "2019 - 2020",
    //   description: "Contributed to frontend development and learned industry best practices.",
    // },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          Experience & <span className="text-gradient">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-card rounded-full shadow-card z-10">
                    {exp.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-accent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.organization}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
