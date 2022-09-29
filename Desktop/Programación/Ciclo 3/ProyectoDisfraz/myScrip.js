const urlDisfraz="https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume"
const urlCliente="https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client"
const urlMensaje= "https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message"

// Informacion Disfraces

function searchInfo(){
    $.ajax({
        url:urlDisfraz,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function pintarRespuesta(items){
    let myTable ="<table>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td><button onclick='deleteInfo("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultInfo").append(myTable);
}

function saveInfo(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlDisfraz,
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultInfo").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            searchInfo();
            alert("Se ha guardado el dato con exito")
        }
    });
}

function updateInfo() {
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlDisfraz,
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultInfo").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            searchInfo();
            alert("Se ha actualizado con exito")
        }
    });
}

function deleteInfo(idElemento){
    let myData={
        id:idElemento
    };
    console.log(idElemento)
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlDisfraz,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultInfo").empty();
            searchInfo();
            //alert("Elemento eliminado")
        }
    });
}

// Clientes

function searchClient(){
    $.ajax({
        url:urlCliente,
        type:"GET",
        datatype:"JSON",
        success:function(res){
            console.log(res);
            pintRespuesta(res.items)
        }
    });
}

function pintRespuesta(items){
    let myTable ="<table>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td><button onclick='deleteClient("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultClient").append(myTable);
}

function saveClient(){
    let myData={
        id:$("#idC").val(),
        name:$("#nameC").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlCliente,
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(res){
            $("#resultClient").empty();
            $("#idC").val("");
            $("#nameC").val("");
            $("#email").val("");
            $("#age").val("");
            searchClient();
            alert("Se ha guardado el dato con exito")
        }
    });
}

function updateClient() {
    let myData={
        id:$("#idC").val(),
        name:$("#nameC").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlCliente,
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(res){
            $("#resultClient").empty();
            $("#idC").val("");
            $("#nameC").val("");
            $("#email").val("");
            $("#age").val("");
            searchClient();
            alert("Se ha actualizado con exito")
        }
    });
}

function deleteClient(idElement){
    let myData={
        id:idElement
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlCliente,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(res){
            $("#resultClient").empty();
            searchClient();
            alert("Elemento eliminado")
        }
    });
}

// Mensajes

function searchMessage(){
    $.ajax({
        url:urlMensaje,
        type:"GET",
        datatype:"JSON",
        success:function(resp){
            console.log(resp);
            pintResp(resp.items)
        }
    });
}

function pintResp(items){
    let myTable ="<table>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td><button onclick='deleteMessage("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultMessage").append(myTable);
}

function saveMessage(){
    let myData={
        id:$("#idM").val(),
        messagetext:$("#message").val(),

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlMensaje,
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(resp){
            $("#resultMessage").empty();
            $("#idM").val("");
            $("#message").val("");
            searchClient();
            alert("Se ha guardado el dato con exito")
        }
    });
}

function updateMessage() {
    let myData={
        id:$("#idM").val(),
        messagetext:$("#message").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlMensaje,
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(resp){
            $("#resultMessage").empty();
            $("#idM").val("");
            $("#massage").val("");
            searchClient();
            alert("Se ha actualizado con exito")
        }
    });
}

function deleteMessage(idElementM){
    let myData={
        id:idElementM
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:urlMensaje,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(resp){
            $("#resultMessage").empty();
            searchClient();
            alert("Elemento eliminado")
        }
    });
}