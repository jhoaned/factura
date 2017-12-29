<?php
    class facturas_model{
        private $db;
        private $detalle;
        private $productosf;

        public function __construct(){
            $this->db=Conectar::conexion();
            $this->facturas=array();
        }
        public function get_productosfactura_id($id){
            $consulta=$this->db->query("SELECT df.producto_detalle as 'idfd', p.nombre_producto as 'productofd', df.cantidad as 'cantidadfd', p.valor_unitario as 'valorunifd', df.valor_total as 'valortfd' FROM detalle_factura df, producto p, factura f WHERE f.id_factura=df.factura_detalle AND f.id_factura=".$id." AND df.producto_detalle=p.id_producto;");
            while($filas=$consulta->fetch_assoc()){
                $this->productosf[]=$filas;
            }
            return $this->productosf;
        }
        public function set_detalle($nuevo_detalle){
            $this->resultado=$this->db->query("insert into detalle_factura (factura_detalle, producto_detalle, cantidad, valor_total) values (".$nuevo_detalle[0].",".$nuevo_detalle[1].",".$nuevo_detalle[2].",".$nuevo_detalle[3].");");
            return $this->resultado;
        }
        public function set_factura($nueva_factura){
            $this->resultado=$this->db->query("insert into factura (fecha_factura, cliente_factura, total_factura) values ('".$nueva_factura[0]."',".$nueva_factura[1].",".$nueva_factura[2].");");
            return $this->resultado;
        }
    }
?>