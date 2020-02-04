// create a subtle shadow that follows the cursor:
$(document).on('mousemove', function(e){
  $('#cursor-shadow').css({
    left: e.pageX,
    top: e.pageY
  });
});
