(function(app) {

    app.controller('GraphicController', ['$scope', function ($scope) {

        var init = function() {			
		};
        init();
    }]);

	app.directive('donut', function() {
		//////////////////////////////////////////////////////////////////////////////////
		//////////////////////*****Donut graphic directive*****///////////////////////////
		//It receives multiple data inputs and labels. Works best with 2 or 3 inputs
		//////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////
		
		//Define theme colors
		//These theme colors are objects with a main color, a name, and a secondary color
		var green = {hex:'#76ba0a', name:'green', secondaryHex:'#eeeeee'};
		var blue = {hex:'#31a9ef', name:'blue', secondaryHex:'#eeeeee'};
		var orange = {hex:'#ffb702', name:'orange', secondaryHex:'#eeeeee'};
		var darkGray = {hex:'#3b3b3b', name:'darkGray', secondaryHex:'#eeeeee'};
		
		var themeColor = '';
		var secondaryColor = '';
		
		var linkFunction = function(scope, element, attrs) {
			scope.$watch('chart', function(newValue,oldValue){
				//If we don't receive a previously known theme color, we set green as default
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
				
				//These objects are created for ng-class purposes (Theme, color, and some options selections)
				scope.cardClass = {};
				scope.bgColor = {};
				scope.textColor = {};
				scope.textColor[themeColor.name+'Text'] = true;
				scope.bgColor[themeColor.name+'Bg'] = true;
				
				//Boolean for the card shadow
				scope.cardClass.shadow = scope.chart.css.shadow;
				
				//Colors Array
				scope.colours = scope.chart.chartData.labels.length > 2 ? scope.chart.chartData.colors : [themeColor.hex, themeColor.secondaryHex];
				
				//Chart Options
				scope.chartOptions = scope.chart.chartOptions;
				
				//Chart CSS
				scope.css = scope.chart.css;
				
				//Chart Data
				scope.data = scope.chart.chartData.data;
				
				//Chart Labels
				scope.labels = scope.chart.chartData.labels;
				
				//Chart Type
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
		//////////////////////////////////////////////////////////////////////////////////
		////////////////////*****Horseshoe graphic directive*****/////////////////////////
		//It receives only 2 data inputs. If it receives more, this code will truncate it, 
		//and will use just the first 2 data inputs.
		//////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////
		
		//Define theme colors
		//These theme colors are objects with a main color, a name, and a secondary color
		var green = {hex:'#76ba0a', name:'green', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		var blue = {hex:'#31a9ef', name:'blue', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		var orange = {hex:'#ffb702', name:'orange', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		var darkGray = {hex:'#3b3b3b', name:'darkGray', secondaryHex:'#eeeeee', thirdHex:'#ffffff'};
		
		var themeColor = '';
		var secondaryColor = '';
		var counter = 0;
		var total = 0;
		var linkFunction = function(scope, element, attrs) {
			scope.chart.chartOptions.showTooltips = false;
			
			scope.$watch('chart', function(newValue,oldValue){
				scope.css = scope.chart.css;
				//If we don't receive a previously known theme color, we set green as default
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
						
				
				//These objects are created for ng-class purposes (Theme, color, and some options selections)							
				scope.cardClass = {};
				scope.goalLine = {};
				scope.bgColor = {};
				scope.textColor = {};
				
				//Depending on the theme name, we change and enable the css class we are going to use
				scope.textColor[themeColor.name+'Text'] = true;
				scope.bgColor[themeColor.name+'Bg'] = true;
				
				//Boolean for the card shadow
				scope.cardClass.shadow = scope.chart.css.shadow;
				
				//Colors Array
				scope.colours = scope.chart.chartData.colors;
				//Data Array
				scope.data = scope.chart.chartData.data;
				//Labels Array
				scope.labels = scope.chart.chartData.labels;
				//Chart Type
				scope.type = scope.chart.css.type;
				//Chart text
				scope.text = scope.chart.text;
				//Chart Options
				scope.chartOptions = scope.chart.chartOptions;
				//Boolean - Goal Line
				scope.goalLine['goalLine'] = scope.chart.chartOptions.showGoalLine ? scope.chart.chartOptions.showGoalLine : false;
				
				//Remove goal line if not set from the controller
				if(!scope.goalLine['goalLine']){
					scope.text.goalTitle = '';
				}
				
				//If colors are set from the controller and their length are higher than 2 we set those colors here
				if(scope.colours && scope.colours.length>1){
					scope.colours = [scope.colours[0],scope.colours[1], themeColor.thirdHex];
				}
				//If colors are not set from the controller, we will use the theme default value colors
				else{
					scope.colours = [themeColor.hex, themeColor.secondaryHex, themeColor.thirdHex];
				}
				
				//If we receive more than 2 data inputs, we truncate them
				if(scope.data.length>2){
					scope.data.splice(2,scope.data.length-2);
				}
				
				//If we receive more than 2 label inputs, we truncate them
				if(scope.labels.length>2){
					scope.labels.splice(2,scope.labels.length-2);
				}
				
				//To make the horseshoe, we need a 3 data input with a white background
				//This added data, will create the special effect of the horseshoe (which is a donut chart with 1/4 less of the data)
				for(var index in scope.data){
					counter +=scope.data[index];
				}
				//The algorithm to get a 4th of unknown data, is to divide the known data by 3 (known/3)
				total = counter*(1/3);
				
				//Add the new data to the data Array
				scope.data.push(total);
				//Push an empty string to the label array to make them equal in size with the data array 
				scope.labels.push('');

				//Variable reset
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
		//////////////////////////////////////////////////////////////////////////////////
		///////////////////////*****Bars graphic directive*****///////////////////////////
		//It receives multiple data inputs and labels. Works best with 2 or 3 inputs
		//////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////
		
		//Global variables set
		var containerHeight = 252*0.88;
		var animationTransition = 'all 0.8s ease-in-out';
		
		
		var linkFunction = function(scope, element, attrs) {
			scope.privatechart = {};
			scope.$watch('chart', function(newValue,oldValue){
												
				//Pre set some options that won't be available in the controller	
				scope.options = { 
					animation : scope.chart.chartOptions.animation ? true:false,
					animationScale : scope.chart.chartOptions.animateScale ? true:false,
					scaleShowGridLines : false,
					showScale: true, 
					responsive:false, 
					scaleShowLabels: false,
					barDatasetSpacing : 0,
					scaleGridLineWidth : 1,
					scaleLineWidth: 0.01,
					barShowStroke : false,
					showTooltips: scope.chart.chartOptions.showTooltips ? true:false
				};
				
				//These objects are created for ng-class purposes (Theme, color, and some options selections)	
				scope.cardClass = {};
				scope.hidden = {};
				scope.cardClass.shadow = scope.chart.css.shadow;
				
				//Colors for this type of chart must be filled with an array of objects
				scope.colours = [];
				for(var color in scope.chart.chartData.colors){
					scope.colours.push({fillColor:scope.chart.chartData.colors[color]});
				}
				//If the chart provides a goaland that number is between 0 and 100 we will
				//apply some ng-style and move the dashed line
				if(	scope.chart.chartData.goal && 
					scope.chart.chartData.goal >= 0 && 
					scope.chart.chartData.goal <=100 && 
					scope.chart.chartOptions.showGoalLine){
						
					//Set the goal line text using the goal parameter from the controller and the goal title
					scope.goalTitle = scope.chart.chartData.goal+'% '+scope.chart.text.dashedLineTitle;
					
					//Ng-style set
					//We use some css animations here to make it move smoothly
					scope.dashedStyle = {
						visibility : scope.chart.chartOptions.showGoalLine ? '':'hidden',
						marginTop : (12+(containerHeight-((scope.chart.chartData.goal/100)*(containerHeight))))+'px',
						'-webkit-transition': animationTransition,
						'-moz-transition': animationTransition,
						'-o-transition': animationTransition,
						'transition': animationTransition,
					};
					
					//If the goal line is higher than 70% we will move the side tooltip down
					if(scope.chart.chartData.goal>70){
						scope.sidebarStyle = {
							marginTop : 120+'px',
							'-webkit-transition': animationTransition,
							'-moz-transition': animationTransition,
							'-o-transition': animationTransition,
							'transition': animationTransition,
						};
					}
					//If the goal line is lower than 70% we will move the side tooltip up
					else{
						scope.sidebarStyle = {
							marginTop : 27+'px',
							'-webkit-transition': animationTransition,
							'-moz-transition': animationTransition,
							'-o-transition': animationTransition,
							'transition': animationTransition,
						};
					}
				}
				//If no goal is provided, we just hide it using ng-style visibility:hidden
				else{
					scope.dashedStyle = {
						marginTop : 0,
						visibility : 'hidden'
					};
				}
				
				//Label Array
				scope.labels = scope.chart.chartData.labels;
				
				//Series Array
				scope.series = scope.chart.chartData.series;
				
				//Data Array
				scope.data = scope.chart.chartData.data;
				
				//Trend chart Data Array
				scope.trendData = scope.chart.chartData.trendData;
			}, 
			true);
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
	app.directive('stackedbars', function() {
		//////////////////////////////////////////////////////////////////////////////////
		///////////////////////*****Bars graphic directive*****///////////////////////////
		//It receives multiple data inputs and labels. Works best with 2 or 3 inputs
		//////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////
		
		//Global variables set
		var containerHeight = 252*0.88;
		var animationTransition = 'all 0.8s ease-in-out';
		
		
		var linkFunction = function(scope, element, attrs) {
			scope.privatechart = {};
			scope.$watch('chart', function(newValue,oldValue){
												
				//Pre set some options that won't be available in the controller	
				scope.options = { 
					animation : scope.chart.chartOptions.animation ? true:false,
					animationScale : scope.chart.chartOptions.animateScale ? true:false,
					scaleShowGridLines : false,
					showScale: true, 
					responsive:false, 
					scaleShowLabels: false,
					barDatasetSpacing : 0,
					scaleGridLineWidth : 1,
					scaleLineWidth: 0.01,
					barShowStroke : false,
					showTooltips: scope.chart.chartOptions.showTooltips ? true:false
				};
				
				//These objects are created for ng-class purposes (Theme, color, and some options selections)	
				scope.cardClass = {};
				scope.hidden = {};
				scope.cardClass.shadow = scope.chart.css.shadow;
				
				//Colors for this type of chart must be filled with an array of objects
				scope.colours = [];
				for(var color in scope.chart.chartData.colors){
					scope.colours.push({fillColor:scope.chart.chartData.colors[color]});
				}
				//If the chart provides a goaland that number is between 0 and 100 we will
				//apply some ng-style and move the dashed line
				if(	scope.chart.chartData.goal && 
					scope.chart.chartData.goal >= 0 && 
					scope.chart.chartData.goal <=100 && 
					scope.chart.chartOptions.showGoalLine){
						
					//Set the goal line text using the goal parameter from the controller and the goal title
					scope.goalTitle = scope.chart.chartData.goal+'% '+scope.chart.text.dashedLineTitle;
					
					//Ng-style set
					//We use some css animations here to make it move smoothly
					scope.dashedStyle = {
						visibility : scope.chart.chartOptions.showGoalLine ? '':'hidden',
						marginTop : (12+(containerHeight-((scope.chart.chartData.goal/100)*(containerHeight))))+'px',
						'-webkit-transition': animationTransition,
						'-moz-transition': animationTransition,
						'-o-transition': animationTransition,
						'transition': animationTransition,
					};
					
					//If the goal line is higher than 70% we will move the side tooltip down
					if(scope.chart.chartData.goal>70){
						scope.sidebarStyle = {
							marginTop : 120+'px',
							'-webkit-transition': animationTransition,
							'-moz-transition': animationTransition,
							'-o-transition': animationTransition,
							'transition': animationTransition,
						};
					}
					//If the goal line is lower than 70% we will move the side tooltip up
					else{
						scope.sidebarStyle = {
							marginTop : 27+'px',
							'-webkit-transition': animationTransition,
							'-moz-transition': animationTransition,
							'-o-transition': animationTransition,
							'transition': animationTransition,
						};
					}
				}
				//If no goal is provided, we just hide it using ng-style visibility:hidden
				else{
					scope.dashedStyle = {
						marginTop : 0,
						visibility : 'hidden'
					};
				}
				
				//Label Array
				scope.labels = scope.chart.chartData.labels;
				
				//Series Array
				scope.series = scope.chart.chartData.series;
				
				//Data Array
				scope.data = scope.chart.chartData.data;
				
				//Trend chart Data Array
				scope.trendData = scope.chart.chartData.trendData;
			}, 
			true);
		};
		
		return {
			restrict: 'E',
			templateUrl: 'graphic/stackedbars.tpl.html',
			replace: true,
			scope: {
				chart : '=?'
			},
			controller : "GraphicController",
			
			link: linkFunction
		};
	});

}(angular.module("graphic.graphic", [
    'ui.router'
])));