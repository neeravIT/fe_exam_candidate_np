'use strict';

myApp.factory('dogSearchService', ['$http', '$q', '$rootScope', '$timeout',
    function ($http, $q, $rootScope, $timeout) {

        var api = "https://dog.ceo/api";
        var list = [];
        var service = {
            getBreed:getBreed,
            saveAllBreeds:saveAllBreeds,
            getAllBreeds:getAllBreeds,
            getSubBreed:getSubBreed,
            getDogImg:getDogImg
        }

        return service;

        function getBreed() {
            var allBreeds = getDataFromAPI(api+"/breeds/list/all");
            saveAllBreeds(allBreeds)
            return  allBreeds;
        }

        function saveAllBreeds(data){
            list = data;
        }
        function getAllBreeds(){
            return list;
        }

        function getSubBreed(searchText){
            return  getDataFromAPI(api+"/breed/"+searchText+"/list");
        }

        function getDogImg(breed){
            return getDataFromAPI(api+"/breed/"+breed+"/images");
        }

        function getDataFromAPI(url){
            var def = $q.defer();

            $http.get(url)
                .success(function (data) {
                    def.resolve(data.message);
                })
                .error(function (error, status) {
                    def.reject("Failed to get dogs breed for url:"+url);
                });
            return def.promise;
        }
    }]);
