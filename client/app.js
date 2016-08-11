var myApp = angular.module('myApp',['ngRoute',]);

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:"booksController",
		templateUrl: "views/books.html"
	})
	.when('/books', {
		controller: "booksController",
		templateUrl: "views/books.html"
	})
	.when('/books/details/:id',{
		controller: "booksController",
		templateUrl: "views/bookDetails.html"
	})
	.when('/books/add', {
		controller: "booksController",
		templateUrl: "views/addBook.html"
	})
	.when('/books/edit/:id', {
		controller: "booksController",
		templateUrl: 'views/editBook.html'
	})
	.when('/contact',{
		templateUrl: 'views/contactus.html'
	})
	.otherwise({
		redirectTo: "/"
	})
})

myApp.directive('footerDir', function ($interpolate) {
    return {
        restrict: 'E',
        templateUrl: 'views/footer.html'
    }
});