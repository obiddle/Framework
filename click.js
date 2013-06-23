/*       */

$("body").data({ baz: [], baz_2: []}); // create array stored in body to track the back button



// Add class track to element to turn the page

 $('.track').on("click", function(e) 
                                    {
                                       var currentId = $(e.target).closest('section').attr('id'); // closest goes up the dom tree to location the first section then get it's id and store it

                                       var nextId = $(e.target).attr('href'); // at href page id to button to get the next page, this gets it and stores 
                                   

                                       // classes have to be removed here, can be improved
                                       $("#" + currentId).removeClass().addClass("outLeft"); // slide page out
                                       $(nextId).removeClass().addClass('inRight');  // slide page in

                                       $("body").data('baz').push(currentId); // store the current page id into an array
                                       $("body").data('baz_2').push(nextId);  // store the next page into an array
 
                        
});


// Back button, .track gets the data and the back button calls it from .data that is store in body

$('.backButton').click(function()
                                 {
                                      var baz = $("body").data('baz'); // get array
                                      var lastId  = baz[baz.length -1]; // get the last row

                                      var baz_2 = $("body").data('baz_2');
                                      var currentId = baz_2[baz_2.length -1];

                                      $("#" + lastId).removeClass().addClass("inLeft"); // slide page in
                                      $(currentId).removeClass().addClass("outRight");  // slide page out

                                      $("body").data('baz').pop(); // delete the last item stored in array
                                      $("body").data('baz_2').pop();
                                 
});









