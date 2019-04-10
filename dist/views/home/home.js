angular.module('myApp.home', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/home/home.html',
			controller: 'HomeCtrl'
		});
	}])

	.controller('HomeCtrl', ['$scope', '$http', '$timeout', '$interval',
		function($scope, $http, $timeout, $interval) {

			$scope.provide = function(name, fn) {
				this[name] = safelyProvide(fn);
			};

			// SCROLL TO
			$scope.provide('scrollTo', (_tag) => {
				$(".ng-scope, body").animate({
					scrollTop: Math.max($("#" + _tag).offset().top - 200, 0)
				}, 300);
			});

			// MOD
			$scope.provide('switchMOD', (_modName, _force) => {
				$scope[`MOD${_modName}`] = _force ? true : !$scope[`MOD${_modName}`];
			});

			// OPEN LINK
			$scope.provide('openTab', (_url) => {
				window.open(_url, "_blank");
			});

			// CONSTRUCTOR
			$scope.provide('init', () => {
				$scope.currentDate = new Date();
				$scope.MODLanguage = false;
				$scope.LANGUAGES_LIST = LANGUAGES_LIST;
				$scope.LINKS = {
					hey: "https://hey.network",
					chromeStore: "https://chrome.hey.network",
					stakeHey: "https://stake.hey.network",
					buyCoins: "https://hey-network.typeform.com/to/urtplg",
					manifesto: "https://manifesto.hey.network",
					telegram: "https://heysociety.chat",
					stakeTelegram: "https://t.me/stake_hey_network",
					reddit: "https://www.reddit.com/r/heynetwork",
					twitter: "https://twitter.com/hey_network_",
					facebook: "https://www.facebook.com/hey.extension",
					appleStore: "https://itunes.apple.com/app/hey-network/id1456283474",
					googlePlay: "https://play.google.com/store/apps/details?id=network.hey.mobile",
					dashboard: "",
					validator: "https://dashboard.dappchains.com/en/validator/Hey.network",
					stakingGuide: "https://medium.com/@stake.hey.network/hey-networks-guide-to-stake-your-loom-tokens-152672914a5",
				};
			});

			$scope.$on('$destroy', () => {

			});

			$scope.init();

		}
	]);
