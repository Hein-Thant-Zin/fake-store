import React from 'react';
import './App.css';
import { useState } from 'react';
import Store from './components/Store';
export default function App() {
  const name = 'K';
  const imgURL =
    'https://www.freeimages.com/photo/woman-with-shopping-bag-superimposed-over-url-2107991';
  return (
    <>
      {/* <h1>Hello {name}</h1>
      <Hi name="Hein" />
      <Hi name="KK" />
      <Hi name="NN" />
      <User name="Dave" />
      <Admin
        adminName="alsoDaveButAdmin"
        imgURL={imgURL}
        onError={() => console.log('Image failed to load')}
      /> */}
      {/* <Room /> */}
      <Store />
    </>
  );
}
function Hi(props) {
  return <p>Hi {props.name}</p>;
}

function User(props) {
  const { name, imgUrl } = props;
  return (
    <p>
      <h1>{name}</h1>
      <img src={imgUrl} alt="" />
    </p>
  );
}

function Admin(props) {
  const { adminName, imgURL } = props;
  return (
    <>
      <h2>{adminName}</h2>
      <img src={imgURL} alt="" />
    </>
  );
}

function Room(props) {
  const [isLit, setIsLit] = useState(false);
  const [isOnOff, setOnOff] = useState(false);
  const [temp, setTemp] = useState(22);
  // const { isLit, setIsLit } = props;
  return (
    <div className={`room ${isLit ? 'light' : 'dark'} ${isOnOff ? 'off' : ''}`}>
      <button onClick={() => setIsLit(!isLit)}>Switch</button>
      <button onClick={() => setOnOff(!isOnOff)}>On/Off</button>
      <button onClick={() => setIsLit(true)}>On</button>
      <button onClick={() => setIsLit(false)}>Off</button>
      {/* <button>Off</button> */}
      <p className={`${isOnOff ? 'onOff' : ''}`}>{isLit ? 'light' : 'dark'}</p>
      <p className="temp ">{temp}</p>
      <button onClick={() => setTemp(temp + 1)}>+</button>
      <button onClick={() => setTemp(temp - 1)}>-</button>
      {/* <button className="">Off</button> */}
    </div>
  );
}
