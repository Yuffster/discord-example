module.exports =  new Class({

	Extends: Room,

	create: function() {
		this.set_short("bathroom");
		this.set_long(
			"A disgusting bathroom that has been abandoned for years and the ony living creatures in there are rats."
		);
		this.add_exit('west' ,'lobby');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
		this.add_living('rat');
	},

});
