const urlDisfraz="https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume"
const urlCliente="https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client"
const urlMensaje= "https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message"

/*Disfraz*/
function leerDisfraz(){
    $.ajax({
        url: urlDisfraz,
        type:'GET',
        datatype: 'JSON',
        success: function(respuesta){

            console.log(respuesta);
            pintarTabla(respuesta.items);
        },
        error:function(xhr, status){
            console.log("Ha sucedido un problema" + xhr.status + " " + status)
        },
        complete:function(xhr, status){
            console.log("Petición Realizada con Exito!!")
        }

    });
}
/*Función tabla bonita*/
function pintarTabla(items){
    let miTabla="<table cellspacing='5'cellpadding='5' border='2'>";
    miTabla+="<tr>" + "<td>" +"ID" + "</td>";
    miTabla+= "<td>" +"BRAND" + "</td>";
    miTabla+="<td>" +"MODEL" + "</td>";
    miTabla+="<td>" +"CATEGORY_ID" + "</td>";
    miTabla+="<td>" +"NAME" + "</td>" + "</tr>";

    for (i=0; items.length;i++){
        miTabla +="<tr>"
        miTabla += "<td>" + items[i].ID + "</td>";
        miTabla += "<td>" + items[i].ModeloDisfraz + "</td>";
        miTabla += "<td>" + items[i].MarcaDisfraz + "</td>";
        miTabla += "<td>" + items[i].CategoriaID + "</td>";
        miTabla += "<td>" + items[i].NombreDisfraz + "</td>";
        miTabla += "<td> <button onclick=borrarDisfraz(" + items[i].idDisfraz + ")'>Borrar</button>";
        miTabla +="</tr>";
    }
    miTabla+="</table>";
    $("#resultado").append(miTabla);
}
function guardarDisfraz(){
    let datosDisfraces={
        idDisfraz:$("#ID").val(),
        marca:$("#MarcaDisfraz").val(),
        modelo:$("#ModeloDisfraz").val(),
        categoriaId:$("#CategoriaId").val(),
        nombreDisfraz:$("#NombreDisfraz").val(),
    };
    let dataSend=JSON.stringify(datosDisfraces);
    $.ajax({
        url: urlDisfraz,
        type:'POST',
        data: datosDisfraces,
        dataType: 'JSON',
        success: function(respuesta){
            $("#resultado").empty();
            $("#ID").val("");
            $("#MarcaDisfraz").val("");
            $("#ModeloDisfraz").val("");
            $("#CategoriaId").val("");
            $("#NombreDisfraz").val("");
            leerDisfraz();
            alert ("Se ha guardado la información")
        }
    });

}
function editarDisfraz(){
    let datosDisfraces={
        idDisfraz:$("#ID").val(),
        marca:$("#MarcaDisfraz").val(),
        modelo:$("#ModeloDisfraz").val(),
        categoriaId:$("#CategoriaId").val(),
        nombreDisfraz:$("#NombreDisfraz").val(),
    };
    console.log(datosDisfraces);
    let dataSend=JSON.stringify(datosDisfraces);
    $.ajax({
        url: urlDisfraz,
        type:'PUT',
        data: datosDisfraces,
        contentType: "application/JSON",
        dataType: 'JSON',
        success: function(respuesta){
            $("#resultado").empty();
            $("#ID").val();
            $("#MarcaDisfraz").val();
            $("#ModeloDisfraz").val();
            $("#CategoriaId").val();
            $("#NombreDisfraz").val();
            leerDisfraz();
            alert ("Se ha actualizado la información")
        }

    });
}
function borrarDisfraz(idElemento){
    let datosDisfraces={id:idElemento};
    let dataSend=JSON.stringify(datosDisfraces);
    $.ajax({
        url: urlDisfraz,
        type:'DELETE',
        data: datosDisfraces,
        contentType: "application/JSON",
        dataType: 'JSON',
        success: function(respuesta){
            $("#resultado").empty();
            leerDisfraz();
            alert ("Se ha eliminado la información")
        }

    });

}