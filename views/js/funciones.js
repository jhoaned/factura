      /*
      * Funciones.js
      * Funciones de interacción de la vista y carga de tablas dinámicas
      */
      var i=0;
      function agregar(){
        /*Agrega contactos a nuevo cliente antes de guardarlo*/
        var contacto = new Array();
        var listatipo = document.getElementById("contacto");
        var pro = listatipo.options[listatipo.selectedIndex].value;
        contacto[0]=pro;
        contacto[1]=document.getElementById("vcontacto").value;
        var tablacontacto=document.getElementById("tablacontacto");
        tablacontacto.innerHTML+='<tr id="'+i+'"><td>'+contacto[0]+'</td><td id="valorc'+i+'">'+contacto[1]+'</td><td><input type="submit" value="Eliminar" onclick="eliminarContactoCliente(this)"></td></tr>';
        i++;
      }
      function eliminarContactoCliente(contacto){
        /*Elimina contactos a nuevo cliente antes de guardarlo*/            
        var i = contacto.parentNode.parentNode.rowIndex;
        document.getElementById("tablacontacto").deleteRow(i);        
      }      
      function agregarProductoFactura(){
        /*Agrega productos a nueva factura antes de guardarla*/
        var opcionselect = document.getElementsByClassName("selected")[0].querySelectorAll("td");
        var tabla = document.getElementById("tablaproducto");
        if(document.getElementById("c"+opcionselect[0].innerHTML)){
          alert('El producto ya fue ingresado a la factura');
        }else{
          tabla.innerHTML+='<tr><td>'+opcionselect[0].innerHTML+'</td><td>'+opcionselect[1].innerHTML+'</td><td><input type="number" min="1" value="1" id="c'+opcionselect[0].innerHTML+'" onchange="cambiarTotalP('+opcionselect[0].innerHTML+')"/></td><td id="vu'+opcionselect[0].innerHTML+'">'+opcionselect[2].innerHTML+'</td><td id="v'+opcionselect[0].innerHTML+'" class="vt">'+opcionselect[2].innerHTML+'</td><td><input type="submit" value="Eliminar" onclick="eliminarProductoFactura(this)"></td></tr>';
          cambiarTotalF();
        }
      }
      function eliminarProductoFactura(producto){
        /*Elimina productos a nueva factura antes de guardarla*/
        var i = producto.parentNode.parentNode.rowIndex;
        document.getElementById("tablaproducto").deleteRow(i);
      }      
      function cambiarTotalF(){
        /*Actualiza valor total de factura*/
        var valores = document.getElementById("tablaproducto").querySelectorAll(".vt");
        var total = 0;
        for (i = 0; i < valores.length; i++) {
          total = total + parseInt(valores[i].innerHTML);
        }
        var valort = document.getElementById("totalfac");
        valort.innerHTML=total;
      }
      function cambiarTotalP(id){
        /*Cambia valor de producto en la factura respecto a las unidades indicadas*/
        var cantidad = document.getElementById("c"+id);
        var valoru = document.getElementById("vu"+id);
        var valor = document.getElementById("v"+id);
        valor.innerHTML=parseInt(valoru.innerHTML)*parseInt(cantidad.value);
        cambiarTotalF();
      }
      function mostrarNuevoProducto(){
        /*Configura y muestra ventana de creación de productos*/
        var ventana = document.getElementById('nuevoproducto');
        ventana.style.marginTop = "100px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.4)) / 2) +  "px";
        ventana.style.display = 'block';
      } 
      function mostrarModificarProducto(id){
        /*Configura y muestra ventana de modificación de productos*/
        var ventana = document.getElementById('nuevoproducto');
        ventana.style.marginTop = "100px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.4)) / 2) +  "px";
        ventana.style.display = 'block';
        var producto = document.getElementById('pro'+id).querySelectorAll("td");
        document.getElementById('pid').value=producto[0].innerHTML;
        document.getElementById('prnombre').value=producto[1].innerHTML;
        document.getElementById('pvunitario').value=producto[2].innerHTML;        
      }       
      function ocultarNuevoProducto(){
        /*Limpia y ocula ventana de creación de productos*/
        var ventana = document.getElementById('nuevoproducto');
        ventana.style.display = 'none';
        document.getElementById('pid').value='';
        document.getElementById('prnombre').value='';
        document.getElementById('pvunitario').value=0; 
      }  
      function mostrarAgregarProducto(){
         /*Muestra ventana de listado de productos para agregarse a la factura*/
         var ventana = document.getElementById('agregaproducto');
         ventana.style.marginTop = "100px";
         ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
         ventana.style.display = 'block';
      } 
      function ocultarAgregarProducto(){
        /*Oculta ventana de listado de productos para agregarse a la factura*/
        var ventana = document.getElementById('agregaproducto');
        ventana.style.display = 'none';
      }  
      function mostrarNuevaFactura(cid){
        /*Muestra ventana con datos de factura*/
        var ventana = document.getElementById('nuevafactura');
        ventana.style.marginTop = "100px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
        ventana.style.display = 'block';
        document.getElementById('idc').value=cid;
        document.getElementById('nombrec').innerHTML=document.getElementById('nombrecli').innerHTML;
        document.getElementById('numeroc').innerHTML=document.getElementById('ndocumetocli').innerHTML;
      } 
      function mostrarNuevaFactura2(){
        /*Muestra ventana de nueva factura con datos de cliente*/
        var ventana = document.getElementById('nuevafactura');
        ventana.style.marginTop = "100px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
        ventana.style.display = 'block';
        var opcionselect = document.getElementsByClassName("selectedc")[0].querySelectorAll("td");
        document.getElementById('idc').value=opcionselect[0].innerHTML;
        document.getElementById('nombrec').innerHTML=opcionselect[1].innerHTML+" "+opcionselect[2].innerHTML+" "+opcionselect[3].innerHTML+" "+opcionselect[4].innerHTML;
        document.getElementById('numeroc').innerHTML=opcionselect[6].innerHTML;
      }       
      function ocultarNuevaFactura(){
        /*Limpia y oculta ventana de nueva factura*/
        var ventana = document.getElementById('nuevafactura');
        ventana.style.display = 'none';
        document.getElementById('idc').value='';
        document.getElementById('nombrec').innerHTML='';
        document.getElementById('numeroc').innerHTML='';  
        document.getElementById('totalfac').innerHTML='';  
        document.getElementById("tablaproducto").querySelectorAll("tbody")[0].innerHTML='';
      } 
      function mostrarModificarCliente(id){
        /*Muestra y configuración de ventana con los datos del cliente*/
        var ventana = document.getElementById('modificacliente');
        ventana.style.marginTop = "40px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
        ventana.style.display = 'block';
        var cliente = document.getElementById('cli'+id).querySelectorAll("td");
        document.getElementById('clid').value=cliente[0].innerHTML;
        document.getElementById('pnombre').value=cliente[1].innerHTML;
        document.getElementById('snombre').value=cliente[2].innerHTML;
        document.getElementById('papellido').value=cliente[3].innerHTML;
        document.getElementById('sapellido').value=cliente[4].innerHTML;
        var listadocu = document.getElementById("documento");
        for (i=0; i<3; i++){
          if (listadocu.options[i].value==cliente[5].innerHTML){
            document.getElementById("documento").options.item(i).selected = 'selected';
          }           
        }
        document.getElementById('ndocumento').value=cliente[6].innerHTML;
        //Carga de lista de contactos
        $(document).ready(function() {
          $.get('controllers/contactos_controller.php?cliid='+id, function(data) { 
            $.each(data, function(idx, opt) {
              for (i=0; i<opt.length; i++){
                $('#tablacontacto').append('<tr><td>'+opt[i].tcontacto+'</td><td>'+opt[i].vcontacto+'</td></tr>');
              }
            });         
          }, 'json');
        });
      }
      function mostrarNuevoCliente(){
         /*Muestra ventana de nuevo cliente*/
         var ventana = document.getElementById('modificacliente');
         ventana.style.marginTop = "40px";
         ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
         ventana.style.display = 'block';
      } 
      function ocultarModificarCliente(){
        /*Limpia y oculta ventana de modificación de clientes*/
        var ventana = document.getElementById('modificacliente');
        ventana.style.display = 'none';
        document.getElementById('clid').value='';
        document.getElementById('pnombre').value='';
        document.getElementById('snombre').value='';
        document.getElementById('papellido').value='';
        document.getElementById('sapellido').value='';
        document.getElementById('ndocumento').value='';
        document.getElementById('vcontacto').value='';
        document.getElementById('tablacontacto').innerHTML='<thead><tr><th>Tipo</th><th>Valor</th></tr></thead>';
      }
      function mostrarDetalleCliente(cli_id){
        /*Muestra ventana con datos de cliente*/
        var ventana = document.getElementById('detallecliente');
        ventana.style.marginTop = "40px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
        ventana.style.display = 'block';
        var cliented = document.getElementById('cli'+cli_id).querySelectorAll("td");

        document.getElementById('dclid').value=cliented[0].innerHTML;
        document.getElementById('nombrecli').innerHTML=cliented[1].innerHTML+" "+cliented[2].innerHTML+" "+cliented[3].innerHTML+" "+cliented[4].innerHTML;
        document.getElementById('tdocumetocli').innerHTML=cliented[5].innerHTML;
        document.getElementById('ndocumetocli').innerHTML=cliented[6].innerHTML;
        
        //Carga de contactos
        var table = $('#tablacontactoc').DataTable({
          "destroy":true,
          "language": {
            "decimal": ",",
            "thousands": ".",
            "url":"//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
          },
          "ajax":{
            "method":"GET",
            "url":"controllers/contactos_controller.php?cliid="+cli_id+""
          },
          "columns":[
            {"data":"tcontacto"},
            {"data":"vcontacto"}
          ]
        });

        //Carga de facturas
        var tablef = $('#dt_clientef').DataTable({
          "destroy":true,
          "language": {
            "decimal": ",",
            "thousands": ".",
            "url":"//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
          },
          "ajax":{
            "method":"GET",
            "url":"controllers/facturas_controller.php?clifid="+cli_id+""
          },
          "columns":[
            {"data":"idf"},
            {"data":"fechaf"},
            {"data":"totalf"},
            {"defaultContent":"<input id='bdetalle' type='submit' value='Ver detalle' onclick='mostrarDetalleFactura()'>"}
          ]
        });   
        $('#dt_clientefb').on( 'click', 'tr', function () {
          if( $(this).hasClass('selectedfc') ) {
            $(this).removeClass('selectedfc');
            document.getElementById('bdetalle').disabled = true;
          }else {
            tablef.$('tr.selectedfc').removeClass('selectedfc');
            $(this).addClass('selectedfc');
            document.getElementById('bdetalle').disabled = false;
          }
        });      
      } 
      function ocultarDetalleCliente(){
        /*Limpia y oculta ventana con datos de clientes*/
        var ventana = document.getElementById('detallecliente');
        ventana.style.display = 'none';
        document.getElementById("dt_clientefb").innerHTML='';
        document.getElementById("tablacontactoc").innerHTML='<thead><tr><th>Tipo contacto</th><th>Contacto</th></tr></thead>';
      } 
      function mostrarDetalleFactura(){
        /*Muestra ventana con datos de factura*/
        var ventana = document.getElementById('detallefactura');
        ventana.style.marginTop = "40px";
        ventana.style.left = ((document.body.clientWidth-(document.body.clientWidth*0.6)) / 2) +  "px";
        ventana.style.display = 'block';
        document.getElementById('nombrecf').innerHTML=document.getElementById('nombrecli').innerHTML;
        document.getElementById('numerocf').innerHTML=document.getElementById('ndocumetocli').innerHTML;
        var opcionselect = document.getElementsByClassName("selectedfc")[0].querySelectorAll("td");
        document.getElementById('nfactura').innerHTML=opcionselect[0].innerHTML;
        document.getElementById('fechaf').innerHTML=opcionselect[1].innerHTML;
        document.getElementById('totalfacc').innerHTML=opcionselect[2].innerHTML;
        $(document).ready(function() {
          $.get('controllers/factura_cliente_controller.php?facid='+opcionselect[0].innerHTML, function(data) { 
            $.each(data, function(idx, opt) {
              for (i=0; i<opt.length; i++){
                $('#tablaproductof').append('<tr><td>'+opt[i].idfd+'</td><td>'+opt[i].productofd+'</td><td>'+opt[i].cantidadfd+'</td><td>'+opt[i].valorunifd+'</td><td>'+opt[i].valortfd+'</td></tr>');
              }
            });         
          }, 'json');
        });
      } 
      function ocultarDetalleFactura(){
        /*Limpiar y ocultar ventana con datos de factura*/
        var ventana = document.getElementById('detallefactura');
        ventana.style.display = 'none';
        document.getElementById("tablaproductof").innerHTML='<thead id="cabecerapf"><tr><th>Referencia</th><th>Producto</th><th>Cantidad</th><th>Valor unitario</th><th>Valor total</th></tr></thead><tfoot><tr id="finalpf"><td>Total a pagar:</td><td id="totalfacc" colspan="4"></td></tr></tfoot>';
      } 
      function listarProductos(){
        /*Lenar tabla con el listado de productos existentes*/
        var tablep;
        tablep = $('#dt_productol').DataTable({
          "destroy":true,
          "language": {
            "decimal": ",",
            "thousands": ".",
            "url":"//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
          }
        });
      }
      function elegirOpcionProducto(){
        /*Control de funciones de creación y modificación de productos*/
        if(document.getElementById("pid").value){
          modificarProducto();
        }else{
          crearProducto();
        }
      }
      function crearProducto(){
        /*Creación del producto y envío de datos al controlador*/
        var nom_pro=document.getElementById("prnombre").value;
        var val_pro=document.getElementById("pvunitario").value;
        $.ajax({
          method: "POST",
          url: "controllers/insertar_producto_controller.php",
          data: {
            "prnombre": nom_pro,
            "pvunitario": val_pro
          }
        }).done(function (info){
          var json_info = JSON.parse(info);
          if(json_info['respuesta']=="PRODUCTO CREADO"){
            alert("El producto fue creado");
            ocultarNuevoProducto();
            location.reload(true);
          }else{
            alert("El producto no fue creado");
            ocultarNuevoProducto();
          }
        });
      }
      function modificarProducto(){
        /*Modificación del producto y envío de datos al controlador*/
        var r = confirm("¿Desea modificar el producto?, si altera el precio se creará un nuevo producto para no afectar facturas anteriores");
        var id_pro=document.getElementById("pid").value;
        var nom_pro=document.getElementById("prnombre").value;
        var val_pro=document.getElementById("pvunitario").value;
        if (r == true) {
          $.ajax({
            method: "POST",
            url: "controllers/modificar_producto_controller.php",
            data: {
              "pid": id_pro,
              "prnombre": nom_pro,
              "pvunitario": val_pro
            }
          }).done(function (info){
            var json_info = JSON.parse(info);
            if(json_info['respuesta']=="PRODUCTO MODIFICADO"){
              alert("El producto fue modificado");
              ocultarNuevoProducto();
              location.reload(true);
            }else{
              alert("El producto no fue modificado");
              ocultarNuevoProducto();
            }
          });
        }
      }  
      function descontinuarProducto(id){
        /*Modificación del estado del producto y envío de datos al controlador*/
        $.ajax({
          method: "POST",
            url: "controllers/modificar_estado_producto_controller.php",
            data: {
              "proid": id,
              "proestado": 1
            }
        }).done(function (info){
            var json_info = JSON.parse(info);
            if(json_info['respuesta']=="PRODUCTO ESTADO"){
              location.reload(true);
            }
        });
      } 
      function activarProducto(id){
        /*Modificación del estado del producto y envío de datos al controlador*/
        $.ajax({
          method: "POST",
            url: "controllers/modificar_estado_producto_controller.php",
            data: {
              "proid": id,
              "proestado": 0
            }
        }).done(function (info){
            var json_info = JSON.parse(info);
            if(json_info['respuesta']=="PRODUCTO ESTADO"){
              location.reload(true);
            }
        });
      }
      function crearFactura(){
        /*Creación de la factura y envío de datos al controlador*/
        var factura = {};
        var detalle = {};
        factura["idcli"]=document.getElementById("idc").value;
        factura["fechaf"]=document.getElementById("fechafac").value;
        factura["totalf"]=document.getElementById("totalfac").innerHTML;
        factura["detalles"]=[];
        var i = 0;
        while (document.getElementById("tablaproducto").querySelectorAll("tbody")[i]){
          var detalle = {};
          var tbody = document.getElementById("tablaproducto").querySelectorAll("tbody")[i];
          var filas = tbody.querySelectorAll("tr");
          var celdas = filas[0].querySelectorAll("td");
          detalle['idpro']=celdas[0].innerHTML;
          detalle['canpro']=document.getElementById("c"+celdas[0].innerHTML).value;
          detalle['totpro']=celdas[4].innerHTML;
          factura['detalles'].push(detalle);
          i++;
        }
        var datos = JSON.stringify(factura);
        $.ajax({
          method: "POST",
            url: "controllers/insertar_factura_controller.php",
            data: {
              "datos": datos
            }
        }).done(function (info){
            var json_info = JSON.parse(info);
            if(json_info['respuesta']=="FACTURA CREADA"){
              alert("Factura creada");
              ocultarNuevaFactura();
              location.reload(true);
            }
        });
      }
      function elegirOpcionCliente(){
        /*Control de funciones de creación y modificación de clientes*/    
        if(document.getElementById("clid").value){
          modificarCliente();
        }else{
          crearCliente();
        }
      }
      function crearCliente(){
        /*Creación del cliente y envío de datos al controlador*/
        var cliente = {};
        var contacto = {};
        cliente["pnombre"]=document.getElementById("pnombre").value;
        cliente["snombre"]=document.getElementById("snombre").value;
        cliente["papellido"]=document.getElementById("papellido").value;
        cliente["sapellido"]=document.getElementById("sapellido").value;
        var listadoc = document.getElementById("documento");
        cliente["tdocumento"]=listadoc.selectedIndex+1;
        cliente["ndocumento"]=document.getElementById("ndocumento").value;
        cliente["contactos"]=[];        
        var i = 0;
        while (document.getElementById("tablacontacto").querySelectorAll("tbody")[i]){
          var contacto = {};
          var tbody = document.getElementById("tablacontacto").querySelectorAll("tbody")[i];
          var filas = tbody.querySelectorAll("tr");
          var celdas = filas[0].querySelectorAll("td");
          var y = document.getElementById("contacto").options;
          for (j=0; j<y.length; j++){
            if(y[j].text==celdas[0].innerHTML){
              contacto['tcontacto']=j+1;
            }
          }
          contacto['vcontacto']=celdas[1].innerHTML;
          cliente['contactos'].push(contacto);
          i++;
        } 
        var datoscliente = JSON.stringify(cliente);
        $.ajax({
          method: "POST",
            url: "controllers/insertar_cliente_controller.php",
            data: {
              "datos": datoscliente
            }
        }).done(function (info){
            var json_info = JSON.parse(info);
            if(json_info['respuesta']=="CLIENTE CREADO"){
              alert("Cliente creado");
              ocultarModificarCliente();
              location.reload(true);
            }
        });        
      }
      function modificarCliente(){
        /*Modificación del cliente y envío de datos al controlador*/
        var cliente = {};
        var contacto = {};
        cliente["id"]=document.getElementById("clid").value;
        cliente["pnombre"]=document.getElementById("pnombre").value;
        cliente["snombre"]=document.getElementById("snombre").value;
        cliente["papellido"]=document.getElementById("papellido").value;
        cliente["sapellido"]=document.getElementById("sapellido").value;
        var listadoc = document.getElementById("documento");
        cliente["tdocumento"]=listadoc.selectedIndex+1;
        cliente["ndocumento"]=document.getElementById("ndocumento").value;
        cliente["contactos"]=[];        
        var i = 0;
        while (document.getElementById("tablacontacto").querySelectorAll("tbody")[i]){
          if(i>0){
            var contacto = {};
            var tbody = document.getElementById("tablacontacto").querySelectorAll("tbody")[i];
            var filas = tbody.querySelectorAll("tr");
            var celdas = filas[0].querySelectorAll("td");
            var y = document.getElementById("contacto").options;
            for (j=0; j<y.length; j++){
              if(y[j].text==celdas[0].innerHTML){
                contacto['tcontacto']=j+1;
              }
            }
            contacto['vcontacto']=celdas[1].innerHTML;
            cliente['contactos'].push(contacto);
          }
          i++;
        }
        alert(JSON.stringify(cliente));
        var datosclientem = JSON.stringify(cliente);
        $.ajax({
          method: "POST",
            url: "controllers/modificar_cliente_controller.php",
            data: {
              "datosm": datosclientem
            }
        }).done(function (info){
            var json_info = JSON.parse(info);
            if(json_info['respuesta']=="CLIENTE MODIFICADO"){
              alert("Cliente modificado");
              ocultarModificarCliente();              
              location.reload(true);
            }
        }); 
      }
