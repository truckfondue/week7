var alphabetSoup = function(str){
	console.log(str.split('').sort().join(''));
};



var vowelCount = function(str){
	var vowelList = 'aeiou';
	var vowels = str.toLowerCase().split('');
	vowels = vowels.filter(function(c){
		return vowelList.indexOf(c) > -1;
	});
	console.log('There are ' + vowels.length + ' vowels');
};




