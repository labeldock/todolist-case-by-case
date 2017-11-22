$(function(){
    $("#todo-add").on("click",function(){
        var textValue = $("#todo-textfield").val();
        
        var newItem = $("\
            <li>\
              <span class=\"icon\"></span>\
              <span class=\"text\">" + textValue + "</span>\
              <div class=\"controls\">\
                <a class=\"remove-action\">&times;</a>\
              </div>\
            </li>\
        ");
        
        newItem.on("click",".remove-action",function(){
            newItem.remove();
        });
        
        $("#todo-list").append(newItem);
    });
    
});