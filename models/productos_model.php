<?php
    /**
    * Clase producto
    * Gestiona el acceso de los datos referentes a los productos
    **/
    class productos_model{
        private $db; //conexión a la base de datos
        private $productos; //Listado de productos
        private $productosac; //Listado de productos activos
        private $productosid; //Datos de producto específico
        private $resultado; //Resultado de retorno de modificaciones

        public function __construct(){
            //Creación de conexión
            $this->db=Conectar::conexion();
            $this->productos=array();
        }
        public function get_productos(){
            //Listado de productos
            $consulta=$this->db->query("select * from producto;");
            while($filas=$consulta->fetch_assoc()){
                $this->productos[]=$filas;
            }
            return $this->productos;
        } 
        public function get_productos_id($id){
            //Datos de producto específico
            $consulta=$this->db->query("select * from producto where id_producto=".$id.";");
            while($filas=$consulta->fetch_assoc()){
                $this->productosid[]=$filas;
            }
            return $this->productosid;
        }
        public function get_productos_activos(){
            //Listado de productos activos
            $consulta=$this->db->query("select * from producto where estado=1;");
            while($filas=$consulta->fetch_assoc()){
                $this->productosac[]=$filas;
            }
            return $this->productosac;
        }
        public function modificar_producto($datos){
            //Modificación de datos del producto
            $this->resultado=$this->db->query("update producto set nombre_producto='".$datos[1]."', valor_unitario=".$datos[2]." where id_producto=".$datos[0].";");
            return $this->resultado;            
        }
        public function modificar_estado_producto($datos){
            //Modificación del estado del producto            
            $this->resultado=$this->db->query("update producto set estado=".$datos[1]." where id_producto=".$datos[0].";");
            return $this->resultado;            
        }
        public function set_productos($nuevo_dato){
            //Inserción del nuevo producto
            $this->resultado=$this->db->query("insert into producto (nombre_producto, valor_unitario, estado) values ('".$nuevo_dato[0]."',".$nuevo_dato[1].",1);");
            return $this->resultado;
        }
    }
?>
