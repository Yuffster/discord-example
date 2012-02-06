module.exports = new Class({

	Extends: Living,

  create: function() {
    
      this.set_short('evil rat');

      this.set_long(
        'This is a fresh evil rat that has been left here for unknown '+
        'reasons.  It looks like it will somehow remain fresh forever.'
      );

      this.add_command('feed', '<direct:object> to <indirect:living>');

    },

    on_equip:function(player) {
      if (player.name=="Iblis") {
        player.stats.strength= 9999999999999999999999999999999999999999999999999999; // :-)
      }
    }
});
