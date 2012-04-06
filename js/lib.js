/* js library */

var Game = new game();
var Board = new board();

function new_game() {
	Game.new_game();
	Board.new_board();
}

function check(){
	$('#'+$('#box_9').parent().attr('id')).droppable({tolerance: 'touch',
        drop: function(event, ui) {
            Board.bounce_back();
        }
    });

    $('#box_9').droppable({tolerance: 'intersect',   
		over: function(event, ui) {
			Board.slide()
		}
	});
 
    Board.set_draggable(empty.position);
}
window.setInterval(function () {
    check();
}, 1000);
