import React from "react";
import "./style.css";
import styled from 'styled-components';
import {Howl, Howler} from 'howler';
const audioClips = [
  {}
]

export default function App() {
  var sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
  });
  return (
    <Wrapper>
      <Container>
        <Display>Display </Display>
        <Keys>
          <Key onClick= {()=> sound.play()}>Q</Key>
          <Key>W</Key>
          <Key>E</Key>
          <Key>A</Key>
          <Key>S</Key>
          <Key>D</Key>
          <Key>Z</Key>
          <Key>X</Key>
          <Key>C</Key>
          
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



