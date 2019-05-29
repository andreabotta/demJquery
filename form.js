$(document).ready(function(){
    $('#send').on('click',function(e){
        e.preventDefault();

        var name,mail,text;
        name=$("#nome").val();
        mail=$("#mail").val();
        text=encodeURIComponent($("#mex").val());

        window.location.href="mailto:andrea.botta2001@gmail.com?subject="+mail+"&body="+text;

    });
     $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
});
