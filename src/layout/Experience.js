import './Experience.css';

function Experience() {
    return (
      <experience-container>
        <experience-body>
          <my-hello>
            My name is
          </my-hello>
          <my-name>
            Nicholas Stanford
          </my-name>
          <my-title>
            Full Stack Web Developer +&nbsp;Professional&nbsp;Problem&nbsp;Solver
          </my-title>
          <my-about>
            I do computer things.
          </my-about>
          <my-positions>
            <positions-header>Professional Experience</positions-header>
            <position-details>
              <position-title>Web Application Developer</position-title>
              <position-spacer />
              <position-duration>
                September 2022 to Present
              </position-duration>
              <position-employer>
                Edgewater Federal Solutions
              </position-employer>
              <position-description>
                Contracting with Sandia National Labs in Albuquerque, New Mexico to build 
                full stack applications and automate workflows for the Department of Energy.
              </position-description>
              <h4>Skills Practiced:&nbsp;</h4>
              <position-skills>
                <my-skill>Apache Tomcat</my-skill>
                <my-skill>SQL</my-skill>
                <my-skill>.NET</my-skill>
                <my-skill>Python</my-skill>
                <my-skill>Javascript</my-skill>
                <my-skill>CSS</my-skill>
              </position-skills>    
            </position-details>
            <position-details>
              <position-title>Systems Analyst • Developer</position-title>
              <position-spacer />
              <position-duration>
                July 2020 to September 2022
              </position-duration>
              <position-employer>
                University of New Mexico
              </position-employer>
              <position-description>
                Migrated UNM web applications onto Drupal CMS. Built custom modules for Drupal using PHP and Javascript.
                Used shell and Python scripting to retrieve, process and report project milestone progress data to 
                the National Institutes of Health.
              </position-description>
              <h4>Skills Practiced:&nbsp;</h4>
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
            <position-details>
              <position-title>Webserver Support Technician •&nbsp;Wordpress&nbsp;Developer</position-title>
              <position-spacer />
              <position-duration>
                August 2018 to July 2020
              </position-duration>
              <position-employer>
                Indra.com
              </position-employer>
              <position-description>
                Assisted customers with deployment of sites and implementation of custom Wordpress modules.
                Managed web hosting, domain name email, and name servers. Monitored mail queues for suspicious traffic 
                and responded to cybersecurity threats against web and mail servers urgently and efficiently. 
              </position-description>
              <h4>Skills Practiced:&nbsp;</h4>
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
            <projects-header>
              Personal Projects
            </projects-header>
            <purpose-statement>
              I like to do stuff
            </purpose-statement>
            <project-details>
              <project-title>NicholasStanford.dev</project-title>
              <project-description>
                I made this website
              </project-description>
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
          </my-projects>
          <my-education>
            <education-header>Education</education-header>
            <degree-details>
              <my-degree>B.S. Computer Science • University of Colorado</my-degree>
              <degree-spacer />
              <degree-duration>
                January 2018 to May 2020
              </degree-duration>
              <alma-mater>
                University of Colorado Denver
              </alma-mater>
            </degree-details>
            <project-details>
              <project-title>Senior Project</project-title>
              <project-description>
                Project was an interactive environment built using the Unity Engine 
                in which users could synthesize and play instruments. Project used 
                the Unity Engine and ChucK, a language designed for the audio synthesis.
                Project was the Engineering Capstone Expo winner in the Computer Science
                Category and was runner up for the "Peoples' Choice" award at the 
                University of Colorado Research and Creative Activities Symposium.
              </project-description>
              <project-skills>
                <my-skill>ChucK</my-skill>
                <my-skill>Unity</my-skill>
                <my-skill>C#</my-skill>
              </project-skills>
            </project-details>
            <project-details style={{display: 'none'}}>
              <project-title>Something on Github</project-title>
              I did a gif app for Android
              <project-skills>
                <my-skill>sKill</my-skill>
                <my-skill>sKill</my-skill>
                <my-skill>sKill</my-skill>
              </project-skills>
            </project-details>
          </my-education>
        </experience-body>
      </experience-container>
    );
}

export default Experience;