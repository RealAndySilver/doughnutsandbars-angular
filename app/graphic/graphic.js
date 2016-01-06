(function(app) {

    app.controller('GraphicController', ['$scope', function ($scope) {

        var init = function() {			
		};
        init();
    }]);

	app.directive('donut', function() {
		//Define theme colors
		//These theme colors are objects with a main color, a name, and a secondary color
		var green = {hex:'#76ba0a', name:'green', secondaryHex:'#eeeeee'};
		var blue = {hex:'#31a9ef', name:'blue', secondaryHex:'#eeeeee'};
		var orange = {hex:'#ffb702', name:'orange', secondaryHex:'#eeeeee'};
		var darkGray = {hex:'#3b3b3b', name:'darkGray', secondaryHex:'#eeeeee'};
		
		var themeColor = '';
		var themeNames = ['green', 'orange', 'darkGray', 'blue'];
		var secondaryColor = '';
		var themeArray = [green, orange, darkGray, blue];
		
		var linkFunction = function(scope, element, attrs) {
			scope.$watch('chart', function(newValue,oldValue){
				
				if(	scope.chart.css.theme != 'green' &&
					scope.chart.css.theme != 'orange'&&
					scope.chart.css.theme != 'darkGray' &&
					scope.chart.css.theme != 'blue')
				{
					scope.chart.css.theme = 'green';
				}				
				
				themeColor =
								scope.chart.css.theme == "green" ? green : 
								scope.chart.css.theme == "orange" ? orange :
								scope.chart.css.theme == "blue" ? blue :
								scope.chart.css.theme == "darkGray" ? darkGray : green;
													
				scope.cardClass = {};
				scope.bgColor = {};
				scope.textColor = {};
				scope.textColor[themeColor.name+'Text'] = true;
				scope.bgColor[themeColor.name+'Bg'] = true;
				scope.cardClass.shadow = scope.chart.css.shadow;
				scope.colours = scope.chart.chartData.labels.length > 2 ? scope.chart.chartData.colors : [themeColor.hex, themeColor.secondaryHex];
				scope.data = scope.chart.chartData.data;
				scope.labels = scope.chart.chartData.labels;
				scope.type = scope.chart.css.type;
			});
		};
		
		return {
			restrict: 'E',
			templateUrl: 'graphic/donut.tpl.html',
			replace: true,
			scope: {
				chart : '=?'
			},
			controller : "GraphicController",
			
			link: linkFunction
		};
	});
	app.directive('bars', function() {
		//Define theme colors
		//These theme colors are objects with a main color, a name, and a secondary color
		var green = {hex:'#76ba0a', name:'green', secondaryHex:'#eeeeee'};
		var blue = {hex:'#31a9ef', name:'blue', secondaryHex:'#eeeeee'};
		var orange = {hex:'#ffb702', name:'orange', secondaryHex:'#eeeeee'};
		var darkGray = {hex:'#3b3b3b', name:'darkGray', secondaryHex:'#eeeeee'};
		
		var themeColor = '';
		var themeNames = ['green', 'orange', 'darkGray', 'blue'];
		var secondaryColor = '';
		var themeArray = [green, orange, darkGray, blue];
		
		var linkFunction = function(scope, element, attrs) {
			scope.$watch('chart', function(newValue,oldValue){
				
				if(	scope.chart.css.theme != 'green' &&
					scope.chart.css.theme != 'orange'&&
					scope.chart.css.theme != 'darkGray' &&
					scope.chart.css.theme != 'blue')
				{
					scope.chart.css.theme = 'green';
				}				
				
				themeColor =
								scope.chart.css.theme == "green" ? green : 
								scope.chart.css.theme == "orange" ? orange :
								scope.chart.css.theme == "blue" ? blue :
								scope.chart.css.theme == "darkGray" ? darkGray : green;
													
				scope.cardClass = {};
				scope.bgColor = {};
				scope.textColor = {};
				scope.textColor[themeColor.name+'Text'] = true;
				scope.bgColor[themeColor.name+'Bg'] = true;
				scope.cardClass.shadow = scope.chart.css.shadow;
				scope.colours = [];
				for(var color in scope.chart.chartData.colors){
					console.log('Color: ',color);
					scope.colours.push({fillColor:scope.chart.chartData.colors[color]});
				}
				//scope.colours = scope.chart.chartData.labels.length > 2 ? scope.chart.chartData.colors : [themeColor.hex, themeColor.secondaryHex];
				scope.labels = scope.chart.chartData.labels;
				scope.type = scope.chart.css.type;
				scope.series = scope.chart.chartData.series;
				scope.data = scope.chart.chartData.data;
			});
		};
		
		return {
			restrict: 'E',
			templateUrl: 'graphic/bars.tpl.html',
			replace: true,
			scope: {
				chart : '=?'
			},
			controller : "GraphicController",
			
			link: linkFunction
		};
	});

}(angular.module("graphic.graphic", [
    'ui.router',
    'chart.js'
])));