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
				img:"http://iconbug.com/data/8e/256/fc0af5e13220535a8eef6d0f1b81ea6f.png",
				//String - Type can be reg or multi. multi shows labels on bottom
				type: 'reg'
			},
			//Visual options for the chart
			chartOptions : {
				//Number - Defines inner cutout for the donut chart. The higher the number, thinest the line
				percentageInnerCutout:75,
				//Boolean - for showing animation
				animation: true,
				//Boolean - for scaling animation
				animateScale : true,
				//Boolean - for showing goal line
				showGoalLine : true,
			},
			//Chart information
			chartData : {
				//Array - only numbers should be added
				data : [2000, 500,6000,7000],
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
				//String - Title for goal line in the chart
				goalTitle : 'Goal',
			}
		};
		
		$scope.chart2 = {
			css : {
				shadow:true, 
				theme:"green" , 
				img:"http://www.ei1.com/images/ih_icon.png",
				type: 'multi'
			},
			chartOptions : {
				percentageInnerCutout:75,
				animation: true,
				animateScale : true,
				showTooltips : false
			},
			chartData : {
				data : [20, 10, 40, 30, 56, 55, 40],
				labels : ['Series A', 'Series B', 'Series C', 'Series D'],
				colors : ['#dfdfdf','#a0a0a0', '#ffb702', '#ff0A00']
			},
			text : {
				title : 'Trap Status',
				bottomTitle : '150 TRAPS',
				bottomSubtitle : 'GOAL N/A'
			}
			
		};
		
		$scope.chart3 = {
			css : {
				shadow:true, 
				theme:"green" , 
				img:"http://www.e2cbms.com/images/1_e2c/Breathe_ActionIcons_v2-11.png"
			},
			chartOptions : {
				percentageInnerCutout:75,
				animation: true,
				animateScale : true,
				showTooltips : false
			},
			chartData : {
				data : [20, 10, 40, 30, 56, 55, 40],
				labels : ['Series A', 'Series B'],
				colors : ['#dfdfdf','#a0a0a0', '#ffb702', '#ff0A00']
			},
			text : {
				title : 'CO2 Emissions',
				bottomTitle : '455 LB/HR',
				bottomSubtitle : 'GOAL 500 LB/HR'
			}
		};
		
		$scope.chart4 = {
			css : {
				shadow:true, 
				theme:"blue" ,
				img:"http://www.e2cbms.com/images/1_e2c/Breathe_ActionIcons_v2-11.png"
			},
			chartOptions : {
				percentageInnerCutout:75,
				animation: true,
				animateScale : true,
				showTooltips : false
			},
			chartData : {
				data : [
				[65, 59, 80, 81, 56, 55, 40,81, 56, 55, 40,10],
				[28, 48, 40, 19, 86, 27, 90,81, 56, 55, 40,20],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100,100]
				],
				labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
				series : ['BLOW THRU TRAP', 'COLD TRAP'],
				colors : ['#469de0','#ce625a','#dddddd']
			},
			text : {
				title : 'Steam Trap Status Over Time and Energy Loss',
				sidebarTitle : '$213.557',
				sidebarSubtitle : 'Energy Loss'
			}
		};

        init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("graphic.home", [
    'ui.router'
])));