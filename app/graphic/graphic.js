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
			},true);
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
	app.directive('horseshoe', function() {
		//Define theme colors
		//These theme colors are objects with a main color, a name, and a secondary color
		var green = {hex:'#76ba0a', name:'green', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		var blue = {hex:'#31a9ef', name:'blue', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		var orange = {hex:'#ffb702', name:'orange', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		var darkGray = {hex:'#3b3b3b', name:'darkGray', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		
		var themeColor = '';
		var themeNames = ['green', 'orange', 'darkGray', 'blue'];
		var secondaryColor = '';
		var themeArray = [green, orange, darkGray, blue];
		var counter = 0;
		var total = 0;
		var linkFunction = function(scope, element, attrs) {
			scope.chart.chartOptions.showTooltips = false;
			
			scope.$watch('chart', function(newValue,oldValue){
				scope.css = scope.chart.css;
				if(	scope.css.theme != 'green' &&
					scope.css.theme != 'orange'&&
					scope.css.theme != 'darkGray' &&
					scope.css.theme != 'blue')
				{
					scope.css.theme = 'green';
				}				
				
				themeColor =
								scope.chart.css.theme == "green" ? green : 
								scope.chart.css.theme == "orange" ? orange :
								scope.chart.css.theme == "blue" ? blue :
								scope.chart.css.theme == "darkGray" ? darkGray : green;
													
				scope.cardClass = {};
				scope.goalLine = {};
				scope.bgColor = {};
				scope.textColor = {};
				scope.textColor[themeColor.name+'Text'] = true;
				scope.bgColor[themeColor.name+'Bg'] = true;
				scope.cardClass.shadow = scope.chart.css.shadow;
				
				scope.data = scope.chart.chartData.data;
				scope.labels = scope.chart.chartData.labels;
				scope.type = scope.chart.css.type;
				scope.text = scope.chart.text;
				scope.chartOptions = scope.chart.chartOptions;
				scope.goalLine['goalLine'] = scope.chart.chartOptions.showGoalLine ? scope.chart.chartOptions.showGoalLine : false;
				if(!scope.goalLine['goalLine']){
					scope.text.goalTitle = '';
				}
				scope.colours = [themeColor.hex, themeColor.secondaryHex, themeColor.thirdHex];
				if(scope.data.length>2){
					scope.data.splice(2,scope.data.length-2);
				}
				
				if(scope.labels.length>2){
					scope.labels.splice(2,scope.labels.length-2);
				}
				for(var index in scope.data){
					counter +=scope.data[index];
				}
				total = counter*(1/3);
				scope.data.push(total);
				scope.labels.push('');

				counter = total = 0;
				
				
			}, true);
		};
		
		return {
			restrict: 'E',
			templateUrl: 'graphic/horseshoe.tpl.html',
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
		var containerHeight = 305*0.88;
		var linkFunction = function(scope, element, attrs) {
			scope.privatechart = {};
			angular.copy(scope.chart,scope.privatechart);
			scope.$watch('chart', function(newValue,oldValue){
				//angular.copy(scope.chart,scope.privatechart);
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
					scope.colours.push({fillColor:scope.chart.chartData.colors[color]});
				}
				scope.dashedStyle = {
					marginTop : (12+(containerHeight-((scope.chart.chartData.goal/100)*(containerHeight))))+'px',
				};
				//scope.colours = scope.chart.chartData.labels.length > 2 ? scope.chart.chartData.colors : [themeColor.hex, themeColor.secondaryHex];
				if(scope.chart.chartData.goal){
					scope.goalTitle = scope.chart.chartData.goal+'% '+scope.chart.text.dashedLineTitle;
				}
				scope.labels = scope.chart.chartData.labels;
				scope.type = scope.chart.css.type;
				scope.series = scope.chart.chartData.series;
				scope.data = scope.chart.chartData.data;
				scope.trendData = scope.chart.chartData.trendData;
			}, true);
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