import './style.css';
import { useState } from 'react';
import sun from "../assets/sol.png";
import moon from "../assets/lua-crescente (1).png";

function Calculator() {
  const [mode, setMode] = useState('light');
  const [numbe, setNumbe] = useState('0');

  function HandleChangeMode() {
    setMode(nextMode => nextMode === 'light' ? 'dark' : 'light')
  }

  function HandleNumbeButton(e){
    let inputValue = e.target.value;
    if(inputValue === undefined){
      return
    }
    if(numbe === '0'){
      setNumbe(inputValue)
    }else{
      setNumbe(numbe + inputValue);
    }    
  }

  return (
      <div className='container' id={mode}>
        <button className='mode' onClick={HandleChangeMode}>
        {mode === 'light' ?
          <img src={sun} alt='sun'/>
        :
        <img src={moon} alt='moon'/>
        }
        </button>        
          <h3>{numbe}</h3>
          <h1>{numbe}</h1>      
        <div className="buttons">
          <button className="btn-gray">
            <div>C</div>
          </button>
          <button className="btn-gray">
            <div>-/+</div>
          </button>
          <button className="btn-gray">
            <div>%</div>
          </button>
          <button className="btn-blue">
            <div>÷</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={7}>
            <div>7</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={8}>
            <div>8</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={9}>
            <div>9</div>
          </button>
          <button className="btn-blue">
            <div>x</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={4}>
            <div>4</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={5}>
            <div>5</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={6}>
            <div>6</div>
          </button>
          <button className="btn-blue" onClick={HandleNumbeButton} value={7}>
            <div>-</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={1}>
            <div>1</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={2}>
            <div>2</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={3}>
            <div>3</div>
          </button>
          <button className="btn-blue">
            <div>+</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={'.'}>
            <div>.</div>
          </button>
          <button className="btn" onClick={HandleNumbeButton} value={0}>
            <div>0</div>
          </button>
          <button className="btn">
            <div>
            {mode === 'light' ?
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
        :
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
                    fill="white"
                  />
                </svg>
        }
          
                
            </div>
          </button>
          <button className="btn-blue">
            <div>=</div>
          </button>
        </div>
      </div>
  );
}

export default Calculator;
