
// TOP PANEL 

function createNameBox(){

		// Guesthouse Name
		var nameDiv = document.createElement('div');
		nameDiv.style.width = (half_panel_w - 2) + 'px';
		nameDiv.style.height = '30px';
		nameDiv.style.border = panel_border;
		nameDiv.style.background = '';
		nameDiv.id = 'nameBox';
		nameDiv.style.cssFloat = 'left';
		
		// Editable Text input!
		var guesthouseNameTextInput = document.createElement('input');
		guesthouseNameTextInput.id = 'GuesthouseNameTextInput';
		guesthouseNameTextInput.setAttribute('type', 'text');
		guesthouseNameTextInput.setAttribute('max', '100');
		guesthouseNameTextInput.setAttribute('value', guesthouse.name);
		
		guesthouseNameTextInput.style.width = Math.floor( half_panel_w - 5 ) + 'px';
		guesthouseNameTextInput.style.height = '25px';
		guesthouseNameTextInput.style.padding = '2px';
		guesthouseNameTextInput.style.fontSize = '20px';
		guesthouseNameTextInput.style.fontWeight = 'bold';
		guesthouseNameTextInput.style.backgroundColor = 'yellow';
		guesthouseNameTextInput.style.textAlign = 'center';
		
		guesthouseNameTextInput.onfocus = function() { eventFocusPause(); };
		guesthouseNameTextInput.onchange = function() { changeGuesthouseName() };
		guesthouseNameTextInput.onblur = function() { resumeTimer() };
		nameDiv.appendChild(guesthouseNameTextInput);
	
	panelDiv.appendChild(nameDiv);
}

function changeGuesthouseName(){
	nameInput = document.getElementById('GuesthouseNameTextInput');
	guesthouse.name = nameInput.value;
	panelsGUIrefresh();
}

function createDateBox(){		
		// Game Date
		var dateDiv = document.createElement('div');
		dateDiv.style.width = (half_panel_w - 2) + 'px';
		dateDiv.style.height = '30px';
		dateDiv.style.border = panel_border;
		dateDiv.style.background = '';
		dateDiv.style.cssFloat = 'left';
		dateDiv.style.textAlign = 'right';
		dateDiv.id = 'dateBox';
		
		//dateDiv.
		var dateH = document.createElement('p');
		dateH.style.padding = 0;
		dateH.style.margin = 0;
		var dateT = document.createTextNode(gameDate.toDateString () );
		
		dateH.appendChild(dateT);
		
		
		
		// ----------------------
		// Commenting out to test pause functionality
		
		var pauseTimerBtn = document.createElement('button');
		pauseTimerBtn.id = 'PauseTimerBtn';
		pauseTimerBtn.style.height = '30px';
		pauseTimerBtn.style.padding = 0;
		pauseTimerBtn.style.margin = 0;
		pauseTimerBtn.style.width = '30px';
		pauseTimerBtn.style.cssFloat = 'left';
		pauseTimerBtn.style.position = 'relative';
		pauseTimerBtn.onclick = function(){ pauseTimer(); };
		
		if (timer_state == 1){
			var this_text = ' || ';
		}else{
			var this_text = ' |> ';
		}
		var pauseTxt = document.createTextNode(this_text);
		pauseTimerBtn.appendChild(pauseTxt);
		dateDiv.appendChild(pauseTimerBtn);
		
		
		// Set One Speed button
		var setOneSpeedBtn = document.createElement('button');
		setOneSpeedBtn.id = 'SetOneSpeedBtn';
		setOneSpeedBtn.style.height = '30px';
		setOneSpeedBtn.style.padding = 0;
		setOneSpeedBtn.style.margin = 0;
		setOneSpeedBtn.style.width = '30px';
		setOneSpeedBtn.style.cssFloat = 'left';
		setOneSpeedBtn.style.position = 'relative';
		if (current_speed == 1){
			setOneSpeedBtn.style.backgroundColor = 'yellow';
		}
		setOneSpeedBtn.onclick = function(){ setSpeed(1); };
		
		var OneTxt = document.createTextNode('1x');
		setOneSpeedBtn.appendChild(OneTxt);
		dateDiv.appendChild(setOneSpeedBtn);
		
		// Set Five Speed button
		var setFiveSpeedBtn = document.createElement('button');
		setFiveSpeedBtn.id = 'SetFiveSpeedBtn';
		setFiveSpeedBtn.style.height = '30px';
		setFiveSpeedBtn.style.padding = 0;
		setFiveSpeedBtn.style.margin = 0;
		setFiveSpeedBtn.style.width = '30px';
		setFiveSpeedBtn.style.cssFloat = 'left';
		setFiveSpeedBtn.style.position = 'relative';
		if (current_speed == 5){
			setFiveSpeedBtn.style.backgroundColor = 'yellow';
		}
		setFiveSpeedBtn.onclick = function(){ setSpeed(5); };
		
		var fiveTxt = document.createTextNode('5x');
		setFiveSpeedBtn.appendChild(fiveTxt);
		dateDiv.appendChild(setFiveSpeedBtn);
		
		
		// Set Ten Speed button
		var setTenSpeedBtn = document.createElement('button');
		setTenSpeedBtn.id = 'SetTenSpeedBtn';
		setTenSpeedBtn.style.height = '30px';
		setTenSpeedBtn.style.padding = 0;
		setTenSpeedBtn.style.margin = 0;
		setTenSpeedBtn.style.width = '30px';
		setTenSpeedBtn.style.cssFloat = 'left';
		setTenSpeedBtn.style.position = 'relative';
		if (current_speed == 10){
			setTenSpeedBtn.style.backgroundColor = 'yellow';
		}
		setTenSpeedBtn.onclick = function(){ setSpeed(10); };
		
		var TenTxt = document.createTextNode('10x');
		setTenSpeedBtn.appendChild(TenTxt);
		dateDiv.appendChild(setTenSpeedBtn);
		
		/*var dateTimerDiv = document.createElement('div');
		dateTimerDiv.style.width = 0;
		dateTimerDiv.style.height = '30px';
		dateTimerDiv.style.backgroundColor = 'green';
		dateTimerDiv.style.animation = 'timer ' + secDelay + 's infinite';
		dateTimerDiv.style.position = 'relative';
		dateTimerDiv.style.cssFloat = 'left';
		dateTimerDiv.style.maxWidth = Math.floor(half_panel_w / 2) + 'px';
		
		dateDiv.appendChild(dateTimerDiv);*/
		
		dateDiv.appendChild(dateH);
		
		panelDiv.appendChild(dateDiv);
		
}
		
// NEXT ROW

function createRoomsBox(){
		// Rooms Box 
		var roomsDiv = document.createElement('div');
		roomsDiv.style.width = (half_panel_w - 2) + 'px';
		roomsDiv.style.height = '30px';
		roomsDiv.style.border = panel_border;
		roomsDiv.style.background = '';
		roomsDiv.id = 'roomsBox';
		roomsDiv.style.cssFloat = 'left';
		roomsDiv.style.textAlign = 'center';
		var roomsH = document.createElement('p');
		roomsH.style.padding = 0;
		roomsH.style.margin = 0;
		var roomsT = document.createTextNode('Rooms: ' + guesthouse.room_count);
		
		roomsH.appendChild(roomsT);
		roomsDiv.appendChild(roomsH);
		panelDiv.appendChild(roomsDiv);
}

function createBankBox(){
		// Bank Balance
		var bankDiv = document.createElement('div');
		bankDiv.style.width = (half_panel_w - 2) + 'px';
		bankDiv.style.height = '30px';
		bankDiv.style.border = panel_border;
		bankDiv.style.background = '';
		bankDiv.style.cssFloat = 'left';
		bankDiv.style.textAlign = 'center';
		bankDiv.id = 'bankBox';
		
		var bankH = document.createElement('p');
		bankH.style.padding = 0;
		bankH.style.margin = 0;
		var bankT = document.createTextNode('Bank: $' + guesthouse.bank.toFixed(2) );
		
		bankH.appendChild(bankT);
		bankDiv.appendChild(bankH);
		panelDiv.appendChild(bankDiv);
}
		
		// NEXT ROW

function createCostsBox(){
		// costs Box 
		var costsDiv = document.createElement('div');
		costsDiv.style.width = (half_panel_w - 2) + 'px';
		costsDiv.style.height = '30px';
		//costsDiv.style.fontFamily = panel_font_name;
		//costsDiv.style.fontSize = Math.floor(panel_font_size / 2);
		costsDiv.style.border = panel_border;
		costsDiv.style.background = '';
		costsDiv.id = 'costsBox';
		costsDiv.style.cssFloat = 'left';
		costsDiv.style.textAlign = 'center';
		var costsH = document.createElement('p');
		costsH.style.padding = 0;
		costsH.style.margin = 0;
		var costsT = document.createTextNode('Costs: $' + guesthouse.calc_costs().toFixed(2) + ' per night');
		
		costsH.appendChild(costsT);
		costsDiv.appendChild(costsH);
		panelDiv.appendChild(costsDiv);
}

function createEarningsBox(){		
		// earnings Balance
		var earningsDiv = document.createElement('div');
		earningsDiv.style.width = (half_panel_w - 2) + 'px';
		earningsDiv.style.height = '30px';
		//earningsDiv.style.fontFamily = panel_font_name;
		//earningsDiv.style.fontSize = Math.floor(panel_font_size / 2);
		earningsDiv.style.border = panel_border;
		earningsDiv.style.background = '';
		earningsDiv.style.cssFloat = 'left';
		earningsDiv.style.textAlign = 'center';
		earningsDiv.id = 'earningsBox';
		
		var earningsH = document.createElement('p');
		earningsH.style.padding = 0;
		earningsH.style.margin = 0;
		
		guesthouse.calc_income
		var earningsT = document.createTextNode('Earnings: $' + guesthouse.calc_income().toFixed(2) + ' per night');
		
		earningsH.appendChild(earningsT);
		earningsDiv.appendChild(earningsH);
		panelDiv.appendChild(earningsDiv);
}
		
		// NEXT ROW 

function createStyleBox(){		
		// style Box 
		var styleDiv = document.createElement('div');
		styleDiv.style.width = (half_panel_w - 2) + 'px';
		styleDiv.style.height = '30px';
		//styleDiv.style.fontFamily = panel_font_name;
		//styleDiv.style.fontSize = Math.floor(panel_font_size / 2);
		styleDiv.style.border = panel_border;
		styleDiv.style.background = '';
		styleDiv.id = 'styleBox';
		styleDiv.style.cssFloat = 'left';
		styleDiv.style.textAlign = 'center';
		var styleH = document.createElement('p');
		styleH.style.padding = 0;
		styleH.style.margin = 0;
		var styleT = document.createTextNode('Style: ' + guesthouse.calc_style() );
		
		styleH.appendChild(styleT);
		styleDiv.appendChild(styleH);
		panelDiv.appendChild(styleDiv);
}

function createQualityBox(){
		// quality Balance
		var qualityDiv = document.createElement('div');
		qualityDiv.style.width = (half_panel_w - 2) + 'px';
		qualityDiv.style.height = '30px';
		//qualityDiv.style.fontFamily = panel_font_name;
		//qualityDiv.style.fontSize = Math.floor(panel_font_size / 2);
		qualityDiv.style.border = panel_border;
		qualityDiv.style.background = '';
		qualityDiv.style.cssFloat = 'left';
		qualityDiv.style.textAlign = 'center';
		qualityDiv.id = 'qualityBox';
		
		var qualityH = document.createElement('p');
		qualityH.style.padding = 0;
		qualityH.style.margin = 0;
		var qualityT = document.createTextNode('Quality: ' + guesthouse.calc_quality());
		
		qualityH.appendChild(qualityT);
		qualityDiv.appendChild(qualityH);
		panelDiv.appendChild(qualityDiv);
}
		
		// NEXT ROW

function createComfortBox(){		
		// comfort Box 
		var comfortDiv = document.createElement('div');
		comfortDiv.style.width = (half_panel_w - 2) + 'px';
		comfortDiv.style.height = '30px';
		//comfortDiv.style.fontFamily = panel_font_name;
		//comfortDiv.style.fontSize = Math.floor(panel_font_size / 2);
		comfortDiv.style.border = panel_border;
		comfortDiv.style.background = '';
		comfortDiv.id = 'comfortBox';
		comfortDiv.style.cssFloat = 'left';
		comfortDiv.style.textAlign = 'center';
		var comfortH = document.createElement('p');
		comfortH.style.padding = 0;
		comfortH.style.margin = 0;
		var comfortT = document.createTextNode('Comfort: ' + guesthouse.calc_comfort() );
		
		comfortH.appendChild(comfortT);
		comfortDiv.appendChild(comfortH);
		panelDiv.appendChild(comfortDiv);
}

function createFacilitiesBox(){		
		// facilities Balance
		var facilitiesDiv = document.createElement('div');
		facilitiesDiv.style.width = (half_panel_w - 2) + 'px';
		facilitiesDiv.style.height = '30px';
		//facilitiesDiv.style.fontFamily = panel_font_name;
		//facilitiesDiv.style.fontSize = Math.floor(panel_font_size / 2);
		facilitiesDiv.style.border = panel_border;
		facilitiesDiv.style.background = '';
		facilitiesDiv.style.cssFloat = 'left';
		facilitiesDiv.style.textAlign = 'center';
		facilitiesDiv.id = 'facilitiesBox';
		
		var facilitiesH = document.createElement('p');
		facilitiesH.style.padding = 0;
		facilitiesH.style.margin = 0;
		var facilitiesT = document.createTextNode('Facilities: ' + guesthouse.calc_facilities());
		
		facilitiesH.appendChild(facilitiesT);
		facilitiesDiv.appendChild(facilitiesH);
		panelDiv.appendChild(facilitiesDiv);
}
		
		// NEXT ROW 

function createRatingBox(){		
		// rating Box 
		var ratingDiv = document.createElement('div');
		ratingDiv.style.width = (half_panel_w - 2) + 'px';
		ratingDiv.style.height = '30px';
		ratingDiv.style.border = panel_border;
		ratingDiv.style.background = '';
		ratingDiv.id = 'ratingBox';
		ratingDiv.style.cssFloat = 'left';
		ratingDiv.style.textAlign = 'center';
		var ratingH = document.createElement('p');
		ratingH.style.padding = 0;
		ratingH.style.margin = 0;
		var ratingT = document.createTextNode('Rating: ' + guesthouse.calc_rating() );
		
		ratingH.appendChild(ratingT);
		ratingDiv.appendChild(ratingH);
		panelDiv.appendChild(ratingDiv);
}

function createOverallBox(){		
		// overall Balance
		var overallDiv = document.createElement('div');
		overallDiv.style.width = (half_panel_w - 2) + 'px';
		overallDiv.style.height = '30px';
		overallDiv.style.border = panel_border;
		overallDiv.style.background = '';
		overallDiv.style.cssFloat = 'left';
		overallDiv.style.textAlign = 'center';
		overallDiv.id = 'overallBox';
		
		var overallH = document.createElement('p');
		overallH.style.padding = 0;
		overallH.style.margin = 0;
		var overallT = document.createTextNode('Overall: ' + guesthouse.calc_overall());
		
		overallH.appendChild(overallT);
		overallDiv.appendChild(overallH);
		panelDiv.appendChild(overallDiv);
}	


function createMsgBox(){

		// Message / Info Box
		var msgDiv = document.createElement('div');
		msgDiv.style.width = (panel_w - 2) + 'px';
		msgDiv.style.height = '30px';
		msgDiv.style.border = panel_border;
		msgDiv.style.background = '';
		msgDiv.id = 'msgBox';
		msgDiv.style.cssFloat = 'left';
		msgDiv.style.color = 'red';
		msgDiv.style.fontStyle = 'italic';
		msgDiv.style.textAlign = 'center';
		
		var msgH = document.createElement('p');
		msgH.style.padding = 0;
		msgH.style.margin = 0;
		//msgH.style.webkit-margin = 0
		var msgT = document.createTextNode(guesthouse.msg);
		
		msgH.appendChild(msgT);
		msgDiv.appendChild(msgH);
		panelDiv.appendChild(msgDiv);
}

