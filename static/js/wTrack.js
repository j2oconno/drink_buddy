// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  var timeStartm = new Date().getTime();
  var timeStarts = Math.floor(timeStartm/1000);
	initializePage(timeStarts);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage(timeStart) {

	// add any functionality and listeners you want here
  $(".version_a").click(function(e){
    // e.preventDefault();
    console.log("Got CLICKED!");
    console.log(Math.floor((new Date().getTime())/1000)-timeStart);
    //add your Woopra tracking code for version A's like button click event
    woopra.track("time_elapsed_for_a_version",{
      time_elapsed: Math.floor((new Date().getTime())/1000)-timeStart
    });
  })

  $(".version_b").click(function(e){
    console.log("Got CLICKED!");
    console.log(Math.floor((new Date().getTime())/1000)-timeStart);
    // e.preventDefault();
    //add your Woopra tracking code for version A's like button click event
    woopra.track("time_elapsed_for_b_version",{
      time_elapsed: Math.floor((new Date().getTime())/1000)-timeStart
    });
  })

}