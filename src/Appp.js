import React from "react";
import PropsApp from "./PropsApp";
import Time from "./Time";

function Appp() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let timeofday;
  let atime;

  if (hours < 12) {
    timeofday = "GOOD MORNING";
  } else if (hours <= 12 && 17) {
    timeofday = "GOOD AFTERNOON";
  } else {
    timeofday = "GOOD NIGHT";
  }

  atime = hours >= 0 && hours <= 12 ? "am" : "pm";
  {
    /*if (hours >= 0 && hours <= 12){
    atime = 'am'
  }else{
    atime = 'pm'
  }*/
  }
  return (
    <div>
      <PropsApp name="kafui" age="13" />
      <PropsApp name="wisdom" age="12" />
      <Time
        greeting={timeofday}
        myhour={hours}
        myminute={minutes}
        mytime={atime}
      />
    </div>
  );
}

export default Appp;
