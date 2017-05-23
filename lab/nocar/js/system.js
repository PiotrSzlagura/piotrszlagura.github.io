$(document).ready(function(){
	if($(".welcome-screen-banner").length < 1)
	{
		$(".nocar-navbar").addClass("dark");
	}

	$(window).scroll(function(){
		var _bannerHeight = $(".welcome-screen-banner").outerHeight();
		var _scrollTop = $(window).scrollTop();
		if(_scrollTop > _bannerHeight - 100)
		{
			$(".nocar-navbar").addClass("dark");
		}
		else if(_scrollTop <= _bannerHeight - 100)
		{
			$(".nocar-navbar").removeClass("dark");
		}
	});

	var currentTab = 1;

	$(".nocar-product-tab-link").click(function(){
		$(".nocar-product-tab-link").removeClass("active");
		$(this).addClass("active");

		var _tab = Number($(this).attr("data-nocar-product-tab"));

		if(_tab == currentTab)
		{
			return false;
		}
		else
		{
			$("[data-nocar-product-content="+currentTab+"]").removeClass("open");
			$("[data-nocar-product-content="+_tab+"]").addClass("open");

			currentTab = _tab;
		}
	});

	$(".npt-m-toggle").click(function(){
		if($(window).outerWidth() <= 767 || $(this).hasClass("always-dropdown"))
		{
			var _content = $(this).siblings(".npt-m-content");
			if(_content.length == 0)
			{
				_content = $(this).parents("h5").siblings(".npt-m-content");
			}
			_content.toggleClass("open");
			$(this).toggleClass("active");
		}
	})

	$(".nocar-brands-show-more").click(function(){
		$(this).toggleClass("active");
		$(".nocar-additional-brands").toggleClass("open");
	})

	$(".show-all-text a").click(function(){
		var _parent = $(this).parents("p.newsletter-rules")
		_parent.toggleClass("open");
	});

	//Product images
	$(".nocar-product-images-list img").click(function(){
		var _src = $(this).attr("src");
		var _bigImg = $(".nocar-product-choosen-image img");

		_bigImg.attr("src", _src);
	});

	$(".quantity button").click(function(){
		var _self = $(this);
		var _input = _self.siblings("input");
		var _inputValue;

		if(_self.hasClass("minus-1"))
		{
			if(_input.val() == "1")
			{
				return false;
			}
			else
			{
				_inputValue = _input.val();
				_inputValue--;

				_input.val(_inputValue);
			}
		}
		else
		{
			_inputValue = _input.val();
			_inputValue++;

			_input.val(_inputValue);
		}
	});
});





