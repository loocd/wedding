let map;

async function initMap() {
	const position = { lat: 47.67524, lng: 8.7857 };
	const { Map, InfoWindow } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
		"marker"
	);
	const parser = new DOMParser();
	const pinSvgString =
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="map__pin"><path id="map__pin-background" d="M 192,0 C 86.000106,0 0,86.000106 0,192 c 0,87.39991 117.01255,242.98756 168.3125,307.1875 12.29999,15.29998 35.07501,15.29998 47.375,0 C 266.98745,434.98756 384,279.39991 384,192 384,86.000106 297.99989,0 192,0 Z m -31.6875,134.0625 c 10.54083,0.15531 20.67882,4.42882 28.25,12 l 3.4375,3.375 3.4375,-3.375 c 9.31837,-9.31837 22.59071,-13.60988 35.625,-11.4375 19.69435,3.28716 34.125,20.33231 34.125,40.3125 v 1.625 c 0,11.86235 -4.93547,23.22324 -13.625,31.3125 l -51.625,48.25 c -2.1438,2.00088 -4.99335,3.125 -7.9375,3.125 -2.94415,0 -5.79371,-1.12412 -7.9375,-3.125 l -51.625,-48.25 c -8.68952,-8.08926 -13.625,-19.45015 -13.625,-31.3125 v -1.625 c 0,-19.98019 14.43065,-37.02534 34.125,-40.3125 2.44393,-0.40732 4.9425,-0.59834 7.375,-0.5625 z"></path><path id="map__pin-heart" d="m 132.43095,207.89025 51.65129,48.22119 c 2.14379,2.00088 4.97361,3.11566 7.91776,3.11566 2.94415,0 5.77397,-1.11478 7.91777,-3.11566 l 51.65127,-48.22119 c 8.68954,-8.08927 13.60599,-19.43712 13.60599,-31.29948 v -1.65787 c 0,-19.98021 -14.43492,-37.01627 -34.12929,-40.30343 -13.0343,-2.17238 -26.29728,2.08663 -35.61566,11.40501 L 192,149.46456 l -3.43008,-3.43008 c -9.31838,-9.31838 -22.58136,-13.57739 -35.61566,-11.40501 -19.69437,3.28716 -34.12929,20.32322 -34.12929,40.30343 v 1.65787 c 0,11.86236 4.91645,23.21021 13.60598,31.29948 z"></path></svg>';
	const pingSvg = parser.parseFromString(
		pinSvgString,
		"image/svg+xml"
	).documentElement;
	const infoWindow = new InfoWindow();
	const infoWindowContent =
		"<div>" +
		'					<div class="map__name">Rhyschüür</div>' +
		'					<div class="map__address"' +
		"						>Gasthaus Schupfen<br />" +
		"						Steinerstrasse 501<br />" +
		"						8253 Diessenhofen</div>" +
		'					<div class="map__maps-link"' +
		"						><a" +
		'							href="https://www.google.com/maps/dir//Gasthaus+Schupfen,+Steinerstrasse+501,+8253+Diessenhofen/@47.6752799,8.7829455,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x479a866324e17171:0x69bdaf993e0d5486!2m2!1d8.7855204!2d47.6752763!3e0?entry=ttu"' +
		"							target='_blank'>In Google Maps ansehen" +
		"						</a></div" +
		"					>" +
		"				</div>" +
		"";
	var style = [
		{
			stylers: [{}],
		},
	];
	map = new Map(document.getElementById("map"), {
		mapId: "f1e9ad829ffd66a5",
		center: position,
		zoom: 13,
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
		styles: style,
	});

	const marker = new AdvancedMarkerElement({
		map: map,
		position: position,
		content: pingSvg,
	});
	marker.addListener("click", ({ domEvent, latLng }) => {
		const { target } = domEvent;

		infoWindow.close();
		infoWindow.setContent(infoWindowContent);
		infoWindow.open(marker.map, marker);
	});
}

initMap();
