$(".move-button").click(function(e) {
	e.stopPropagation()

	// make all containers inactive
	$(".div-container").removeClass("active")

	var nextItem = $(this).attr("next")

	$("#" + nextItem).addClass("active")
})