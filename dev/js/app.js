function initFloors() {
	const mapFloors = krpano.get(`map_floor`).getArray();
	const krpanoFloorsLayer = krpano.get(`layer[map__floors]`);

	krpanoFloorsLayer.html = `
		<span class="floor-title">Floor</span>
	`;

	for (let i = 0; i < mapFloors.length; i++) {
		krpanoFloorsLayer.html += `
			<span class="floor-button" id="floor-button-${i + 1}" onclick="floorButtonClick(this.id, ${i + 1})">${i + 1}</span>
		`;
	}
}

function floorButtonClick(id, floor) {

	const e = document.getElementById(id);

	if (krpano.currentFloorButton) {
		krpano.currentFloorButton.className = 'floor-button';
	}

	krpano.currentFloorButton = e;
	krpano.currentFloorButton.className = 'floor-button active';

	krpano.call(`set_floor(${floor})`);
}
