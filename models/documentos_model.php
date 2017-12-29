<?php
    class documentos_model{
        private $db;
        private $documentos;

        public function __construct(){
            $this->db=Conectar::conexion();
            $this->documentos=array();
        }
        public function get_documentos(){
            $consulta=$this->db->query("select * from tipo_documento;");
            while($filas=$consulta->fetch_assoc()){
                $this->documentos[]=$filas;
            }
            return $this->documentos;
        }
    }
?>
