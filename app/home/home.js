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
				pageTitle: 'Bars' 
			}
        });
    });

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    app.controller('HomeController', function ($scope) {

        var init = function() {
           
        };
		
		$scope.chart1 = {
			css : {
				shadow:true, 
				theme:"orange", 
				img:"http://wcdn2.dataknet.com/static/resources/icons/set109/3b9a43ea.png",
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
				labels : ['Series A', 'Series B'],
				colors : ['#dfdfdf','#a0a0a0', '#ffb702', '#ff0A00']
			},
			text : {
				title : 'Lost Energy Costs',
				bottomTitle : '$213,557',
				bottomSubtitle : 'GOAL $300,000'
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

        init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("graphic.home", [
    'ui.router'
])));