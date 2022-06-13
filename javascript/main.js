
var input = document.querySelector(".js-go").addEventListener("click",function(){
  var input = document.querySelector("input").value;
  console.log(input);
  document.querySelector("h1").innerHTML = input;
  var url = "http://api.giphy.com/v1/gifs/search?q=\"" + input + "\"&api_key=QCVPMYygb8XsfDFUa2nheVFyzOovRMAi";
  console.log(url);
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load",function(e){
    var data = e.target.response;
    console.log(data);
    printin(data);

  });



});
 document.querySelector(".js-userinput").addEventListener("keyup",function(event){

  var input = document.querySelector("input").value;
  console.log(input);
  if(event.key === "Enter"){
    document.querySelector("h1").innerHTML = input;


    var url = "http://api.giphy.com/v1/gifs/search?q=\"" + input + "\"&api_key=QCVPMYygb8XsfDFUa2nheVFyzOovRMAi";
    console.log(url);
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load",function(e){
      var data = e.target.response;
      console.log(data);
      printin(data);

    })

  }



});



function printin(print){
  var respons = JSON.parse(print);
  var imgeurl = respons.data;
  var container = document.querySelector(".js-container");
  imgeurl.forEach(function(image){
    var src = image.images.fixed_height.url;

    container.innerHTML += "<img src=\"" + src + "\"class=\"container-image\">";



  })


}
