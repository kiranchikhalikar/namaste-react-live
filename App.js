import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {<Title />}
      <h2>This is Namaste React Functional Component</h2>
      <h2>This is H2 Tag</h2>
    </div>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
