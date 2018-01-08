<?php
	/**
	*Controlador de facturas de clientes
	*Carga del listado de facturas de un cliente
	**/
	include("../models/clientes_model.php");
	include("../db/db.php");
	$id=$_GET['clifid'];
	$cli=new clientes_model();
	$datosfcl=$cli->get_facturasclientes_id($id);
	$arreglof["data"]=$datosfcl;
	echo json_encode($arreglof);
