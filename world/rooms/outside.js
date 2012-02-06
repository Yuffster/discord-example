module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("outside");
		this.set_short(
			"A rainy and stormy day clouds gray and no sun in sight just the sound of water hitting the ground and the sounds of thunder"
			
		);
		this.add_living('evilrat');
		this.load_item ("tiny_monocle");
		this.load_item ("hole");
		this.add_exit('south', 'lobby');
	},
	
	do_press: function (str) {
		this.user.emit("%You press%es the "+str+" button.");
		this.add_living('rat');
	}

});
