const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello from React"
);

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child1"},
        [heading, heading]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [heading, heading]
    )
    ]
)

// jsx = javascript xml

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent); // render takes this object, convert it to h1 element and put it into root

// ****** - whatever content in the root div has, will be replaced when root.render executes