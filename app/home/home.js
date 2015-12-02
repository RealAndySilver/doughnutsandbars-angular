/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
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
            data:{ pageTitle: 'Bars' }
        });
    });

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    app.controller('HomeController', function ($scope) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        };
		$scope.animation = false;
		$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
		$scope.series = ['Series A', 'Series B', 'Series C'];
		$scope.datax = [65, 59, 80, 81, 56, 55, 40];
		
		$scope.graphicOptions1 = {
			type:"orangeCard", 
			shadow:true, 
			theme:"orangeCard", 
			img:"http://yara.co.uk/images/430-43529CORRECT%20%20Banner%20Image%20Environment.png"
		};
		
		$scope.graphicOptions2 = {
			type:"greenCard", 
			shadow:true, 
			theme:"greenCard" , 
			img:"http://www.ei1.com/images/ih_icon.png"
		};
		
		$scope.graphicOptions3 = {
			type:"greenCard", 
			shadow:true, 
			theme:"darkGrayCard" , 
			img:"http://www.e2cbms.com/images/1_e2c/Breathe_ActionIcons_v2-11.png"
		};

        init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("graphic.home", [
    'ui.router'
])));