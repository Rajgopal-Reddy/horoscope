'use strict';

/**
 * @ngdoc function
 * @name horoscopeApp.controller:HoroscopeCtrl
 * @description
 * # HoroscopeCtrl
 * Controller of the horoscopeApp
 */
angular.module('horoscopeApp')
  .controller('HoroscopeCtrl', function ($scope) {
  	$scope.hor="";
  	
    
    $scope.findhoroscope = function(date) {

  	var d = date.getDate();
  	var m = date.getMonth()+1;


				if((m == 3 && d >= 21) || (m == 4 && d <=19)){
					$scope.hor="aries";
				}

				else if((m == 4 && d >= 20) || (m ==5  && d <=20)){
					$scope.hor="Taurus";
				}
				else if((m == 5 && d >= 21) || (m ==6  && d <=20)){
					$scope.hor="Gemini";
				}
				else if((m == 6 && d >= 21) || (m ==7  && d <=22)){
					$scope.hor="Cancer";
				}
				else if((m == 7 && d >= 23) || (m ==8  && d <=22)){
					$scope.hor="Leo";
				}
				else if((m == 8 && d >= 23) || (m ==9  && d <=22)){
					$scope.hor="Virgo";
				}
				else if((m == 9 && d >= 23) || (m ==10  && d <=22)){
					$scope.hor="Libra";
				}
				else if((m == 10 && d >= 23) || (m ==11  && d <=21)){
					$scope.hor="Scorpio";
				}
				else if((m == 11 && d >= 22) || (m ==12  && d <=21)){
					$scope.hor="Saggitarious";
				}
				else if((m == 12 && d >= 22) || (m ==1  && d <=19)){
					$scope.hor="Capricorn";
				}
				else if((m == 1 && d >= 20) || (m ==2  && d <=18)){
					$scope.hor="Aquarious";
				}
				else{
					$scope.hor="Pisces";
				}


				}

  });


