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

piece.prototype = {
	update: function () {
    	this.top_y = $(id).offset().top;
		this.left_x = $(id).offset().left;
		this.right_x = left_x + $(id).outerWidth(true);
		this.bottom_y = top_x + $(id).outerHeight(true);
    }
}

var all_pieces = new Array();

game.prototype = {
    test: function(){
		alert('game_test');
	},
	// Create A New Game
	new_game: function () {     
		var store_array = [0, 1, 2, 3, 4, 5, 6, 7, 8];     
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
        var one_piece = new piece('#div1', store_array[0]);     
        var two_piece = new piece('#div2', store_array[1]);     
        var three_piece = new piece('#div3', store_array[2]);     
        var four_piece = new piece('#div4', store_array[3]);     
        var five_piece = new piece('#div5', store_array[4]);     
        var six_piece = new piece('#div6', store_array[5]);     
        var seven_piece = new piece('#div7', store_array[6]);     
        var eight_piece = new piece('#div8', store_array[7]);   
        var empty = new piece('#empty', store_array[8]);
    	
		//store
    	all_pieces[0] =  one_piece;
    	all_pieces[1] =  two_piece;
    	all_pieces[2] =  three_piece;
    	all_pieces[3] =  four_piece;
    	all_pieces[4] =  five_piece;
    	all_pieces[5] =  six_piece;
    	all_pieces[6] =  seven_piece;
    	all_pieces[7] =  eight_piece;
		all_pieces[8] = empty;

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
		console.log('new board');
		//put pieces in the position that they should go
		var i, position, temp_i;
		var temp_html = new Array();
		for(i=1;i<=9;i++){
			temp_i = i;
			temp_i = i.toString();
			var temp_html_string = $('#position_'+temp_i).html();
			temp_html[i-1] = temp_html_string;
			//console.log(temp_html[i]);
		}
		console.log(all_pieces[8].position);
		for(i=0;i<9;i++){	
			temp_i = i;
			temp_i = i.toString();
			var pos = all_pieces[i].position;
			pos = pos +1;
			pos = pos.toString();
			//$('#position_'+pos).html('');
			$('#position_'+pos).html(temp_html[i]);
		}
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
