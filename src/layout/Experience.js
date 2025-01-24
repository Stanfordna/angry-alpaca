import './Experience.css';

function Experience() {
    return (
      <experience-container>
        <experience-body>
          <my-hello>
            Hello, I'm
          </my-hello>
          <my-name>
            Nicholas Stanford
          </my-name>
          <my-title>
            Professional Full-Stack Software&nbsp;Developer
          </my-title>
          <my-about>
            I do computer things.
          </my-about>
          <my-positions>
            <positions-header>Professional Experience</positions-header>
            <position-details>
              <position-title>Principal Software Engineer</position-title>
              <position-spacer />
              <position-duration>
                January 2024 to Present
              </position-duration>
              <position-employer>
                Northrop Grumman Space Sector
              </position-employer>
              <position-description>
                I am currently the sole developer on the Systems Engineering and Integration Test team (SEIT)
                for my project with Northrop Grumman Space Systems. I write integrations tests using 
                Python's Robot Framwework to validate messages produced by various Java and Python 
                Microservices. I serve as the primary authority within my mission with regard to the
                code base and functionality of our suite of tests, and have containerized our test suite.
                As a result, a single tightly controlled container in k8s runs our tests and our testers
                do not need to configure their workspace instances for testing.
              </position-description>
              <position-skills>
                <my-skill>Python</my-skill>
                <my-skill>Java</my-skill>
                <my-skill>Kubernetes</my-skill>
                <my-skill>Helm</my-skill>
                <my-skill>Bash</my-skill>
                <my-skill>Integration Testing</my-skill>
                <my-skill>AWS</my-skill>
              </position-skills>    
            </position-details>
            <position-details>
              <position-title>Web Application Developer</position-title>
              <position-spacer />
              <position-duration>
                September 2022 to January 2024
              </position-duration>
              <position-employer>
                Edgewater Federal Solutions
              </position-employer>
              <position-description>
                Contractied with Sandia National Labs in Albuquerque, New Mexico to build 
                full stack applications and automate workflows for the Department of Energy.
              </position-description>
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
                Worked in a customer-facing role managing DNS, registration, web hosting and custom domain email
                for Indra customers. Handled the deployment of web apps and sites, and provided support to clients
                in the development of Wordpress modules. Implemented bash and Python scripts in order to monitor
                traffic through our Apache web and mail servers to more quickly respond to cyber threats.
              </position-description>
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