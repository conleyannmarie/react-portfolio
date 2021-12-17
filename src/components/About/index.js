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
          <li class="li-me">
            I grew up in California and have since moved around and travelled a lot! 
        </li>
        <li class="li-me">
            My favorite place I have ever been was Thailand! My favorite foods to eat are asian and meditereanan. 
        </li> 
        <li class="li-me">
            I live with my dog, Lando, and we love taking long walks. 
        </li> 
        <li class="li-me">
            My favorite music genre is folk. 
        </li> 
        </p>
      </div>
    </section>
  );
}

export default About;
