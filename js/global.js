$(document).ready(function(){
    $("#images a").each(function(){
        var wrapper = $(this).attr("wrapwith") === undefined ? "col-xs-3" : $(this).attr("wrapwith");
        $(this).wrap($("<div>").addClass("image-wrapper").addClass(wrapper).addClass("text-center"));
    });
    
    $("a[tosrus=true]").tosrus();
    $("a[hasimage='false']").each(function(){
        var ref = $(this).attr("href");
        $(this).append("<img src='" + ref + "' />");
    })
});