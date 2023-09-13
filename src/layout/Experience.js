import './Experience.css';

function Experience() {
    return (
      <experience-container>
        <experience-body>
          <my-hello>
            My name is
          </my-hello>
          <my-name>
            NICHOLAS STANFORD
          </my-name>
          <my-about>
            <h1>Full Stack Web Developer</h1>
            I enjoy solving problems and making clients' lives easier.
          </my-about>
          <my-positions>
            <h2>Experience</h2>
            <position-duration>
              September 2022 to Present
            </position-duration>
            <position-details>
              <h3>Web Application Developer</h3>
              Contracting with Sandia National Labs in Albuquerque, New Mexico to build 
              full stack applications and automate workflows for the Department of Energy.
              <position-skills>
                <my-skill>Apache Tomcat</my-skill>
                <my-skill>SQL</my-skill>
                <my-skill>.NET</my-skill>
                <my-skill>Python</my-skill>
                <my-skill>Javascript</my-skill>
                <my-skill>CSS</my-skill>
              </position-skills>    
            </position-details>
            <position-duration>
              July 2020 to September 2022
            </position-duration>
            <position-details>
              <h3>Systems Analyst • Developer</h3>
              Migrated UNM web applications onto Drupal CMS. Built custom modules for Drupal using PHP and Javascript.
              Used shell and Python scripting to retrieve, process and report project milestone progress data to 
              the National Institutes of Health.
              <position-skills>
                <my-skill>Apache HTTP Server</my-skill>
                <my-skill>PHP</my-skill>
                <my-skill>CSS</my-skill>
                <my-skill>HTML</my-skill>
                <my-skill>Javascript</my-skill>
                <my-skill>Drupal</my-skill>
                <my-skill>Wordpress</my-skill>
                <my-skill>Bash</my-skill>
              </position-skills>    
            </position-details>
            <position-duration>
              October 2018 to July 2020
            </position-duration>
            <position-details>
              <h3>Webserver Support Technician • Wordpress Developer</h3>
              Assisted customers with deployment of sites and implementation of custom Wordpress modules.
              Managed web hosting, domain name email, and name servers. Monitored mail queues for suspicious traffic 
              and responded to cybersecurity threats against web and mail servers urgently and efficiently. 
              <position-skills>
                <my-skill>Apache HTTP Server</my-skill>
                <my-skill>DNS</my-skill>
                <my-skill>Unix Shell</my-skill>
                <my-skill>Wordpress</my-skill>
                <my-skill>PHP</my-skill>
                <my-skill>CSS</my-skill>
                <my-skill>HTML</my-skill>
                <my-skill>Javascript</my-skill>
              </position-skills>    
            </position-details>
          </my-positions>
          <my-projects>
            <h2>Personal Projects</h2>
            <purpose-statement>I feel stuff when I do stuff</purpose-statement>
            <personal-projects>
              <project-details>
                <h3>NicholasStanford.dev</h3>
                I made this website
                <project-feature>
                  It has an SMTP server
                </project-feature>
                <project-skills>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                </project-skills>
                <project-feature>
                  The background draws from the APOD API
                </project-feature>
                <project-skills>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                </project-skills>
              </project-details>
            </personal-projects>
          </my-projects>
          <my-education>
            <h2>Education</h2>
            <my-degree>B.S. Computer Science • University of Colorado</my-degree>
            <school-projects>
              <project-details>
                <h3>Senior Project</h3>
                I did an thing with Chunity
                <project-skills>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                </project-skills>
              </project-details>
              <project-details>
                <h3>Something on Github</h3>
                I did a gif app for Android
                <project-skills>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                  <my-skill>sKill</my-skill>
                </project-skills>
              </project-details>
            </school-projects>
          </my-education>
        </experience-body>
      </experience-container>
    );
}

export default Experience;