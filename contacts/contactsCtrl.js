myApp.controller("contactsCtrl", function ($scope, $firebaseArray) {

    //show input forms to insert new person
    $scope.showForm = function () {

        return $scope.showAll = true;

    };

    $scope.hideForm = function () {

        $scope.showAll = false;
    };

    init();

    function init() {

        //init firebase
        var ref = new Firebase("https://yourfirebaseid.firebaseio.com/testContacts");

        //insert firebase array into persons object
        $scope.persons = $firebaseArray(ref);
    };

    $scope.showEditForm = function (person) {

        //show input edit forms
        $scope.showAllEdit = true;

        //get id's person into i clicked his edit button
        var id = person.$id

        //get my records from person's id
        var contact = $scope.persons.$getRecord(id);
        
        $scope.myName = contact.name;
        $scope.myEmail = contact.email;
        $scope.myPhone = contact.phone;
        $scope.myCity = contact.city;
        $scope.myZipCode = contact.zipcode;
        $scope.myCountry = contact.country;

        $scope.upgradeContact = function () {

            contact.name = $scope.myName;
            contact.email = $scope.myEmail;
            contact.phone = $scope.myPhone;
            contact.city = $scope.myCity;
            contact.zipcode = $scope.myZipCode;
            contact.country = $scope.myCountry;

            //save my newContact ( contact modified )
            $scope.persons.$save(contact);

            //hide my Edit forms
            $scope.showAllEdit = false;

            $scope.msg = "Contact Upgraded"
        };

    };

    // insert a new person
    $scope.insertPerson = function () {

        console.log("Loading data...");

        if ($scope.name) { var name = $scope.name; } else { var name = null; }
        if ($scope.email) { var email = $scope.email; } else { var email = null; }
        if ($scope.phone) { var phone = $scope.phone; } else { var phone = null; }
        if ($scope.city) { var city = $scope.city; } else { var city = null; }
        if ($scope.zipcode) { var zipcode = $scope.zipcode; } else { var zipcode = null; }
        if ($scope.country) { var country = $scope.country; } else { var country = null; }

        //add data into firebase array
        $scope.persons.$add({

            name: name,
            email: email,
            phone: phone,
            city: city,
            zipcode: zipcode,
            country: country

        });

        $scope.msg = "Person Added";

        console.log("Data loaded into database");

        //hide form
        $scope.hideForm();

        //clear input form
        clearInputForm();

        //clear all input
        function clearInputForm() {
            $scope.name = "";
            $scope.email = "";
            $scope.phone = "";
            $scope.city = "";
            $scope.zipcode = "";
            $scope.country = "";
        };
    };

    //delete a person
    $scope.delete = function (person) {

        $scope.persons.$remove(person);

    };

    $scope.showPerson = function (person) {

        $scope.showContact = true;

        $scope.myName = person.name;
        $scope.myEmail = person.email;
        $scope.myPhone = person.phone;
        $scope.myCity = person.city;
        $scope.myZipCode = person.zipcode;
        $scope.myCountry = person.country;
    };

    
});