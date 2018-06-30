$(".move-button").click(function(e) {	
	// e.stopPropagation()

	// make all containers inactive
	$(".div-container").removeClass("active")

	var nextItem = $(this).attr("next")

	$("#" + nextItem).addClass("active")

	//trigger the things that are supposed to happen on page appear
	$("#" + nextItem + " *[data-ix='next-btn-load']").addClass("animate")


	// $(".slide-outcome").click(function(e) {
	// 	e.stopPropagation()
		
	// 	console.log('click')
	// 	if (!$("#" + nextItem + ".active .slide-outcome.active").length) {
	// 		console.log('none')
	// 	} else {			
	// 		console.log('some')
	// 	}
	// });


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

