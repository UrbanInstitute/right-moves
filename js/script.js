var healthbars = [3,3,3]

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
        // $("#" + nextItem + ".active *[data-ix='next-btn-load']").addClass("animate")
		
		var transitionBucket = actions[nextItem][0].transitions;
		for (var i = 0; i < transitionBucket.length; i++) {
			// console.log(transitionBucket[i])
			// console.log($("#" + nextItem + ".active " + transitionBucket[i].selectedItem));

			$("#" + nextItem + ".active " + transitionBucket[i].selectedItem).addClass(transitionBucket[i].addedClass)
		}

    }, 20);

    // hide bullets that have been lost


	// hide the left arrow at first
	$("#" + nextItem + ".active .arrow-left").addClass("disappear")		

	//show the first text subslide
	$("#" + nextItem + ".active .slide-outcome").eq(0).addClass("active")

	// on forward or backward button
	$("#" + nextItem + " .slider-next-btn.w-inline-block").click(function(e) {
		e.stopPropagation()

		// figure out if its going up or back
		if ($(this).hasClass("left")) {
			var direction = -1;
		} else {
			var direction = 1;
		}

		// find the active ".slide-outcome" and get index
		var subslideIndex = $("#" + nextItem + ".active .slide-outcome.active").index() + direction;

		// remove active class
		$("#" + nextItem + ".active .slide-outcome").removeClass("active");		

		// advance active class to next ".slide-outcome"
		setTimeout(function () {
	        $("#" + nextItem + ".active .slide-outcome").eq(subslideIndex).addClass("active")
	    }, 250);		

			// If there's other animations associated with this, search for them, and trigger them.
			// have to be able to add if forward and remove if going backward. 
			var transitionBucket = actions[nextItem][subslideIndex].transitions;
			for (var i = 0; i < transitionBucket.length; i++) {							
				$("#" + nextItem + ".active " + transitionBucket[i].selectedItem).toggleClass(transitionBucket[i].addedClass)
			}

		// at the end of the slide

		if (subslideIndex+1 === $("#" + nextItem + ".active .slide-outcome").length) {
			console.log("end")
			// at the end, swap out the right arrows
			$("#" + nextItem + ".active .arrow-right").addClass("disappear")
			$("#" + nextItem + ".active .arrow-right-last").addClass("appear")

			// make changes to the health bars global here
			console.log($("#" + nextItem + ".active img[src='images/score-sprite-education.svg'].empty"))
			

		} else if (subslideIndex === 0) {
			console.log("start")
			$("#" + nextItem + ".active .arrow-left").addClass("disappear")						
		} else {
			$("#" + nextItem + ".active .arrow-right").removeClass("disappear")
			$("#" + nextItem + ".active .arrow-left").removeClass("disappear")
			$("#" + nextItem + ".active .arrow-right-last").removeClass("appear")
		}		
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

