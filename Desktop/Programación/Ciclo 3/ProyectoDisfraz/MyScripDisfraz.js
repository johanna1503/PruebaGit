

function leerClientes(){
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
        type:"GET",
        dataType:"json",

        success: function(usuarios){
            let cs=usuarios.items;
           /* $("#listaDeClientes").empty();*/
            for (i=0;i<cs.length;i++){
                $("#listaDeClientes").append("<h2>"+cs[i].NAME+"</h2>");

                /* $("#listaDeClientes").append(cs[i].ID+" <b>"+cs[i].NAME+"</b> "+cs[i].EMAIL+" "+cs[i].AGE);
                /*$("#listaDeClientes").append("<button  onclick= 'borrarCliente("+cs[i].ID+")'>Borrar</button><br>");*/
            }

        },
        
        error : function(status){
            alert ('Ha sucedido un problema');
        }
        
        
    }); 
}

function guardarClientes(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edad").val();
    
    let data={
        ID:idCliente, 
        NAME:nombre, 
        EMAIL:emailCliente, 
        AGE:edad
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);

}
    /*$.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
        type:"POST",
        dataType:"json",
        data:dataEnviar,
        contenType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }

        
    });

}

function editarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edad").val();
    
    let data={
        ID:idCliente, 
        NAME:nombreCliente, 
        EMAIL:emailCliente, 
        AGE:edad
    };
    let dataEnviar= JSON.stringify(data);
    //console.log(dataEnviar);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
        type:"PUT",
        //dataType:"json",
        data:dataEnviar,
        contenType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
        
    });

}


function borrarClientes(idCliente){
    let data={
        ID:idCliente, 
    };
    let dataEnviar= JSON.stringify(data);
    //console.log(dataEnviar);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
        type:"DELETE",
       // dataType:"json",
        data:dataEnviar,
        contenType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(status){
            alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
        
    });

}*/
