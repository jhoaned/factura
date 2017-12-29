<?php
    class clientes_model{
        private $db;
        private $clientes;
        private $contactosc;
        private $facturasc;
        private $resultado;

        public function __construct(){
            $this->db=Conectar::conexion();
            $this->clientes=array();
        }
        public function get_clientes(){
            $consulta=$this->db->query("SELECT c.id_cliente as 'id',c.primer_nombre_cliente as 'primern',c.segundo_nombre_cliente  as 'segundon',c.primer_apellido_cliente  as 'primera',c.segundo_apellido_cliente  as 'segundoa',td.descripcion_documento  as 'tdocumento',c.documento_cliente  as 'ndocumento' FROM cliente c,tipo_documento td WHERE c.tipo_documento_cliente=td.id_tipo_documento;");
            while($filas=$consulta->fetch_assoc()){
                $this->clientes[]=$filas;
            }
            return $this->clientes;
        }
        public function get_contactosclientes_id($id){
            $consulta=$this->db->query("SELECT tc.descripcion_contacto as 'tcontacto', cc.dato_contacto as 'vcontacto' FROM contacto_cliente cc, cliente c, tipo_contacto tc WHERE c.id_cliente=cc.cliente_cc AND c.id_cliente=".$id." AND cc.tipo_contacto_cc=tc.id_tipo_contacto;");
            while($filas=$consulta->fetch_assoc()){
                $this->contactosc[]=$filas;
            }
            return $this->contactosc;
        }
        public function get_facturasclientes_id($id){
            $consulta=$this->db->query("SELECT f.id_factura as 'idf', f.fecha_factura as 'fechaf', f.cliente_factura as 'idclientef', f.total_factura as 'totalf' FROM factura f, cliente c WHERE c.id_cliente=f.cliente_factura AND c.id_cliente=".$id.";");
            while($filas=$consulta->fetch_assoc()){
                $this->facturasc[]=$filas;
            }
            return $this->facturasc;
        }
        public function set_contacto($nuevo_contacto){
            $this->resultado=$this->db->query("insert into contacto_cliente (cliente_cc, tipo_contacto_cc, dato_contacto) values (".$nuevo_contacto[0].",".$nuevo_contacto[1].",'".$nuevo_contacto[2]."');");
            return $this->resultado;
        }
        public function set_cliente($nuevo_cliente){
            $this->resultado=$this->db->query("insert into cliente (primer_nombre_cliente, segundo_nombre_cliente, primer_apellido_cliente, segundo_apellido_cliente, tipo_documento_cliente, documento_cliente) values ('".$nuevo_cliente[0]."','".$nuevo_cliente[1]."','".$nuevo_cliente[2]."','".$nuevo_cliente[3]."',".$nuevo_cliente[4].",'".$nuevo_cliente[5]."');");
            return $this->resultado;
        }  
        public function modificar_cliente($cliente){
            $this->resultado=$this->db->query("update cliente set primer_nombre_cliente='".$cliente[1]."', segundo_nombre_cliente='".$cliente[2]."', primer_apellido_cliente='".$cliente[3]."', segundo_apellido_cliente='".$cliente[4]."', tipo_documento_cliente=".$cliente[5].", documento_cliente='".$cliente[6]."' where id_cliente=".$cliente[0].";");
            return $this->resultado;
        }               
    }
?>