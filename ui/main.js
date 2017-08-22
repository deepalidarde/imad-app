

//counter code
var button = document.getElementById('counter');

button.onclick=function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //Capture the respomse and store it in variable
    request.onreadystatechange = function(){
        if (request.readyState == XMLHttpRequest.DONE){
          //take some action
          if (request.status == 200){
              var counter = request.responseText;
          }
            
        }
        
        //not done yet
    };
    
    //Make the request
    request.open('GET','http://deepalidarde8.imad.hasura-app.io/counter',true);
    request.send(null);
};
