const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
        <h2>React</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "React"),
  ]),
]);
root.render(parent);
