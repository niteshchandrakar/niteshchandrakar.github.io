import React, { useEffect } from "react";
import styles from "./project.module.css";
import cssimg from "../../assets/css.png";
import chakraimg from "../../assets/chakra.png";
import htmlimg from "../../assets/html.png";
import jsimg from "../../assets/javascript.png";
import reactimg from "../../assets/react.png";
import expressimg from "../../assets/expressimg.png";
import mongodbimg from "../../assets/mongodb-seeklogo.svg";
import reduximg from "../../assets/redux-seeklogo.svg";
import nodejsimg from "../../assets/nodejsimage.png";
import typescriptimg from "../../assets/typescriptimage.png";
import OpenAI from "../../assets/OpenAI.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.project__section} id="projects">
      <h1 className={styles.project__heading}>Projects</h1>
      <p className={styles.project__description}>
        Check out some of my work right here
      </p>

      <div className={styles.projects__secondMaindiv}>
        <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img
                src="ManMatters.gif"
                alt="ManMatters"
                className={styles.projects__divimage}
              />
            </div>
            <div className={styles.projects__content}>
              <h2>
                {" "}
                ManMatters <br />
              </h2>
              <p>
                Developed a fully functional e-commerce platform for health
                supplements and chatbot for self assesment useng Open AI.Get
                email confirmation when you order
              </p>

              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={typescriptimg} alt="css" />
                  <p>TypeScript</p>
                </div>
                <div>
                  <img src={OpenAI} alt="css" />
                  <p>Open-AI</p>
                </div>
                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
                <div>
                  <img src={mongodbimg} alt="css" />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src={expressimg} alt="css" />
                  <p>Express</p>
                </div>
                <div>
                  <img src={nodejsimg} alt="css" />
                  <p>NodeJS</p>
                </div>
              </div>

              <div className={styles.projects__buttondiv}>
                <a
                  href="https://github.com/niteshchandrakar/Man-Matters"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-github"></i> Github
                  </button>
                </a>
                <a
                  href="https://manmatters.netlify.app/"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-globe"></i> Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img
                src="money_mentor.png"
                alt="MoneyMentor"
                className={styles.projects__divimage}
              />
            </div>
            <div className={styles.projects__content}>
              <h2>
                {" "}
                MoneyMentor <br />
              </h2>
              <p>
                A website providing loan information and connecting users with
                loan providers, inspired by paisabazar loan information and loan
                provider website.
              </p>

              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
              </div>

              <div className={styles.projects__buttondiv}>
                <a
                  href="https://github.com/niteshchandrakar/vogue-pocket-8479"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-github"></i> Github
                  </button>
                </a>
                <a
                  href="https://money-mentor.netlify.app/"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-globe"></i> Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img
                src="DonateForChange.png"
                alt="DonateForChange"
                className={styles.projects__divimage}
              />
            </div>
            <div className={styles.projects__content}>
              <h2>
                {" "}
                DonateForChange <br />
              </h2>
              <p>
                There’s a part of every one of us that dreams of a better world.
                That spark of inspiration to help a person, fix a neighborhood,
                or even change a nation.
              </p>

              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>

                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
                <div>
                  <img src={mongodbimg} alt="css" />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src={expressimg} alt="css" />
                  <p>Express</p>
                </div>
                <div>
                  <img src={nodejsimg} alt="css" />
                  <p>NodeJS</p>
                </div>
              </div>

              <div className={styles.projects__buttondiv}>
                <a
                  href="https://github.com/niteshchandrakar/bouncy-invention-713"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-github"></i> Github
                  </button>
                </a>
                <a
                  href="https://donateforchanges.netlify.app/"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-globe"></i> Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src="CredScore.png" alt="CredScore" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2> CredScore <br /></h2>
              <p>
      We are your one-stop destination for all your cibil score checking. Our platform offers a wide range of loan options, tailored to suit individual requirements.
              </p>


              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div >
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div >
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
               
                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
                <div>
                  <img src={mongodbimg} alt="css" />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src={expressimg} alt="css" />
                  <p>Express</p>
                </div>
                <div>
                  <img src={nodejsimg} alt="css" />
                  <p>NodeJS</p>
                </div>
              
              </div>




              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/niteshchandrakar/sleek-circle-8356" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://credscore.netlify.app/' target="_blank" passHref >
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img
                src="Dreams.png"
                alt="Dreams"
                className={styles.projects__divimage}
              />
            </div>
            <div className={styles.projects__content}>
              <h2>
                {" "}
                Dreams <br />
              </h2>
              <p>
                Using this website You can add your dream goals and also you can
                edit or delete it,used Tailwind css and all operations are
                stored in MongoDB and done by Backend.
              </p>

              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt="css"
                  />
                  <p>Tailwind</p>
                </div>

                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
                <div>
                  <img src={mongodbimg} alt="css" />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src={expressimg} alt="css" />
                  <p>Express</p>
                </div>
                <div>
                  <img src={nodejsimg} alt="css" />
                  <p>NodeJS</p>
                </div>
              </div>
              <div className={styles.projects__buttondiv}>
                <a
                  href="https://github.com/niteshchandrakar/Dreams"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-github"></i> Github
                  </button>
                </a>
                <a href="https://dreamss.netlify.app/" target="_blank" passHref>
                  <button className={styles.projects__button}>
                    <i class="uil uil-globe"></i> Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img
                src="EduTute.png"
                alt="EduTute"
                className={styles.projects__divimage}
              />
            </div>
            <div className={styles.projects__content}>
              <h2>
                {" "}
                EduTute <br />
              </h2>
              <p>
                A website similar to Student Dashboard that replicates the
                functionality of Calendly, a popular online scheduling platform
                and buying course online
              </p>

              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
              </div>
              <div className={styles.projects__buttondiv}>
                <a
                  href="https://github.com/niteshchandrakar/quiet-boundary-1362"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-github"></i> Github
                  </button>
                </a>
                <a
                  href="https://teal-sunflower-bcdecf.netlify.app/"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-globe"></i> Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div data-aos="zoom-in-up" className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img
                src="healthkart.png"
                alt="HealthMart"
                className={styles.projects__divimage}
              />
            </div>
            <div className={styles.projects__content}>
              <h2>
                {" "}
                HealthMart <br />
              </h2>
              <p>
                A website similar to HealthKart, offering an e-commerce platform
                for health supplements, body-building products, and proteins.
              </p>

              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
              </div>
              <div className={styles.projects__buttondiv}>
                <a
                  href="https://github.com/niteshchandrakar/fond-channel-7524"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-github"></i> Github
                  </button>
                </a>
                <a
                  href="https://healthkartt.netlify.app/"
                  target="_blank"
                  passHref
                >
                  <button className={styles.projects__button}>
                    <i class="uil uil-globe"></i> Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
