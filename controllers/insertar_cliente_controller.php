<?php
	/**
	*Controlador de inserción de clientes
	*Obtiene datos de la vista y los almacena por medio del modelo respectivo
	**/
	include("../models/clientes_model.php");
	include("../db/db.php");

	$datos_cliente=$_POST["datos"];
	$informacion=[];
	$resultado='';
	$cliente=[];
	$contacto=[];
	$clientet=json_decode($datos_cliente, true);
	$cli=new clientes_model();

	$cliente[0]=$clientet["pnombre"];
	$cliente[1]=$clientet["snombre"];
	$cliente[2]=$clientet["papellido"];
	$cliente[3]=$clientet["sapellido"];
	$cliente[4]=$clientet["tdocumento"];
	$cliente[5]=$clientet["ndocumento"];
	$resultado=$cli->set_cliente($cliente);
	$datoscl=$cli->get_clientes();

	for ($i=0; $i<count($clientet["contactos"]); $i++){
		$contacto[0]=$datoscl[count($datoscl)-1]["id"];
		$contacto[1]=$clientet["contactos"][$i]["tcontacto"];
		$contacto[2]=$clientet["contactos"][$i]["vcontacto"];
		$resultado=$cli->set_contacto($contacto);
	}

	if(!$resultado){
		$informacion["respuesta"]="CLIENTE CREADO ERROR";
	}else{
		$informacion["respuesta"]="CLIENTE CREADO";
	}

	echo json_encode($informacion);
