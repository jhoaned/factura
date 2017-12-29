<?php
	include("../models/clientes_model.php");
	include("../db/db.php");
	$id=$_GET['clifid'];
	$cli=new clientes_model();
	$datosfcl=$cli->get_facturasclientes_id($id);
	$arreglof["data"]=$datosfcl;
	echo json_encode($arreglof);