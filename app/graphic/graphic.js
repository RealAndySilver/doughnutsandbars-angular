(function(app) {

    app.controller('GraphicController', ['$scope', function ($scope) {

        var init = function() {
			console.log('testeando: ',$scope.test);
			$scope.chartOptions = {
				percentageInnerCutout:75,
				animation: true,
				animateScale : false,
				animationSteps : 100,
				//animationEasing : "",
				onAnimationProgress: function(){ 
					//console.log('Animating dude');
				},
				onAnimationComplete: function(){
					
				},
				showTooltips : false,
				multiTooltipTemplate: "<%= value %>",
				tooltipFontColor: "#fff",
			};
			$scope.labels = ["Download Sales", "In-Store Sales"];
			$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
			//$scope.data = [800, 200];
		};
        init();
    }]);

	app.directive('graphic', function() {
		var green = {hex:'#76ba0a', name:'green'};
		var orange = {hex:'#ffb702', name:'orange'};
		var darkGray = {hex:'#3b3b3b', name:'darkGray'};
		var primaryColor = '';
		var secondaryColor = '';
		
		return {
			restrict: 'E',
			templateUrl: 'graphic/graphic.tpl.html',
			replace: true,
			scope: {
				test : '=infox',
				options : '=',
				bg : '=',
				cardname : '=',
				bottomtitle : '=',
				bottomsubtitle : '=',
				datai : '='
			},
			controller : "GraphicController",
			
			link: function(scope, element, attrs) {
				scope.$watch('options', function(newValue,oldValue){
					if(	scope.options.theme != 'green' &&
						scope.options.theme != 'orange'&&
						scope.options.theme != 'darkGray')
					{
						scope.options.theme = 'green';
					}
					primaryColor =
									scope.options.theme == "green" ? green.name : 
									scope.options.theme == "orange" ? orange.name :
									scope.options.theme == "darkGray" ? darkGray.name : green.name;
					
					secondaryColor = '#eeeeee';
										
					scope.cardClass = {};
					scope.bgColor = {};
					scope.textColor = {};
					scope.textColor[scope.options.theme+'Text'] = true;
					scope.bgColor[scope.options.theme+'Bg'] = true;
					scope.cardClass.shadow = scope.options.shadow;
					scope.colours = [primaryColor, secondaryColor,primaryColor, secondaryColor];
					scope.datax = scope.datai;
					console.log('Datax: ',scope.datax);
				});
			}
		};
	});

}(angular.module("graphic.graphic", [
    'ui.router',
    'chart.js'
])));