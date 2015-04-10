iprogProj.factory('iprogProj',function ($resource) { //this had $cookieStore as well, not working atm
	this.val = 5;

	this.getVal = function(){
		return this.val()
	}


	//super important don't forget
	return this;
})