ymaps.ready(function(){
	var myMap = new ymaps.Map("map", {
		center: [51.691241, 39.173167],
		zoom: 16,
		controls: []
	});

	var myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
		balloonContentBody: [
			'г. Воронеж, Брянский проезд 3А. оф. 11'
		].join('')
	}, {
		preset: 'islands#blueDotIcon'
	});

	myMap.geoObjects
		.add(new ymaps.Placemark([51.691241, 39.173167], {
			balloonContent: 'г. Воронеж, Брянский проезд 3А. оф. 11'
		}, {
			preset: 'islands#blueDotIcon'
		}))
		.add(new ymaps.Placemark([51.692011, 39.175667], {
			balloonContent: 'г. Воронеж, Брянский проезд 3А. оф. 11'
		}, {
			preset: 'islands#blueDotIcon'
		}));

	myMap.behaviors.disable('scrollZoom');
});