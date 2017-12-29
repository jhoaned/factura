<?php
    class productos_model{
        private $db;
        private $productos;
        private $productosac;
        private $productosid;
        private $resultado;

        public function __construct(){
            $this->db=Conectar::conexion();
            $this->productos=array();
        }
        public function get_productos(){
            $consulta=$this->db->query("select * from producto;");
            while($filas=$consulta->fetch_assoc()){
                $this->productos[]=$filas;
            }
            return $this->productos;
        } 
        public function get_productos_id($id){
            $consulta=$this->db->query("select * from producto where id_producto=".$id.";");
            while($filas=$consulta->fetch_assoc()){
                $this->productosid[]=$filas;
            }
            return $this->productosid;
        }
        public function get_productos_activos(){
            $consulta=$this->db->query("select * from producto where estado=1;");
            while($filas=$consulta->fetch_assoc()){
                $this->productosac[]=$filas;
            }
            return $this->productosac;
        }
        public function modificar_producto($datos){
            $this->resultado=$this->db->query("update producto set nombre_producto='".$datos[1]."', valor_unitario=".$datos[2]." where id_producto=".$datos[0].";");
            return $this->resultado;            
        }
        public function modificar_estado_producto($datos){
            $this->resultado=$this->db->query("update producto set estado=".$datos[1]." where id_producto=".$datos[0].";");
            return $this->resultado;            
        }
        public function set_productos($nuevo_dato){
            $this->resultado=$this->db->query("insert into producto (nombre_producto, valor_unitario, estado) values ('".$nuevo_dato[0]."',".$nuevo_dato[1].",1);");
            return $this->resultado;
        }
    }
?>
