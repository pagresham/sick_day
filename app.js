// alert("hi there");

$("document").ready(function() {
	// alert('hi');
	
	// ---  Start image viewer --- //

	// set source of pictures
	var pics = ['pics/bluemesa.JPG','pics/boat.JPG','pics/marcellena.JPG','pics/motor.JPG']
	var pic_num = 0;
	var slide = document.getElementById('slide');
	slide.src = pics[pic_num];
	
	// slide.src = pics[pic_num + 1 ];
	
	document.getElementById('back').addEventListener('click', function() {

		pic_num = (pic_num - 1)%4;
		if ( pic_num < 0){
			pic_num = pic_num + 4;
		}
		slide.src = pics[pic_num];
	});

	document.getElementById('forward').addEventListener('click', function() {
		pic_num = (pic_num + 1)%4;
		slide.src = pics[pic_num];
	});

	// --- End Image Viewer --- //


	// --- Start Date --- //
	
	var currentDate = new Date();
	
	document.getElementById('date').innerHTML = showDate();


	function showDate() {
			
		var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];	
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		var date = new Date();
		// var date_string = "";

		var day = day_names[date.getDay()];
		var month = months[date.getMonth()];
		var num = date.getDate();

		return day+", "+month+" "+num;
	}

	// --- End Date --- //


	// --- Start Boxes Demo --- //

	var pos1 = 1,
		pos2 = 1,
		pos3 = 1, 
		pos4 = 1;
	
	//  ======= Box 1 =========
	
	$('.box1').click(function() {
		if (pos1 === 1){
			$(this).removeClass('b1b');
			$(this).addClass('b1a');
			pos1 = 2;
		}
		else {
			$(this).removeClass('b1a');
			$(this).addClass('b1b');
			pos1 = 1;
		}
	});

	// ======== Box 2 ===========
	
	$('.box2').click(function() {
		if (pos2 === 1) {
			$(this).removeClass('b2b').addClass('b2a');
			pos2 = 2;	
		}
		else {
			$(this).removeClass('b2a').addClass('b2b');
			pos2 = 1;
		}
	});

	//  ==========  Box 3 ============
	
	$('.box3').click(function() {
		if (pos3 === 1) {
			$(this).removeClass('b3b').addClass('b3a');
			pos3 = 2;	
		}
		else {
			$(this).removeClass('b3a').addClass('b3b');
			pos3 = 1;
		}
	});

	// =========  Box 4 =========  

	$('.box4').click(function() {
		if (pos4 == 1) {
			$(this).removeClass('b4b').addClass('b4a');
			pos4 = 2;
		}
		else {
			$(this).removeClass('b4a').addClass('b4b');
			pos4 = 1;
		}
	});
	
	// --- End Boxes Demo --- //


});