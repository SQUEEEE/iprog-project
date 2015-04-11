iprogProj.factory('iprogProj',function ($resource) { //this had $cookieStore as well, not working atm
	
	var val = 7;

	this.getVal = function(){
		return val
	}

	//super important don't forget
	return this;
})