'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  var timeStart = new Date().getTime();
  console.log(timeStart);
	initializePage(timeStart);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage(timeStart) {
  console.log("Got HERE!");
	// add any functionality and listeners you want here

  $(".version_a").click(function(){
    console.log("Got HERE!");
    //add your Woopra tracking code for version A's like button click event
    woopra.track("time_elapsed_for_a_version",{
      console.log("Got into woopra.track!");
      time_elapsed:(new Date().getTime())-timeStart;
    });
  })

  $(".version_b").click(function(){
    console.log("Got HERE!");
    //add your Woopra tracking code for version A's like button click event
    woopra.track("time_elapsed_for_b_version",{
      console.log("Got into woopra.track!");
      time_elapsed: (new Date().getTime())-timeStart;
    });
  })

}