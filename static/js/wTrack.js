// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

$('div[data-role="dialog"]').live('pagebeforeshow', function(e, ui) {
    ui.prevPage.addClass("ui-dialog-background ");
    });

    $('div[data-role="dialog"]').live('pagehide', function(e, ui) {
    $(".ui-dialog-background ").removeClass("ui-dialog-background ");
    });

    

	// add any functionality and listeners you want here
  // $(".version_a").click(function(e){
  //   // e.preventDefault();
  //   console.log("Got CLICKED!");
  //   console.log(Math.floor((new Date().getTime())/1000)-timeStart);
  //   //add your Woopra tracking code for version A's like button click event
  //   woopra.track("time_elapsed_for_a_version",{
  //     time_elapsed: Math.floor((new Date().getTime())/1000)-timeStart
  //   });
  // })

  // $(".version_b").click(function(e){
  //   console.log("Got CLICKED!");
  //   console.log(Math.floor((new Date().getTime())/1000)-timeStart);
  //   // e.preventDefault();
  //   //add your Woopra tracking code for version A's like button click event
  //   woopra.track("time_elapsed_for_b_version",{
  //     time_elapsed: Math.floor((new Date().getTime())/1000)-timeStart
  //   });
  // })
  // $(".version_b").mouseover(function(){
  //   console.log("Rolled Over!");
  //   $(this).toggleClass("active");
  // })
}