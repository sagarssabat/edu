myApp.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'img/01.jpg',
            'img/02.jpg',
            'img/01.jpg'

        ];
        $scope.course = [
            'Courses offered by O-HARA College Of Business',
            'National Civil Servants · Local Civil Servants',
            'Police Officer and Firefighter',
            'Certified Public Accountant / Tax Accountant',
            'Business · Accounting · Clerical · Sales',
            'Administrative Scrivener · Home Owner',
            'Information processing · SE · Programmer',
            'CG · Game · Web · Creator',
            'Medical Clerical / Medical Secretary',
            'Dental Hygienist',
            'Care Worker / Social Worker',
            'Childcare Professional / Kindergarten Teacher',
            'Dental Hygienist',
            'Sports Trainer',
            'Manga · Animation',
            'Voice actor · Narrator · Announcer',
            'Hotel · Travel tourism · Airline',
            'Bridal',
            'Beauty',
            'Hairdresser',
            'Confectionery · Bakery · Pastry Cheeses',
            'Pet',
            'Automobile Mechanic',
            'Emergency Life-Saving Assistant '

        ];
        var abc = _.times(100, function(n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function() {
            i++;
            console.log("This is a button Click");
        };
        $scope.services = [{
            img: 'icon1',
            name: 'Counseling Students & Parents '
        }, {
            img: 'icon2',
            name: 'Coaching in Japanese Language'
        }, {
            img: 'icon3',
            name: 'Admission/Application Process'
        }, {
            img: 'icon4',
            name: 'Visa Assistance'
        }];
        $scope.services2 = [{
            img: 'icon1',
            name: 'Educational Loan Assistance '
        }, {
            img: 'icon2',
            name: 'Foreign Exchange, Insurance and Ticketing'
        }, {
            img: 'icon3',
            name: 'Admission/Application Process'
        }, {
            img: 'icon4',
            name: 'Accommodation & Local Assistance'
        }];


    })

    .controller('AboutoharaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/about-ohara.html");
        TemplateService.title = "About O-Hara"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'img/about-ahora.jpg',
            'img/ohara2.jpg',
            'img/ohara3.jpg'

        ];

    })
    .controller('AboutusCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/about-us.html");
        TemplateService.title = "About Edwork"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('ServicesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/services.html");
        TemplateService.title = "Services"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('ExploreljapanCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/explore-japan.html");
        TemplateService.title = "Explore Japan"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'img/slide-1.jpg',
            'img/slide-2.jpg',
            'img/slide-3.jpg'

        ];

    })
    .controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function(data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    //Example API Controller
    .controller('DemoAPICtrl', function($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function(data) {
            console.log(data);
        });
    });
