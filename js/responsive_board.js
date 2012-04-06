function resize(){
  var width = $('#container').width();
  width = parseInt(width);
  var box_width = (width - 40)/3;
  box_width = box_width.toString();
  $('.box').css('height', box_width);
  $('.box').css('width', box_width);
  var height = width.toString();
  $('#container').css('height', height);
}

$(document).ready(function() {
	resize();
});
$(window).resize(function() {
	resize();
});


