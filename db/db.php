<?php
	/*
	* db.php
	* Clase conectar
	* Crea y mantiene conexión a la base de datos
	*/
	class Conectar{
	    public static function conexion(){
	        $conexion=new mysqli("localhost", "root", "", "factura");
	        $conexion->query("SET NAMES 'utf8'");
	        return $conexion;
	    }
	}
?>
