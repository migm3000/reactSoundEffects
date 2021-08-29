import React,{useState} from "react";
import "./style.css";
import styled from 'styled-components';
import {Howl, Howler} from 'howler';

const audioClips = [
  {src:       'http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a',
  label: 'Boink',
  key: 'Q'
},
{
  src: 'http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg',
  label: 'Jump',
  key: 'W'
},
{
  src:
    'http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg',
  label: 'Scream',
  key: 'E'
},
{
  src:
    'http:commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a',
  label: 'Bring',
  key: 'A'
},
{
  src:
    'http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a',
  label: 'Button',
  key: 'S'
},
{
  src:
    'http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg',
  label: 'Collision',
  key: 'D'
},
{
  src:
    'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav',
  label: 'Alien',
  key: 'Z'
},
{
  src:
    'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav',
  label: 'Alien Pew',
  key: 'X'
},
{
  src:
    'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav',
  label: 'Explosion',
  key: 'C'
}
];
1;
export default function App() {
  const [display, setDisplay] = useState('Press a key');
  function playSound(soundTrack, label) {
    let track = new Howl({
      src: [soundTrack]
    });
    track.play();
    setDisplay(label);
  }
  return (
    <Wrapper>
      <Container>
        <Display>Display </Display>
        <Keys>
        {audioClips.map(soundObj => {
            let soundKey = soundObj.key;
            let label = soundObj.label;
            let soundTrack = soundObj.src;
            let sound = new Howl({
              src: [soundTrack]
            });
            return <Key onClick={() => sound.play()}>{soundKey}</Key>;
          })}
 
          
        </Keys>
      </Container>
    </Wrapper>  
    
  );
}
const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #EAF4FB;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 375px;
height: 550px;
border-radius: 12px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
` 
const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
width: 80%;
border-radius: 15px;
margin: 30px;
font-size: 40px;

border-radius: 12px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
`
const Keys = styled.div`
height: 63%;
padding-top: 0px;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
width: 80%;
border-radius: 15px;

`
const Key = styled.div`

height: 65px;
width: px;
padding: 9px;
border-radius: 10px;
width: 20%;
display: flex;
justify-content:center;
align-items:center;
border-radius: 12px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
`



