<?php
	include("../models/facturas_model.php");
	include("../db/db.php");
	$id=$_GET['facid'];
	$fac=new facturas_model();
	$datosf=$fac->get_productosfactura_id($id);
	$arreglofac["data"]=$datosf;
	echo json_encode($arreglofac);