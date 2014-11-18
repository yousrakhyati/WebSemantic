myApp.service('GoogleCustomSearch',['$http','$q', function ($http,$q) {
        
    const cx = "015582470650529878978:r_urnyzvskc";//Google Custom Search key
    const key = "AIzaSyC-Bh81WKg06uvNou1GDqObT-8kzseUauQ";//hexanom4204@gmail.com API KEY
            
        return {
    call: function(request) {

      //Handle deffered request
      var deffered = $q.defer();

        var googleApiUrl ="https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+request;


        //Call to Google CSE API
        $http.get(googleApiUrl).
              success(function(data, status, headers, config) {
                console.log(data);
                // this callback will be called asynchronously
                // when the response available
                var resp = [] ;
                angular.forEach(data.items,function(value,key) {
                  resp[key] = value.link;
                })
                console.log(resp);
                deffered.resolve(resp);
              }).
              error(function(data, status, headers, config) {
                console.log(data);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });

        return deffered.promise;
    }
            
   };
}]);