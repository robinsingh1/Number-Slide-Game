/* js library */

var Game = new game();
var Board = new board();

function new_game() {
	//New Game and New Board
	Game.new_game();
	Board.new_board();
	//Set Empty space as droppable
	$('#box_9').droppable({
		over: function(event, ui) {
			var id = $('.ui-draggable-dragging').attr("id");
			var empty_pos = empty.position;
			empty_pos = empty_pos.toString();
			parent_id = $('#'+id).parent().attr('id');
			parent_id_2 = $('#box_9').parent().attr('id');
			console.log(parent_id);

			//Offset From Top Left Corner of browser window 
			var pos = $('#box_9').offset();
			var pos_dragging = $('#'+id).offset();
			console.log(pos.left);

			var left = pos.left;
			var top = pos.top;
			$('#'+id).css({'position': 'absolute', 'top':pos_dragging.top-10, 'left':pos_dragging.left-10});
			$('#'+id).animate({
				top: top-10,
				left: left-10
			}, {
				complete: function(){
					var temp_html = $('#'+parent_id_2).html();
					var temp_html2 = $('#'+parent_id).html();
					$('#'+parent_id).html(temp_html);
					$('#'+parent_id_2).html(temp_html2);
					
					$('#'+parent_id).css({'height':'100', 'width':'0'});
					$('#'+parent_id_2).css({'height':'110', 'width':'0'});
				}
			});
			$('#'+parent_id).css({'height':'110', 'width':'110'});
			$('#'+parent_id_2).css({'height':'100', 'width':'110'});
		}
	});
	Board.set_draggable(empty.position);
}

function alert_position(){
//	Board.set_draggable(empty.position);
	//is_touching is an array of all touching divs
	//iterate through access div within div -> set draggable
	
	$('#box_9').droppable({
		over: function(event, ui) {
			var id = $('.ui-draggable-dragging').attr("id");
			var empty_pos = empty.position;
			empty_pos = empty_pos.toString();
			parent_id = $('#'+id).parent().attr('id');
			parent_id_2 = $('#box_9').parent().attr('id');
			console.log(parent_id);

			//Offset From Top Left Corner of browser window 
			var pos = $('#box_9').offset();
			var pos_dragging = $('#'+id).offset();
			console.log(pos.left);

			var left = pos.left;
			var top = pos.top;
			$('#'+id).css({'position': 'absolute', 'top':pos_dragging.top-10, 'left':pos_dragging.left-10});
			$('#'+id).animate({
				top: top-10,
				left: left-10
			}, {
				complete: function(){
					var temp_html = $('#'+parent_id_2).html();
					var temp_html2 = $('#'+parent_id).html();
					$('#'+parent_id).html(temp_html);
					$('#'+parent_id_2).html(temp_html2);
					
					$('#'+parent_id).css({'height':'100', 'width':'0'});
					$('#'+parent_id_2).css({'height':'110', 'width':'0'});
				}
			});
			$('#'+parent_id).css({'height':'110', 'width':'110'});
			$('#'+parent_id_2).css({'height':'100', 'width':'110'});
		}
	});


}

window.setInterval(function () {
	//collision();
}, 200);

function alert_position(){
	Board.set_draggable(empty.position);
	//is_touching is an array of all touching divs
	//iterate through access div within div -> set draggable
}

function stop_movement_t(y2) {   
    var y1 = 0;   
    while (y1 != y2) {    y1 = $('#div1').offset().top;     
        if (y1 == y2) {       
            return true;     
        }     
        	return false;   
    }
}
window.setInterval(function () {}, 200);
/*  Refactoring the size of the blocks depending on the size of the window -- Come back to this
   // For Now just focus on static blocks
$(window).resize(function() {
  var width = $('#container').width();
  width = parseInt(width);
  var box_width = (width - 40)/3;
  box_width = box_width.toString();
  $('.box').css('height', box_width);
  $('.box').css('width', box_width);
  var height = width.toString();
  $('#container').css('height', height);
});
*/
