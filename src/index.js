import React from "react";
import ReactDOM from "react-dom";

const am = "Great Day";
const midDay = "Great Afternoon";
const pm = "Great Evening";

const displayTime = new Date();
const currentTime = displayTime.getHours();
const hours = displayTime.getHours();
const minutes = displayTime.getMinutes();
let greeting;

if (currentTime < 12) {
  greeting = am;
} else if (currentTime < 18) {
  greeting = midDay;
} else {
  greeting = pm;
}

ReactDOM.render(
  <div>
    <h1 className="heading">
      Great Day! {hours % 12} : {minutes}
    </h1>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
