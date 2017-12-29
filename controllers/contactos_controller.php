<?php
	include("../models/clientes_model.php");
	include("../db/db.php");
	$id=$_GET['cliid'];
	$cli=new clientes_model();
	$datosccl=$cli->get_contactosclientes_id($id);
	$arregloc["data"]=$datosccl;
	echo json_encode($arregloc);