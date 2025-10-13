import Aqua from "../assets/aqua.png";
import Lia1 from "../assets/Lia1.jpg";
import "./Lia.css";

function Lia() {
  return (
    <>
      <div>
        <h1>Lia</h1>
        <img src={Aqua} alt="Aqua" />
      </div>
      <div className="text">
        <p>Aqua is a character from the game.</p>
      </div>
    </>
  );
}

export default Lia;
