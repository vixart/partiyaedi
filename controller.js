var menuModule = angular.module('menuModule', []);

menuModule.controller('menuListCtrl', function($scope){
	$scope.ratio = 0.8;
	$scope.currentImage = "images/1.jpg";
	$scope.menus = [
		{'name': 'Классическое меню', 'url': 'images/1.jpg'},
		{'name': 'Домашнее', 'url': 'images/2.jpg'},
		{'name': 'Вегетарианское', 'url': 'images/3.jpg'},
		{'name': 'Премиум', 'url': 'images/4.jpg'}
	]
	
	$scope.changeImage = function(url){
		$scope.currentImage = url;
	}
	
	$scope.ratioChanged = function(){
		var parentDiv = angular.element(document.querySelector('#menu')).parent().parent();
		$scope.squareSide = Math.min(parentDiv[0].offsetHeight, parentDiv[0].offsetWidth)*$scope.ratio;
	}
	
	angular.element(document).ready($scope.ratioChanged());
});

menuModule.directive('menuDirective', function(){
	return{
		template:'<div id="menu" style="height:{{squareSide}}px; width:{{squareSide}}px"><p><input type="button" ng-repeat="menu in menus" ng-class="{\'blue margin-button\':currentImage==menu.url, \'black margin-button\':currentImage!=menu.url}" ng-click="changeImage(menu.url)" value="{{menu.name}}"></p><p><img ng-src="{{currentImage}}" style="width:{{squareSide}}px"></p><input type="text" value="{{ratio}}" ng-model="ratio" ng-change="ratioChanged()"></div>'
	};
});