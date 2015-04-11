iprogProj.factory('iprogProj',function ($resource) { //this had $cookieStore as well, not working atm
	
	var val = 7;

	this.getVal = function(){
		return val
	}

	this.testAPI = $resource('https://api.ravelry.com/current_user.json', {}, {
    	get: {
			method: 'GET',
			headers: { 
				'Authorization': 'Basic RjlFOTc5ODBFMDc3MTA2Mjc3N0M6Rm9BeFVTekNFR2daS2dLTWxmZi04a0NWTnNqSFNRT1oxZGR3UlJxYw==',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			}
		}
	});

	//super important don't forget
	return this;
})