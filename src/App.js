import React, { useState,  useEffect } from 'react';
import './App.css';

const buttonRefs = {
  Q: React.createRef(),
  W: React.createRef(),
  E: React.createRef(),
  A: React.createRef(),
  S: React.createRef(),
  D: React.createRef(),
  Z: React.createRef(),
  X: React.createRef(),
  C: React.createRef(),
};

function App() {
  const [slide, setSlide] = useState(0.3);
  const [displayValue, setDisplayValue] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [power, setPower] = useState(true);
  
   const handleSlideChange = (event) => {
    if(power) {
      setSlide(event.target.value);
    }
  }

  const handlePowerClick = () => {
    if(power) {
      setPower(false);
      setDisplayValue(' ');
    } else {
      setPower(true);
    }
  }

  const playAudio = (audioId, padID) => {
    const audioElement = document.getElementById(audioId);
    audioElement.currentTime = 0; 
    audioElement.volume = slide;
    if(power) {
      audioElement.play();
      setDisplayValue(padID); 
      setActiveButton(audioId);
      setTimeout(() => {
        setActiveButton(null);
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (buttonRefs[key]) {
        buttonRefs[key].current.click();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <div className="App-container">

        <header id='header'>
          <p id='howTo'>You can click the button or press the key</p>
        </header>

        <div id='drum-machine' className='inner-container'>
          <div className='pads'>
            <button  className={`drum-pad ${activeButton === 'Q' ? 'active' : ''}`} id='Heater-1' onClick={() => playAudio('Q', 'Heater-1')}>
              <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' ref={buttonRefs.Q}></audio>
              <span className='pad-letter'>Q</span>
            </button>
            <button className={`drum-pad ${activeButton === 'W' ? 'active' : ''}`} id='Heater-2' onClick={() => playAudio('W', 'Heater-2')}>
              <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' ref={buttonRefs.W}></audio>
              <span className='pad-letter'>W</span>
            </button>
            <button className={`drum-pad ${activeButton === 'E' ? 'active' : ''}`} id='Heater-3' onClick={() => playAudio('E', 'Heater-3')}>
              <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' ref={buttonRefs.E}></audio>
              <span className='pad-letter'>E</span>
            </button>
            <button className={`drum-pad ${activeButton === 'A' ? 'active' : ''}`} id='Heater-4' onClick={() => playAudio('A', 'Heater-4')}>
              <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' ref={buttonRefs.A}></audio>
              <span className='pad-letter'>A</span>
            </button>
            <button className={`drum-pad ${activeButton === 'S' ? 'active' : ''}`} id='Clap' onClick={() => playAudio('S', 'Clap')}>
              <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' ref={buttonRefs.S}></audio>
              <span className='pad-letter'>S</span>
            </button>
            <button className={`drum-pad ${activeButton === 'D' ? 'active' : ''}`} id='Open-HH' onClick={() => playAudio('D', 'Open-HH')}>
              <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' ref={buttonRefs.D}></audio>
              <span className='pad-letter'>D</span>
            </button>
            <button className={`drum-pad ${activeButton === 'Z' ? 'active' : ''}`} id="Kick-n'-Hat" onClick={() => playAudio('Z', "Kick-n'-Hat")}>
              <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' ref={buttonRefs.Z}></audio>
              <span className='pad-letter'>Z</span>
            </button>
            <button className={`drum-pad ${activeButton === 'X' ? 'active' : ''}`} id='Kick' onClick={() => playAudio('X', 'Kick')}>
              <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' ref={buttonRefs.X}></audio>
              <span className='pad-letter'>X</span>
            </button>
            <button className={`drum-pad ${activeButton === 'C' ? 'active' : ''}`} id='Closed-HH' onClick={() => playAudio('C', 'Closed-HH')}>
              <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' ref={buttonRefs.C}></audio>
              <span className='pad-letter'>C</span>
            </button>
          </div>
          <div className='controls-container'>
            <div className='control'>
              <p>Power</p>
              <div className='select' onClick={handlePowerClick}>
                <div className='inner' style={{'float': power ? 'right' : 'left'}}></div>
              </div>
            </div>
            <p id='display'>{displayValue}</p>
            <div className='volume-slider'>
              <input max="1" min="0" step="0.01" type='range' value={slide} onChange={handleSlideChange}></input>
            </div>
          </div>
        </div>

        <div id="footer">
        <a href="https://github.com/StefanVlad0" id="dev">
          by Vlad Stefan
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
