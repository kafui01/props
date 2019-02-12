import React from "react";

const PropsApp = props => {
  return (
    <div>
      <h1>my name is {props.name}</h1>
      <h2>ive been here for {props.age}</h2>
    </div>
  );
};

export default PropsApp;
