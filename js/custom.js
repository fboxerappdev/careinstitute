$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        pager:false,
		onSliderLoad: function(){ 
			$(".heading").animate({
				marginLeft:"0",
				opacity:"1"
			},300);
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex){ 
			$slideElement.find(".heading").animate({
				marginLeft:"0",
				opacity:"1"
			},300);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){ 
			$slideElement.find(".heading").css({
				marginLeft:"60px",
				opacity:"0"
			});
		},
    });
	$('.bxslider-cli').bxSlider({
			  auto: true,
			  autoControls: true,
			  minSlides: 1,
			  maxSlides: 6,
			  slideWidth: 230,
			  moveSlides: 1,
			  slideMargin: 20,
			  pager:false,
			});
	$(".toggle").click(function(){
		$(".top-line .nav-bar").slideToggle();
	});
	
	var img = $(".subpage-header>img").attr("src");
	img = "url('"+ img +"')";
	$(".subpage-header").css("backgroundImage",img);
	
	
	
	
	$(".tab-head span").click(function(){
		$(".tab-head span").removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		
		
		if ($(".tab-body>div").eq(index).is(":visible")) {
			return;
		}
		$(".tab-body>div").hide();
		$(".tab-body>div").eq(index).fadeIn();
		
	});
});