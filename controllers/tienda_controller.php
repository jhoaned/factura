<?php
	//Llamada al modelo
	require_once("models/documentos_model.php");
	require_once("models/contactos_model.php");
	require_once("models/productos_model.php");
	require_once("models/clientes_model.php");
	$doc=new documentos_model();
	$datosd=$doc->get_documentos();
	$con=new contactos_model();
	$datosc=$con->get_contactos();
	$pro=new productos_model();
	$datosp=$pro->get_productos();	
	$datospac=$pro->get_productos_activos();
	$cli=new clientes_model();
	$datoscl=$cli->get_clientes();

	//Llamada a la vista
	require_once("views/tienda_view.phtml");
?>

