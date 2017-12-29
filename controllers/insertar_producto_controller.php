<?php
	include("../models/productos_model.php");
	include("../db/db.php");
	
	$nombre_producto=$_POST["prnombre"];
	$valor_unitario_producto=$_POST["pvunitario"];
	$producto=[];
	$informacion=[];
	$resultado='';

	$pro=new productos_model();

	$producto[0]=$nombre_producto;
	$producto[1]=$valor_unitario_producto;
	$resultado=$pro->set_productos($producto);

	if(!$resultado){
		$informacion["respuesta"]="PRODucTO CREADO ERROR";
	}else{
		$informacion["respuesta"]="PRODUCTO CREADO";
	}

	echo json_encode($informacion);