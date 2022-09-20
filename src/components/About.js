import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>Put the bio in here</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links />
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default About;
