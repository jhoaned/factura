<?php
	/**
	*Controlador de clientes
	*Carga del listado de clientes
	**/
	include("../models/clientes_model.php");
	include("../db/db.php");
	$cli=new clientes_model();
	$datoscl=$cli->get_clientes();
	$arreglo["data"]=$datoscl;
	echo json_encode($arreglo);
