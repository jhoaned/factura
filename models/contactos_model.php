<?php
    /**
    * Clase contactos
    * Gestiona el acceso de los tipos de contactos
    **/
    class contactos_model{
        private $db; //conexión a la base de datos
        private $contactos; //Listado de contactos

        public function __construct(){
            //Creación de conexión
            $this->db=Conectar::conexion();
            $this->contactos=array();
        }
        public function get_contactos
            //Listado de los tipos de contactos
            $consulta=$this->db->query("select * from tipo_contacto;");
            while($filas=$consulta->fetch_assoc()){
                $this->contactos[]=$filas;
            }
            return $this->contactos;
        }
    }
?>
