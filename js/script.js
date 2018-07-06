var lifeLevels = [3,3,3]

var lifeReductions = {
	"outcome1a":[{
		"health":-1,
		"education":-1,
		"financial":0
	}],
	"outcome1b":[{
		"health":0,
		"education":0,
		"financial":-1
	}],
	"outcome2a":[{
		"health":-1,
		"education":-1,
		"financial":-1
	}],
	"outcome2b":[{
		"health":0,
		"education":-1,
		"financial":-1
	}],
	"outcome2c":[{
		"health":-1,
		"education":-1,
		"financial":0
	}],
	"outcome3a":[{
		"health":-1,
		"education":-1,
		"financial":-1
	}],
	"outcome3b":[{
		"health":-1,
		"education":-1,
		"financial":0
	}]
}

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

			$("#" + nextItem + ".active " + transitionBucket[i].selectedItem).addClass(transitionBucket[i].addedClass)
		}

    }, 20);
	
	bulletFill(lifeLevels, nextItem)

    // hide bullets that have been lost
    for (item in lifeReductions) {
       	if (item === nextItem) {
    		lifeLevels[0] += lifeReductions[item][0].health;
    		lifeLevels[1] += lifeReductions[item][0].education;
    		lifeLevels[2] += lifeReductions[item][0].financial;    		    		
    	
    		bulletFlicker(lifeLevels, nextItem)
    	} 
    }

    


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

function bulletFill(lifeLevels, nextItem) {
	for (var i = 0; i < lifeLevels.length; i++) {		
		for (var j = 0; j < lifeLevels[i]; j++) {
			if (i === 0) {
				$("#" + nextItem + ".active img[src='images/score-sprite-health.svg']").eq(j).addClass("full")
			} else if (i === 1) {
				$("#" + nextItem + ".active img[src='images/score-sprite-education.svg']").eq(j).addClass("full")
			} else {
				$("#" + nextItem + ".active img[src='images/score-sprite-financial.svg']").eq(j).addClass("full")
			}
		}
	}
}

function bulletFlicker (lifeLevels, nextItem) {
	
	if ($("#" + nextItem + ".active img[src='images/score-sprite-health.svg'].full").length > lifeLevels[0]) {
		var thisLength = $("#" + nextItem + ".active img[src='images/score-sprite-health.svg'].full").length - 1;
		$("#" + nextItem + ".active img[src='images/score-sprite-health.svg'].full").eq(thisLength).addClass("flicker")
	}

	if ($("#" + nextItem + ".active img[src='images/score-sprite-education.svg'].full").length > lifeLevels[1]) {
		var thisLength = $("#" + nextItem + ".active img[src='images/score-sprite-education.svg'].full").length - 1;
		$("#" + nextItem + ".active img[src='images/score-sprite-education.svg'].full").eq(thisLength).addClass("flicker")
	}

	if ($("#" + nextItem + ".active img[src='images/score-sprite-financial.svg'].full").length > lifeLevels[2]) {
		var thisLength = $("#" + nextItem + ".active img[src='images/score-sprite-financial.svg'].full").length - 1;
		$("#" + nextItem + ".active img[src='images/score-sprite-financial.svg'].full").eq(thisLength).addClass("flicker")
	}
}


