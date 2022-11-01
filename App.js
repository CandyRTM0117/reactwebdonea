import "./App.css";
// import { useRef, useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Service from "./pages/service";
import GetAccess from "./pages/getaccess";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="w-50 whitecolor rightsidew-50">
              <div className="interfacecontainer">
                <div className="specialwordteam">team.</div>
                <div className="interface">
                  <div className="teams">
                    Instant collaborations for remote teams
                  </div>
                  <div className="projects">
                    All in one for your remote team chats, collaboration and
                    track projects
                  </div>
                  <div className="access">
                    <input placeholder="Email" className="inputemail"></input>
                    <button className="buttonemail">Get Early Access</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="links">
                <div>
                  <Link id="products" to="/product">
                    Products
                  </Link>
                </div>
                <div>
                  <Link id="service" to="/service">
                    Services
                  </Link>
                </div>
                <div>
                  <Link id="contact" to="/contact">
                    Contact
                  </Link>
                </div>
                <div>
                  <Link id="login" to="/login">
                    Log In
                  </Link>
                </div>
                <div>
                  <Link id="earlyaccess" to="/getacesss">
                    Early Access
                  </Link>
                </div>
              </div>
              <div className="routes">
                <Routes>
                  <Route path="/product" element={<Product />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/getaccess" element={<GetAccess />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className="teamwork">
            <div className="w-50 teamworkstyle">
              <div className="hubteamwork">Your Hub for teamwork</div>
              <div className="description">
                Give everyone you work with—inside and outside your company—a
                more productive way to stay in sync. Respond faster with emoji,
                keep conversations focused in channels, and simplify all your
                communication into one place.
              </div>
              <button className="learnmore"> Learn more →</button>;
            </div>
            <div className="w-50 leftsideteamwork">
              <img
                className="hubimage"
                src="https://media.discordapp.net/attachments/992239144698925066/1036946673760481320/unknown.png?width=1118&height=1350"
              />
            </div>
          </div>
          <div className="taskmanage">
            <div className="w-50 taskleft">
              <img
                className="taskimg"
                src="https://media.discordapp.net/attachments/992239144698925066/1036948532306915448/unknown.png"
              />
            </div>
            <div className="w-50 taskleft">
              <div className="taskgap">
                <div className="taskmanageexplaination">
                  Simple task management
                </div>
                <div className="taskmanagetext">
                  Give everyone you work with—inside and outside your company—a
                  more productive way to stay in sync. Respond faster with
                  emoji, keep conversations focused in channels, and simplify
                  all your communication into one place.
                </div>
                <button className="learnmore"> Learn more →</button>;
              </div>
            </div>
          </div>
          <div className="scheduling">
            <div className="w-50 taskleft">
              <div className="taskgap">
                <div className="taskmanageexplaination">
                  Scheduling that actually works
                </div>
                <div className="taskmanagetext">
                  Give everyone you work with—inside and outside your company—a
                  more productive way to stay in sync. Respond faster with
                  emoji, keep conversations focused in channels, and simplify
                  all your communication into one place.
                </div>
                <button className="learnmore"> Learn more →</button>;
              </div>
            </div>
            <div className="w-50 taskleft">
              <img
                className="taskimg"
                src="https://media.discordapp.net/attachments/992239144698925066/1036954784042848316/unknown.png"
              />
            </div>
          </div>
          <div className="aboutus">
            <div className="aboutuscontainer">
              <div className="w-20">What people say about us</div>
              <div className="w-80">
                <Avatar
                  name="Amy Klassen"
                  text="          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place."
                />
                <Avatar
                  name="Amy Klassen"
                  text="          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place."
                />
                <Avatar
                  name="Amy Klassen"
                  text="          Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place."
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footercontainer">
              <div className="support">
                <div className="specialwords">team.</div>
                <div>instagram</div>
                <div>facebook</div>
                <div>twitter</div>
                <div>instagram</div>
                <div>facebook</div>
                <div>twitter</div>
              </div>
              <div className="cases">
                <div className="specialwords">Use Cases</div>
                <div>UI Design</div>
                <div>UX Design</div>
                <div>Prototyping</div>
                <div>UI Design</div>
                <div>UX Design</div>
                <div>Prototyping</div>
              </div>
              <div className="explore">
                <div className="specialwords">Explore</div>
                <div>Figma</div>
                <div>Customers</div>
                <div>Why I Love Figma</div>
                <div>Figma</div>
                <div>Costumers</div>
                <div>Why I Love Figma</div>
              </div>
              <div className="resources">
                <div className="specialwords">Resources</div>
                <div>Community Resources Hub</div>
                <div>Support</div>
                <div>Education</div>
                <div>Community Resources Hub</div>
                <div>Support</div>
                <div>Education</div>
              </div>
              <div className="subscribe">
                <div>Subscribe to our newsletter</div>
                <div className="footerinputdiv">
                  <input className="footerinput" placeholder="Email"></input>
                  <button className="footerbutton">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="backgroundimage"
          src="https://media.discordapp.net/attachments/992239144698925066/1032609744201973760/brooke-cagle-cb4Dv50LN1Y-unsplash_1.png"
        />
      </div>
    </BrowserRouter>
  );
}
const Data = [
  {
    text: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
    name: "Amy Klassen",
  },
  {
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    name: "Jane Cooper",
  },
  {
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Eleanor Pena",
  },
];
const Avatar = ({ name, text }) => {
  return (
    <div className="compile">
      <div className="margin">
        <div>
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
          <img
            className="stars"
            src="https://cdn.discordapp.com/attachments/992239144698925066/1036956311264432189/unknown.png"
          />
        </div>
        <div className="description">{text}</div>
        <div className="personname">{name}</div>
      </div>
    </div>
  );
};
export default App;
