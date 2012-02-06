module.exports =  new Class({

	Extends: Command,

	init: function() {
		this.set_syntax('<indirect:living>');
	},

	execute: function(target) {
		this.emit(
			"%You disintegrate%s "+target.get('definite')+".",
			target
		);
		target.die();
		return true;
	}

});
);
