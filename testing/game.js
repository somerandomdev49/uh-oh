const engine = require("./game_engine");

engine.character("mike");
engine.character("tim");
engine.character("chadeyka");
engine.character("dredko");

engine.behaviour(engine.obj("mike"))(() => {
	move(20, 49);
	move(2, 2);
	move(-9, -2);
	debug("I'm done!");
	debug(object);
});
