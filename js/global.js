function main_activity_content(){
    return '<div class="text-center">' +
            '<h4 id="main_page_content-shared_title" class="big-line-height">Instituto Tecnológico y de Estudios Superiores de Monterrey<br/>Escuela de Arquitectura, Arte y Diseño<br/>Sustentabilidad Ambiental</h4> ' + 
            '<p id="main_page_content-student_data">Nombre: ______________________________________________ Fecha: ____/____/______ Grupo: ______</p>' +
            '</div>'
}

$(document).ready(function(){
    $.fx.off = true;
    var first = $("li.active:first a:first").trigger("click");
    $(".active").removeClass("active");
    $.fx.off = false;
    $("#main_page_content-shared_activity_content").html(main_activity_content())
    $("#images a").each(function(){
        var wrapper = $(this).attr("wrapwith") === undefined ? "col-xs-3" : $(this).attr("wrapwith");
        $(this).wrap($("<div>").addClass("image-wrapper").addClass(wrapper).addClass("text-center"));
    });
    
    $("a[tosrus=true]").tosrus();
    $("a[hasimage='false']").each(function(){
        var ref = $(this).attr("href");
        $(this).append("<img src='" + ref + "' />");
    })
   
    $("title").html($("title").html() + " | Diseño Bioclimático");
});