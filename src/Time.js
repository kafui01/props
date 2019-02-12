import React from "react";

const Time = props => {
  return (
    <div>
      <h3>
        the time is {props.myhour}:{props.myminute}
        {props.mytime}
      </h3>
      <h1>{props.greeting}</h1>
    </div>
  );
};
export default Time;
