$(document).ready(function(){

    var lin=decodeURIComponent(window.location.search.trim());

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
            if(lin == "?id="+ obj.brand){
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
            }
           
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
    var active;
    $.each(response , function(i, obj){
        if(lin == "?id="+obj.brand)
            active=" active";
        else
            active="";
        myitem+=' <ul class="list-group">';
        myitem+='<a href="category.html?id='+obj.brand+'" class="linkcard">';
        myitem+='<li class="list-group-item'+active+'">'+obj.brand+'</li>';
        myitem+='</a>';
        myitem+='</ul>';
    });
    $("#brandlist").append(myitem);

});
 $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
    //
});
