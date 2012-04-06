/* Game Class */
var game = function() {};

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
