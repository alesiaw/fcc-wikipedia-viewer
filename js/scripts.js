$(document).ready(function(){
    var searchInput = $('.main form input');
    var searchButton = $('.main form button');
    var randomButton = $('#dice-wrapper');
    
  
    /* disables/undisables the search button depending on if there is something in the box */  
    searchInput.on('keyup', function(e){
       var charCount = $(this).val().length;
       if (charCount > 0){
           searchButton.prop('disabled', false);
       } else {
           searchButton.prop('disabled', true);
       }
    });
    
    /* animate randomButton on hover */
    randomButton.on('mouseover mouseleave', function(e){
        if (e.type === 'mouseover') {
           $(this).addClass('animated bounce'); 
        } else {
            $(this).removeClass('animated bounce');
        }    
    });
    
    /* click handler for the search button. popup loading div, generate results div and animate it onto the screen */
    searchButton.on('click', function(){
        $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=cocOnut&limit=6&namespace=0&callback=?', function(data){
            $('.header div').html(data);
        }).fail(function(){
            $('.header div').html('it failed');
        });
        // testing click events. ***REMOVE***
       //$('.container').toggleClass('testing'); 
    });
    
    /* prevent default form submission on 'Enter' and trigger a click on the button */
    $('.main form').keydown(function(e){
        if (e.which === 13){
            e.preventDefault();
            searchButton.trigger('click');       
        }
    });
    
    /* queries wikimedia api for search results based on passed string. if no string passed as an argument, queries for a random page. creates and populates a div based on results. */
    var queryWiki = function(string){
        
    }
    
});