$(document).ready(function(){ 
	var $container = $('#pills-branding');
    $container.masonry({
    columnWidth: 50,
    itemSelector: '.tab-pane__item',
    fitWidth: true,
    gutter: 14
});
  });
