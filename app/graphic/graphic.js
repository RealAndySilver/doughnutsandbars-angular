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
		var green = '#76ba0a';
		var orange = '#ffb702';
		var darkGray = '#3b3b3b';
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
					if(	scope.options.theme != 'greenCard' &&
						scope.options.theme != 'orangeCard'&&
						scope.options.theme != 'darkGrayCard')
					{
						scope.options.theme = 'greenCard';
					}
					primaryColor =
									scope.options.theme == "greenCard" ? green : 
									scope.options.theme == "orangeCard" ? orange :
									scope.options.theme == "darkGrayCard" ? darkGray : green;
					
					secondaryColor = '#eeeeee';
										
					scope.cardClass = {};
					scope.cardClass.floatLeft = true;
					scope.cardClass.header = true;
					scope.cardClass[scope.options.theme] = true;
					scope.cardClass.shadow = scope.options.shadow;
					scope.cardClass['overflow-x-hidden'] = true;
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