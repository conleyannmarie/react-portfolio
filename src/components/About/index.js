import React from 'react';
import Avatar from '../../src/assets/Avatar.png';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src= {Avatar} className="my-2" alt="ProfilePic" />
      <div className="my-2">
        <p>
          My name is Conley Marie! I started coding about a year ago. I am a fullstack developer from Salt Lake City, Utah.
        </p>
      </div>
    </section>
  );
}

export default About;
