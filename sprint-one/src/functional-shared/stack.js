var Stack = function() {
	// Hey! Rewrite in the new style. Your code will wind up looking very similar,
	// but try not not reference your old code in writing the new style.

	var instance = {
		begin: 0,
		end: 0,
		storage: {}
	}
	_.extend(instance, stackMethods);
	return instance;

};

var stackMethods = {
	push: function(value) {

		this.end += 1;
	},
	pop: function() {
		this.end -= 1;
	},
	size: function() {

	}
};