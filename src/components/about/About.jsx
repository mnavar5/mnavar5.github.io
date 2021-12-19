import "./about.css";
import Bit from "../../img/bit2.jpg";
// import NYblc from "../../img/nyblockchain.jpg";
import Eth from "../../img/ethwall.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Eth} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Expertise in creating efficient and reliable applications across multiple platforms.
        </p>
        <ul className="a-desc">
        <li>Towson University Computer Science Graduate</li> 
        <li>Problem solving machine, eager to learn computers and computational processes to build websites, program robots, mine data and more.</li> 
        <li>Experienced with theory and practice of computer science, exploring algorithms, programming languages and operating systems.</li>
        <li>Software Enginnering, Data science, and Web Development Oriented</li>
        <li>Decentralized networks, applications, and block-chain technology researcher</li>         
        </ul>
        <div className="a-award">
          <img src={Bit} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Block Chain Research Goal 2022</h4>
            <p className="a-award-desc">
              Join me as I dive deep into block chain and decentralized technology in my goal for 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;