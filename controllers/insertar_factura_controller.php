<?php
	/**
	*Controlador de inserción de facturas
	*Obtiene datos de la vista y los almacena por medio del modelo respectivo
	**/
	include("../models/facturas_model.php");
	include("../models/clientes_model.php");
	include("../db/db.php");
	
	$datos_factura=$_POST["datos"];
	$informacion=[];
	$resultado='';
	$factura=[];
	$detalle=[];
	$facturat=json_decode($datos_factura, true);
	$fac=new facturas_model();
	$cli=new clientes_model();

	$factura[0]=$facturat["fechaf"];
	$factura[1]=$facturat["idcli"];
	$factura[2]=$facturat["totalf"];
	$resultado=$fac->set_factura($factura);
	$datosfcl=$cli->get_facturasclientes_id($facturat["idcli"]);

	for ($i=0; $i<count($facturat["detalles"]); $i++){
		$detalle[0]=$datosfcl[count($datosfcl)-1]["idf"];
		$detalle[1]=$facturat["detalles"][$i]["idpro"];
		$detalle[2]=$facturat["detalles"][$i]["canpro"];
		$detalle[3]=$facturat["detalles"][$i]["totpro"];
		$resultado=$fac->set_detalle($detalle);
	}

	if(!$resultado){
		$informacion["respuesta"]="FACTURA CREADA ERROR";
	}else{
		$informacion["respuesta"]="FACTURA CREADA";
	}

	echo json_encode($informacion);
