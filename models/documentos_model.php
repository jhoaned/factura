<?php
    /**
    * Clase documentos
    * Gestiona el acceso de los tipos de documentos
    **/
    class documentos_model{
        private $db; //conexión a la base de datos
        private $documentos; //Listado de documentos

        public function __construct(){
            //Creación de conexión
            $this->db=Conectar::conexion();
            $this->documentos=array();
        }
        public function get_documentos(){
            //Listado de los tipos de documentos
            $consulta=$this->db->query("select * from tipo_documento;");
            while($filas=$consulta->fetch_assoc()){
                $this->documentos[]=$filas;
            }
            return $this->documentos;
        }
    }
?>
