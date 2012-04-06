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

//var board = function () {};
//var game = function () {};
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
/*game.prototype = {
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
};*/

/*board.prototype = {
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
	bounce_back: function(){
			var id = $('.ui-draggable-dragging').attr("id");
            var pos_dragging = $('#'+id).offset();
            var parent_drag_id = $('#'+id).parent().attr('id');
            var height= $('#'+id).height();
            var width = $('#'+id).width();
          
            $('#'+parent_drag_id).css({'height':height+10,'width':width});
            parent_drag_id_offset = $('#'+parent_drag_id).offset();
				
        		if ($('#'+id).css('position')=='absolute'){
                	var the_top = parent_drag_id_offset.top;
					console.log('absolute');
				} else if($('#'+id).css('position')=='relative') {
                	var the_top = parent_drag_id_offset.top-10;
					console.log('relative');
				}
			//var the_top = parent_drag_id_offset.top-10;
            $('#'+id).css({'position': 'absolute', 'top':pos_dragging.top-10,'left':pos_dragging.left-10});
            $('#'+id).animate({
                top: the_top,
				left: parent_drag_id_offset.left
			}, {
				complete: function(){
					 $('#'+parent_drag_id).css({'height':height+10,'width':width});
				}
			});
	},

	slide: function() {
		//if a div goes over a half over the empty space auto-slide
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
                $('#'+ids).draggable('enable');
                
				if (x1 != x2){
                    if (x1 > x2){
                        var new_x1 = x1+$('.box').width();
                        $('#'+ids).draggable({axis:'x',containment: [x2-10,y2,new_x1,y1]});
                        //$('#'+ids).draggable("option", "axis", 'x', "containment", [x2-10,y2,new_x1,y1])
						
                    } else {
                        $('#'+ids).draggable({axis:'x',containment: [x1,y1,x2-10,y2]});
                    	//$('#'+ids).draggable("option", "axis", 'x', "containment", [x1,y1,x2-10,y2])
					}
                    //console.log($('#'+ids).draggable("option", "axis"));
				} else if (y1 != y2) {
                    if (y1 > y2){
                        var new_y1 = y1+$('.box').height()+10;
                        $('#'+ids).draggable({axis:'y',containment: [x2,y2-10,x1,new_y1]})
                    	//$('#'+ids).draggable("option", "axis", 'y', "containment", [x2,y2-10,x1,new_y1])
					} else {
                       $('#'+ids).draggable({axis:'y',containment: [x1,y1,x2,y2-10]})
                       //$('#'+ids).draggable("option", "axis", 'y', "containment", [x1,y1,x2,y2-10])
					}
				} 
			} else {
				var pos = i+1;
				pos = pos.toString();
				var ids = $('#position_'+pos).children().attr('id');
				//$('#'+ids).draggable('disable');
                $('#'+ids).draggable('destroy');
				$('#'+ids).removeClass('ui-state-disabled');
			}
		}
	}
};
*/
