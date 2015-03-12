angular.module("userApp", [
	"ngAnimate",
	"app.routes",
	"authService", 
	"mainCtrl",
	"userCtrl",
	"userService"
])


// lines below add AuthInterceptor to the $httpProvider:
// we can use .config to add extra configurations to our application
// application configuration to integrate token into requests
.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});