// BOTTOM PANEL

// HEADER ROW

function createPrevPanelButton(){
	// Message / Info Box
	var prevBtnDiv = document.createElement('div');
	prevBtnDiv.style.width = Math.floor( (panel_w - 2) / 4) + 'px';
	prevBtnDiv.style.height = '40px';
	prevBtnDiv.style.border = panel_border;
	prevBtnDiv.style.background = '';
	prevBtnDiv.id = 'prevBtnBox';
	prevBtnDiv.style.cssFloat = 'left';
	prevBtnDiv.style.color = 'red';
	prevBtnDiv.style.italics = true;
	
	var prevBtnBtn = document.createElement('button');
	prevBtnBtn.style.width = Math.floor( (panel_w - 2) / 4) + 'px';
	prevBtnBtn.style.height = '40px';
	prevBtnBtn.style.fontSize = '30px';
	prevBtnBtn.style.fontWeight = 'bolder';
	
	prevBtnBtn.onclick = function() { moveToPrevPanel() };

	var prevBtnT = document.createTextNode('<=');
	
	prevBtnBtn.appendChild(prevBtnT);
	prevBtnDiv.appendChild(prevBtnBtn);
	panelDiv.appendChild(prevBtnDiv);
}

function moveToPrevPanel(){
	//current_panel = 0 ? panels.length + guestbook.room_count - 1 : =- 1;
	// Panels 0 Mgmt, 1 Guestbook, 2 Room0, 3 Room1	
	if (current_panel === 0){
		current_panel = panels.length + guesthouse.room_count - 1;
	}else{
		current_panel -= 1;
	}
	
	panelsGUIrefresh();
}

function createPanelNameBox(){
	
	// Message / Info Box
	var panelNameDiv = document.createElement('div');
	panelNameDiv.style.width = (half_panel_w - 5) + 'px';
	panelNameDiv.style.height = '40px';
	panelNameDiv.style.fontSize = '20px';
	panelNameDiv.style.border = panel_border;
	panelNameDiv.style.background = '';
	panelNameDiv.id = 'panelNameBox';
	panelNameDiv.style.cssFloat = 'left';
	panelNameDiv.style.color = 'red';
	panelNameDiv.style.fontWeight = 'bolder';
	panelNameDiv.style.textAlign = 'center';
	
		//console.log('C Panel = ' + current_panel);
		//console.log('Panels = ' + panels.length);
		
	if (current_panel >= panels.length){
		// Editable Text input!
		var panelNameTextInput = document.createElement('input');
		panelNameTextInput.id = 'RoomNameTextInput';
		panelNameTextInput.setAttribute('type', 'text');
		panelNameTextInput.setAttribute('max', '100');
		panelNameTextInput.setAttribute('value', guesthouse.rooms[current_panel - panels.length].name);
		
		panelNameTextInput.style.width = Math.floor( half_panel_w - 5 ) + 'px';
		panelNameTextInput.style.height = '35px';
		panelNameTextInput.style.padding = '2px';
		panelNameTextInput.style.fontSize = '20px';
		panelNameTextInput.style.fontWeight = 'bold';
		panelNameTextInput.style.backgroundColor = 'yellow';
		panelNameTextInput.style.textAlign = 'center';
		
		panelNameTextInput.onfocus = function() { eventFocusPause(); };
		panelNameTextInput.onblur = function() { resumeTimer() };
		panelNameTextInput.onchange = function() { changeRoomName() };
		panelNameDiv.appendChild(panelNameTextInput);
		
	}else{
		var panelNameH = document.createElement('p');
		panelNameH.style.padding = '5px';
		panelNameH.style.margin = 0;
		var panelNameT = document.createTextNode(panelName);
		panelNameH.appendChild(panelNameT);
		panelNameDiv.appendChild(panelNameH);
	}
	
	panelDiv.appendChild(panelNameDiv);
}

function changeRoomName(){
	nameInput = document.getElementById('RoomNameTextInput');
	guesthouse.rooms[current_panel - panels.length].name = nameInput.value;
	panelsGUIrefresh();
}

function createNextPanelButton(){
	
	// Next Button Box
	var nextBtnDiv = document.createElement('div');
	nextBtnDiv.style.width = Math.floor( (panel_w - 2) / 4) + 'px';
	nextBtnDiv.style.height = '40px';
	nextBtnDiv.style.border = panel_border;
	nextBtnDiv.style.background = '';
	nextBtnDiv.id = 'nextBtnBox';
	nextBtnDiv.style.cssFloat = 'left';
	nextBtnDiv.style.color = 'red';
	nextBtnDiv.style.italics = true;
	
	var nextBtnBtn = document.createElement('button');
	nextBtnBtn.style.width = Math.floor( (panel_w - 2) / 4) + 'px';
	nextBtnBtn.style.height = '40px';
	nextBtnBtn.style.fontSize = '30px';
	nextBtnBtn.style.fontWeight = 'bolder';
	nextBtnBtn.onclick = function() { moveToNextPanel() };
	
	var nextBtnT = document.createTextNode('=>');
	
	nextBtnBtn.appendChild(nextBtnT);
	nextBtnDiv.appendChild(nextBtnBtn);
	panelDiv.appendChild(nextBtnDiv);
}

function moveToNextPanel(){
	//current_panel = 0 ? panels.length + guestbook.room_count - 1 : =- 1;
	// Panels 0 Mgmt, 1 Guestbook, 2 Room0, 3 Room1	
	if (current_panel === (panels.length + guesthouse.room_count - 1) ){
		current_panel = 0;
	}else{
		current_panel += 1;
	}
	panelsGUIrefresh();
}



// BOTTOM PANEL BOXES

// Management Box
function createManagementOverallBox(){
	
	// Mgmt Overall Box
	var mgmtOverallDiv = document.createElement('div');
	mgmtOverallDiv.style.width = (panel_w - 5) + 'px';
	mgmtOverallDiv.style.height = '30px';
	mgmtOverallDiv.style.border = panel_border;
	mgmtOverallDiv.style.background = '';
	mgmtOverallDiv.style.margin = 0;
	mgmtOverallDiv.style.padding = 0;
	mgmtOverallDiv.id = 'mgmtOverallBox';
	mgmtOverallDiv.style.cssFloat = 'left';
	mgmtOverallDiv.style.color = 'red';
	mgmtOverallDiv.style.fontWeight = 'bolder';
	mgmtOverallDiv.style.textAlign = 'center';
	
	var mgmtOverallH = document.createElement('p');
	mgmtOverallH.style.padding = 0;
	mgmtOverallH.style.margin = 0;
	var mgmtOverallT = document.createTextNode('GUESTHOUSE OVERALL: ' + guesthouse.calc_overall() );
	
	mgmtOverallH.appendChild(mgmtOverallT);
	mgmtOverallDiv.appendChild(mgmtOverallH);
	panelDiv.appendChild(mgmtOverallDiv);
};
//2
function createManagementStyleBox(){
	
	// Mgmt Style Box
	var mgmtStyleDiv = document.createElement('div');
	mgmtStyleDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtStyleDiv.style.height = '30px';
	mgmtStyleDiv.style.border = panel_border;
	mgmtStyleDiv.style.background = '';
	mgmtStyleDiv.id = 'mgmtStyleBox';
	mgmtStyleDiv.style.cssFloat = 'left';
	mgmtStyleDiv.style.color = 'black';
	mgmtStyleDiv.style.fontWeight = 'bold';
	mgmtStyleDiv.style.textAlign = 'center';
	
	var mgmtStyleH = document.createElement('p');
	mgmtStyleH.style.padding = 0;
	mgmtStyleH.style.margin = 0;
	var mgmtStyleT = document.createTextNode('Guesthouse Style: ' + guesthouse.style );
	
	mgmtStyleH.appendChild(mgmtStyleT);
	mgmtStyleDiv.appendChild(mgmtStyleH);
	panelDiv.appendChild(mgmtStyleDiv);
};
function createManagementStyleUpgradeButton(){
	
	// Mgmt Style UG Button Box
	var mgmtStyleUGDiv = document.createElement('div');
	mgmtStyleUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtStyleUGDiv.style.height = '30px';
	mgmtStyleUGDiv.style.border = panel_border;
	mgmtStyleUGDiv.style.background = '';
	mgmtStyleUGDiv.id = 'mgmtStyleUGBox';
	mgmtStyleUGDiv.style.cssFloat = 'left';
	mgmtStyleUGDiv.style.color = 'red';
	mgmtStyleUGDiv.style.italics = true;
	
	var mgmtStyleUGBtn = document.createElement('button');
	mgmtStyleUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtStyleUGBtn.style.height = '30px';
	mgmtStyleUGBtn.onclick = function() { mgmtStyleUG() };

	var mgmtStyleUGT = document.createTextNode('Upgrade: $' + guesthouse.calc_style_ug_cost() );
	
	mgmtStyleUGBtn.appendChild(mgmtStyleUGT);
	mgmtStyleUGDiv.appendChild(mgmtStyleUGBtn);
	panelDiv.appendChild(mgmtStyleUGDiv);

};
	function mgmtStyleUG(){
		if (guesthouse.bank < guesthouse.calc_style_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.calc_style_ug_cost();
			guesthouse.msg = 'Style upgraded by one!';
			guesthouse.style += 1;
		}
		panelsGUIrefresh();
	}

//3
function createManagementComfortBox(){
	
	// Mgmt Comfort Box
	var mgmtComfortDiv = document.createElement('div');
	mgmtComfortDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtComfortDiv.style.height = '30px';
	mgmtComfortDiv.style.border = panel_border;
	mgmtComfortDiv.style.background = '';
	mgmtComfortDiv.id = 'mgmtComfortBox';
	mgmtComfortDiv.style.cssFloat = 'left';
	mgmtComfortDiv.style.color = 'black';
	mgmtComfortDiv.style.fontWeight = 'bold';
	mgmtComfortDiv.style.textAlign = 'center';
	
	var mgmtComfortH = document.createElement('p');
	mgmtComfortH.style.padding = 0;
	mgmtComfortH.style.margin = 0;
	var mgmtComfortT = document.createTextNode('Guesthouse Comfort: ' + guesthouse.comfort );
	
	mgmtComfortH.appendChild(mgmtComfortT);
	mgmtComfortDiv.appendChild(mgmtComfortH);
	panelDiv.appendChild(mgmtComfortDiv);
	
};
function createManagementComfortUpgradeButton(){
	// Mgmt Comfort UG Button Box
	var mgmtComfortUGDiv = document.createElement('div');
	mgmtComfortUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtComfortUGDiv.style.height = '30px';
	mgmtComfortUGDiv.style.border = panel_border;
	mgmtComfortUGDiv.style.background = '';
	mgmtComfortUGDiv.id = 'mgmtComfortUGBox';
	mgmtComfortUGDiv.style.cssFloat = 'left';
	mgmtComfortUGDiv.style.color = 'red';
	mgmtComfortUGDiv.style.italics = true;
	
	var mgmtComfortUGBtn = document.createElement('button');
	mgmtComfortUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtComfortUGBtn.style.height = '30px';
	mgmtComfortUGBtn.onclick = function() { mgmtComfortUG() };

	var mgmtComfortUGT = document.createTextNode('Upgrade: $' + guesthouse.calc_comfort_ug_cost() );
	
	mgmtComfortUGBtn.appendChild(mgmtComfortUGT);
	mgmtComfortUGDiv.appendChild(mgmtComfortUGBtn);
	panelDiv.appendChild(mgmtComfortUGDiv);

};
	function mgmtComfortUG(){
		if (guesthouse.bank < guesthouse.calc_comfort_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.calc_comfort_ug_cost();
			guesthouse.msg = 'Comfort upgraded by one!';
			guesthouse.comfort += 1;
		}
		panelsGUIrefresh();
	}

//4
function createManagementQualityBox(){
	// Mgmt Quality Box
	var mgmtQualityDiv = document.createElement('div');
	mgmtQualityDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtQualityDiv.style.height = '30px';
	mgmtQualityDiv.style.border = panel_border;
	mgmtQualityDiv.style.background = '';
	mgmtQualityDiv.id = 'mgmtQualityBox';
	mgmtQualityDiv.style.cssFloat = 'left';
	mgmtQualityDiv.style.color = 'black';
	mgmtQualityDiv.style.fontWeight = 'bold';
	mgmtQualityDiv.style.textAlign = 'center';
	
	var mgmtQualityH = document.createElement('p');
	mgmtQualityH.style.padding = 0;
	mgmtQualityH.style.margin = 0;
	var mgmtQualityT = document.createTextNode('Guesthouse Quality: ' + guesthouse.quality );
	
	mgmtQualityH.appendChild(mgmtQualityT);
	mgmtQualityDiv.appendChild(mgmtQualityH);
	panelDiv.appendChild(mgmtQualityDiv);
	
};
function createManagementQualityUpgradeButton(){
	// Mgmt quality UG Button Box
	var mgmtQualityUGDiv = document.createElement('div');
	mgmtQualityUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtQualityUGDiv.style.height = '30px';
	mgmtQualityUGDiv.style.border = panel_border;
	mgmtQualityUGDiv.style.background = '';
	mgmtQualityUGDiv.id = 'mgmtQualityUGBox';
	mgmtQualityUGDiv.style.cssFloat = 'left';
	mgmtQualityUGDiv.style.color = 'red';
	mgmtQualityUGDiv.style.italics = true;
	
	var mgmtQualityUGBtn = document.createElement('button');
	mgmtQualityUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtQualityUGBtn.style.height = '30px';
	mgmtQualityUGBtn.onclick = function() { mgmtQualityUG() };

	var mgmtQualityUGT = document.createTextNode('Upgrade: $' + guesthouse.calc_quality_ug_cost() );
	
	mgmtQualityUGBtn.appendChild(mgmtQualityUGT);
	mgmtQualityUGDiv.appendChild(mgmtQualityUGBtn);
	panelDiv.appendChild(mgmtQualityUGDiv);

};
	function mgmtQualityUG(){
		if (guesthouse.bank < guesthouse.calc_quality_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.calc_quality_ug_cost();
			guesthouse.msg = 'Quality upgraded by one!';
			guesthouse.quality += 1;
		}
		panelsGUIrefresh();
	}

//5
function createManagementFacilitiesBox(){
	// Mgmt Quality Box
	var mgmtFacilitiesDiv = document.createElement('div');
	mgmtFacilitiesDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtFacilitiesDiv.style.height = '30px';
	mgmtFacilitiesDiv.style.border = panel_border;
	mgmtFacilitiesDiv.style.background = '';
	mgmtFacilitiesDiv.id = 'mgmtFacilitiesBox';
	mgmtFacilitiesDiv.style.cssFloat = 'left';
	mgmtFacilitiesDiv.style.color = 'black';
	mgmtFacilitiesDiv.style.fontWeight = 'bold';
	mgmtFacilitiesDiv.style.textAlign = 'center';
	
	var mgmtFacilitiesH = document.createElement('p');
	mgmtFacilitiesH.style.padding = 0;
	mgmtFacilitiesH.style.margin = 0;
	var mgmtFacilitiesT = document.createTextNode('Guesthouse Facilities: ' + guesthouse.facilities );
	
	mgmtFacilitiesH.appendChild(mgmtFacilitiesT);
	mgmtFacilitiesDiv.appendChild(mgmtFacilitiesH);
	panelDiv.appendChild(mgmtFacilitiesDiv);
	
};
function createManagementFaciltiesUpgradeButton(){
	// Mgmt Facilities UG Button Box
	var mgmtFacilitiesUGDiv = document.createElement('div');
	mgmtFacilitiesUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtFacilitiesUGDiv.style.height = '30px';
	mgmtFacilitiesUGDiv.style.border = panel_border;
	mgmtFacilitiesUGDiv.style.background = '';
	mgmtFacilitiesUGDiv.id = 'mgmtFacilitiesUGBox';
	mgmtFacilitiesUGDiv.style.cssFloat = 'left';
	mgmtFacilitiesUGDiv.style.color = 'red';
	mgmtFacilitiesUGDiv.style.italics = true;
	
	var mgmtFacilitiesUGBtn = document.createElement('button');
	mgmtFacilitiesUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtFacilitiesUGBtn.style.height = '30px';
	mgmtFacilitiesUGBtn.onclick = function() { mgmtFacilitiesUG() };

	var mgmtFacilitiesUGT = document.createTextNode('Upgrade: $' + guesthouse.calc_facilities_ug_cost() );
	
	mgmtFacilitiesUGBtn.appendChild(mgmtFacilitiesUGT);
	mgmtFacilitiesUGDiv.appendChild(mgmtFacilitiesUGBtn);
	panelDiv.appendChild(mgmtFacilitiesUGDiv);

};
	function mgmtFacilitiesUG(){
		if (guesthouse.bank < guesthouse.calc_facilities_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.calc_facilities_ug_cost();
			guesthouse.msg = 'Facilities upgraded by one!';
			guesthouse.facilities += 1;
		}
		panelsGUIrefresh();
	}

//6
function createManagementRoomsBox(){
	// Mgmt Rooms Box
	var mgmtRoomsDiv = document.createElement('div');
	mgmtRoomsDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtRoomsDiv.style.height = '30px';
	mgmtRoomsDiv.style.border = panel_border;
	mgmtRoomsDiv.style.background = '';
	mgmtRoomsDiv.id = 'mgmtRoomsBox';
	mgmtRoomsDiv.style.cssFloat = 'left';
	mgmtRoomsDiv.style.color = 'black';
	mgmtRoomsDiv.style.fontWeight = 'bold';
	mgmtRoomsDiv.style.textAlign = 'center';
	
	var mgmtRoomsH = document.createElement('p');
	mgmtRoomsH.style.padding = 0;
	mgmtRoomsH.style.margin = 0;
	var mgmtRoomsT = document.createTextNode('Guesthouse Rooms: ' + guesthouse.room_count );
	
	mgmtRoomsH.appendChild(mgmtRoomsT);
	mgmtRoomsDiv.appendChild(mgmtRoomsH);
	panelDiv.appendChild(mgmtRoomsDiv);
	
};
function createManagementBuyRoomButton(){
	// Mgmt Facilities UG Button Box
	var mgmtRoomsUGDiv = document.createElement('div');
	mgmtRoomsUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtRoomsUGDiv.style.height = '30px';
	mgmtRoomsUGDiv.style.border = panel_border;
	mgmtRoomsUGDiv.style.background = '';
	mgmtRoomsUGDiv.id = 'mgmtRoomsUGBox';
	mgmtRoomsUGDiv.style.cssFloat = 'left';
	mgmtRoomsUGDiv.style.color = 'red';
	mgmtRoomsUGDiv.style.italics = true;
	
	var mgmtRoomsUGBtn = document.createElement('button');
	mgmtRoomsUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtRoomsUGBtn.style.height = '30px';
	mgmtRoomsUGBtn.style.backgroundColor = 'red';
	mgmtRoomsUGBtn.style.color = 'white';
	mgmtRoomsUGBtn.onclick = function() { mgmtRoomsUG() };

	var mgmtRoomsUGT = document.createTextNode('Buy A Room: $' + guesthouse.calc_room_ug_cost() );
	
	mgmtRoomsUGBtn.appendChild(mgmtRoomsUGT);
	mgmtRoomsUGDiv.appendChild(mgmtRoomsUGBtn);
	panelDiv.appendChild(mgmtRoomsUGDiv);

};
	function mgmtRoomsUG(){
		if (guesthouse.bank < guesthouse.calc_room_ug_cost() ){
			guesthouse.msg = 'You cannot afford to buy a new room!';
		}else{
			guesthouse.bank -= guesthouse.calc_room_ug_cost();
			guesthouse.msg = 'New room added!';
			guesthouse.room_count += 1;
			var new_room = Object.create(default_room);
			firstName = room_name_intros[ Math.floor(Math.random() * room_name_intros.length)];
			lastName = room_name_outros[ Math.floor(Math.random() * room_name_outros.length)];
			new_room.name = firstName + ' ' + lastName;
			guesthouse.rooms.push(new_room);
		}
		panelsGUIrefresh();
	}

//7
function createManagementCostsHeadingBox(){
	// Mgmt Rooms Box
	var mgmtCostsDiv = document.createElement('div');
	mgmtCostsDiv.style.width = (panel_w - 5) + 'px';
	mgmtCostsDiv.style.height = '30px';
	mgmtCostsDiv.style.border = panel_border;
	mgmtCostsDiv.style.background = '';
	mgmtCostsDiv.id = 'mgmtCostsBox';
	mgmtCostsDiv.style.cssFloat = 'left';
	mgmtCostsDiv.style.color = 'red';
	mgmtCostsDiv.style.fontWeight = 'bolder';
	mgmtCostsDiv.style.textAlign = 'center';
	
	var mgmtCostsH = document.createElement('p');
	mgmtCostsH.style.padding = 0;
	mgmtCostsH.style.margin = 0;
	var mgmtCostsT = document.createTextNode('Costs Management');
	
	mgmtCostsH.appendChild(mgmtCostsT);
	mgmtCostsDiv.appendChild(mgmtCostsH);
	panelDiv.appendChild(mgmtCostsDiv);
	
};
//8
function createManagementBreakfastBox(){
		// Mgmt Rooms Box
	var mgmtBreakfastBoxDiv = document.createElement('div');
	mgmtBreakfastBoxDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtBreakfastBoxDiv.style.height = '30px';
	mgmtBreakfastBoxDiv.style.border = panel_border;
	mgmtBreakfastBoxDiv.style.background = '';
	mgmtBreakfastBoxDiv.id = 'mgmtBreakfastBoxBox';
	mgmtBreakfastBoxDiv.style.cssFloat = 'left';
	mgmtBreakfastBoxDiv.style.color = 'black';
	mgmtBreakfastBoxDiv.style.fontWeight = 'bold';
	mgmtBreakfastBoxDiv.style.textAlign = 'center';
	
	var mgmtBreakfastBoxH = document.createElement('p');
	mgmtBreakfastBoxH.style.padding = 0;
	mgmtBreakfastBoxH.style.margin = 0;
	bk_rate = guesthouse.breakfast_rate;
	
	if ( bk_rate.toString().indexOf('.') !== -1){
		bk_rate = bk_rate.toString() + '0';
	}
	var mgmtBreakfastBoxT = document.createTextNode('Breakfast: $' + bk_rate);
	
	mgmtBreakfastBoxH.appendChild(mgmtBreakfastBoxT);
	mgmtBreakfastBoxDiv.appendChild(mgmtBreakfastBoxH);
	panelDiv.appendChild(mgmtBreakfastBoxDiv);

};
function createManagementBreakfastSlider(){
	// Mgmt Breakfast Slider
	var mgmtBreakfastSliderDiv = document.createElement('div');
	mgmtBreakfastSliderDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtBreakfastSliderDiv.style.height = '30px';
	mgmtBreakfastSliderDiv.style.border = panel_border;
	mgmtBreakfastSliderDiv.style.background = '';
	mgmtBreakfastSliderDiv.id = 'mgmtBreakfastSliderBox';
	mgmtBreakfastSliderDiv.style.cssFloat = 'left';
	mgmtBreakfastSliderDiv.style.color = 'red';
	mgmtBreakfastSliderDiv.style.italics = true;
	
	var mgmtBreakfastSliderInput = document.createElement('input');
	mgmtBreakfastSliderInput.id = 'breakfastSliderInput';
	mgmtBreakfastSliderInput.setAttribute('type', 'range');
	mgmtBreakfastSliderInput.setAttribute('min', '1');
	mgmtBreakfastSliderInput.setAttribute('max', '10');
	mgmtBreakfastSliderInput.setAttribute('step', '0.10');
	mgmtBreakfastSliderInput.setAttribute('value', guesthouse.breakfast_rate);
	
	mgmtBreakfastSliderInput.style.width = Math.floor( (panel_w - 15) / 2) + 'px';
	mgmtBreakfastSliderInput.style.height = '25px';
	mgmtBreakfastSliderInput.style.padding = '2px';
	mgmtBreakfastSliderInput.onfocus = function() { eventFocusPause(); };
	mgmtBreakfastSliderInput.onblur = function() { resumeTimer() };
	mgmtBreakfastSliderInput.onchange = function() { mgmtBreakfastSlider( ) };

	mgmtBreakfastSliderDiv.appendChild(mgmtBreakfastSliderInput);
	panelDiv.appendChild(mgmtBreakfastSliderDiv);

};
	function mgmtBreakfastSlider(){
		breakfastSlider = document.getElementById('breakfastSliderInput');
		guesthouse.breakfast_rate = breakfastSlider.value;
		panelsGUIrefresh();
	}

//9
function createManagementCleaningBox(){
	// Mgmt Cleaning Box
	var mgmtCleaningBoxDiv = document.createElement('div');
	mgmtCleaningBoxDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtCleaningBoxDiv.style.height = '30px';
	mgmtCleaningBoxDiv.style.border = panel_border;
	mgmtCleaningBoxDiv.style.background = '';
	mgmtCleaningBoxDiv.id = 'mgmtCleaningBoxBox';
	mgmtCleaningBoxDiv.style.cssFloat = 'left';
	mgmtCleaningBoxDiv.style.color = 'black';
	mgmtCleaningBoxDiv.style.fontWeight = 'bold';
	mgmtCleaningBoxDiv.style.textAlign = 'center';
	
	var mgmtCleaningBoxH = document.createElement('p');
	mgmtCleaningBoxH.style.padding = 0;
	mgmtCleaningBoxH.style.margin = 0;
	cl_rate = guesthouse.cleaning_rate;
	
	if ( cl_rate.toString().indexOf('.') !== -1){
		cl_rate = cl_rate.toString() + '0';
	}
	var mgmtCleaningBoxT = document.createTextNode('Cleaning: $' + cl_rate);
	
	mgmtCleaningBoxH.appendChild(mgmtCleaningBoxT);
	mgmtCleaningBoxDiv.appendChild(mgmtCleaningBoxH);
	panelDiv.appendChild(mgmtCleaningBoxDiv);
	
};
function createManagementCleaningSlider(){
	var mgmtCleaningSliderDiv = document.createElement('div');
	mgmtCleaningSliderDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtCleaningSliderDiv.style.height = '30px';
	mgmtCleaningSliderDiv.style.border = panel_border;
	mgmtCleaningSliderDiv.style.background = '';
	mgmtCleaningSliderDiv.id = 'mgmtCleaningSliderBox';
	mgmtCleaningSliderDiv.style.cssFloat = 'left';
	mgmtCleaningSliderDiv.style.color = 'red';
	mgmtCleaningSliderDiv.style.italics = true;
	
	var mgmtCleaningSliderInput = document.createElement('input');
	mgmtCleaningSliderInput.id = 'cleaningSliderInput';
	mgmtCleaningSliderInput.setAttribute('type', 'range');
	mgmtCleaningSliderInput.setAttribute('min', '1');
	mgmtCleaningSliderInput.setAttribute('max', '10');
	mgmtCleaningSliderInput.setAttribute('step', '0.10');
	mgmtCleaningSliderInput.setAttribute('value', guesthouse.cleaning_rate);
	
	mgmtCleaningSliderInput.style.width = Math.floor( (panel_w - 15) / 2) + 'px';
	mgmtCleaningSliderInput.style.height = '25px';
	mgmtCleaningSliderInput.style.padding = '2px';
	
	mgmtCleaningSliderInput.onfocus = function() { eventFocusPause(); };
	mgmtCleaningSliderInput.onblur = function() { resumeTimer() };
	mgmtCleaningSliderInput.onchange = function() { mgmtCleaningSlider( ) };

	mgmtCleaningSliderDiv.appendChild(mgmtCleaningSliderInput);
	panelDiv.appendChild(mgmtCleaningSliderDiv);

};
	function mgmtCleaningSlider(){
		cleaningSlider = document.getElementById('cleaningSliderInput');
		guesthouse.cleaning_rate = cleaningSlider.value;
		panelsGUIrefresh();
	}

//9
function createManagementMaintenanceBox(){
	// Mgmt Maintenance Box
	var mgmtMaintenanceBoxDiv = document.createElement('div');
	mgmtMaintenanceBoxDiv.style.width = (half_panel_w - 3) + 'px';
	mgmtMaintenanceBoxDiv.style.height = '30px';
	mgmtMaintenanceBoxDiv.style.border = panel_border;
	mgmtMaintenanceBoxDiv.style.background = '';
	mgmtMaintenanceBoxDiv.id = 'mgmtMaintenanceBoxBox';
	mgmtMaintenanceBoxDiv.style.cssFloat = 'left';
	mgmtMaintenanceBoxDiv.style.color = 'black';
	mgmtMaintenanceBoxDiv.style.fontWeight = 'bold';
	mgmtMaintenanceBoxDiv.style.textAlign = 'center';
	
	var mgmtMaintenanceBoxH = document.createElement('p');
	mgmtMaintenanceBoxH.style.padding = 0;
	mgmtMaintenanceBoxH.style.margin = 0;
	mt_rate = guesthouse.maintenance_rate;
	
	if ( mt_rate.toString().indexOf('.') !== -1){
		mt_rate = mt_rate.toString() + '0';
	}
	var mgmtMaintenanceBoxT = document.createTextNode('Maintenance: $' + mt_rate);
	
	mgmtMaintenanceBoxH.appendChild(mgmtMaintenanceBoxT);
	mgmtMaintenanceBoxDiv.appendChild(mgmtMaintenanceBoxH);
	panelDiv.appendChild(mgmtMaintenanceBoxDiv);
		
};
function createManagementMaintenanceSlider(){
	var mgmtMaintenanceSliderDiv = document.createElement('div');
	mgmtMaintenanceSliderDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	mgmtMaintenanceSliderDiv.style.height = '30px';
	mgmtMaintenanceSliderDiv.style.border = panel_border;
	mgmtMaintenanceSliderDiv.style.background = '';
	mgmtMaintenanceSliderDiv.id = 'mgmtMaintenanceSliderBox';
	mgmtMaintenanceSliderDiv.style.cssFloat = 'left';
	mgmtMaintenanceSliderDiv.style.color = 'red';
	mgmtMaintenanceSliderDiv.style.italics = true;
	
	var mgmtMaintenanceSliderInput = document.createElement('input');
	mgmtMaintenanceSliderInput.id = 'MaintenanceSliderInput';
	mgmtMaintenanceSliderInput.setAttribute('type', 'range');
	mgmtMaintenanceSliderInput.setAttribute('min', '1');
	mgmtMaintenanceSliderInput.setAttribute('max', '10');
	mgmtMaintenanceSliderInput.setAttribute('step', '0.10');
	mgmtMaintenanceSliderInput.setAttribute('value', guesthouse.maintenance_rate);
	
	mgmtMaintenanceSliderInput.style.width = Math.floor( (panel_w - 15) / 2) + 'px';
	mgmtMaintenanceSliderInput.style.height = '25px';
	mgmtMaintenanceSliderInput.style.padding = '2px';
	
	mgmtMaintenanceSliderInput.onfocus = function() { eventFocusPause(); };
	mgmtMaintenanceSliderInput.onblur = function() { resumeTimer() };
	mgmtMaintenanceSliderInput.onchange = function() { mgmtMaintenanceSlider( ) };

	mgmtMaintenanceSliderDiv.appendChild(mgmtMaintenanceSliderInput);
	panelDiv.appendChild(mgmtMaintenanceSliderDiv);

};
	function mgmtMaintenanceSlider(){
		MaintenanceSlider = document.getElementById('MaintenanceSliderInput');
		guesthouse.maintenance_rate = MaintenanceSlider.value;
		panelsGUIrefresh();
	}



// Guestbook Panel

//1
function createGuestbookHeaderBox(){
	
	// Guestbook Header Date Box
	var gbookHeaderDateBoxDiv = document.createElement('div');
	gbookHeaderDateBoxDiv.style.width = Math.floor( (half_panel_w - 2) / 4) + 'px';
	gbookHeaderDateBoxDiv.style.height = '30px';
	gbookHeaderDateBoxDiv.style.border = panel_border;
	gbookHeaderDateBoxDiv.style.background = '';
	gbookHeaderDateBoxDiv.id = 'gbookHeaderDateBoxBox';
	gbookHeaderDateBoxDiv.style.cssFloat = 'left';
	gbookHeaderDateBoxDiv.style.color = 'black';
	gbookHeaderDateBoxDiv.style.fontWeight = 'bold';
	gbookHeaderDateBoxDiv.style.textAlign = 'center';
	
	var gbookHeaderDateBoxH = document.createElement('p');
	gbookHeaderDateBoxH.style.padding = 0;
	gbookHeaderDateBoxH.style.margin = 0;
	var gbookHeaderDateBoxT = document.createTextNode('Date');
	
	gbookHeaderDateBoxH.appendChild(gbookHeaderDateBoxT);
	gbookHeaderDateBoxDiv.appendChild(gbookHeaderDateBoxH);
	panelDiv.appendChild(gbookHeaderDateBoxDiv);
	
	// Guestbook Header Name Box
	var gbookHeaderNameBoxDiv = document.createElement('div');
	gbookHeaderNameBoxDiv.style.width = Math.floor( (half_panel_w - 2) / 4) + 'px';
	gbookHeaderNameBoxDiv.style.height = '30px';
	gbookHeaderNameBoxDiv.style.border = panel_border;
	gbookHeaderNameBoxDiv.style.background = '';
	gbookHeaderNameBoxDiv.id = 'gbookHeaderNameBoxBox';
	gbookHeaderNameBoxDiv.style.cssFloat = 'left';
	gbookHeaderNameBoxDiv.style.color = 'black';
	gbookHeaderNameBoxDiv.style.fontWeight = 'bold';
	gbookHeaderNameBoxDiv.style.textAlign = 'center';
	
	var gbookHeaderNameBoxH = document.createElement('p');
	gbookHeaderNameBoxH.style.padding = 0;
	gbookHeaderNameBoxH.style.margin = 0;
	var gbookHeaderNameBoxT = document.createTextNode('Name');
	
	gbookHeaderNameBoxH.appendChild(gbookHeaderNameBoxT);
	gbookHeaderNameBoxDiv.appendChild(gbookHeaderNameBoxH);
	panelDiv.appendChild(gbookHeaderNameBoxDiv);

	// Guestbook Header Comments Box
	var gbookHeaderCommentsBoxDiv = document.createElement('div');
	gbookHeaderCommentsBoxDiv.style.width = Math.floor(( 5 * (panel_w - 10)) / 8 ) + 'px';
	gbookHeaderCommentsBoxDiv.style.height = '30px';
	gbookHeaderCommentsBoxDiv.style.border = panel_border;
	gbookHeaderCommentsBoxDiv.style.background = '';
	gbookHeaderCommentsBoxDiv.id = 'gbookHeaderCommentsBoxBox';
	gbookHeaderCommentsBoxDiv.style.cssFloat = 'left';
	gbookHeaderCommentsBoxDiv.style.color = 'black';
	gbookHeaderCommentsBoxDiv.style.fontWeight = 'bold';
	gbookHeaderCommentsBoxDiv.style.textAlign = 'center';
	
	var gbookHeaderCommentsBoxH = document.createElement('p');
	gbookHeaderCommentsBoxH.style.padding = 0;
	gbookHeaderCommentsBoxH.style.margin = 0;
	var gbookHeaderCommentsBoxT = document.createTextNode('Comments');
	
	gbookHeaderCommentsBoxH.appendChild(gbookHeaderCommentsBoxT);
	gbookHeaderCommentsBoxDiv.appendChild(gbookHeaderCommentsBoxH);
	panelDiv.appendChild(gbookHeaderCommentsBoxDiv);
	
	// Guestbook Header Rating Box
	var gbookHeaderRatingBoxDiv = document.createElement('div');
	gbookHeaderRatingBoxDiv.style.width = Math.floor( (half_panel_w - 2) / 4) + 'px';
	gbookHeaderRatingBoxDiv.style.height = '30px';
	gbookHeaderRatingBoxDiv.style.border = panel_border;
	gbookHeaderRatingBoxDiv.style.background = '';
	gbookHeaderRatingBoxDiv.id = 'gbookHeaderRatingBoxBox';
	gbookHeaderRatingBoxDiv.style.cssFloat = 'left';
	gbookHeaderRatingBoxDiv.style.color = 'black';
	gbookHeaderRatingBoxDiv.style.fontWeight = 'bold';
	gbookHeaderRatingBoxDiv.style.textAlign = 'center';
	
	var gbookHeaderRatingBoxH = document.createElement('p');
	gbookHeaderRatingBoxH.style.padding = 0;
	gbookHeaderRatingBoxH.style.margin = 0;
	var gbookHeaderRatingBoxT = document.createTextNode('Rating');
	
	gbookHeaderRatingBoxH.appendChild(gbookHeaderRatingBoxT);
	gbookHeaderRatingBoxDiv.appendChild(gbookHeaderRatingBoxH);
	panelDiv.appendChild(gbookHeaderRatingBoxDiv);
};

//2
function createGuestbookEntriesBox(){

	// NINE ROWS	
	var gbook_rows = 9;
	for (var i=0; i < gbook_rows; i++){
		if (i < guesthouse.rating_count){
			createGuestbookEntry(i);
		}else{
			break;
		}
	}

};

function createGuestbookEntry(entry){
	
	var this_rating = guesthouse.ratings[ guesthouse.rating_count - entry - 1];
	this_date = new Date(this_rating.date);
	rating_date = this_date.getDate() + '/' + (this_date.getMonth() + 1) + '/' + this_date.getFullYear();
	rating_name = this_rating.name;
	rating_comments = this_rating.comments;
	rating_value = this_rating.rating;
	
	// Guestbook Header Date Box
	var gbookHeaderDateBoxDiv = document.createElement('div');
	gbookHeaderDateBoxDiv.style.width = Math.floor( (half_panel_w - 2) / 4) + 'px';
	gbookHeaderDateBoxDiv.style.height = '30px';
	gbookHeaderDateBoxDiv.style.border = panel_border;
	gbookHeaderDateBoxDiv.style.background = '';
	gbookHeaderDateBoxDiv.id = 'gbookHeaderDateEntry' + entry;
	gbookHeaderDateBoxDiv.style.cssFloat = 'left';
	gbookHeaderDateBoxDiv.style.color = 'black';
	gbookHeaderDateBoxDiv.style.fontWeight = 'bold';
	gbookHeaderDateBoxDiv.style.textAlign = 'left';
	
	var gbookHeaderDateBoxH = document.createElement('p');
	gbookHeaderDateBoxH.style.padding = 0;
	gbookHeaderDateBoxH.style.margin = 0;
	var gbookHeaderDateBoxT = document.createTextNode(rating_date);
	
	gbookHeaderDateBoxH.appendChild(gbookHeaderDateBoxT);
	gbookHeaderDateBoxDiv.appendChild(gbookHeaderDateBoxH);
	panelDiv.appendChild(gbookHeaderDateBoxDiv);
	
	// Guestbook Header Name Box
	var gbookHeaderNameBoxDiv = document.createElement('div');
	gbookHeaderNameBoxDiv.style.width = Math.floor( (half_panel_w - 2) / 4) + 'px';
	gbookHeaderNameBoxDiv.style.height = '30px';
	gbookHeaderNameBoxDiv.style.border = panel_border;
	gbookHeaderNameBoxDiv.style.background = '';
	gbookHeaderNameBoxDiv.id = 'gbookHeaderNameEntry' + entry;
	gbookHeaderNameBoxDiv.style.cssFloat = 'left';
	gbookHeaderNameBoxDiv.style.color = 'black';
	gbookHeaderNameBoxDiv.style.fontWeight = 'bold';
	gbookHeaderNameBoxDiv.style.textAlign = 'left';
	
	var gbookHeaderNameBoxH = document.createElement('p');
	gbookHeaderNameBoxH.style.padding = 0;
	gbookHeaderNameBoxH.style.margin = 0;
	var gbookHeaderNameBoxT = document.createTextNode(rating_name);
	
	gbookHeaderNameBoxH.appendChild(gbookHeaderNameBoxT);
	gbookHeaderNameBoxDiv.appendChild(gbookHeaderNameBoxH);
	panelDiv.appendChild(gbookHeaderNameBoxDiv);

	// Guestbook Header Comments Box
	var gbookHeaderCommentsBoxDiv = document.createElement('div');
	gbookHeaderCommentsBoxDiv.style.width = Math.floor(( 5 * (panel_w - 10)) / 8 ) + 'px';
	gbookHeaderCommentsBoxDiv.style.height = '30px';
	gbookHeaderCommentsBoxDiv.style.border = panel_border;
	gbookHeaderCommentsBoxDiv.style.background = '';
	gbookHeaderCommentsBoxDiv.id = 'gbookHeaderCommentsEntry' + entry;
	gbookHeaderCommentsBoxDiv.style.cssFloat = 'left';
	gbookHeaderCommentsBoxDiv.style.color = 'black';
	gbookHeaderCommentsBoxDiv.style.fontWeight = 'bold';
	gbookHeaderCommentsBoxDiv.style.textAlign = 'left';
	gbookHeaderCommentsBoxDiv.style.overflow = 'hidden';
	
	var gbookHeaderCommentsBoxH = document.createElement('p');
	gbookHeaderCommentsBoxH.style.padding = 0;
	gbookHeaderCommentsBoxH.style.margin = 0;
	var gbookHeaderCommentsBoxT = document.createTextNode(rating_comments);
	
	gbookHeaderCommentsBoxH.appendChild(gbookHeaderCommentsBoxT);
	gbookHeaderCommentsBoxDiv.appendChild(gbookHeaderCommentsBoxH);
	panelDiv.appendChild(gbookHeaderCommentsBoxDiv);
	
	// Guestbook Header Rating Box
	var gbookHeaderRatingBoxDiv = document.createElement('div');
	gbookHeaderRatingBoxDiv.style.width = Math.floor( (half_panel_w - 2) / 4) + 'px';
	gbookHeaderRatingBoxDiv.style.height = '30px';
	gbookHeaderRatingBoxDiv.style.border = panel_border;
	gbookHeaderRatingBoxDiv.style.background = '';
	gbookHeaderRatingBoxDiv.id = 'gbookHeaderRatingEntry' + entry;
	gbookHeaderRatingBoxDiv.style.cssFloat = 'left';
	gbookHeaderRatingBoxDiv.style.color = 'black';
	gbookHeaderRatingBoxDiv.style.fontWeight = 'bold';
	gbookHeaderRatingBoxDiv.style.textAlign = 'left';
	
	var gbookHeaderRatingBoxH = document.createElement('p');
	gbookHeaderRatingBoxH.style.padding = 0;
	gbookHeaderRatingBoxH.style.margin = 0;
	var gbookHeaderRatingBoxT = document.createTextNode(rating_value);
	
	gbookHeaderRatingBoxH.appendChild(gbookHeaderRatingBoxT);
	gbookHeaderRatingBoxDiv.appendChild(gbookHeaderRatingBoxH);
	panelDiv.appendChild(gbookHeaderRatingBoxDiv);
	
};

// Room panel

//1
function createRoomOverallBox(){
	// roomPanel Overall Box
	var roomPanelOverallDiv = document.createElement('div');
	roomPanelOverallDiv.style.width = (panel_w - 5) + 'px';
	roomPanelOverallDiv.style.height = '30px';
	roomPanelOverallDiv.style.border = panel_border;
	roomPanelOverallDiv.style.background = '';
	roomPanelOverallDiv.style.margin = 0;
	roomPanelOverallDiv.style.padding = 0;
	roomPanelOverallDiv.id = 'roomPanelOverallBox';
	roomPanelOverallDiv.style.cssFloat = 'left';
	roomPanelOverallDiv.style.color = 'red';
	roomPanelOverallDiv.style.fontWeight = 'bolder';
	roomPanelOverallDiv.style.textAlign = 'center';
	
	var roomPanelOverallH = document.createElement('p');
	roomPanelOverallH.style.padding = 0;
	roomPanelOverallH.style.margin = 0;
	var roomPanelOverallT = document.createTextNode('ROOM OVERALL: ' + guesthouse.rooms[roomNum].calc_overall() );
	
	roomPanelOverallH.appendChild(roomPanelOverallT);
	roomPanelOverallDiv.appendChild(roomPanelOverallH);
	panelDiv.appendChild(roomPanelOverallDiv);

};
//2
function createRoomStyleBox(){
	// Room Style Box
	var roomPanelStyleDiv = document.createElement('div');
	roomPanelStyleDiv.style.width = (half_panel_w - 2) + 'px';
	roomPanelStyleDiv.style.height = '30px';
	roomPanelStyleDiv.style.border = panel_border;
	roomPanelStyleDiv.style.background = '';
	roomPanelStyleDiv.style.margin = 0;
	roomPanelStyleDiv.style.padding = 0;
	roomPanelStyleDiv.id = 'roomPanelStyleBox';
	roomPanelStyleDiv.style.cssFloat = 'left';
	roomPanelStyleDiv.style.color = 'black';
	roomPanelStyleDiv.style.fontWeight = 'bolder';
	roomPanelStyleDiv.style.textAlign = 'center';
	
	var roomPanelStyleH = document.createElement('p');
	roomPanelStyleH.style.padding = 0;
	roomPanelStyleH.style.margin = 0;
	var roomPanelStyleT = document.createTextNode('Room Style: ' + guesthouse.rooms[roomNum].style );
	
	roomPanelStyleH.appendChild(roomPanelStyleT);
	roomPanelStyleDiv.appendChild(roomPanelStyleH);
	panelDiv.appendChild(roomPanelStyleDiv);

};
function createRoomStyleUpgradeButton(){
	// Room Style UG Button Box
	var roomStyleUGDiv = document.createElement('div');
	roomStyleUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomStyleUGDiv.style.height = '30px';
	roomStyleUGDiv.style.border = panel_border;
	roomStyleUGDiv.style.background = '';
	roomStyleUGDiv.id = 'roomStyleUGBox';
	roomStyleUGDiv.style.cssFloat = 'left';
	roomStyleUGDiv.style.color = 'black';
	roomStyleUGDiv.style.italics = true;
	
	var roomStyleUGBtn = document.createElement('button');
	roomStyleUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomStyleUGBtn.style.height = '30px';
	roomStyleUGBtn.onclick = function() { roomStyleUG() };

	var roomStyleUGT = document.createTextNode('Upgrade: $' + guesthouse.rooms[roomNum].calc_style_ug_cost() );
	
	roomStyleUGBtn.appendChild(roomStyleUGT);
	roomStyleUGDiv.appendChild(roomStyleUGBtn);
	panelDiv.appendChild(roomStyleUGDiv);

};
	function roomStyleUG(){
		if (guesthouse.bank < guesthouse.rooms[roomNum].calc_style_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.rooms[roomNum].calc_style_ug_cost();
			guesthouse.msg = 'Room style upgraded by one!';
			guesthouse.rooms[roomNum].style += 1;
		}
		panelsGUIrefresh();
	};

//3
function createRoomComfortBox(){
	
	// Room Style Box
	var roomPanelComfortDiv = document.createElement('div');
	roomPanelComfortDiv.style.width = (half_panel_w - 2) + 'px';
	roomPanelComfortDiv.style.height = '30px';
	roomPanelComfortDiv.style.border = panel_border;
	roomPanelComfortDiv.style.background = '';
	roomPanelComfortDiv.style.margin = 0;
	roomPanelComfortDiv.style.padding = 0;
	roomPanelComfortDiv.id = 'roomPanelComfortBox';
	roomPanelComfortDiv.style.cssFloat = 'left';
	roomPanelComfortDiv.style.color = 'black';
	roomPanelComfortDiv.style.fontWeight = 'bolder';
	roomPanelComfortDiv.style.textAlign = 'center';
	
	var roomPanelComfortH = document.createElement('p');
	roomPanelComfortH.style.padding = 0;
	roomPanelComfortH.style.margin = 0;
	var roomPanelComfortT = document.createTextNode('Room Comfort: ' + guesthouse.rooms[roomNum].comfort );
	
	roomPanelComfortH.appendChild(roomPanelComfortT);
	roomPanelComfortDiv.appendChild(roomPanelComfortH);
	panelDiv.appendChild(roomPanelComfortDiv);

};
function createRoomComfortUpgradeButton(){
	// Room Style UG Button Box
	var roomComfortUGDiv = document.createElement('div');
	roomComfortUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomComfortUGDiv.style.height = '30px';
	roomComfortUGDiv.style.border = panel_border;
	roomComfortUGDiv.style.background = '';
	roomComfortUGDiv.id = 'roomComfortUGBox';
	roomComfortUGDiv.style.cssFloat = 'left';
	roomComfortUGDiv.style.color = 'black';
	roomComfortUGDiv.style.italics = true;
	
	var roomComfortUGBtn = document.createElement('button');
	roomComfortUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomComfortUGBtn.style.height = '30px';
	roomComfortUGBtn.onclick = function() { roomComfortUG() };

	var roomComfortUGT = document.createTextNode('Upgrade: $' + guesthouse.rooms[roomNum].calc_comfort_ug_cost() );
	
	roomComfortUGBtn.appendChild(roomComfortUGT);
	roomComfortUGDiv.appendChild(roomComfortUGBtn);
	panelDiv.appendChild(roomComfortUGDiv);

};
	function roomComfortUG(){
		if (guesthouse.bank < guesthouse.rooms[roomNum].calc_comfort_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.rooms[roomNum].calc_comfort_ug_cost();
			guesthouse.msg = 'Room comfort upgraded by one!';
			guesthouse.rooms[roomNum].comfort += 1;
		}
		panelsGUIrefresh();
	};

	
//4
function createRoomQualityBox(){
	// Room Quality Box
	var roomPanelQualityDiv = document.createElement('div');
	roomPanelQualityDiv.style.width = (half_panel_w - 2) + 'px';
	roomPanelQualityDiv.style.height = '30px';
	roomPanelQualityDiv.style.border = panel_border;
	roomPanelQualityDiv.style.background = '';
	roomPanelQualityDiv.style.margin = 0;
	roomPanelQualityDiv.style.padding = 0;
	roomPanelQualityDiv.id = 'roomPanelQualityBox';
	roomPanelQualityDiv.style.cssFloat = 'left';
	roomPanelQualityDiv.style.color = 'black';
	roomPanelQualityDiv.style.fontWeight = 'bolder';
	roomPanelQualityDiv.style.textAlign = 'center';
	
	var roomPanelQualityH = document.createElement('p');
	roomPanelQualityH.style.padding = 0;
	roomPanelQualityH.style.margin = 0;
	var roomPanelQualityT = document.createTextNode('Room Quality: ' + guesthouse.rooms[roomNum].quality );
	
	roomPanelQualityH.appendChild(roomPanelQualityT);
	roomPanelQualityDiv.appendChild(roomPanelQualityH);
	panelDiv.appendChild(roomPanelQualityDiv);

};
function createRoomQualityUpgradeButton(){
	// Room Style UG Button Box
	var roomQualityUGDiv = document.createElement('div');
	roomQualityUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomQualityUGDiv.style.height = '30px';
	roomQualityUGDiv.style.border = panel_border;
	roomQualityUGDiv.style.background = '';
	roomQualityUGDiv.id = 'roomQualityUGBox';
	roomQualityUGDiv.style.cssFloat = 'left';
	roomQualityUGDiv.style.color = 'red';
	roomQualityUGDiv.style.italics = true;
	
	var roomQualityUGBtn = document.createElement('button');
	roomQualityUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomQualityUGBtn.style.height = '30px';
	roomQualityUGBtn.onclick = function() { roomQualityUG() };

	var roomQualityUGT = document.createTextNode('Upgrade: $' + guesthouse.rooms[roomNum].calc_quality_ug_cost() );
	
	roomQualityUGBtn.appendChild(roomQualityUGT);
	roomQualityUGDiv.appendChild(roomQualityUGBtn);
	panelDiv.appendChild(roomQualityUGDiv);

};
	function roomQualityUG(){
		if (guesthouse.bank < guesthouse.rooms[roomNum].calc_quality_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.rooms[roomNum].calc_quality_ug_cost();
			guesthouse.msg = 'Room quality upgraded by one!';
			guesthouse.rooms[roomNum].quality += 1;
		}
		panelsGUIrefresh();
	};
//5
function createRoomFacilitiesBox(){
	// Room Facilities Box
	var roomPanelFacilitiesDiv = document.createElement('div');
	roomPanelFacilitiesDiv.style.width = (half_panel_w - 2) + 'px';
	roomPanelFacilitiesDiv.style.height = '30px';
	roomPanelFacilitiesDiv.style.border = panel_border;
	roomPanelFacilitiesDiv.style.background = '';
	roomPanelFacilitiesDiv.style.margin = 0;
	roomPanelFacilitiesDiv.style.padding = 0;
	roomPanelFacilitiesDiv.id = 'roomPanelFacilitiesBox';
	roomPanelFacilitiesDiv.style.cssFloat = 'left';
	roomPanelFacilitiesDiv.style.color = 'black';
	roomPanelFacilitiesDiv.style.fontWeight = 'bolder';
	roomPanelFacilitiesDiv.style.textAlign = 'center';
	
	var roomPanelFacilitiesH = document.createElement('p');
	roomPanelFacilitiesH.style.padding = 0;
	roomPanelFacilitiesH.style.margin = 0;
	var roomPanelFacilitiesT = document.createTextNode('Room Facilities: ' + guesthouse.rooms[roomNum].facilities );
	
	roomPanelFacilitiesH.appendChild(roomPanelFacilitiesT);
	roomPanelFacilitiesDiv.appendChild(roomPanelFacilitiesH);
	panelDiv.appendChild(roomPanelFacilitiesDiv);

};
function createRoomFacilitiesUpgradeButton(){
	// Room Facilities UG Button Box
	var roomFacilitiesUGDiv = document.createElement('div');
	roomFacilitiesUGDiv.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomFacilitiesUGDiv.style.height = '30px';
	roomFacilitiesUGDiv.style.border = panel_border;
	roomFacilitiesUGDiv.style.background = '';
	roomFacilitiesUGDiv.id = 'roomFacilitiesUGBox';
	roomFacilitiesUGDiv.style.cssFloat = 'left';
	roomFacilitiesUGDiv.style.color = 'red';
	roomFacilitiesUGDiv.style.italics = true;
	
	var roomFacilitiesUGBtn = document.createElement('button');
	roomFacilitiesUGBtn.style.width = Math.floor( (panel_w - 2) / 2) + 'px';
	roomFacilitiesUGBtn.style.height = '30px';
	roomFacilitiesUGBtn.onclick = function() { roomFacilitiesUG() };

	var roomFacilitiesUGT = document.createTextNode('Upgrade: $' + guesthouse.rooms[roomNum].calc_facilities_ug_cost() );
	
	roomFacilitiesUGBtn.appendChild(roomFacilitiesUGT);
	roomFacilitiesUGDiv.appendChild(roomFacilitiesUGBtn);
	panelDiv.appendChild(roomFacilitiesUGDiv);

};
	function roomFacilitiesUG(){
		if (guesthouse.bank < guesthouse.rooms[roomNum].calc_facilities_ug_cost() ){
			guesthouse.msg = 'You cannot afford this upgrade!';
		}else{
			guesthouse.bank -= guesthouse.rooms[roomNum].calc_facilities_ug_cost();
			guesthouse.msg = 'Room facilities upgraded by one!';
			guesthouse.rooms[roomNum].facilities += 1;
		}
		panelsGUIrefresh();
	};
	
//6
function createRoomEarningsBox(){
		// roomPanel Earnings Box
	var roomPanelEarningsDiv = document.createElement('div');
	roomPanelEarningsDiv.style.width = (panel_w - 5) + 'px';
	roomPanelEarningsDiv.style.height = '30px';
	roomPanelEarningsDiv.style.border = panel_border;
	roomPanelEarningsDiv.style.background = '';
	roomPanelEarningsDiv.style.margin = 0;
	roomPanelEarningsDiv.style.padding = 0;
	roomPanelEarningsDiv.id = 'roomPanelEarningsBox';
	roomPanelEarningsDiv.style.cssFloat = 'left';
	roomPanelEarningsDiv.style.color = 'green';
	roomPanelEarningsDiv.style.fontWeight = 'bolder';
	roomPanelEarningsDiv.style.textAlign = 'center';
	
	var roomPanelEarningsH = document.createElement('p');
	roomPanelEarningsH.style.padding = 0;
	roomPanelEarningsH.style.margin = 0;
	var roomPanelEarningsT = document.createTextNode('Room Earnings: $' + guesthouse.rooms[roomNum].calc_rate().toFixed(2) + ' per night' );
	
	roomPanelEarningsH.appendChild(roomPanelEarningsT);
	roomPanelEarningsDiv.appendChild(roomPanelEarningsH);
	panelDiv.appendChild(roomPanelEarningsDiv);

};
function createRoomCostsBox(){
		// roomPanel Costs Box
	var roomPanelCostsDiv = document.createElement('div');
	roomPanelCostsDiv.style.width = (panel_w - 5) + 'px';
	roomPanelCostsDiv.style.height = '30px';
	roomPanelCostsDiv.style.border = panel_border;
	roomPanelCostsDiv.style.background = '';
	roomPanelCostsDiv.style.margin = 0;
	roomPanelCostsDiv.style.padding = 0;
	roomPanelCostsDiv.id = 'roomPanelCostsBox';
	roomPanelCostsDiv.style.cssFloat = 'left';
	roomPanelCostsDiv.style.color = 'red';
	roomPanelCostsDiv.style.fontWeight = 'bolder';
	roomPanelCostsDiv.style.textAlign = 'center';
	
	var roomPanelCostsH = document.createElement('p');
	roomPanelCostsH.style.padding = 0;
	roomPanelCostsH.style.margin = 0;
	var roomPanelCostsT = document.createTextNode('Room Costs: $' + (guesthouse.calc_costs() / guesthouse.room_count).toFixed(2) + ' per night' );
	
	roomPanelCostsH.appendChild(roomPanelCostsT);
	roomPanelCostsDiv.appendChild(roomPanelCostsH);
	panelDiv.appendChild(roomPanelCostsDiv);


};
