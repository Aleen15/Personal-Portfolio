import React from "react";
import project1 from "/Aproject1.png";
import project2 from "/Aproject2.png";
import project3 from "/Aproject3.jpg";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10" />
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              View Website
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "Stock Market Investment Platform",
      description:
        "The Stock Market Investment Platform is a full-stack web application built with ReactJS, Spring Boot, and MySQL. It allows users to securely manage their investment portfolios, track budgets, view real-time market charts, and access a learning space tailored for beginners. The application features JWT-based authentication, optimized RESTful APIs, and efficient database queries to ensure fast and secure performance.",
      link: "https://github.com/Aleen15/SafeCryptoCurrency_Investment_Platform.git",
    },
    {
      image: project2,
      title: "UNIHUB",
      description:
        "The Web-Based Educational Management System is a full-stack application developed using ReactJS, Spring Boot, and MySQL. It is designed to streamline administrative operations in educational institutions through role-based modules for Admin, Faculty, and Students. The Admin manages users, courses, and batches; Faculty handles timetable generation using a Genetic Algorithm, tracks attendance, manages leaves, and assigns substitutes; Students can view their class schedules, track attendance percentages, and submit leave requests. The system ensures efficient and automated academic management through a user-friendly interface and smart scheduling logic.",
      link: "https://github.com/rajapriyanka/UNIHUB.git",
    },
    {
      image: project3,
      title: "Expense Tracker",
      description:
        "A lightweight, browser-based application built with HTML, CSS, and JavaScript to help users manage their daily expenses. The app allows users to input expense names and amounts, add them to a transaction list, and dynamically view the total balance. It includes functionality to delete individual transactions, and updates the total in real time. The project demonstrates DOM manipulation, event handling, and local storage for data persistence, all within a clean and responsive UI.",
      link: "https://github.com/Aleen15/Expense_Tracker.git",
    },
  ];
  return (
    <main className="p-4" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            veniam?
          </p>
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
