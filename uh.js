// logo is :D

//const getAllInObject=(o)=>{let k=[];let v=[];for(const key in o){if(o.hasOwnProperty(key)){k.push(key);v.push(o[key]);}}return [k, v]}
const performer=scope=>code=>{
	[keys,values]=((o)=>{let k=[];let v=[];for(const key in o){if(o.hasOwnProperty(key)){k.push(key);v.push(o[key]);}}return[k,v]})(scope);
	let i=0;
	for(const value of values){
		if(typeof value=="function"){
			values[i] = (...args) => value(scope, ...args);
		}
		i++;
	}
	new Function(...keys,"("+code.toString()+")()")(...values);
};

const warn  = (...msg) => console.warn ("WARNING:",...msg)
const err   = (...msg) => console.err  ("ERROR:", ...msg)

const _oh = (scope, parent) => (...args) => {
	if(parent!=null){
		_scope = {super:parent,self:scope}
		for(key in scope) {
			_scope[key] = scope[key]
		}
		for(key in _scope) {
			if(typeof _scope[key] == "function") {
				const raw = _scope[key];
				_scope[key] = (...args) => performer(_scope)(...args);

			}
		}
		performer(_scope)()
	} else {

	}
}

OhObject = _oh({toString: () => "", }, null);

const oh = (scope, parent=OhObject) => _oh(scope, parent);

/*

no-errors

OhPerson = oh({init: (name) => {self.name = name}, greet: (other) => {console.log(name + " greets " + other.name)}})

a = OhPerson("Mike");
a.greet()
*/

module.exports = {performer: performer,oh:oh,OhObject:OhObject};
