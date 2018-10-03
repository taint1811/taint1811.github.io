{
	"placements": [
		{
			"name": "main_menu",
			"enabled": true,
			"interval": 1,
			"displayPriority": "Topdown",
			"displayType": "Banner",
			"creatives": [
				"banner_promo_1",
				"banner_promo_2",
			]
		},
		{
			"name": "in_game",
			"enabled": true,
			"interval": 2,
			"displayPriority": "Topdown",
			"displayType": "Modal",
			"creatives": [
				"modal_promo_1"
			]
		}
	],
	"creatives": [
		{
			"id": "modal_promo_1",
			"displayOptions": {
				"@type": "CrossPromo.PopupDisplayOptions",
				"margin": "0.1,0.1,0.1,0.1",
				"backgroundColor": "100,0,0,0",
				"imgPromoUrl": "https://taint1811.github.io/crosspromo/images/modal_1_1024x1024.jpg",
				"imgCloseButtonUrl": "https://taint1811.github.io/crosspromo/images/close_button_256x256.png",
				"closeButtonPosition": "TopLeft"
			},
			"clickAction": {
				"@type": "CrossPromo.OpenUrlAction",
				"iOSUrl": "https://itunes.apple.com/us/genre/ios-games/id6014?mt=8",
				"androidUrl": "https://play.google.com/store/apps/category/GAME"
			}
		},
		{
			"id": "banner_promo_1",
			"displayOptions": {
				"@type": "CrossPromo.BannerDisplayOptions",
				"rect": "0.8,0.25,1,0.4",
				"pivot": "1,0.5",
				"autoCloseTime": -1,
				"imgPromoUrl": "https://taint1811.github.io/crosspromo/images/banner_1.png"
			},
			"constraints": [],
			"clickAction": {
				"@type": "CrossPromo.OpenUrlAction",
				"iOSUrl": "https://itunes.apple.com/us/genre/ios-games/id6014?mt=8",
				"androidUrl": "https://play.google.com/store/apps/category/GAME"
			}
		},
		{
			"id": "banner_promo_2",
			"displayOptions": {
				"@type": "CrossPromo.BannerDisplayOptions",
				"rect": "0.1,0.25,1,0.4",
				"pivot": "1,0.5",
				"autoCloseTime": -1,
				"imgPromoUrl": "https://taint1811.github.io/crosspromo/images/banner_2.png"
			},
			"constraints": [],
			"clickAction": {
				"@type": "CrossPromo.OpenUrlAction",
				"iOSUrl": "https://itunes.apple.com/us/genre/ios-games/id6014?mt=8",
				"androidUrl": "https://play.google.com/store/apps/category/GAME"
			}
		}
	]
}
