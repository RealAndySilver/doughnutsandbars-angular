(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider.state('bars', {
            url: '/bars',
            views: {
				"main": {
					controller: 'HomeController',
					templateUrl: 'home/home.tpl.html'
				}
            },
            data: { 
				pageTitle: 'Donuts and Bars' 
			}
        });
    });

    app.controller('HomeController', function ($scope) {

        var init = function() {
           
        };
		
		$scope.chart1 = {
			//Basic CSS Options
			css : {
				//Boolean - defines shadow for the card
				shadow:true, 
				//String - Theme colors available: green, orange, darkGray, blue
				theme:"orange", 
				//String - Global url
				img:"http://allotsego.com/wp-content/uploads/2015/08/flame-icon-130x130.png",
				//String - Type can be reg or multi. multi shows labels on bottom
				showBottomLabels: false
			},
			//Visual options for the chart
			chartOptions : {
				//Number - Defines inner cutout for the donut chart. The higher the number, thinest the line
				percentageInnerCutout:75,
				//Boolean - for showing animation
				animation: true,
				//Boolean - for scaling animation
				animateScale : false,
				//Boolean - for showing goal line
				showGoalLine : true,
				//Boolean - Whether we should show a stroke on each segment
				segmentShowStroke : false,
				//String - Animation easing effect
				// Possible effects are:
				// [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
				//  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
				//  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
				//  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
				//  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
				//  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
				//  easeOutElastic, easeInCubic]
				animationEasing : "easeInOutQuart"

			},
			//Chart information
			chartData : {
				//Array - only numbers should be added
				data : [2000, 500],
				//Array - only strings should be added
				labels : ['Series A', 'Series B'],
				//Array - only strings with hex colors should be added
				colors : ['#ffb702','#dfdfdf', '#ffffff', '#ff0A00']
			},
			//General Texts
			text : {
				//String - Title for the card
				title : 'Lost Energy Costs',
				//String - Title for the bottom of the card
				bottomTitle : '$213,557',
				//String - Subtitle for the bottom of the card
				bottomSubtitle : 'GOAL $300,000',
				units : '$ / DAY',
				//String - Title for goal line in the chart
				goalTitle : 'Goal',
			}
		};
		
		$scope.chart2 = {
			//Basic CSS Options
			css : {
				//Boolean - defines shadow for the card
				shadow:true, 
				//String - Theme colors available: green, orange, darkGray, blue
				theme:"darkGray", 
				//String - Global url
				img:"http://www.eventsentry.com/blog/wp-content/uploads/2014/04/tools.png",
				//String - Type can be reg or multi. multi shows labels on bottom
				showBottomLabels: true
			},
			//Visual options for the chart
			chartOptions : {
				//Number - Defines inner cutout for the donut chart. The higher the number, thinest the line
				percentageInnerCutout:75,
				//Boolean - for showing animation
				animation: true,
				//Boolean - for scaling animation
				animateScale : false,
				//Boolean - for showing goal line
				showGoalLine : true,
				//Boolean - Whether we should show a stroke on each segment
				segmentShowStroke : false,
				//String - Animation easing effect
				// Possible effects are:
				// [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
				//  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
				//  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
				//  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
				//  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
				//  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
				//  easeOutElastic, easeInCubic]
				animationEasing : "easeInOutQuart",

			},
			chartData : {
				data : [20, 10, 40, 30, 56, 55, 40],
				labels : ['BLOW THRU TRAP', 'COLD TRAP'],
				colors : ['#469de0','#ce625a', '#ffb702', '#ff0A00']
			},
			text : {
				title : 'Trap Status',
				bottomTitle : '150 TRAPS',
				//bottomSubtitle : 'GOAL N/A',
				//String - Title for goal line in the chart
				goalTitle : 'Goal',
			}
			
		};
		
		$scope.chart3 = {
			//Basic CSS Options
			css : {
				//Boolean - defines shadow for the card
				shadow:true, 
				//String - Theme colors available: green, orange, darkGray, blue
				theme:"green", 
				//String - Global url
				img:"http://www.iconsplace.com/icons/preview/74c540/leaf-256.png",
				//String - Type can be reg or multi. multi shows labels on bottom
				showBottomLabels: false
			},
			//Visual options for the chart
			chartOptions : {
				//Number - Defines inner cutout for the donut chart. The higher the number, thinest the line
				percentageInnerCutout:75,
				//Boolean - for showing animation
				animation: true,
				//Boolean - for scaling animation
				animateScale : false,
				//Boolean - for showing goal line
				showGoalLine : true,
				//Boolean - Whether we should show a stroke on each segment
				segmentShowStroke : false,
				//String - Animation easing effect
				// Possible effects are:
				// [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
				//  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
				//  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
				//  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
				//  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
				//  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
				//  easeOutElastic, easeInCubic]
				animationEasing : "easeInOutQuart"

			},
			chartData : {
				data : [20, 10, 40, 30, 56, 55, 40],
				labels : ['Series A', 'Series B', 'Series C', 'Series D'],
			},
			text : {
				title : 'Emissions Lost',
				bottomTitle : '455',
				bottomSubtitle : 'GOAL 500',
				units : 'METRIC TONS / DAY',
				//String - Title for goal line in the chart
				goalTitle : 'Goal',
			}
		};
		
		$scope.chart4 = {
			css : {
				//Boolean - defines shadow for the card
				shadow:false, 
			},
			chartOptions : {
				//Boolean - for showing animation
				animation: true,
				//Boolean - for showing goal line
				showGoalLine : true,
			},
			chartData : {
				//Array - This array receives a set of arrays which will be shown on the corresponding series
				//Example: array[0][0] array[1][0] array[2][0] will show data from series[0]
				//Only numbers should be added
				data : [
				[30, 10, 80, 11, 56, 10, 40,10, 50, 22, 40,10],
				[20, 48, 10, 9, 14, 10, 30,20, 10, 38, 40,20],
				[50, 42, 10, 80, 30, 80, 30, 70, 40, 40,20,70]
				], 
				//Array - receives an array of numbers
				trendData : [[15, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98,10]],
				//Array - only strings should be added
				labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
				//Array - only strings should be added
				series : ['GOOD TRAPS','COLD TRAP','BLOW THRU TRAP' ],
				//Array - only strings with hex colors should be added (rgba type can be added too)
				colors : ['#dddddd','#ce625a','#469de0',],
				//Only numbers from 0 to 100
				goal : 100
			},
			text : {
				//String - Title for the card
				title : 'Steam Trap Status Over Time and Energy Loss',
				//String - Title for the right tooltip
				sidebarTitle : '$213.557',
				//String - SubTitle for tooltip
				sidebarSubtitle : 'Energy Loss',
				//String - Text for the goal line
				dashedLineTitle : 'Goal Good Traps',
			}
		};
		$scope.randomize = function(){
			var array1 = [];
			var array2 = [];
			var array3 = [];
			var array4 = [[],[],[]];
			var rand1 = 0;
			var rand2 = 0;
			var max = 50;
			
			for(var i = 0; i<2; i++){
				array1.push(Math.floor((Math.random() * 100) + 1));
				array2.push(Math.floor((Math.random() * 100) + 1));
				array3.push(Math.floor((Math.random() * 100) + 1));
			}
			for(var j = 0; j<12; j++){
				//array4[0].push(Math.floor((Math.random() * 100) + 1));
				rand1 =Math.floor((Math.random() * max) + 1);
				rand2 =Math.floor((Math.random() * max) + 1);
				array4[1].push(rand1);
				array4[2].push(rand2);
				array4[0].push((100-(rand1+rand2)));
			}
			$scope.chart1.chartData.data = array1;
			$scope.chart2.chartData.data = array2;
			$scope.chart3.chartData.data = array3;
			$scope.chart4.chartData.data = array4;
			$scope.chart4.chartData.trendData = [array4[Math.floor((Math.random() * 3))]];
			$scope.chart4.chartData.goal =Math.floor((Math.random() * 100) + 1);
		};
        init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("graphic.home", [
    'ui.router'
])));