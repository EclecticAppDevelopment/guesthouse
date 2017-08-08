
function createGuesthouseGUI(){

	panel_border_w = 1;
	panel_border = panel_border_w + 'px solid black';
	panel_w = view_w - (panel_border_w * 2);
	half_panel_w = Math.floor(panel_w / 2) - (panel_border_w * 2);
	panel_font_size = '20';
	panel_font_name = 'Arial';
	panel_font = panel_font_size + 'px ' + panel_font_name;
	panel_font_color = 'white';
	// Top Panel
	top_panel_h = Math.floor(view_h / 3) - (panel_border_w * 2);
		desc_w = Math.floor(view_w / 4);
		star_w = Math.floor(view_w / 4);
		
	// Bottom Panel
	btm_panel_h = view_h - top_panel_h;
		//var 
	
	createTopPanel();
	
	createBtmPanel(current_panel);

}

function createCSSstyleBlock(){

	var cssBlock = document.createElement('style');
	cssBlock.type = 'text/css';
	
	var cssText = '@keyframes timer { 0%{width: 0px; background-color: green;} 25%{width: 20%; background-color: lime;} 50%{width: 40%; background-color: yellow;} 75%{width: 60%; background-color: orange;} 100%{width: 100%; background-color: red;} }';
	
	var cssT = document.createTextNode(cssText);
	
	cssBlock.appendChild(cssT);
	document.getElementById('main').appendChild(cssBlock);
}

function clearGUI(){
	
	var main = document.getElementById('main');
	var current_gui = document.getElementById('gui');
	if (current_gui.parentNode === main){
		current_gui.parentNode.removeChild(current_gui);
		var new_gui = document.createElement('div');
		new_gui.id = 'gui';
		main.appendChild(new_gui);
	}
}

function panelsGUIrefresh(){
	clearGUI();
	createGuesthouseGUI();
}

function createTopPanel(){
	
	// Main Panel	
	gui = document.getElementById('gui');
	
	panelDiv = document.createElement('div');
	panelDiv.style.width = (panel_w-4) + 'px';
	//panelDiv.style.height = top_panel_h + 'px';
	panelDiv.style.border = '';
	panelDiv.style.background = '';
	panelDiv.style.margin = 0;
	panelDiv.style.padding = 0;
	panelDiv.style.lineHeight = 0.5;
	panelDiv.style.font = panel_font;
	panelDiv.color = panel_font_color;
	//panelDiv.style.float = 'left';
	panelDiv.id = 'topPanel';
	
	gui.appendChild(panelDiv);
	
	createNameBox();
	createDateBox();
	
	createRoomsBox();
	createBankBox();
	
	createCostsBox();
	createEarningsBox();
	
	createStyleBox();
	createQualityBox();
	
	createComfortBox();
	createFacilitiesBox();
	
	createRatingBox();
	createOverallBox();
	
	createMsgBox();
}

function createBtmPanel(){
	
	// Main Panel	
	gui = document.getElementById('gui');
	
	panelDiv = document.createElement('div');
	panelDiv.style.width = panel_w + 'px';
	//panelDiv.style.height = top_panel_h + 'px';
	panelDiv.style.border = panel_border;
	panelDiv.style.background = '';
	panelDiv.style.margin = 0;
	panelDiv.style.padding = 0;
	panelDiv.style.lineHeight = 0.5;
	panelDiv.style.font = panel_font;
	panelDiv.color = panel_font_color;
	//panelDiv.style.float = 'left';
	panelDiv.id = 'btmPanel';
	
	gui.appendChild(panelDiv);
	if (current_panel >= panels.length){
		// Panel is a room!
		roomNum = current_panel - panels.length;
		// From RoomNum 0 -> rooms.length
		panelName = guesthouse.rooms[roomNum].name;
	}else{
		// Named Panel
		panelName = panels[current_panel];
	}
	
	// Top line
	// <- Prev Panel		ThisPanelName		Next Panel ->
	createPrevPanelButton();
	createPanelNameBox();
	createNextPanelButton();
	
	// 10 more rows in bottom panel
	
	//Switch depending on current panelDiv
	switch (current_panel){
		case 0:
			// Management panel
			// 1
			createManagementOverallBox();
			//2
			createManagementStyleBox();
			createManagementStyleUpgradeButton();
			//3
			createManagementComfortBox();
			createManagementComfortUpgradeButton();
			//4
			createManagementQualityBox();
			createManagementQualityUpgradeButton();
			//5
			createManagementFacilitiesBox();
			createManagementFaciltiesUpgradeButton();
			//6
			createManagementRoomsBox();
			createManagementBuyRoomButton();
			//7
			createManagementCostsHeadingBox();
			//8
			createManagementBreakfastBox();
			createManagementBreakfastSlider();
			//9
			createManagementCleaningBox();
			createManagementCleaningSlider();
			//9
			createManagementMaintenanceBox();
			createManagementMaintenanceSlider();
			break;
		
		case 1:
			// Guestbook Panel
			
			//1
			createGuestbookHeaderBox();
			
			//2
			createGuestbookEntriesBox();
			break;
			
		default:
			// Room panel
			
			//1
			createRoomOverallBox();
			//2
			createRoomStyleBox();
			createRoomStyleUpgradeButton();
			//3
			createRoomComfortBox();
			createRoomComfortUpgradeButton();
			//4
			createRoomQualityBox();
			createRoomQualityUpgradeButton();
			//5
			createRoomFacilitiesBox();
			createRoomFacilitiesUpgradeButton();
			//6
			createRoomEarningsBox();
			createRoomCostsBox();
			break;
	}
}
