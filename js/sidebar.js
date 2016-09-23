$(document).ready(function(){
    $.ajax({
        "url" : "./content/sidebar-content.json",
        "dataType" : "json",
        "async" : false,
        "success" : function(response){
            side_menu = $("#side-menu");
            response.forEach(function(element){
               if(!element.submodules){
                   side_menu.append(
                       $("<li>")
                        .append($("<a>").attr("href", element.ref)
                                .append($("<i>").attr("class", "fa " + element.icon))
                                .append("&nbsp; " + element.name)
                               )
                    )
               } else {
                   side_menu.append(
                       $("<li>")
                            .append(
                                $("<a>").attr("href", "#")
                                    .append($("<i>").attr("class", "fa fa-fw " + element.icon))
                                    .append(" " + element.name)
                                    .append($("<span>").attr("class", "fa arrow")))
                            .append(
                                $("<ul>").attr("class", "nav nav-second-level")
                                    .append(function(){
                                        var v = "";
                                        element.submodules.forEach(function(el){
                                            v+= "<li>" +"<a href=" + el.ref +">" + el.name + "</a>"+ "</li>"
                                        })
                                        return v;
                                    }))
                   );
               }
            });
        }
    });
    
});