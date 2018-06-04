$(document).ready(function(){
	// $(".li-bottom").css("width", $(".navbar-sidebar").width() + "px")
	// $(".li-bottom").on("click", hideSidebar)
	$(".side-bar > li > a").on("click", function(){
		drop = $(this).attr("drop")
		$(".side-bar div.drop-down").removeClass("open")
		if($(".side-bar #"+drop).hasClass("open")){
			$(".side-bar #"+drop).removeClass("open")
		}else{
			$(".side-bar #"+drop).addClass("open")
		}
	})
	$(".navbar").css({
		"width":($(document).width() - $(".navbar-sidebar").width()) + "px"
	});
});

function hideSidebar(){
	$(".side-bar li.green").css("display", "none")
	$(".side-bar li a").css("display", "none")
	$(".side-bar").addClass("close")
	$(".li-bottom").css("width","50px")
}