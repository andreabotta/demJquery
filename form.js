$(document).ready(function(){
    $('#send').on('click',function(e){
        e.preventDefault();

        var name,mail,text;
        name=$("#nome").val();
        mail=$("#mail").val();
        text=encodeURIComponent($("#mex").val());


    });
     $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
});
