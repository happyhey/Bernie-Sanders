function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var id = getRandomInt(1, 365);

if(localStorage.getNextId)
	id = localStorage.getNextId;
	
var id1 = getRandomInt(1, 365);
if (id == id1)
	id1 = getRandomInt(1, 365);

if(!localStorage.currentDay)
	localStorage.currentDay = (new Date()).getDate();

var currentDay = (new Date()).getDate();
if(localStorage.currentDay != currentDay)
{
	jQuery.ajax({
		method:'GET',
		url: 'http://www.happyhey.com/share/bernie-sanders-tab/share.php?noscript=Yes&r=' + Math.random()
	}).done(function(data){
		if(data!='')
		{
			localStorage.currentDay = currentDay;
			localStorage.currentHtml = data;
		}
	});
}
if(localStorage.currentHtml){
	jQuery('#main_container').html( localStorage.currentHtml );
}

document.write('<meta property="og:image" content="http://www.happyhey.com/images/bernie-sanders-tab/' + id + '.jpg"/>');
document.write('<meta name="twitter:image" content="http://www.happyhey.com/images/bernie-sanders-tab/' + id + '.jpg"/>');

jQuery('#imgPh').html('<img id="back-img" alt="Do you like it? Share it!" title="Do you like it? Share it! Scroll down for more!" src="http://www.happyhey.com/images/bernie-sanders-tab/'+id+'.jpg" style="width: 100%; height: auto; position: fixed; top: 0; left: 0; "/>');

jQuery(function () {
	setTimeout(loadFirstPic, 100);
	var id2 = getRandomInt(1, 365);
	var img = new Image();
	img.src = "http://www.happyhey.com/images/bernie-sanders-tab/" + id2 + ".jpg";
	img.onload = function(){
		localStorage.getNextId = id2;
	};
});
function loadFirstPic() {
	var img = new Image();
	img.src = "http://www.happyhey.com/images/bernie-sanders-tab/" + id1 + ".jpg";
}
var navigating = false;
jQuery(window).mousewheel(function (event, delta, deltaX, deltaY) {
	if (deltaY < 0 && !navigating) {
		navigating = true;
		document.location = jQuery('#down').attr('href');
	}
})
jQuery.ajax({
	method:'GET',
	url: 'http://www.happyhey.com/share/bernie-sanders-tab/getUrl.php?id='+id + '&id1='+id1 + "&r=" + Math.random()
}).done(function(data){
	if(data.indexOf('happyhey.com'))
	{
		var tmp = data.split('|');
		jQuery('#down').prop('href', tmp[0]).show();
		
		var share = new ShareButton({
			url: tmp[1] || 'http://www.happyhey.com',
			title: "Do You Like Bernie Sanders?",
			description: "Get awesome Bernie Sanders HD images in each new Chrome tab!"
		});
		share.open();
	}
})