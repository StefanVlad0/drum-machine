import { useState } from 'react';
import './App.css';

function App() {

  const [slide, setSlide] = useState(0.3);
  

   const handleSlideChange = (event) => {
    setSlide(event.target.value)
  }

  const playAudio = (audioId) => {
    const audioElement = document.getElementById(audioId);
    audioElement.currentTime = 0; // Rewind to the beginning of the audio
    audioElement.play();
  };

  return (
    <div className="App">
      <header className="App-container">
        <div id='drum-machine' className='inner-container'>
          <div className='pads'>
            <button className='drum-pad' id='Heater-1' onClick={() => playAudio('Q')}>
              <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
              Q
            </button>
            <button className='drum-pad' id='Heater-2' onClick={() => playAudio('W')}>
              <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
              W
            </button>
            <button className='drum-pad' id='Heater-3' onClick={() => playAudio('E')}>
              <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
              E
            </button>
            <button className='drum-pad' id='Heater-4' onClick={() => playAudio('A')}>
              <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
              A
            </button>
            <button className='drum-pad' id='Clap' onClick={() => playAudio('S')}>
              <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
              S
            </button>
            <button className='drum-pad' id='Open-HH' onClick={() => playAudio('D')}>
              <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
              D
            </button>
            <button className='drum-pad' id="Kick-n'-Hat" onClick={() => playAudio('Z')}>
              <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
              Z
            </button>
            <button className='drum-pad' id='Kick' onClick={() => playAudio('X')}>
              <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
              X
            </button>
            <button className='drum-pad' id='Closed-HH' onClick={() => playAudio('C')}>
              <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
              C
            </button>
          </div>
          
          <div className='controls-container'>
            <div className='control'>
              <p>Power</p>
              <div className='select'>
                <div className='inner' style={{'float': 'right'}}></div>
              </div>
            </div>
            <p id='display'>Closed HH</p>
            <div className='volume-slider'>
              <input max="1" min="0" step="0.01" type='range' value={slide} onChange={handleSlideChange}></input>
            </div>
            <div className='control'>
              <p>Bank</p>
              <div className='select'>
                <div className='inner' style={{'float': 'left'}}></div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
