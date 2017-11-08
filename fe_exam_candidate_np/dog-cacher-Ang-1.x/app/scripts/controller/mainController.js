'use strict';
myApp.controller('mainController',['$scope','$rootScope','$timeout','$state','dogSearchService', function ($scope,$rootScope,$timeout,$state,dogSearchService) {

    $scope.mainControllerInit = function(){
        $scope.breedList = [];
        $scope.matchedBreed = [];
        $scope.searchText = "";
        $scope.handleSystemError = function (errorMsg) {
            console.log("Error happened- "+errorMsg);
            //$state.go("breed.error");
        };

        dogSearchService.getBreed().then(function (breedList) {
            $scope.breedList = breedList;
            dogSearchService.saveAllBreeds(breedList)
        }, function (error) {
            $scope.handleSystemError(error);
        });

        $scope.searchMatchingText = function(){
            $scope.matchedBreed = [];
            $timeout(function(){
                var searchText = $scope.searchText;
                angular.forEach($scope.breedList, function(index, breed) {
                    if(breed.indexOf(searchText)==0){
                        $scope.matchedBreed.push(breed);
                    }
                });

            },300);//wait for sometime to save unnecessary search

        }

        $scope.selectMatchedText = function(selectedBreed){
            $scope.searchText = selectedBreed;
            $scope.matchedBreed = [];
        }

        $scope.showBreed = function(){
            if($scope.breedList.hasOwnProperty($scope.searchText)){
                if($state.current.name == "breed.breedInfo" ){
                    $scope.$broadcast('initializeBreedController', {
                        breed: $scope.searchText
                    });
                    $scope.searchText = "";
                }else{
                    $state.go("breed.breedInfo",{"breedName":$scope.searchText});
                    $scope.searchText = "";
                }

            }
        }
        $scope.chooseRandomBreed = function(){
            var radomIndex = Math.floor(Math.random() * (Object.keys($scope.breedList).length + 1))
            $scope.breedListArr = [];
            angular.forEach($scope.breedList, function(breed,index){
                $scope.breedListArr.push(index)
            });
            $scope.searchText = $scope.breedListArr[radomIndex];
            $state.go("breed.breedInfo",{"breedName":$scope.searchText});
        }

        $scope.clearAllDogs = function(){
            $state.go("breed.notFound");
            $scope.searchText = "";
            $rootScope = $rootScope.$new(true);
            $scope = $scope.$new(true);
            $scope.mainControllerInit();

        }
    }
    $scope.mainControllerInit();

}]);
