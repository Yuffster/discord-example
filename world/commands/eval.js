module.exports =  new Class({

	Extends: Command,

	execute: function(stuff) {
    var result;
    try {
      result = eval(stuff);
      this.emit("Result: "+result, this);
    } catch (e) {
      this.emit("Dude, your thing broke: "+e.toString(), this);
    }
		return true;
	}

});
