$(function() {

	window.onscroll = function() {scrollFunction()};

	//判斷>500出現top
	function scrollFunction() {
	  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
	   $("#back_btn").css("display","block");
	  } else {
	   $("#back_btn").css("display","none");
	  }
	}

	//點擊回到頂部
	$(function(){
	    $("#back_btn").click(function(e){
	        e.preventDefault();
	        $("html, body").animate(
	        	{"scrollTop": "0"}, 500);
	    })
	});
});