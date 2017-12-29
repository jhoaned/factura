<?php
    class contactos_model{
        private $db;
        private $contactos;

        public function __construct(){
            $this->db=Conectar::conexion();
            $this->contactos=array();
        }
        public function get_contactos(){
            $consulta=$this->db->query("select * from tipo_contacto;");
            while($filas=$consulta->fetch_assoc()){
                $this->contactos[]=$filas;
            }
            return $this->contactos;
        }
    }
?>
