<?php
	include("../models/clientes_model.php");
	include("../db/db.php");

	$datos_cliente_m=$_POST["datosm"];
	$informacion=[];
	$resultado='';
	$cliente=[];
	$contacto=[];
	$clientem=json_decode($datos_cliente_m, true);
	$cli=new clientes_model();

	$cliente[0]=$clientem["id"];
	$cliente[1]=$clientem["pnombre"];
	$cliente[2]=$clientem["snombre"];
	$cliente[3]=$clientem["papellido"];
	$cliente[4]=$clientem["sapellido"];
	$cliente[5]=$clientem["tdocumento"];
	$cliente[6]=$clientem["ndocumento"];
	$resultado=$cli->modificar_cliente($cliente);

	for ($i=0; $i<count($clientem["contactos"]); $i++){
		$contacto[0]=$clientem["id"];
		$contacto[1]=$clientem["contactos"][$i]["tcontacto"];
		$contacto[2]=$clientem["contactos"][$i]["vcontacto"];
		$resultado=$cli->set_contacto($contacto);
	}

	if(!$resultado){
		$informacion["respuesta"]="CLIENTE MODIFICADO ERROR";
	}else{
		$informacion["respuesta"]="CLIENTE MODIFICADO";
	}

	echo json_encode($informacion);