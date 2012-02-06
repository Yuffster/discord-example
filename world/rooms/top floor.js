module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("a cramped elevator");
		this.set_long(
			"This cramped elevator appears to be made of plywood and "+
			"glue. The carpet is stained and worn and a bare, flickering "+
			"lightbulb hangs from the ceiling. "+
			"Judging from the dimly-lit panel of numbered buttons next "+
			"to the door, the elevator could go all the way up to "+
			"floor 14. However, the expired inspection certificate framed "+
			"above the panel puts this into question."
		);
		this.add_item(
			'panel',
			'The button panel contains fourteen numbered buttons which '+
			'periodically flicker with light. Below them is a big red '+
			'button marked "Stop", two additional buttons marked "Close" '+
			'and "Open" and a cordless telephone.', 
			['buttons', 'button panel', 'button']
		);
		this.add_item(
			'phone',
			'The cordless telephone consists of a standard large black '+
			"handset which would be at home in any phone booth. It doesn't "+
			"appear to be connected to anything.",
			['telephone', 'cordless phone', 'cordless telephone']
		);
		this.add_command('feed', '<string>');
		this.add_exit('down', 'elevator');
	},
	
	do_press: function (str) {
		this.user.emit("%You press%es the "+str+" button.");
	}

});
		this.add_exit('top floor')