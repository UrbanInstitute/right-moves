// On load, allow first TWO slides to exist with z indexs differing them...
// Then, every move-button, advance to the under one, destroy the old, and make the on deck one become underneath. 


$(".move-button").click(function(e) {	
	// e.stopPropagation()

	// make all containers inactive
	$(".div-container").removeClass("active");

	var nextItem = $(this).attr("next");

	$("#" + nextItem).addClass("active");

	//trigger the things that are supposed to happen on page appear
		// if other animations here, search for them, then trigger them 
	setTimeout(function () {
        console.log('hello')
        $("#" + nextItem + " *[data-ix='next-btn-load']").addClass("animate")
    }, 20);

	// hide the left arrow at first
	$("#" + nextItem + ".active .arrow-left").addClass("disappear")		

	//show the first text subslide
	$("#" + nextItem + ".active .slide-outcome").eq(0).addClass("active")

	// on forward or backward button
	$(".slider-next-btn.w-inline-block").click(function(e) {
		e.stopPropagation()

		// find the active ".slide-outcome" and get index
		var subslideIndex = $("#" + nextItem + ".active .slide-outcome.active").index();			

		// remove active class
		$("#" + nextItem + ".active .slide-outcome").removeClass("active");		

		// figure out if its going up or back
		if ($(this).hasClass("left")) {
			var direction = -1;
		} else {
			var direction = 1;
		}
		
		// advance active class to next ".slide-outcome"
		$("#" + nextItem + ".active .slide-outcome").eq(subslideIndex+(direction)).addClass("active")	
			// If there's other animations associated with this, search for them, and trigger them.



		// at the end of the slide

		if (subslideIndex+(direction)+1 === $("#" + nextItem + ".active .slide-outcome").length) {
			console.log("end")
			// at the end, swap out the right arrows
			$("#" + nextItem + ".active .arrow-right").addClass("disappear")
			$("#" + nextItem + ".active .arrow-right-last").addClass("appear")
		} else if (subslideIndex+direction === 0) {
			console.log("start")
			$("#" + nextItem + ".active .arrow-left").addClass("disappear")						
		} else {
			$("#" + nextItem + ".active .arrow-right").removeClass("disappear")
			$("#" + nextItem + ".active .arrow-left").removeClass("disappear")
			$("#" + nextItem + ".active .arrow-right-last").removeClass("appear")
		}
		

		// console.log($("#" + nextItem + ".active .slide-outcome"));
		// console.log($("#" + nextItem + ".active .slide-outcome").eq(2)["0"].innerText)
		// console.log($("#" + nextItem + ".active .slide-outcome").first()["0"].innerText);
	});


})


// $("[data-ix]").click(function(e) {

// 	console.log($(this).attr("data-ix"))

// });



// Each slide appear on click of next, "display: block"
// Entry items on "display:block", activate
// On click=>index=>advance, shit happens


// To do, list all 
	// Pages
		// Triggers - affected pairs
	// Create json for this 

// Create indexes for advancing 
	// overall page index (or id?)
		// inside each page index of events

