$(document).ready(function(){

   var itemSettings = {
       "async":true,
       "crossDomain":true,
       "url":"https://my-json-server.typicode.com/andreabotta/jsonserver/items",
       "method":"GET",
       "dataType":"json"
   }
   $.ajax(itemSettings).done(function(response){
       var myitem="";
       $.each(response , function(i, obj){
           myitem+='<div class="col-lg-4">';
           myitem+='<div class="card '+obj.id+'" id="' +obj.id+'">';
           myitem+='<a href="bootstrap2.html?id='+obj.id+'" class="linkcard">';
           myitem+='<img class="card-img-top" src="'+obj.img+ '" alt="Card image cap" width="700px" height="230px">';
           myitem+='<div class="card-body" style="height:150px;overflow:hidden">';
           myitem+='<h5 class="card-title"> '+obj.title+'</h5>';
           myitem+='<h5> '+obj.price+'</h5>';
           myitem+='<p class="card-text">'+obj.desc+'</p>';
           myitem+='</div>';
           myitem+='<div class="card-footer text-muted"> '+obj.brand+' </div>';
           myitem+='</a>';
           myitem+='</div>';
           myitem+='</div>';
         console.log('valore',obj.id);
       });
       $("#listitems").append(myitem);

   });

   var itemSettings = {
    "async":true,
    "crossDomain":true,
    "url":"https://my-json-server.typicode.com/andreabotta/jsonserver/brands",
    "method":"GET",
    "dataType":"json"
}
$.ajax(itemSettings).done(function(response){
    var myitem="";
    $.each(response , function(i, obj){
        myitem+=' <ul class="list-group">';
        myitem+='<li class="list-group-item">'+obj.brand+'</li>';
        myitem+='</ul>';
        
        
      console.log('valore',obj.id);
    });
    $("#brandlist").append(myitem);

});
});

