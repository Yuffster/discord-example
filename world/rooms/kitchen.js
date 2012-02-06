module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("kitchen");
		this.set_long("A room for making food. And other things.");
		this.add_living('evilrat');
		this.load_item ("tiny_monocle");
		this.load_item ("hole");
		this.add_exit('south', 'Bathroom');
		this.add_exit('west' , 'outside');
	},
	
	do_press: function (str) {
		this.user.emit("%You press%es the "+str+" button.");
		this.add_living('rat');
	
	}

});
