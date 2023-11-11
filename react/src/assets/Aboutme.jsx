import React from 'react';
import './aboutme.css';
const Aboutme = () => {
  return (
    <div className="about-me" id="aboutme">
      <h2>About Me</h2>

      <section>
        <h3>Background</h3>
        <p>
          I am passionate about [your interests]. [Share a brief overview of your background and interests.]
        </p>
      </section>

      <section>
        <h3>Education</h3>
        <p>
          I graduated from [mention your educational institution] with a degree in [mention your field of study]. [Any academic achievements or notable experiences.]
        </p>
      </section>

      <section>
        <h3>Work Experience</h3>
        <p>
          With [mention years of experience], I have gained expertise in [mention relevant skills or industries]. Currently, I work at [mention current job position or company].
        </p>
      </section>

      <section>
        <h3>Interests</h3>
        <p>
          Outside of work, I enjoy [mention other hobbies or interests]. [Share a bit about why you love these activities and how they enrich your life.]
        </p>
      </section>

      <section>
        <h3>Philosophy</h3>
        <p>
          [Share a short statement about your personal philosophy or values. This could be related to work ethic, life outlook, or any guiding principles you follow.]
        </p>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          I'd love to connect! Feel free to reach out to me at <a href="mailto:youremail@example.com">youremail@example.com</a> or connect with me on <a href="https://www.linkedin.com/in/yourprofile/">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
};

export default Aboutme;
