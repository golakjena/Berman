;(function($){
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			$(this).toggleClass("isActiveNav");
			var navPos = parseInt($(".navigationOuter").css("right"));

			if(navPos == -250){

				$(this).animate({
					right:145
				});
				$(this).find("span").text("Close");

				$(".navigationOuter, .btnMobileNavOuter").stop(true, true).animate({
					right:0
				}, 300);
				$(".bodyBg").stop(true, true).fadeIn(300);
				$("body").css({
					overflowY:"hidden"
				});

			}
			else{

				$(this).animate({
					right:15
				});
				$(this).find("span").text("Menu");

				$(".navigationOuter, .btnMobileNavOuter").stop(true, true).animate({
					right:-250
				}, 300);
				$(".bodyBg").stop(true, true).fadeOut(300);
				$("body").css({
					overflowY:"auto"
				});
				
				
			}
		});
	}

	function whatwedoTabs(){
		$(".tabContent").eq(0).slideDown(300);
		$(".tabs a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".tabContent").stop(true, true).slideUp(300);
				$(".activeTab").removeClass("activeTab");
				$(this).addClass("activeTab");
				$(target).stop(true, true).slideDown();
				return false;
			});
		});
	}

	function whoweareTabs(){
		//$(".teamTab").eq(0).slideDown(300);
		$(".item").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-source");
				$(this).closest(".tabContent").find(".teamTab").stop(true, true).slideUp(300);
				$(this).closest(".tabContent").find(".activeTeam").removeClass("activeTeam");
				$(this).addClass("activeTeam");
				$(target).stop(true, true).slideDown();
				return false;
			});
		});
	}

	$(function(){
		mobileNav();
		whatwedoTabs();
		whoweareTabs();
	});

})(jQuery);




