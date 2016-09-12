

var clickedCountyName;
	
var hoverLayers = [
	"Agriculture",
	"Deciduous Forest",
	"Other",
	"Urban",
	"Barren",
	"Shrubland",
	"Wetlands",
	"Coniferous Forest",
	"Mixed Forest",
	"Unknown Cover"
];

var landcoverLayers = [
	"Agriculture",
	"Deciduous Forest",
	"Other",
	"Urban",
	"Barren",
	"Shrubland",
	"Wetlands",
	"Coniferous Forest",
	"Mixed Forest",
	"Unknown Cover"
];

var mainLegend = [
	["AG", "#E59966"],
	["UR", "#C0392A"],
	["BA", "#AFB7C0"],
	["SL", "#FAD79E"],
	["MF", "#A66ABE"],
	["WL", "#5FAEE3"],
	["DF", "#54C083"],
	["CF", "#19703E"],
	["O", "#76D6C3"],
	["U", "#FADC70"]
];



var wetlandsLayers = [
	['A3', '#fbb03b'],
	['A4', '#223b53'],
	['B4', '#e55e5e'],
	['C4', '#3bb2d0'],
	['C4b', '#ccc']
];



var waterDisplayControl = false;
var wetlandsDisplayControl = true;

var data;
var getCanvasControl = false;


var toggle01Control = false;
var toggle02Control = true;
var toggle03Control = false;
var toggle04Control = false;

var opacityLayers = [
	"coastalWaters"
];

var threeDControl = false;




function addMapSources() {
	map.addSource('coastalCounties', {
		'type': 'geojson',
		'data': 'data/counties.geojson'
	});
	
	map.addSource('single-point', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': []
		}
	});
};

function addCountyInitial() {
	map.addLayer({
		'id': 'county-borders',
		'type': 'line',
		'source': 'coastalCounties',
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'line-color': 'black',
			'line-width': 1
		}
	});
	
	map.addLayer({
		'id': 'point',
		'source': 'single-point',
		'type': 'circle',
		'paint': {
			'circle-radius': 10,
			'circle-color': '#007cbf'
		}
	});
};



	
	
	
	
	
	
