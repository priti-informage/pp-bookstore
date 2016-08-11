var myApp = angular.module('myApp');

myApp.controller('booksController',function($scope, $http, $location, $routeParams){
	console.log('controller loaded');
	$scope.getBooks = function(){
		$http.get('/api/books').success(function(res){
			$scope.books= res;
			console.log($scope.books)
		})
	}
	// $scope.getBooks();

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).success(function(res){
			$scope.book= res;
			console.log($scope.book)
		})
	}
	
	$scope.addBook = function(){
		$http.post('/api/books/', $scope.book).success(function(res){
			window.location.href="/"
		})
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+ id, $scope.book).success(function(res){
			window.location.href="/"
		})
	}
	$scope.deleteBook = function(id){
		$http.delete('/api/books/'+ id).success(function(res){
			window.location.href="/";
			console.log(success)
		})
	}
})