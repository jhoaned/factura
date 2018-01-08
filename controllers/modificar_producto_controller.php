<?php
	/**
	*Controlador de modificación de los productos
	*Obtiene datos de la vista y los almacena por medio del modelo respectivo
	**/
	include("../models/productos_model.php");
	include("../db/db.php");
	
	$id_producto=$_POST["pid"];
	$nombre_producto=$_POST["prnombre"];
	$valor_unitario_producto=$_POST["pvunitario"];
	$estado=[];
	$producto=[];
	$informacion=[];
	$resultado='';

	$pro=new productos_model();
	$datosp=$pro->get_productos_id($id_producto);

	if($datosp[0]["valor_unitario"]==$valor_unitario_producto){
		$producto[0]=$id_producto;
		$producto[1]=$nombre_producto;
		$producto[2]=$valor_unitario_producto;
		$resultado=$pro->modificar_producto($producto);
	}else{
		$producto[0]=$nombre_producto;
		$producto[1]=$valor_unitario_producto;
		$resultado=$pro->set_productos($producto);
		$estado[0]=$id_producto;
		if($datosp[0]["estado"]==1){
			$estado[1]=0;		
		}else{
			$estado[1]=$datosp[0]["estado"];
		}
		$resultado=$pro->modificar_estado_producto($estado);
	}	

	if(!$resultado){
		$informacion["respuesta"]="PRODUCTO MODIFICADO ERROR";
	}else{
		$informacion["respuesta"]="PRODUCTO MODIFICADO";
	}

	echo json_encode($informacion);
