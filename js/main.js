$(document).ready(function(){ 
	var $container = $('#pills-branding');
    $container.masonry({
    columnWidth: 50,
    itemSelector: '.tab-pane__item',
    fitWidth: true,
    gutter: 14
  });

  $("[data-value]").on("click", function(event) { 
    event.preventDefault();  
    
    let elementId = $(this).data('value');
    
    /*let elementOffset = $(elementId).offset().top;
    nav.removeClass("show");*/


    /*$("html, body").animate ({
       scrollTop: elementOffset - 70
    }, 700);*/

 });


});
