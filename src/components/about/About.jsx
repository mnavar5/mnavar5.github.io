import "./about.css";
import AiConcept from "../../img/ai-drone2.jpg";       // Replace with your AI/tech abstract image
import Workspace from "../../img/ai-thumbnail.jpg"; // Replace with your professional workspace photo


const About = () => {
  return (
    <div className="a" aria-label="About Michel Navarro">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AiConcept} alt="Abstract artificial intelligence and technology visualization" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-sub">
          I am a passionate software engineer and innovator dedicated to bridging cutting-edge technologies with impactful real-world solutions. My work revolves around building scalable AI-powered applications, leveraging data science, and crafting seamless digital experiences that empower businesses and communities.
        </p>

        <ul className="a-desc" aria-label="Professional background and skills">
          <li>Towson University Computer Science graduate with strong foundations in algorithms, programming languages, and system design.</li>
          <li>A continuous learner and problem solver, specializing in software engineering, machine learning, and web development.</li>
          <li>Exploring decentralized systems and blockchain technology as part of a broader vision for secure and transparent digital infrastructure.</li>
          <li>Focused on creating reliable, scalable, and efficient platforms tailored to real business needs.</li>
          <li>Passionate about applying data-driven insights and AI to unlock new possibilities and drive innovation.</li>
        </ul>

        <div className="a-award" role="region" aria-labelledby="innovation-goal">
          <img src={Workspace} alt="Professional workspace with multiple monitors displaying code" className="a-award-img" />
          <div className="a-award-texts">
            <h4 id="innovation-goal" className="a-award-title">Innovation & Technology Leadership</h4>
            <p className="a-award-desc">
              Committed to continuous growth and driving technological innovation through AI, software development, and strategic problem-solving to build the future of digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
