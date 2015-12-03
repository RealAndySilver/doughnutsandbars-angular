(function(app) {

    app.controller('GraphicController', ['$scope', function ($scope) {

        var init = function() {
			console.log('testeando: ',$scope.test);
			
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
		var themeColor = '';
		var secondaryColor = '';
		
		return {
			restrict: 'E',
			templateUrl: 'graphic/graphic.tpl.html',
			replace: true,
			scope: {
				options : '=',
				bg : '=',
				cardname : '=',
				bottomtitle : '=',
				bottomsubtitle : '=',
				datai : '=',
			},
			controller : "GraphicController",
			
			link: function(scope, element, attrs) {
				scope.$watch('options', function(newValue,oldValue){
					
					if(	scope.options.css.theme != 'green' &&
						scope.options.css.theme != 'orange'&&
						scope.options.css.theme != 'darkGray')
					{
						scope.options.css.theme = 'green';
					}
					themeColor =
									scope.options.css.theme == "green" ? green.name : 
									scope.options.css.theme == "orange" ? orange.name :
									scope.options.css.theme == "darkGray" ? darkGray.name : green.name;
					
					secondaryColor = '#eeeeee';
										
					scope.cardClass = {};
					scope.bgColor = {};
					scope.textColor = {};
					scope.textColor[themeColor+'Text'] = true;
					scope.bgColor[themeColor+'Bg'] = true;
					scope.cardClass.shadow = scope.options.css.shadow;
					scope.colours = [themeColor, secondaryColor,themeColor, secondaryColor];
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