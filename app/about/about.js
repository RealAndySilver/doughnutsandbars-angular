(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider.state('donut', {
            url: '/donut',
            views: {
                "main": {
                    controller: 'AboutController',
                    templateUrl: 'about/about.tpl.html'
                }
            },
            data:{ pageTitle: 'Donut' }
        });
    });
	
	
    app.controller('AboutController', function ($scope) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
            //foo();
        };
        
		$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Peter"];
		$scope.data = [250, 250, 250, 250];
		$scope.options = {
			percentageInnerCutout:70,
			animation: true,
			animateScale : false,
			animationSteps : 100,
			//animationEasing : "",
			onAnimationProgress: function(){ 
				//console.log('Animating dude');
			},
			multiTooltipTemplate: "<%= value %>",
			tooltipFontColor: "#fff",
		};
		
		$scope.$on('create', function (event, chart) {
			console.log('created: ',chart);
			var img = new Image();
			img.src = document.getElementById("image1").src;
			img.width = 100;
			img.height = 100;
			//this.chart.ctx.fillText(total , this.chart.width / 2, this.chart.height / 2, 100);
			chart.chart.ctx.drawImage(img, (chart.width / 2)-(img.width/2), (chart.height / 2)-(img.height/2), 100, 100);
		});
		
        init();
    });

}(angular.module("graphic.about", [
    'ui.router',
    'chart.js'
])));