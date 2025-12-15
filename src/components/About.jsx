import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>

        <div className="mb-8">
          <p className="text-lg mb-4">
            I am <span className="font-semibold">Shathurya Paramanathan</span>, a
            dedicated IT undergraduate at the University of Moratuwa, pursuing a
            B.Sc. (Hons) in Information Technology.
          </p>

          <p className="text-lg mb-4">
            I have a strong passion for software engineering and problem-solving,
            with a solid foundation in programming, web development, and system
            design. I enjoy building practical applications that deliver
            real-world impact.
          </p>

          <p className="text-lg mb-6">
            I am highly motivated to continuously learn new technologies, improve
            my technical skills, and contribute to innovative and challenging
            projects.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">COGNTIX (Feb 2025 - July 2025) – Nallur, Jaffna, Sri Lanka</p>
              <p>
                Worked on multiple projects across Telecom, MediTech, and HR Tech domains, delivering high-quality solutions within deadlines. Demonstrated strong technical contributions, proactive problem-solving, and a continuous willingness to learn.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">B.Sc. (Hons) in Information Technology (2022 - Present) – University of Moratuwa, Colombo, Sri Lanka</p>
              <p>Dean's List: L2S2 SGPA – 3.83</p>
            </div>
            <div>
              <p className="font-semibold">G.C.E A/L: Physical Science Stream (2020) – Nelliady Central College, Jaffna, Sri Lanka</p>
              <p>Z-Score: 1.7680</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Certifications & Achievements</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>React Basics – Meta (Coursera)</li>
            <li>Code Rush – 2023 by INTECS UoM</li>
            <li>Idealize’24</li>
            <li>HackMoral 6.0</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Python</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
