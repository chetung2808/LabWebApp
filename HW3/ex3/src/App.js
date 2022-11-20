import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
      <div>
  <div className="navbar">
    <div className="profile">
      <h1>PROFILE</h1>
      <span>I'm a student</span>
    </div>
  </div>
  <div className="container">
    <div className="Menu">
      <div className="firstbox">
        <div className="aboutme">
          <h2>About me</h2>
          <span>I am a lovely cat. I have passion in IT and I want to become a professional developer.</span>
        </div>
        <img src="https://i.pinimg.com/564x/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg" alt="" />
        <div className="details">
          <h2>Details</h2>
          <span className="title">Name:</span>
          <span> Che Nguyen Minh Tung</span>
          <span className="title">Age:</span>
          <span> 21 years</span>
          <span className="title">Location:</span>
          <span> UIT, VNU-HCM</span>
        </div>
      </div>
      <div className="secondbox">
        <div className="title">
          <h1>Experience</h1>
        </div>
        <div className="content">
          <hr />
          <h2>Educations</h2>
          <div className="box">
            <div className="ct">
              <h3>UIT, VNU-HCM</h3>
              <p>Apr 2019 - June 2024</p>
            </div>
            <div className="text">
              <h4>Information System</h4>
              <p>The education was mainly System design-basic course, but I also learned about Web, Data
                analysis and more. During my time in college, I specialized in OOP, data science. Now, I'm
                learning web development.</p>
            </div>
          </div>
          <hr />
          <h2>Working Experiences</h2>
          <div className="box">
            <div className="ct">
              <h3>Facebook | Fresher Engineer</h3>
              <p>Sep 2021 - current</p>
            </div>
            <div className="text">
              <h4>Part - Fresher Web Developer</h4>
              <p>Working as a Fresher Developer on a dating function on Facebook page. Dating function is an
                app as Tinder.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdbox">
        <section className="content">
          <h2>Skills</h2>
          <hr className="light" />
          <div className="skill">
            <ul>
              <div className="po">
                <p>Html, Css</p>
                <div className="cool">
                  <div style={{width: '80%'}} className="inner" />
                </div>
              </div>
              <div className="po">
                <p>SQL</p>
                <div className="cool">
                  <div style={{width: '75%'}} className="inner"> </div>
                </div>
              </div>
              <div className="po">
                <p>JQuery</p>
                <div className="cool">
                  <div style={{width: '71%'}} className="inner"> </div>
                </div>
              </div>
              <div className="po">
                <p>JavaScript</p>
                <div className="cool">
                  <div style={{width: '40%'}} className="inner"> </div>
                </div>
              </div>
            </ul>
            <ul>
              <div className="po">
                <p>Object Oriented Programming</p>
                <div className="cool">
                  <div style={{width: '50%'}} className="inner" />
                </div>
              </div>
              <div className="po">
                <p>SEO</p>
                <div className="cool">
                  <div style={{width: '35%'}} className="inner"> </div>
                </div>
              </div>
              <div className="po">
                <p>React</p>
                <div className="cool">
                  <div style={{width: '71%'}} className="inner"> </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="profile">
            <span>See my project on github</span>
          </div>
          <br />
          <button onclick="document.location='https://github.com/chetung2808'" className="button"> See project on
            github</button>
          <div className="title">
            <h1>Abilities</h1>
          </div>
          <h2>Languages</h2>
          <hr className="light" />
          <div className="skill">
            <ul>
              <div className="po">
                <p>Vietnamese (Native)</p>
                <div className="cool">
                  <div style={{width: '90%'}} className="inner"> </div>
                </div>
              </div>
              <div className="po">
                <p>English (IELTS 6.5)</p>
                <div className="cool">
                  <div style={{width: '60%'}} className="inner"> </div>
                </div>
              </div>
            </ul>
            <ul>
              <div className="po">
                <p>Cat (Mother Tongue)</p>
                <div className="cool">
                  <div style={{width: '50%'}} className="inner"> </div>
                </div>
              </div>
              <div className="po">
                <p>Dog (My enemy)</p>
                <div className="cool">
                  <div style={{width: '60%'}} className="inner"> </div>
                </div>
              </div>
            </ul>
          </div>
        </section>
        <br />
      </div>
    </div>
  </div></div>

    </div>
  );
}

export default App;
