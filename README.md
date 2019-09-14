# uh-oh

Little thing that may help you make your framework.

# Usage:

### `library.js` :
```js

const uh = require("uh") // for node.js

const example = uh.performer({
  greet: ($, name, ending) => {
    console.log($.variable + " " + name + $.variableVersionTwoPointZero)
  },
  endings: {
    greeting: "Hello",
    happy: "!",
    question: "?",
    polite: "."
    no: ""
  },
  noName: "<no-name>"
});
```

### `thingThatUsesLibrary.js` :
```js
const lib = require("library");
lib.example(() => {
  greet("uh... What was your name again", endings.question); // -> Hello uh... What was your name again?
  greet(noName, endings.polite); // -> Hello <no-name>.
  // this is available here!
});

greet("this will not work", endings.happy); // error: greet is undefined!
```

As you can see, `uh-oh` makes it possible to use some functions
or variables inside only some specific function. :D nice! uh oh! i like it :D
