import { assets } from "../../assets/assets";
export default function Cards({ cardHandler }) {
  return (
    <div className="cards">
      <div className="card" onClick={cardHandler}>
        <p>Suggest beautiful places to see on an upcoming road trip</p>
        <img src={assets.compass_icon} alt="" />
      </div>
      <div className="card" onClick={cardHandler}>
        <p>Briefly summarize this concept: urban planning</p>
        <img src={assets.bulb_icon} alt="" />
      </div>
      <div className="card" onClick={cardHandler}>
        <p>Brainstorm team bonding activities for our work retreat</p>
        <img src={assets.message_icon} alt="" />
      </div>
      <div className="card" onClick={cardHandler}>
        <p>Tell me about React js and React native</p>
        <img src={assets.code_icon} alt="" />
      </div>
    </div>
  );
}
