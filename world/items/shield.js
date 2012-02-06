module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('shield');

		this.add_adjective('diamond');

		this.set_long('A perfectly effective shield that blocks all damage');

	},

  on_equip: function(player) {
    player.stats.defense = 5;
    player.send("You wield a shield of +4 defense");
  }

});
