
	$(document).ready(function(){
			
			$(document).scroll(function() { 
		   if($(window).scrollTop() === 0) {
			 $("#bar").animate({backgroundColor:"transparent"}, 300);
		   } else {
		   $("#bar").animate({backgroundColor:"rgb(68, 157, 245)"}, 300);
		   }
		});
		
		if (Cookies.get('options') == '1000' && Cookies.get('options2') == '1000') {
			$("#hardware, #beginner").removeClass(".no-interest");
		} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware And Design";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware And Software";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1001' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware And Gaming";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware, Design and Software";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware, Design And Gaming";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware, Software And Gaming";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '1000') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1001' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '0100') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0010') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1100' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1010' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1001' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1110' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1101' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1011' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0100' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0110' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0101' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0111' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0010' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0011' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '0001' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1111' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else if (Cookies.get('options') == '1000' && Cookies.get('options2') == '0001') {
			$scope.niche = "Hardware";
			$scope.experience = "Beginner";
		} else {
		alert('ERROR: not all required options were selected, please go back and finish your personalization.');
		}
		
		$('#header-head').delay(400).fadeIn(500);

		$("#menu").click(function(){
			$("#slide-bar").animate({width:"100%"});
			$("#menu2").delay(280).fadeIn(150);
		});

		$("#closebtn").click(function() {
			$("#slide-bar").animate({width:"0"});
			$("#menu2").fadeOut(150);
		});

		$("#arrow").click(function() {
			$('html, body').animate({
				scrollTop: $("#arr-scroll").offset().top
			}, 1200);
		});

	});