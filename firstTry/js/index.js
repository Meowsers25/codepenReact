function Person(props) {
  return React.createElement(
    "div",
    { className: "person" },
    React.createElement(
      "h1",
      null,
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age : ",
      props.age
    )
  );
}

var app = React.createElement(
  "div",
  null,
  React.createElement(Person, { name: "Chris", age: "45" }),
  React.createElement(Person, { name: "Katie", age: "28" })
);

ReactDOM.render(app, document.querySelector('#app'));