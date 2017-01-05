$(document).ready(function(){

  var buttons = $(".picHolder");	
  $(buttons).on("click", function() {

    if($(this).hasClass("small")) {
      // $(this).animate({
      //   "width": "500px"
      //   "height": "500px"
      // },1000);
      // $(this).find(".picHolderBlurb").fadeIn(2000);
      $(this).addClass("expanded");
      $(this).removeClass("small")
  	}
	else if($(this).hasClass("expanded")) {
	  $(this).animate({
	// "top":"20px",
        "width": "200px"
      },1000);
	  // $(this).find(".picHolderBlurb").hide("slow");
	  $(this).addClass("small");
	  $(this).removeClass("expanded")
	}
  })
});