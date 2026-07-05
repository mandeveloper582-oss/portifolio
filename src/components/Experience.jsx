import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

function Experience() {
  const timeline = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      title: "Computer Science Student",
      company: "University",
      year: "2025 - Present",
      description:
        "Studying Computer Science with a strong focus on software engineering, algorithms, databases and modern web technologies.",
      color: "text-blue-500",
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Frontend Developer",
      company: "Self Learning",
      year: "2023",
      description:
        "Built responsive websites using HTML, CSS, JavaScript, React, Tailwind CSS and Vite while improving UI/UX design skills.",
      color: "text-cyan-400",
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      title: "MERN Stack Developer",
      company: "Coursera Training",
      year: "2024",
      description:
        "Completed professional training in MERN Stack Development, gaining hands-on experience in React, Node.js, Express.js, MongoDB, REST API development, authentication, responsive UI design, Git/GitHub, deployment, and modern full-stack application development.",
      color: "text-green-500",
    },
    {
      id: 4,
      icon: <FaBriefcase />,
      title: "Freelance Developer",
      company: "odaa family group",
      year: "2026",
      description:
        "Helping businesses and individuals build modern websites, web applications and scalable digital solutions.",
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[#08111F]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My Journey
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My learning path and development journey toward becoming
            a professional Full Stack Developer.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative border-l-2 border-gray-700 ml-6">

          {timeline.map((item) => (

            <div
              key={item.id}
              className="relative mb-14 ml-10"
            >

              {/* Circle */}

              <div
                className='{absolute -left-[58px] top-0 w-12 h-12 rounded-full bg-[#111827] border border-gray-700 flex items-center justify-center text-2xl ${item.color}}'
              >
                {item.icon}
              </div>

              {/* Card */}

              <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">

                <span className="text-blue-500 font-medium">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <h4 className="text-gray-400 mt-1">
                  {item.company}
                </h4>

                <p className="text-gray-400 mt-5 leading-8">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;