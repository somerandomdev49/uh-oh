const uh = require("../uh")

let objs = []

const character = name => {
	objs.push({x:0,y:0,name:name});
}

const obj = (name) => {
	for (key in objs)
		if (objs[key].name == name)
			return objs[key];
	return null;
}

const behaviour = _object => behaviour => {
	(uh.performer(

		{
			object: _object,

			debug: ($, ...s) => {
				console.log("[DEBUG:"+$.object.name+"]:", ...s);
			},

			move: ($, x, y) => {
				$.object.x += x; $.object.y += y;
				$.debug($, "Moved to", $.object.x, $.object.y);
				//     ^^^ That's important! idk how to fix this thing *insert shrug face*
			},

			pos: ($, x, y) => {
				$.object.x = x; $.object.y = y;
				$.debug($, "Moved to", $.object.x, $.object.y);
			},

			obj: ($, name) => {
				for (key in objs)
					if(objs[key].name == name)
						return objs[key];
				return null;
			}
		}

	))(behaviour);
}

// syntax: performer(<scope>)
// scope can have simple objects and functions where first argument is reference to scope itself.


module.exports = {behaviour: behaviour, character: character, obj: obj}