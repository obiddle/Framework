 





  $('.track').on("click", function(e)
                                      {
                                       var currentId = $(e.target).closest('section').attr('id'); 

                                       //var currentId = $(this).parent().parent().attr('id');

                                       // alert(event.target.id);

                                       //var setId = $(this).closest('.page'); 
                                       //var currentId = setId.attr('id'); 


                                       var nextId = $(e.target).attr('href'); // each page has class .page and we get the id of it.  
                                      // var currentId = $(this).attr('id');
                                       alert(currentId)
                                     // return true;
                                       // match  the add that is retrieved to the function call, and somehow get the id of product

                                       $("#" + currentId).removeClass().addClass("outLeft");
                                       $(nextId).removeClass().addClass('inRight');
    
                                        
                                      });



          $('.backButton').click(function()
                                      {

                                              $(pageIn).removeClass().addClass("inLeft");
                                                $(pageOut).removeClass().addClass("outRight");
                                      });


