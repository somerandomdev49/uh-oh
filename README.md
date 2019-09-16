# uh-oh

Little thing that may help you make your framework.

# Usage:

### `library.js` :
```js

const uh = require("uh") // for node.js

const example = uh.performer({
  greet: ($, name, ending) => {
    console.log($.defaultGreeting + " " + name==null?$.noName + ending==null?$.endings.default:ending);
  },
  setDefaultEnding: ($, e) => { $.endings.default = e; return e; },
  setDefaultGreeting: ($, g) => { $.defaultGreeting = g; return g; },
  
  endings: {
    happy: "!",
    question: "?",
    polite: "."
    no: "",
    default: null;
  },
  noName: "<no-name>",
  defaultGreeting: "Hello,"
});
```

### `thingThatUsesLibrary.js` :
```js
const lib = require("library");
lib.example(() => {
  greet("uh... What was your name again", endings.question); // -> Hello, uh... What was your name again?
  setDefaultGreeting("hi");
  greet(null, endings.polite); // -> hi <no-name>.
  setDefaultEnding(endings.happy);
  greet("uh-oh", null); // -> hi uh-oh!
  // this is available here!
});

greet("this will not work", endings.happy); // error: greet is undefined!
```

As you can see, `uh-oh` makes it possible to use some functions
or variables inside only some specific function. :D nice! uh oh! i like it :D
