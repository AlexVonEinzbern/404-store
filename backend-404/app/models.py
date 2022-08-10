"""Data models"""

from . import db, ma
from uuid import uuid4

def get_uuid():
    return uuid4().hex

clienteregistrado_reporte = db.Table(
    'association_clienteregistrado_reporte',
    db.Model.metadata,
    db.Column('clienteregistrado_id', db.ForeignKey('clienteregistrado.id_cliente_registrado')),
    db.Column('reporte_id', db.ForeignKey('reporte.id_reporte')),
    )

clientenoregistrado_reporte = db.Table(
    'association_clientenoregistrado_reporte',
    db.Model.metadata,
    db.Column('clientenoregistrado_id', db.ForeignKey('clientenoregistrado.id_cliente_noregistrado')),
    db.Column('reporte_id', db.ForeignKey('reporte.id_reporte')),
    )

producto_reporte = db.Table(
    'association_producto_reporte',
    db.Model.metadata,
    db.Column('producto_id', db.ForeignKey('producto.id_producto')),
    db.Column('reporte_id', db.ForeignKey('reporte.id_reporte')),
    )

producto_productosvendidos = db.Table(
    'association_producto_productosvendidos',
    db.Model.metadata,
    db.Column('producto_id', db.ForeignKey('producto.id_producto')),
    db.Column('productosvendidos_id', db.ForeignKey('productosvendidos.id_productos_vendidos')),
    )

venta_productosvendidos = db.Table(
    'association_venta_productosvendidos',
    db.Model.metadata,
    db.Column('venta_id', db.ForeignKey('venta.id_venta')),
    db.Column('productosvendidos_id', db.ForeignKey('productosvendidos.id_productos_vendidos')),
    )

class Reporte(db.Model):
    """docstring for Reporte"""
    __tablename__ = 'reporte'
    id_reporte = db.Column(db.Integer, primary_key=True)

    def __repr__(self):
        return 'New report added'

class ReporteSchema(ma.Schema):
    class Meta:
        fields = ('id_reporte',)

class ProductosVendidos(db.Model):
    """docstring for ProductosVendidos"""
    __tablename__ = "productosvendidos"
    id_productos_vendidos = db.Column(db.Integer, primary_key=True)
    id_producto           = db.Column(db.Integer,db.ForeignKey('producto.id_producto'))
    id_venta              = db.Column(db.Integer, db.ForeignKey('venta.id_venta'))
    producto              = db.relationship('Producto', backref='producto')
    venta                 = db.relationship('Venta', backref='venta')

    def __repr__(self):
        return 'New product sale added'

class ProductosVendidosSchema(ma.Schema):
    class Meta:
        fields = ('id_productos_vendidos', ' id_producto', 'id_venta',)

class Producto(db.Model):
    """docstring for Producto"""
    __tablename__ = "producto"
    id_producto               = db.Column(db.Integer, primary_key=True)
    name_producto             = db.Column(db.String(50), nullable=False)
    genero_producto           = db.Column(db.String(50), nullable=False)
    categoria_producto        = db.Column(db.String(50), nullable=False)
    subcategoria_producto     = db.Column(db.String(50), nullable=False)
    descripcion_producto      = db.Column(db.String(500), nullable=False)
    talla_producto            = db.Column(db.String(5), nullable=False)
    calificacion_producto     = db.Column(db.Integer)
    stock_producto            = db.Column(db.Integer, nullable=False)
    stock_vendido_producto    = db.Column(db.Integer, nullable=False)
    precio_producto           = db.Column(db.Float, nullable=False)
    url_imagen_producto       = db.Column(db.String(200), unique=True, nullable=False)
    imagen_payload            = db.Column(db.String, nullable=False)

    #productoimagen  = db.relationship('ProductoImagen')
    reporte         = db.relationship('Reporte', secondary = producto_reporte)
    productovendido = db.relationship('ProductosVendidos', secondary = producto_productosvendidos)

    def __repr__(self):
        return '<product {} has been added>'.format(self.name_producto)

class ProductoSchema(ma.Schema):

    reportes = ma.Nested(ReporteSchema, many=True)
    productosvendidos = ma.Nested(ProductosVendidosSchema, many=True)

    class Meta:
        fields = ('id_producto', 'name_producto', 'genero_producto', 'categoria_producto', 
            'subcategoria_producto', 'descripcion_producto', 'talla_producto', 
            'calificacion_producto', 'stock_producto', 'stock_vendido_producto', 'precio_producto',
            'url_imagen_producto', 'imagen_payload',)

# class ProductoImagen(db.Model):
#     """docstring for ProductoImagen"""
#     __tablename__ = "productoimagen"
#     id_url_imagen       = db.Column(db.Integer, primary_key=True)
#     url_imagen_producto = db.Column(db.String(200), unique=True, nullable=False)
#     color_imagen_hex    = db.Column(db.String(10), nullable=False)
#     id_producto         = db.Column(db.Integer, db.ForeignKey('producto.id_producto'))

#     def __repr__(self):
#         return '<Url image added>'

# class ProductoImagenSchema(ma.Schema):
#     class Meta:
#         fields = ('id_url_imagen', 'url_imagen_producto', 'color_imagen_hex', 'id_producto',)

class ClienteRegistrado(db.Model):
    """docstring for ClienteRegistrado"""
    __tablename__ = "clienteregistrado"
    id_cliente_registrado        = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    name_cliente_registrado      = db.Column(db.String(50), nullable=False)
    cedula_cliente_registrado    = db.Column(db.Integer, unique=True, nullable=False)
    edad_cliente_registrado      = db.Column(db.Integer, nullable=False)
    email_cliente_registrado     = db.Column(db.String(50), unique=True, nullable=False)
    direccion_cliente_registrado = db.Column(db.String(50), nullable=False)
    #ip_cliente_registrado        = db.Column(db.String(15), unique=True, nullable=False)
    #numero_visitas_registrado    = db.Column(db.Integer, nullable=False)
    password_cliente_registrado  = db.Column(db.String(128), unique=True, nullable=False)
    username_cliente_registrado  = db.Column(db.String(15), unique=True, nullable=False)
    telefono_cliente_registrado  = db.Column(db.Integer)
    
    metodoPago = db.relationship('MetodoPago')
    venta      = db.relationship('Venta')
    reporte    = db.relationship('Reporte', secondary = clienteregistrado_reporte)

    def __repr__(self):
        return '<client {} has been added>'.format(self.name_cliente_registrado)

class ClienteRegistradoSchema(ma.Schema):

    reportes = ma.Nested(ReporteSchema, many=True)

    class Meta:
        fields = ('id_cliente_registrado', 'name_cliente_registrado', 'cedula_cliente_registrado',
            'edad_cliente_registrado', 'email_cliente_registrado', 'direccion_cliente_registrado',
            'password_cliente_registrado', 'username_cliente_registrado', 'telefono_cliente_registrado',)
    
    ##                  FUTUROS CAMBIOS A ESTA TABLA          
    # class Meta:
    #     fields = ('id_cliente_registrado', 'name_cliente_registrado', 'cedula_cliente_registrado',
    #         'edad_cliente_registrado', 'email_cliente_registrado', 'direccion_cliente_registrado',
    #         'ip_cliente_registrado', 'numero_visitas_registrado', 'password_cliente_registrado',
    #         'username_cliente_registrado', 'telefono_cliente_registrado',)

class ClienteNoRegistrado(db.Model):
    """docstring for ClienteNoRegistrado"""
    __tablename__ = "clientenoregistrado"
    id_cliente_noregistrado     = db.Column(db.Integer, primary_key=True)
    ip_cliente_noregistrado     = db.Column(db.String(15), unique=True, nullable=False)
    numero_visitas_noregistrado = db.Column(db.Integer, nullable=False)

    reporte = db.relationship('Reporte', secondary = clientenoregistrado_reporte)

    def __repr__(self):
        return 'Non regis client added'

class ClienteNoRegistradoSchema(ma.Schema):

    reportes = ma.Nested(ReporteSchema, many=True)

    class Meta:
        fields = ('id_cliente_noregistrado', 'ip_cliente_noregistrado', 'numero_visitas_noregistrado',)
        
class Administrador(db.Model):
    """docstring for Administrador"""
    __tablename__ = "administrador"
    id_administrador        = db.Column(db.Integer, primary_key=True)
    name_administrador      = db.Column(db.String(50), nullable=False)
    username_administrador  = db.Column(db.String(15), unique=True, nullable=False)
    password_administrador  = db.Column(db.String(128), unique=True, nullable=False)
    telefono_administrador  = db.Column(db.Integer)
    direccion_administrador = db.Column(db.String(50))
    cedula_administrador    = db.Column(db.Integer, unique=True, nullable=False)
    email_administrador     = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return '<Admin {} has been added>'.format(self.name_administrador)

class AdministradorSchema(ma.Schema):
    class Meta:
        fields = ('id_administrador', 'name_administrador', 'username_administrador', 
            'password_administrador', 'telefono_administrador', 'direccion_administrador', 
            'cedula_administrador', 'email_administrador',)

class MetodoPago(db.Model):
    """docstring for MetodoPago"""
    __tablename__ = "metodopago"
    id_metodo             = db.Column(db.Integer, primary_key=True)
    name_metodo           = db.Column(db.String(50), unique=True, nullable=False)
    id_cliente_registrado = db.Column(db.String(32), db.ForeignKey('clienteregistrado.id_cliente_registrado'))
    
    venta = db.relationship('Venta', back_populates = 'metodopago')

    def __repr__(self):
        return '<payment method {} added>'.format(self.name_metodo)

class MetodoPagoSchema(ma.Schema):
    class Meta:
        fields = ('id_metodo', 'name_metodo', 'id_cliente_registrado',)

class Venta(db.Model):
    """docstring for Venta"""
    __tablename__ = "venta"
    id_venta              = db.Column(db.Integer, primary_key=True)
    fecha_venta           = db.Column(db.DateTime, nullable=False)
    total_venta           = db.Column(db.Float, nullable=False)
    id_cliente_registrado = db.Column(db.String(32), db.ForeignKey('clienteregistrado.id_cliente_registrado'))
    id_metodo             = db.Column(db.Integer, db.ForeignKey('metodopago.id_metodo'))

    metodopago      = db.relationship('MetodoPago', back_populates = 'venta')
    factura         = db.relationship('Factura', back_populates = 'venta')
    productovendido = db.relationship('ProductosVendidos', secondary = venta_productosvendidos)

    def __repr__(self):
        return 'New sale added'

class VentaSchema(ma.Schema):

    productosvendidos = ma.Nested(ProductosVendidosSchema, many=True)

    class Meta:
        fields = ('id_venta', 'fecha_venta', 'total_venta', 'id_cliente_registrado', 'id_metodo',)

class Factura(db.Model):
    """docstring for Factura"""
    __tablename__ = "factura"
    id_factura = db.Column(db.Integer, primary_key=True)
    id_venta   = db.Column(db.Integer, db.ForeignKey('venta.id_venta'))
    venta      = db.relationship('Venta', back_populates='factura')

    def __repr__(self):
        return 'New bill added'
        
class FacturaSchema(ma.Schema):
    class Meta:
        fields = ('id_factura', 'id_venta',)