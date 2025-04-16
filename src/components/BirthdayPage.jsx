import { useRef } from 'react';
import './BirthdayPage.scss';
import Slider from './Slider/Slider';

const face = require('../img/Face.png');
const pose = require('../img/pose.png');
const music = require('../img/m.mp3');

const BirthdayPage = () => {
  const audioRef = useRef(null);
  const yuliaRef = useRef(null);
  const imgRef = useRef(null);
  const flipIntervalRef = useRef(null);

  const playAudio = () => {
    audioRef.current?.play();

    const yulia = yuliaRef.current;
    const img = imgRef.current;

    if (!yulia || !img) return;

    // Анимация появления блока
    yulia.style.animation = 'an 2s linear forwards';

    yulia.addEventListener(
      'animationend',
      () => {
        yulia.style.animation = '';
        yulia.style.left = '0px';
      },
      { once: true }
    );

    // Флип лица
    let flipped = true;

    if (flipIntervalRef.current) {
      clearInterval(flipIntervalRef.current);
    }

    flipIntervalRef.current = setInterval(() => {
      img.style.transform = flipped ? 'scaleX(1)' : 'scaleX(-1)';
      flipped = !flipped;
    }, 250);
  };

  return (
    <>
      <div className="flex">
        <audio ref={audioRef}>
          <source src={music} type="audio/mpeg" />
        </audio>

        <h1>З днем народження, моя улюблена матуся</h1>
        <button className="press" onClick={playAudio}>
          Натисніть
        </button>

        <div className="yulia" ref={yuliaRef}>
          <div className="img" ref={imgRef}>
            <img src={pose} alt="pose" />
            <img src={face} alt="face" className="face" />
          </div>
          <p>Бажаю завжди мати гарний настрій!</p>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default BirthdayPage;
