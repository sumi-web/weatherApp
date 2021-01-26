import React from "react";
import "./SeasonDisplay.css"
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"
  }
  else {
    return lat > 0 ? "winter" : "summer"
  }

}

const seasonConfig = {
  winter: {
    text: "Burr its so chilly",
    iconName: "snowflake"
  },
  summer: {
    text: "Let's go to beach",
    iconName: "sun"
  }
}
const SeasonDisplay = (props) => {
  let month = new Date().getMonth();
  let season = getSeason(props.lat, month)
  const { text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1 className="main-head">{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div >
  )
}

export default SeasonDisplay