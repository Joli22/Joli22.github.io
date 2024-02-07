Fancybox.bind()

// init Masonry
var $grid = $('.masonry').masonry({
  horizontalOrder: true,
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
