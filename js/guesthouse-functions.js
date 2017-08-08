

function init(){
	
	view_w = document.documentElement.clientWidth;
	view_h = document.documentElement.clientHeight;
	base_room_rate = 50;
	gameDays = 0;
	clearVars();
	createCSSstyleBlock();
	clearGUI();
	gui_refresh();
}

function eventFocusPause(){
	var prev_state = timer_state;
	timer_state = 1; 
	pauseTimer();
	timer_state = prev_state;
}

function pauseTimer(){
	
	// If already paused, do nothing to the timer
	if (timer_state !== 0){
		
		clearTimeout(timer);
		timer_state = 0;
		
		var pauseBtn = document.getElementById('PauseTimerBtn');
		pauseBtn.style.backgroundColor = 'red';
		pauseBtn.style.color = 'white';
		pauseBtn.childNodes[0].backgroundColor = 'red';
		pauseBtn.childNodes[0].color = 'white';
		pauseBtn.innerHTML = '|>';
		
		var this_time = new Date().getTime();
		var difference_ms = Math.floor( this_time - start_time );
		var remaining_ms = (secDelay * 1000) - difference_ms;
		
		timer_remaining = Math.floor( (remaining_ms / (secDelay * 1000)) * 100);
			//console.log('Remaining % ' + timer_remaining);
			
	}else{
		resumeTimer();
	}
};

function resumeTimer(){
	var pauseBtn = document.getElementById('PauseTimerBtn');
	pauseBtn.style.backgroundColor = 'green';
	pauseBtn.style.color = 'black';
	pauseBtn.innerHTML = '||';
	
	//current_speed = 1;
	timer_state = 1;
	var remaining_ms = Math.floor( ( (secDelay * 1000) * (timer_remaining / 100) ) / current_speed );
		//console.log('Resuming for ' + remaining_ms + 'ms');
	timer = setTimeout( function(){clearGUI(); gui_refresh(); }, remaining_ms );
};

function setSpeed(speed){
	current_speed = speed;
	clearTimeout(timer);
	var remaining_ms = Math.floor( ( (secDelay * 1000) * (timer_remaining / 100) ) / current_speed );
		//console.log('Setting speed to ' + speed + ' so ' + remaining_ms + 'ms remain!');
	if (timer_state = 1){
		timer = setTimeout( function(){clearGUI(); gui_refresh(); }, remaining_ms );
	}else{
		resumeTimer();
	}
}

function gui_refresh(){
		//console.log('Output GUI');
	createGuesthouseGUI();
		//console.log('Process night on ' + gameDate);
	//processNight();
		//console.log('Guest ratings');
	//guest_ratings();
	//gameDays += 1;
		//console.log('End of day ' + gameDays);
	
	start_time = new Date().getTime();
	//timer = setTimeout( function(){clearGUI(); gui_refresh(); }, Math.floor( (secDelay * 1000) / current_speed) );
	timer = setTimeout( function(){ nextDay(); }, Math.floor( (secDelay * 1000) / current_speed) );
}

function nextDay(){
	processNight();
	guest_ratings();
	gameDays += 1;
	clearGUI(); 
	gui_refresh();
}

function processNight(){
	
	gameDate.setDate(gameDate.getDate() + 1);
	var difference = guesthouse.calc_income() - guesthouse.calc_costs();
	
	if (difference > 0){
		guesthouse.msg = 'Your guesthouse made $' + difference.toFixed(2) + ' tonight!';
	}else if (difference < 0){
		guesthouse.msg = 'Your guesthouse lost $' + Math.abs(difference).toFixed() + ' tonight!';
	}else{
		guesthouse.msg = 'Your guesthouse made no money tonight!?!';
	}
	
	guesthouse.bank += difference;
}


function guest_ratings(){
	
	for (var i=0; i < guesthouse.room_count; i++){

		var new_rating = Object.create(default_rating);
		
		firstName = rating_first_names[ Math.floor( rating_first_names.length * Math.random() )];
		lastName = String.fromCharCode(65 + (26 * Math.random()) );
		new_rating.name = firstName + ' ' + lastName;
			
		effort_rate = (+guesthouse.breakfast_rate + +guesthouse.cleaning_rate + +guesthouse.maintenance_rate) / 30;
			//console.log('Effort rate: ' + effort_rate);
		
		// New way - linked to effort
		new_rating.rating = (Math.random() + (effort_rate * guesthouse.calc_overall() )).toFixed(2);
		//console.log('New rating' + new_rating.rating);
		
		new_rating.date = gameDate.valueOf();
		
		rating_intros = rating_comments_intros[ Math.floor(Math.max(0, Math.min(4, new_rating.rating))) ];
		rating_intro = rating_intros[ Math.floor(Math.random() * rating_intros.length) ];
		
		rating_outros = rating_comments_outros[ Math.floor(Math.max(0, Math.min(4, new_rating.rating))) ];
		rating_outro = rating_outros[ Math.floor(Math.random() * rating_outros.length) ];
		
		new_rating.comments = rating_intro + '' + rating_outro;
		
		guesthouse.ratings.push(new_rating);
		guesthouse.rating_count += 1;		
	}
		//console.log(guesthouse.ratings);
}





function clearVars(){

	panels = ["Management", "Guestbook"]; //, "Room 1" , "Room 2" HANDLED IN BTM PANEL GUI];
	current_panel = 0;
	
	/* Guesthouse */
	guesthouse = {

		name: 'Eclectic House',
		bank: 10000,
		msg: 'Welcome to the game!',
		
		breakfast_rate: 5,
		cleaning_rate: 5,
		maintenance_rate: 5,
		utilities_rate: 5,
		
		style: 1,
			calc_style_ug_cost: function(){
				var cost = 1000 * this.style * this.style;
				return cost;
			},
		comfort: 1,
			calc_comfort_ug_cost: function(){
				var cost = 1500 * this.comfort * this.comfort;
				return cost;
			},
		quality: 1,
			calc_quality_ug_cost: function(){
				var cost = 2000 * this.quality * this.quality;
				return cost;
			},
		facilities: 1,
			calc_facilities_ug_cost: function(){
				var cost = 2500 * this.facilities * this.facilities;
				return cost;
			},

		/* COSTS INFO */
		calc_costs: function(){
			sum_cost = 0;
			rooms = this.room_count;
			
			breakfast_cost = this.breakfast_rate * rooms;
			cleaning_cost = this.cleaning_rate * rooms;
			maintenance_cost = this.maintenance_rate * rooms;
			utilities_cost = this.utilities_rate * rooms;
			
			sum_costs = breakfast_cost + cleaning_cost + maintenance_cost + utilities_cost;
			
				//console.log('Guesthouse costs = ' + sum_costs);
			return sum_costs;
		/* END COSTS */
		},
		
		/* INCOME INFO */
		calc_income: function(){
			sum_income = 0;
			rooms = this.room_count;
			for (var i=0; i < rooms; i++){
				sum_income += this.rooms[i].calc_rate();
			}

			return sum_income;
		/* END INCOME */
		},
		
		/* RATING INFO */
		calc_rating: function(){
			sum_rating = 0;
			ratings = this.rating_count;
			if (ratings === 0){
				sum_rating = 0;
			}else{
				for (var i=0; i < ratings; i++){
					sum_rating += +this.ratings[i].rating;
				}
				sum_rating /= ratings;
				sum_rating = sum_rating.toFixed(1);
			}

			return sum_rating;
		/* END RATING */
		},
		
		/* RATING INFO */
		calc_overall: function(){
			room_overall = 0;
			rooms = this.room_count;
			for (var i=0; i < rooms; i++){
				room_overall += this.rooms[i].calc_overall();
			}
			room_overall /= rooms;
			
			var gh_overall = Math.floor( (+this.calc_style() + +this.calc_comfort() + +this.calc_quality() + +this.calc_facilities() ) / 4);
			
			overall = ((room_overall/2) + (gh_overall/2) ).toFixed(1);

			return overall;
		/* END RATING */
		},
		
		calc_style: function(){
			// Function for each attribute 
			// (Rooms_average/2) + (overall_average/2)
				var rooms_average = 0;
				var this_calc = 0;
				
				rooms = this.room_count;
				for (var i=0; i < rooms; i++){
					rooms_average += this.rooms[i].style;
				}
				rooms_average /= rooms;
				
				var gh_overall = this.style;
				
				this_calc += rooms_average / 2;
				this_calc += gh_overall / 2;
				this_calc = this_calc.toFixed(1);
				
			return this_calc;
			
		},
		
		calc_quality: function(){
			// Function for each attribute 
			// (Rooms_average/2) + (overall_average/2)
				var rooms_average = 0;
				var this_calc = 0;
				
				rooms = this.room_count;
				for (var i=0; i < rooms; i++){
					rooms_average += this.rooms[i].quality;
				}
				rooms_average /= rooms;
				
				var gh_overall = this.quality;
				
				this_calc += rooms_average / 2;
				this_calc += gh_overall / 2;
				this_calc = this_calc.toFixed(1);
				
			return this_calc;
		},
		
		calc_comfort: function(){
			// Function for each attribute 
			// (Rooms_average/2) + (overall_average/2)
				var rooms_average = 0;
				var this_calc = 0;
				
				rooms = this.room_count;
				for (var i=0; i < rooms; i++){
					rooms_average += this.rooms[i].comfort;
				}
				rooms_average /= rooms;
				
				var gh_overall = this.comfort;
				
				this_calc += rooms_average / 2;
				this_calc += gh_overall / 2;
				this_calc = this_calc.toFixed(1);
				
			return this_calc;
		},
		
		
		calc_facilities: function(){
			// Function for each attribute 
			// (Rooms_average/2) + (overall_average/2)
				var rooms_average = 0;
				var this_calc = 0;
				
				rooms = this.room_count;
				for (var i=0; i < rooms; i++){
					rooms_average += this.rooms[i].facilities;
				}
				rooms_average /= rooms;
				
				var gh_overall = this.facilities;
				
				this_calc += rooms_average / 2;
				this_calc += gh_overall / 2;
				this_calc = this_calc.toFixed(1);
				
			return this_calc;
		},
		
		/* RATINGS */
		ratings: 
			[
				/*{
					date: gameDate.valueOf(),
					name: "Joe A",
					comments: "Smelly, very smelly",
					rating: 4.3
				}*/
		/* END RATINGS */
			],
			
		rating_count: 0,
		
		/* ROOMS INFO */
		rooms: 
			[ 
				{
					name: "Economy Room",
					
					style: 1,
						calc_style_ug_cost: function(){
							var cost = 250 * this.style * this.style;
							return cost;
						},
					comfort: 1,
						calc_comfort_ug_cost: function(){
							var cost = 250 * this.comfort * this.comfort;
							return cost;
						},
					quality: 1,
						calc_quality_ug_cost: function(){
							var cost = 500 * this.quality * this.quality;
							return cost;
						},
					facilities: 1,
						calc_facilities_ug_cost: function(){
							var cost = 500 * this.facilities * this.facilities;
							return cost;
						},
						
					calc_overall: function(){
						var overall = Math.floor( (this.style + this.comfort + this.quality + this.facilities) / 4);
						overall = overall.toFixed(1);
						return overall;
					},
					
					calc_rate: function(){
						var rate = Math.floor(base_room_rate * this.calc_overall() );
							//console.log('rate = ' +  rate);
						//rate = rate.toFixed(2);
						return rate;
					}
				}
			/* END rooms */
			],
			
		room_count: 1,
		
		calc_room_ug_cost: function(){
			var cost = 50000 * this.room_count * this.room_count;
			return cost;
		}
	/* END Guesthouse */
	}
	
/* END setupVars */	
}
