// Timer object
var timer;
var start_time = 0;
// secDelay = 5 (default)
// msDelay = secDelay * 1000;
var secDelay = 5;
var gameDate = new Date ();

var timer_state = 1; // running, or 0 paused
// % of day remaining (for pause events)
var timer_remaining = 100;
// Current speed
var current_speed = 1;
// Speeds array = speeds[current_speed] = multiplier for secDelay
var speeds = [
	0,
	1,
	5,
	10
];

//0 = easy, 1 = default, 2 = hard
var current_difficulty = 0;
var difficulty = [
	{
		starting_bank: 100000,
		cost_factor: 1
	},
	{
		starting_bank: 10000,
		cost_factor: 2
	},
	{
		starting_bank: 1000,
		cost_factor: 4
	}
];

var room_name_intros = 
	[
		"Economy",
		"Basic",
		"Standard",
		"Brighton",
		"London",
		"New York",
		"Executive",
		"Master",
		"Honeymoon",
		"Presidential"
	];

var room_name_outros =
	[
		"Room",
		"Suite",
		"Lodge"
	];

var default_room = 
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
				//console.log('overall = ' + overall );
			return overall;
		},
		
		calc_rate: function(){
			var rate = Math.floor(base_room_rate * this.calc_overall() );
				//console.log('rate = ' +  rate);
			return rate;
		}
	}

var default_rating = 
	{
		date: gameDate,
		name: "Joe A",
		comments: "Smelly, very smelly",
		rating: 1.3
	}
	
var rating_first_names = 
	[
		"Joe",
		"Sue",
		"Tom",
		"Ann",
		"Raz",
		"Ghi",
		"Kim",
		"Sam",
		"Al",
		"Max",
		"Eve",
		"Lee",
		"Jon",
		"Mo",
		"Liz",
		"Rik",
		"Tam"
	];

var rating_comments_intros = [
	[	
		"So bad",
		"Terrible",
		"Awful"
	],
	[	
		"Pretty bad",
		"Not great",
		"Meh"
	],
	[
		"OK",
		"Not bad",
		"Alright"
	],
	[	
		"Good",
		"Pretty nice",
		"Quite alright"
	],
	[
		"Fantastic",
		"Amazing",
		"Wonderful"
	]
];

var rating_comments_outros = [
	[	
		" and smells rotten!",
		", stay away!",
		", worst. guesthouse. ever."
	],
	[	
		", not enjoyable.",
		" and the place is run down.",
		", not recommended."
	],
	[
		", but not amazing.",
		" and would stay again.",
		", not much to say."
	],
	[	
		", enjoyable stay!",
		" and will come back!",
		", lovely guesthouse!"
	],
	[
		", booked in next year!",
		", had the time of my life!",
		" and loved every second!"
	]
];
