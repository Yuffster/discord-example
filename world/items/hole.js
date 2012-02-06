module.exports = new Class({

	Extends: Item,

	create: function() {
	
		this.set_short('hole');


		this.set_long(
			"A tiny hole outside by the deck where rats come in and out of stealing food and causing trouble"
		);

		this.add_command('put', '<indirect:object> in <direct:object>');

	},

	/* This method will be fed all the arguments after 'to', assuming that the
	   first bit of the command matches this object.
	*/
	do_put: function(item, target) {
		this.user.removeItem(item);
		this.user.emit("%You put "+item.get("definite")+" in "+this.get('definite')+"  .", target);
	}

});
