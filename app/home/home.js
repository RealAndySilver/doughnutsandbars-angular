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
				showGoalLine : false,
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
				img:"http://marinam.tngconsulting.ca/wp-content/uploads/2015/06/marinamilette_sass.png",
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
				showTooltips : false,
				//Boolean - for showing goal line
				showDashedLine : false,
			},
			chartData : {
				data : [
				[50, 59, 80, 81, 56, 55, 40,81, 56, 55, 40,10],
				[25, 48, 40, 100, 86, 27, 90,81, 56, 55, 40,20],
				[100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100,100]
				], 
				trendData : [[15, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98,10]],
				labels : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
				series : ['BLOW THRU TRAP', 'COLD TRAP','GOOD TRAPS'],
				colors : ['#469de0','#ce625a','#dddddd'],
				goal : 50
			},
			text : {
				title : 'Steam Trap Status Over Time and Energy Loss',
				sidebarTitle : '$213.557',
				sidebarSubtitle : 'Energy Loss',
				dashedLineTitle : 'Goal Good Traps',
			}
		};
		var aja = true;
		$scope.test1 = function(){
			console.log('siso');
			if(aja){
				aja=false;
				$scope.chart2.chartData.data= [25, 48, 40, 100, 86, 27, 90,81, 56, 55, 40,20];
						$scope.chart2.text.title = 'Holi';
			}
			else{
				aja=true;
				$scope.chart1.chartData.data= [50, 59, 80, 81, 56, 55, 40,81, 56, 55, 40,10];
						$scope.chart1.text.title = 'Chau';
			}
		};
		$scope.test = function(){
			console.log('siso');
			if(aja){
				$scope.chart4.chartData.goal =100;
				aja=false;
				$scope.chart4.chartData.trendData =	[[25, 48, 40, 100, 86, 27, 90,81, 56, 55, 40,20]];
				$scope.chart4.chartData.data=
			[[25, 48, 40, 100, 86, 27, 90,81, 56, 55, 40,20],
			[100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100,100]];
						$scope.chart4.text.sidebarTitle = 'Holi';
			}
			else{
				$scope.chart4.chartData.goal =50;
				aja=true;
				$scope.chart4.chartData.trendData =	[[50, 59, 80, 81, 56, 55, 40,81, 56, 55, 40,10]];
				$scope.chart4.chartData.data=
			[[100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100,100],
			[25, 48, 40, 100, 86, 27, 90,81, 56, 55, 40,20],
			[50, 59, 80, 81, 56, 55, 40,81, 56, 55, 40,10]
			];
						$scope.chart4.text.sidebarTitle = 'Chau';
			}
			console.log('Chart4 ',$scope.chart4);
		};
        init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("graphic.home", [
    'ui.router'
])));