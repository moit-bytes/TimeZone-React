import React, { useState, useEffect } from "react";

export const MyCard = (props) => {
  const item = props.item;
  const URL = `http://worldtimeapi.org/api/timezone/${item}`;


  const [myObj, setMyObj] = useState(null);

  

  useEffect(() => {
    async function makeApiCall(url) {
        let response = await fetch(url);
        response = await response.json();
        setMyObj(response);
      }

      makeApiCall(URL);
  }, [URL]);

  const raw = myObj?.["datetime"].split("T");
  const date = raw?.[0];
  const time = raw?.[1].substr(0, 8);

  return (
    <div className="grid--card" id={`item-${props.id}`}>
      <h3 className="card--title">{props.item}</h3>
      <h4 className="card--body">Date: {date}</h4>
      <h4 className="card--body">Time: {time}</h4>
    </div>
  );
};
