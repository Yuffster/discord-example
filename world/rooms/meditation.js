module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("The meditation room");
		this.set_long(
      "A place for enlightened individuals to make peace with the world"
    );
		this.add_item(
			'cushion',
      'The meditation cushion is a comfortable place to sit.'
    );
		this.add_command('meditate', '<string>');
		this.add_exit('down', 'lobby');
	},
	
	do_meditate: function () {
    this.user.emit("Ommmmmmmmmmmmmmmmmmmmmmmmmmmmm", this.user);
	}

});
