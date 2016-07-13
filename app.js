var myApp = angular.module("myApp", ["ngRoute", "firebase"]);

myApp.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/contacts", {

        templateUrl: "contacts/contacts.html",
        controller: "contactsCtrl"

    })

    .otherwise({ redirectTo: "/contacts" });

}]);