/* ---------------------- Classes ---------------------- */
var piece = function (id, position) {
//When a piece object is instantiated it knows co-ordinates of its top, left corner and its width and heigh
	this.name = id;   
	this.position = position;
	if($(id).offset() != null){
		this.top_y = $(id).offset().top;   
		this.left_x = $(id).offset().left;   
		this.right_x = left_x + $(id).outerWidth(true);   
		this.bottom_y = top_x + $(id).outerHeight(true);
	}
};

var board = function () {};
var game = function () {};
/* ---------------------- *******  ---------------------- */

/*-------------------  Global Variables -------------- */
var all_pieces = new Array();
var is_touchin = new Array();

var one_piece = new piece('#div1', 0);     
var two_piece = new piece('#div2', 1);     
var three_piece = new piece('#div3', 2);     
var four_piece = new piece('#div4', 3);     
var five_piece = new piece('#div5', 4);     
var six_piece = new piece('#div6', 5);     
var seven_piece = new piece('#div7', 6);     
var eight_piece = new piece('#div8', 7);   
var empty = new piece('#empty', 8);

/*------------------- ***************** -------------- */

piece.prototype = {
	update: function () {
    	this.top_y = $(id).offset().top;
		this.left_x = $(id).offset().left;
		this.right_x = left_x + $(id).outerWidth(true);
		this.bottom_y = top_x + $(id).outerHeight(true);
    }
}
game.prototype = {
    test: function(){
		alert('game_test');
	},
	// Create A New Game
	new_game: function () {     
		var store_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];     
		var temp1, temp2, i;     
		
		// The Order of the store_array is shuffled
		for (i = 0; i < 9; i++) {       
			var rand = Math.floor(Math.random() * 9);
			temp1 = store_array[i];
			temp2 = store_array[rand];
			store_array[i] = temp2;
			store_array[rand] = temp1;     
		}

        // Piece Objects are instantiated by the number label within them
        one_piece = new piece('#div1', store_array[0]);     
        two_piece = new piece('#div2', store_array[1]);     
        three_piece = new piece('#div3', store_array[2]);     
        four_piece = new piece('#div4', store_array[3]);     
        five_piece = new piece('#div5', store_array[4]);     
        six_piece = new piece('#div6', store_array[5]);     
        seven_piece = new piece('#div7', store_array[6]);     
        eight_piece = new piece('#div8', store_array[7]);   
        empty = new piece('#empty', store_array[8]);
    	
		//store
    	all_pieces[1] =  one_piece;
    	all_pieces[2] =  two_piece;
    	all_pieces[3] =  three_piece;
    	all_pieces[4] =  four_piece;
    	all_pieces[5] =  five_piece;
    	all_pieces[6] =  six_piece;
    	all_pieces[7] =  seven_piece;
    	all_pieces[8] =  eight_piece;
		all_pieces[9] = empty;

		console.log('new_game');
	},
    is_win: function () {},
    calculate_least_moves: function () {},
    count_current_moves: function () {}
};

board.prototype = {
	test: function () {
		alert(all_pieces[0].position);
	},
	new_board: function(){
		console.log('sdfanew board');
		//put pieces in the position that they should go
		var i, position, temp_i;
		var temp_html = new Array();
		for(i=1;i<=9;i++){
			temp_i = i;
			temp_i = i.toString();
			var temp_html_string = $('#position_'+temp_i).html();
			temp_html[i] = temp_html_string;
			//console.log(temp_html[i]);
		}
		for(i=1;i<=9;i++){	
			temp_i = i;
			temp_i = i.toString();
			var pos = all_pieces[i].position;
			pos = pos.toString();
			$('#position_'+pos).html(temp_html[i]);
		}
	},
	
	slide: function() {
		//set_draggable sets the divs that can be dragged
		//if a div goes over a third over the empty space auto-slide

    	var x1 = $div1.offset().left;   
    	var y1 = $div1.offset().top;   
    	var h1 = $div1.outerHeight(true);   
    	var w1 = $div1.outerWidth(true);   
    	var b1 = y1 + h1 / 1.5;   
   		var r1 = x1 + w1;   
    	var x2 = $div2.offset().left;   
    	var y2 = $div2.offset().top;   
    	var h2 = $div2.outerHeight(true);   
    	var w2 = $div2.outerWidth(true);   
    	var b2 = y2 + h2;   
    	var r2 = x2 + w2;
    	if (b1 > y2) {     
        	return true;   
    	}   
    		return false;
	},
	set_draggable: function (position){
		if(position%2 == 0){
			if (position == 2){
				is_touching = [1, 3, 5];
			} else if (position == 4) {
			is_touching = [1, 5, 7];
			} else if (position == 6){
			is_touching = [3, 5, 9];
			}else if (position == 8){
				is_touching = [5, 7, 9];
			}
		} else if (position%2==1) {
			if (position == 3){
				is_touching = [2, 6];
			} else if (position == 1) {
				is_touching = [2, 4];
			} else if (position == 7){
				is_touching = [4, 8];
			} else if (position == 9){
				is_touching = [6, 8];
			}
			 else if(position == 5) {
			is_touching = [2, 4, 6, 8];
			}
		}
		console.log("set_draggable");
		var length = is_touching.length;
		var count;
		for(i=0;i<9;i++){
			var touching = false;

			//iterate through is touching if within the array then make it draggable
			for(count=0;count<length;count++){
				if (i+1 == is_touching[count]){
					touching = true;
				}
			}
			if (touching){
				var pos = i+1;
				pos = pos.toString();
				var ids = $('#position_'+pos).children().attr('id');
				var id = empty.position;
			
				//What axis should the box be draggable
				x1 = $('#box_9').offset().left;
				y1 = $('#box_9').offset().top;
				x2 = $('#'+ids).offset().left;
				y2 = $('#'+ids).offset().top;
				//$('#'+ids).addClass('ui-draggable');
                $('#'+ids).draggable('enable');
				if (x1 != x2){
					$('#'+ids).draggable({axis:'x'});
				} else if (y1 != y2) {
					$('#'+ids).draggable({axis:'y'});
				} else {
					console.log("empty");
				}
				//console.log(i+1);
			} else {
				var pos = i+1;
				pos = pos.toString();
				var ids = $('#position_'+pos).children().attr('id');
				$('#'+ids).draggable('disable');
                //$('#'+ids).draggable('option', 'disabled', true, );
                //$('#'+ids).removeClass('ui-draggable');
                $('#'+ids).removeClass('ui-state-disabled');
			}
		}
		//return 0;
	}
};
/*
old_board.protoype = {
    // The Animations that happen when a piece is slid x% of the empty space
	test: function () {
		alert("board test");
	},
	new_board: function () {
		// is there anyway to iterate through all the objects?	
		//alert(all_pieces[0].position);
		alert("new_board");
	}

	slide: function () {
		$('#result').text(collision($('#div1'), $('#div2')));     
		if (collision($('#div1'), $('#div2'))) {       
			if (true) {
				$("#div1").animate({
					top: '+=10'
				}, 1000);       
            } else if (true) {
				$('#div2').animate({
					top: '-=10'         
                }, 1000);       
            }     
        }   
    },

    // Which divs are allowed to move
    set_draggable_divs: function () {     
		document.write('lol');   
	},
    set_position: function () {}
*/
