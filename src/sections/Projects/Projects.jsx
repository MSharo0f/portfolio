import styles from "./Projects.module.css";
import React from "react";
import BusTicket from "../../assets/Bus_ticket (1).jpg";
import PollVoting from "../../assets/PollVotingSystem.jpg";
import GroupExpenseTracker from "../../assets/GroupExpenseTracker (1).jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <a href="https://new.blank.page/" target="_blank">
          <img src={BusTicket} alt="BusTicket logo" className="hover" />
          <h3>Bus Ticket Booking</h3>
          <p>Ticket Booking Website</p>
        </a> */}

        {/* insert github project link here */}
        <ProjectCard
          src={BusTicket}
          link="https://github.com/MSharo0f/BusTicketBooking.git"
          h3="Bus Ticket Booking"
          p="Ticket Booking Website"
        />

        <ProjectCard
          src={PollVoting}
          link="https://github.com/MSharo0f/PollVoting.git"
          h3="Poll Voting"
          p="Simple Opinion Poll Voting"
        />

        <ProjectCard
          src={GroupExpenseTracker}
          link="https://github.com/MSharo0f/GroupExpenseTracker.git"
          h3="Group Expense Tracker"
          p="Simple Mobile App "
        />
      </div>
    </section>
  );
}

export default Projects;
