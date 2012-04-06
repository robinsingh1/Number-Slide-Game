/* js library */

var Game = new game();
var Board = new board();

$(document).ready(function() {
    var width = $('#container').width();
    width = parseInt(width);
    var box_width = (width - 40)/3;
    box_width = box_width.toString();
    $('.box').css('height', box_width);
    $('.box').css('width', box_width);
    var height = width.toString();
    $('#container').css('height', height);
});

function new_game() {
	//New Game and New Board
	Game.new_game();
	Board.new_board();
	//Set Empty space as droppable
}

function alert_position(){
	var parent_id_2 = $('#box_9').parent().attr('id');
    var id = $('.ui-draggable-dragging').attr("id");
    
    $('#'+parent_id_2).droppable({tolerance: 'touch',
        drop: function(event, ui) {
            var id = $('.ui-draggable-dragging').attr("id");
            var pos_dragging = $('#'+id).offset();
            var parent_drag_id = $('#'+id).parent().attr('id');
            var height= $('#'+id).height();
            var width = $('#'+id).width();
          
            $('#'+parent_drag_id).css({'height':height+10,'width':width});
            parent_drag_id_offset = $('#'+parent_drag_id).offset();
            //$('#'+id).css({'position': 'absolute', 'top':parent_drag_id_offset.top, 'left':parent_drag_id_offset.left});

           /*
             if ($('#'+id).css('position')=='absolute'){
                var pdi_offset = parent_drag_id_offset.top;
            } else if($('#'+id).css('position')=='relative') {
                var pdi_offset = parent_drag_id_offset.top;
            }
            */
				
        		if ($('#'+id).css('position')=='absolute'){
                	var the_top = parent_drag_id_offset.top;
					console.log('absolute');
				} else if($('#'+id).css('position')=='relative') {
                	var the_top = parent_drag_id_offset.top-10;
					console.log('relative');
				}
			//	var the_top = parent_drag_id_offset.top-10;
            $('#'+id).css({'position': 'absolute', 'top':pos_dragging.top-10,'left':pos_dragging.left-10});
            $('#'+id).animate({
                top: the_top,
				left: parent_drag_id_offset.left
			}, {
				complete: function(){
					 $('#'+parent_drag_id).css({'height':height+10,'width':width});
				}
			});
        
        }
    });
    $('#box_9').droppable({tolerance: 'intersect',
        
		over: function(event, ui) {
            console.log("al_pos");
            //When an item has started dragging
			var id = $('.ui-draggable-dragging').attr("id");
            var pos_dragging = $('#'+id).offset();
            
            //Parents of Empty and Dragging
			parent_id = $('#'+id).parent().attr('id');
			parent_id_2 = $('#box_9').parent().attr('id');

			//Offset From Top Left Corner of browser window of empty
			var pos = $('#box_9').offset();
            var left = pos.left;
			var top = pos.top;
            
            var empty_height = $('.box').height();
            
            //While Dragging
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
					
					//$('#'+parent_id).css({'height':'100', 'width':'0'});
					//$('#'+parent_id_2).css({'height':'110', 'width':'0'});
                    
                    $('#'+parent_id).css({'height':empty_height, 'width':'0'});
					$('#'+parent_id_2).css({'height':empty_height+10, 'width':'0'});
                
                    empty.position = parseInt(parent_id.charAt(9));
					console.log("data");
					//console.log(parent_id.charAt(9))
					console.log(empty.position);
                    Board.set_draggable(empty.position);
					console.log($('#'+id).draggable("option", "axis"));
				}
			});
            
			$('#'+parent_id).css({'height':empty_height+10, 'width':empty_height+10});
			$('#'+parent_id_2).css({'height':empty_height, 'width':empty_height+10});
		}
	});
    
    Board.set_draggable(empty.position);
}

window.setInterval(function () {
    alert_position();
}, 1000);

window.setInterval(function () {}, 200);
/*  Refactoring the size of the blocks depending on the size of the window -- Come back to this
   // For Now just focus on static blocks
   */
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

