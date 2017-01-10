/*
 * custom-map.js
 * Copyright (C) 2017  <@ruby.local>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
  'use strict';
	console.log('here')
		var montanaCoord = [-110, 47];

		var mapSource = new ol.source.Vector({
				format: new ol.format.GeoJSON(),
				url: "data/MontanaNetworkLatLon.geojson"
		});

		var vectorLayer = new ol.layer.Vector({
				source: mapSource
		});

		var rasterLayer = new ol.layer.Tile({
				source: new ol.source.Stamen({
						layer: 'terrain-background'
				})
		});

		var mapLayers = [rasterLayer, vectorLayer];

		var mapView = new ol.View({
				projection: 'EPSG:4326',
				center: montanaCoord,
				zoom: 7
		});

		var montanaMap = new ol.Map({
				target: 'map-floatleft',
				layers: mapLayers,
				view: mapView
		});
	console.log('here')
})();
