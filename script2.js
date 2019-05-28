$(document).ready(function(){

    var pageid=window.location.search.trim();
    var itemSettings = {
        "async":true,
        "crossDomain":true,
        "url":"https://my-json-server.typicode.com/andreabotta/jsonserver/singleitems"+pageid,
        "method":"GET",
        "dataType":"json"
    }
    $.ajax(itemSettings).done(function(response){
        var myitem="";

        $.each(response , function(i, obj){
            myitem+='<div class="card '+obj.id+'" id="' +obj.id+'">'; 
            myitem+='<img class="card-img-top" src="'+obj.img+'" alt="Card image cap" width="70px" height="500px">';
            myitem+='<div class="card-body">';
            myitem+='<h5 class="card-title"><h2>'+obj.title+'</h2</h5>'; 
            myitem+='<p class="card-text"><h3>'+obj.price+'</h3></p>';
            myitem+=''+obj.desc+'</div>';
            myitem+='<div class="card-footer text-muted">';
            myitem+='<h4>'+obj.brand+'</h4>';
            myitem+='</div>';
            myitem+='</div>';
           
          console.log('valore',obj.id);
        });
        $("#singleitem").append(myitem);
 
    });

    $.ajax(itemSettings).done(function(response){
        var myitem="";

        $.each(response , function(i, obj){
           
            myitem+='<li class="list-group-item active">'+obj.brand+'</li>',
           
          console.log('valore',obj.id);
        });
        $("#brandlist2").append(myitem);
 
    });

     $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
    
 });
