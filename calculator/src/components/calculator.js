import "./style.css";
import { useState } from "react";
import sun from "../assets/sol.png";
import moon from "../assets/lua-crescente (1).png"

function Calculator() {
  const [mode, setMode] = useState(false);
  
    function handleModeDark(){
        return setMode(true);
    }

    function handleModeLight() {
        return setMode(false)
    }

  return (
    <div className={mode ? "container-dark" : "container-light"}>

      <div className="mode">
        {mode === false
        ? 
        <button onClick={handleModeDark}>
            <img src={moon} alt="moon icon" />          
        </button>
        :
        <button onClick={handleModeLight}>
            <img src={sun} alt="sun icon" />          
        </button>
        }
      </div>

      <div className="buttons">
        <button className="btn-top">
          <div>C</div>
        </button>
        <button className="btn-top">
          <div>-/+</div>
        </button>
        <button className="btn-top">
          <div>%</div>
        </button>
        <button className="btn-right">
          <div>÷</div>
        </button>
        <button className="btn">
          <div>7</div>
        </button>
        <button className="btn">
          <div>8</div>
        </button>
        <button className="btn">
          <div>9</div>
        </button>
        <button className="btn-right">
          <div>x</div>
        </button>
        <button className="btn">
          <div>4</div>
        </button>
        <button className="btn">
          <div>5</div>
        </button>
        <button className="btn">
          <div>6</div>
        </button>
        <button className="btn-right">
          <div>-</div>
        </button>
        <button className="btn">
          <div>1</div>
        </button>
        <button className="btn">
          <div>2</div>
        </button>
        <button className="btn">
          <div>3</div>
        </button>
        <button className="btn-right">
          <div>+</div>
        </button>
        <button className="btn">
          <div>.</div>
        </button>
        <button className="btn">
          <div>0</div>
        </button>
        <button className="btn">
          <div>
            <svg
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.08575 0H9.49997H25.5H26.5V1V17V18H25.5H9.49997H9.08575L8.79286 17.7071L0.792861 9.70711L0.0857544 9L0.792861 8.29289L8.79286 0.292893L9.08575 0ZM9.91418 2L2.91418 9L9.91418 16H24.5V2H9.91418ZM13.5 4.58578L14.2071 5.29288L16.5 7.58578L18.7929 5.29289L19.5 4.58579L20.9142 6L20.2071 6.70711L17.9142 9L20.2071 11.2929L20.9142 12L19.5 13.4142L18.7929 12.7071L16.5 10.4142L14.2071 12.7071L13.5 13.4142L12.0858 12L12.7929 11.2929L15.0858 9L12.7929 6.7071L12.0858 5.99999L13.5 4.58578Z"
                fill="black"
              />
            </svg>
          </div>
        </button>
        <button className="btn-right">
          <div>=</div>
        </button>
      </div>

    </div>
  );
}

export default Calculator;
