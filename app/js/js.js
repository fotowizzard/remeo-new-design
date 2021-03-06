function getKRPano() {
  window.krpano = document.getElementById('krpanoSWFObject');
}

function setKRPanoConsole(height, fontSize) {
  krpano.childNodes[1].style.top = '-1px';
  krpano.childNodes[1].style.bottom = '0';
  krpano.childNodes[1].style.height = +height + 12 + 'px';

  krpano.childNodes[1].childNodes[1].style.fontSize = +fontSize + 'px';
  krpano.childNodes[1].childNodes[1].style.lineHeight = '1.4';
  krpano.childNodes[1].childNodes[1].style.whiteSpace = 'pre-wrap';
  krpano.childNodes[1].childNodes[1].style.height = +height + 'px';
}
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

	console.log(krpano.currentFloorButton);

	krpano.call(`set_floor(${floor})`);
}
