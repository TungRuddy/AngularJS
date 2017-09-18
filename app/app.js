var myApp = angular.module("myApp",[]);
myApp.controller("LichLamViec",function ($scope){
    $scope.time = new Date(2010, 11, 28, 14, 57);
    var time = $scope.time.toString();
    $scope.dataTUDU = [
    ];
    
    $scope.addrow = function() {
       
        $scope.dataTUDU.push({ 'nd':$scope.nd, 'time':$scope.time.toString(), '':$scope.rowcolor});
        $scope.nd = '';
        $scope.time = '';
    }

    $scope.remove = function(index){
        $scope.dataTUDU.splice(index,1);
    };
    $scope.checked = function(index,event){
        if(event.target.checked == true){
            $scope.dataTUDU[index].rowcolor= 'rowcolor';
        }
        else{
            $scope.dataTUDU[index].rowcolor=''
        }
        
    };

   
});


