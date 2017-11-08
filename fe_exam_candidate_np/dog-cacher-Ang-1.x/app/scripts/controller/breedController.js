'use strict';
myApp.controller('breedController',['$scope','$timeout','$filter','$stateParams','dogSearchService',
    function ($scope,$timeout,$filter,$stateParams,dogSearchService) {

        $scope.breedControllerInit =function(searchText){
            $scope.handleSystemError = function (errorMsg) {
                console.log("Error happened- "+errorMsg);
                //$state.go("breed.error");
            };
            var breedName ="";

            if(searchText){
                breedName = searchText.breed;
            }else{
                breedName = $stateParams.breedName;
            }

            //$scope.subBreedInfo = [];

            $scope.breedList = dogSearchService.getAllBreeds();
            if($scope.breedList.hasOwnProperty(breedName)){
                $scope.subBreedInfo = [];

                if($scope.breedList[breedName] == 0){
                    dogSearchService.getDogImg(breedName).then(function (imgUrl) {
                        $scope.subBreedInfo.push({breed:breedName.toString(),img:imgUrl[0]});
                    }, function (error,status) {
                        console.log("status:"+status);
                        $scope.handleSystemError(error);
                    });
                }else{
                    angular.forEach($scope.breedList[breedName], function(breed, index) {
                        dogSearchService.getDogImg(breedName+"/"+breed).then(function (imgUrl) {
                            $scope.subBreedInfo.push({breed:breed.toString(),img:imgUrl[0]});
                        }, function (error,status) {
                            console.log("status:"+status);
                            $scope.handleSystemError(error);
                        });
                    });
                }


            }
            $scope.removeDog = function(){

            }

        }

        $scope.breedControllerInit();
        $scope.$on('initializeBreedController', function (event, searchText) {
            $scope.breedControllerInit(searchText);
        });

    }]);