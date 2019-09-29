$(document).ready(function() {
		// sticky
		$(window).scroll(function() {
			if ($(this).scrollTop() > 200){  
				$('#header-mid').addClass("sticky");
			}
			else{
				$('#header-mid').removeClass("sticky");
			}
		});

		//ScrollUp
		$.scrollUp({
			scrollText: '<i class="fas fa-chevron-up"></i>',
			easingType: 'linear',
			scrollSpeed: 600,
			animation: 'fade'
		});

		// Carousel
		$('.owl-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:2,
			nav:false,
			responsive:{
				0:{ items:2 },
				480:{ items:4 },
				768:{ items:6 },
				992:{ items:6 },
				1200:{ items:8 }
			}
		});

		// Tooltip
		$(function () {
			$('[data-hieuung="tooltip"]').tooltip();
		});

		//Scroll Menu
		$(window).scroll(function() {
			var height = $(window).scrollTop();
			if (height >= 500){ 
				$('.scroll-menu, .scroll-qc').addClass('visible');
			}
			else {
				$('.scroll-menu, .scroll-qc').removeClass('visible');
			}
		});

});





// Khẳng định hay bác bỏ {A}P{B}?
// Mệnh đề  { A: x<-y; x<2; x,y thuộc R}
//  		{ B: y>-x+1; x,y thuộc R}
//  		Đoạn trình P 
//  			y:=x^2-3
//  			x:-x+1;