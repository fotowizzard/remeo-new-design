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
