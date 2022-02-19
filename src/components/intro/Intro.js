import "./Intro.css";
import { useEffect, useState } from "react";

const Intro = () => {
  const [gitHubName, setGitHubName] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubImageURL, setGitHubImageURL] = useState("");
  const [gitHubLocation, setGitHubLocation] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/omarmoreta")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGitHubName(data.name);
        setGitHubURL(data.html_url);
        setGitHubImageURL(data.avatar_url);
        setGitHubLocation(data.location);
      });
  }, []);

  return (
    <div className="intro">
      <div className="intro-left">
        <div>
          <h1 id="name">Hello, my name is Omar</h1>
          <h2>I am a full-stack software developer</h2>
          <p className="description">
            Fast-learner and problem solver with experience developing
            full-stack applications focused on the user experience. Enjoy
            collaborating on projects with a team but can also be
            self-sufficient. Passionate about learning and researching new
            things to find solutions to problems. Fascinated by web 3.0,
            blockchain technology, and smart contracts.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div>
          <img
            style={{ borderRadius: "100%" }}
            src={gitHubImageURL}
            alt="Github profile image"
          />
        </div>
        <div>
          <h3>{gitHubName}</h3>
          <h4>{gitHubLocation}</h4>
          <a href={gitHubURL}>
            <button id="githubBtn">GitHub Page</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
