import { useEffect, useRef, useState } from "react";
import profilePlaceholder from "@/assets/myimage3.jpeg";

const About = () => {
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

  const strengths = [
    "Problem Solving",
    "Clean Code",
    "Team Collaboration",
    "Continuous Learning"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <img
              src={profilePlaceholder}
              alt="Profile"
              className="rounded-2xl h-96  shadow-elegant w-fit max-w-md mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-semibold mb-4">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey in web development has equipped me with a diverse skill set and a keen eye for detail. 
              I believe in writing code that is not only functional but also maintainable and scalable.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {strengths.map((strength, index) => (
                <div
                  key={strength}
                  className="bg-background p-4 rounded-lg shadow-card hover:shadow-elegant transition-shadow duration-300"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <p className="font-semibold text-center">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
