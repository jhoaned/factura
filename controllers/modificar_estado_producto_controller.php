<?php
	include("../models/productos_model.php");
	include("../db/db.php");
	
	$id_producto=$_POST["proid"];
	$estado_producto=$_POST["proestado"];
	$producto=[];
	$informacion=[];
	$resultado='';

	$pro=new productos_model();

	$producto[0]=$id_producto;
	if($estado_producto==1){
		$producto[1]=0;		
	}else{
		$producto[1]=1;
	}
	$resultado=$pro->modificar_estado_producto($producto);
		

	if(!$resultado){
		$informacion["respuesta"]="PRODUCTO ESTADO ERROR";
	}else{
		$informacion["respuesta"]="PRODUCTO ESTADO";
	}

	echo json_encode($informacion);