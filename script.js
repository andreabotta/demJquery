$(document).ready(function () {

    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/andreabotta/jsonserver/items",
        "method": "GET",
        "dataType": "json"
    }
    $.ajax(itemSettings).done(function (response) {
        var myitem = "";
        $.each(response, function (i, obj) {
            console.log(obj.brand);
            myitem += '<div class="col-lg-4 card-wrap" >';
            myitem += '<div class="card ' + obj.id + '" id="' + obj.id + '">';
            myitem += '<a href="bootstrap2.html?id=' + obj.id + '" class="linkcard">';
            myitem += '<img class="card-img-top" src="' + obj.img + '" alt="Card image cap" width="700px" height="230px">';
            myitem += '<div class="card-body" style="height:150px;overflow:hidden">';
            myitem += '<h5 class="card-title" id="h5"> ' + obj.title + '</h5>';
            myitem += '<h5> ' + obj.price + '</h5>';
            myitem += '<p class="card-text" id="p">' + obj.desc + '</p>';
            myitem += '</div>';
            myitem += '<div class="card-footer text-muted"> ' + obj.brand + ' </div>';
            myitem += '</a>';
            myitem += '</div>';
            myitem += '</div>';
        });
        $("#listitems").append(myitem);

    });

    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/andreabotta/jsonserver/brands",
        "method": "GET",
        "dataType": "json"
    }
    $.ajax(itemSettings).done(function (response) {
        var myitem = "";
        $.each(response, function (i, obj) {
            myitem += ' <ul class="list-group">';
            myitem += '<a href="category.html?id=' + obj.brand + '" class="linkcard">';
            myitem += '<li class="list-group-item">' + obj.brand + '</li>';
            myitem += '</a>';
            myitem += '</ul>';


            console.log('valore', obj.id);
        });
        $("#brandlist").append(myitem);

    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //minHeight();
    

    $('#search').keyup(function(){
        var text=$(this).val().toLowerCase();
        $("#listitems .card-wrap").each(function(){
            var title=$(this).find("h5").text().toLowerCase();
            var content=$(this).find("p").text().toLowerCase();
            if(!title.includes(text) && !content.includes(text)){
                $(this).hide();
            }
            else{
                $(this).show();
            }
        });
    });



});

/*$(window).resize(function () {
    minHeight();
});

var minHeight = function () {
    var wheight = $(window).height();
    var header = $(".navb").outerHeight();
    var header = $(".footer").outerHeight();
    var height = wheight - (header + footer);
    $(".container").css("min-height", height);
};*/
