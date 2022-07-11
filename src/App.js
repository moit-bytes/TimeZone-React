import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { Home } from "./Components/Home";

function App() {
  const URL = "http://worldtimeapi.org/api/timezone/";

  const [myArr, setMyArr] = useState([]);

  console.log("Rendered");

  useEffect(() => {
    async function makeApiCall() {
      let response = await fetch(URL);
      response = await response.json();
      let newArr = Array.from(response);
      let mySet = new Set();
      while (mySet.size < 6) {
        let rand = Math.floor(Math.random() * newArr.length);
        mySet.add(newArr[rand]);
      }
      
      setMyArr(Array.from(mySet));
    }

    makeApiCall();

  }, [URL]);


  function changeState(timeZone)
  {
     let newArr = [...myArr];
     newArr = newArr.filter(item => item!==timeZone);
     newArr = [timeZone, ...newArr];
     setMyArr(newArr);
  }

  return (
    <div>
      <Header title={"Timezone ~ bY Moit"} />
      <Form myArr={myArr} func={t => changeState(t)}/>
      <Home myArr={myArr} />
    </div>
  );
}

export default App;
