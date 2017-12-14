// function addItem(){
//     let x = document.getElementById("newItem").value;
//
//     if (x) {
//         let todoList = document.getElementById("list").innerHTML;
//         todoList = todoList + "<li><h3>" + x + "</h3></li>";
//         document.getElementById("list").innerHTML = todoList;
//     }
// }

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function addList(){
    let value = $('#addinput').val();
    let id = guid();
    if(value !== " "){
        $('.todocontainer').append("<h2 class='list' " +'id='+ id + "><input type='checkbox'><span class='text-uppercase'>" + value + "</span><button onclick='addTask(this)' class='glyphicon glyphicon-plus'></button><button onclick='deleteTask(this)' class='glyphicon glyphicon-remove'></button></input>");
        $('#addinput').val('');
    }
}

function deleteTask(element){
    $(element).parent().remove();
}

function addTask(element){
    $(element).parent().append("")
}

function completeTask(){

}



$(function(){
    $('#addinput').keyup(function(event){
        if(event.keyCode === 13){
            addList();
        }
    });
});


//jquery animate


