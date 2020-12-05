(() => {
	"use strict";
	var e = {
			236: (e, o, r) => {
				r.d(o, { M: () => n });
				n();
				let t = { name: "John", age: 24 };
				function n() {
					console.log(t);
				}
				console.log({ name: "Jane", age: 27 });
			},
		},
		o = {};
	function r(t) {
		if (o[t]) return o[t].exports;
		var n = (o[t] = { exports: {} });
		return e[t](n, n.exports, r), n.exports;
	}
	(r.d = (e, o) => {
		for (var t in o)
			r.o(o, t) &&
				!r.o(e, t) &&
				Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
	}),
		(r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		r(236);
})();
