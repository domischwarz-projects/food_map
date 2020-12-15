export const mapStyles = [
	{
		featureType: 'landscape.man_made',
		elementType: 'geometry',
		stylers: [
			{
				color: '#dde2e3',
			}
		]
	}, 
	{
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [
			{
				'color': '#dde2e3'
			},
			{
				'visibility': 'on'
			}
		]
	},
	{
		featureType: 'landscape.natural.terrain',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.business',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.medical',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'all',
		stylers: [
			{
				color: '#c6e8b3'
			},
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'transit.station',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#484848'
			},			
		]
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'geometry.stroke',
		stylers: [
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#484848'
			},
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road',
		elementType: 'labels.text.stroke',
		stylers: [
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#c1d1d6'
			},
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#a9b8bd'
			},
			{
				visibility: 'on'
			}
		]
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ffffff',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ffffff',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#a6cbe3'
			},
			{
				visibility: 'on'
			}
		]
	}
]