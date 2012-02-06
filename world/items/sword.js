module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('sword');

		this.set_long(
			'This is a fresh strawberry that has been left here for unknown '+
			'reasons.  It looks like it will somehow remain fresh forever.'
		);

		this.add_command('feed', '<direct:object> to <indirect:living>');

	},

	on_equip:function(player) {
	if (player.name=="garrett") {
		player.stats.strength= +100000000000000000000; }
	}

});
