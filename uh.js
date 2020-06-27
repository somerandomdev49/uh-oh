const performer = s => f => (...a) =>
	new Function(
		...Object.keys(s),
		`(${f})(${a.join()})`
	)
	(
		...Object.values(s).map(
			x => typeof x == "function" ? (..._)=>x(s,..._) : x
		)
	);

module.exports = { performer };
