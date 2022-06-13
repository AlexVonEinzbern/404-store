"""Data models"""

from . import db, ma
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin, login_required
import bcrypt

class Producto(db.Model):
    """docstring for Producto"""

    id_producto            = db.Column(db.Integer, primary_key=True)
    name_producto          = db.Column(db.String(50), unique=True, nullable=False)
    categoria_producto     = db.Column(db.String(50), unique=True, nullable=False)
    subcategoria_producto  = db.Column(db.String(50), unique=True, nullable=False)
    descripcion_producto   = db.Column(db.String(200), unique=True, nullable=False)
    talla_producto         = db.Column(db.String(5), unique=True, nullable=False)
    calificacion_producto  = db.Column(db.Integer, unique=True)
    stock_producto         = db.Column(db.Integer, unique=True, nullable=False)
    stock_vendido_producto = db.Column(db.Integer, unique=True, nullable=False)
    precio_producto        = db.Column(db.Float, unique=True, nullable=False)

    def __repr__(self):
        return '<product {} has been added>'.format(self.name_producto)

class ProductoSchema(ma.Schema):
    class Meta:
        fields = ('id_producto', 'name_producto', 'categoria_producto', 'subcategoria_producto', 
            'descripcion_producto', 'talla_producto', 'calificacion_producto', 'stock_producto', 
            'stock_vendido_producto', 'precio_producto')

class ProductoImagen(db.Model):
    """docstring for ProductoImagen"""

    id_url_imagen       = db.Column(db.Integer, primary_key=True)
    url_imagen_producto = db.Column(db.String(200), unique=True, nullable=False)
    color_imagen_hex    = db.Column(db.String(10), nullable=False)
    id_producto         = db.Column(db.Integer, db.ForeingKey('producto.id_producto'))
    producto            = db.relationship('Producto', backref='productoImagenes')

    def __repr__(self):
        return '<Url image added>'

class ProductoImagenSchema(ma.Schema):
    class Meta:
        fields = ('id_url_imagen', 'url_imagen_producto', 'color_imagen_hex', 'id_producto')

class ClienteRegistrado(db.Model, UserMixin):
    """docstring for ClienteRegistrado"""

    id_cliente_registrado        = db.Column(db.Integer, primary_key=True)
    name_cliente_registrado      = db.Column(db.String(50), unique=True, nullable=False)
    cedula_cliente_registrado    = db.Column(db.Integer, unique=True, nullable=False)
    edad_cliente_registrado      = db.Column(db.Integer, unique=True, nullable=False)
    email_cliente_registrado     = db.Column(db.String(50), unique=True, nullable=False)
    direccion_cliente_registrado = db.Column(db.String(50))
    ip_cliente_registrado        = db.Column(db.String(15), unique=True, nullable=False)
    numero_visitas_registrado    = db.Column(db.Integer, unique=True, nullable=False)
    password_cliente_registrado  = db.Column(db.String(128), unique=True, nullable=False)
    username_cliente_registrado  = db.Column(db.String(15), unique=True, nullable=False)
    telefono_cliente_registrado  = db.Column(db.Integer)

    @property
    def password(self):
        raise AttributeError('password not readable')
    @password.setter
    def password(self, password):
        self.password_cliente_registrado = bcrypt.hashpw('password', bcrypt.gensalt())

    #You should add a verify password function inline with the bcrypt technolgy you implement:
    #def verify_password(self, password)
    #    return some_check_hash_func(self.password_cliente_registrado, password)

    def __repr__(self):
        return '<client {} has been added>'.format(self.name_cliente_registrado)

class ClienteRegistradoSchema(ma.Schema):
    class Meta:
        fields = ('id_cliente_registrado', 'name_cliente_registrado', 'cedula_cliente_registrado',
            'edad_cliente_registrado', 'email_cliente_registrado', 'direccion_cliente_registrado',
            'ip_cliente_registrado', 'numero_visitas_registrado', 'password_cliente_registrado',
            'username_cliente_registrado', 'telefono_cliente_registrado')

class ClienteNoRegistrado(db.Model):
    """docstring for ClienteNoRegistrado"""

    id_cliente_noregistrado     = db.Column(db.Integer, primary_key=True)
    ip_cliente_noregistrado     = db.Column(db.String(15), unique=True, nullable=False)
    numero_visitas_noregistrado = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return 'Non regis client added'

class ClienteNoRegistradoSchema(ma.Schema):
    class Meta:
        fields = ('id_cliente_noregistrado', 'ip_cliente_noregistrado', 'numero_visitas_noregistrado')
        
class Administrador(db.Model):
    """docstring for Administrador"""
    
    id_administrador        = db.Column(db.Integer, primary_key=True)
    name_administrador      = db.Column(db.String(50), unique=True, nullable=False)
    username_administrador  = db.Column(db.String(15), unique=True, nullable=False)
    password_administrador  = db.Column(db.String(128), unique=True, nullable=False)
    telefono_administrador  = db.Column(db.Integer)
    direccion_administrador = db.Column(db.String(50))
    cedula_administrador    = db.Column(db.Integer, unique=True, nullable=False)
    email_administrador     = db.Column(db.String(50), unique=True, nullable=False)

    @property
    def password(self):
        raise AttributeError('password not readable')
    @password.setter
    def password(self, password):
        self.password_administrador = bcrypt.hashpw('password', bcrypt.gensalt())

    #You should add a verify password function inline with the bcrypt technolgy you implement:
    #def verify_password(self, password)
    #    return some_check_hash_func(self.password_cliente_registrado, password)

    def __repr__(self):
        return '<Admin {} has been added>'.format(self.name_administrador)

class AdministradorSchema(ma.Schema):
    class Meta:
        fields = ('id_administrador', 'name_administrador', 'username_administrador', 
            'password_administrador', 'telefono_administrador', 'direccion_administrador', 
            'cedula_administrador', 'email_administrador')

class MetodoPago(db.Model):
    """docstring for MetodoPago"""
    
    id_metodo             = db.Column(db.Integer, primary_key=True)
    name_metodo           = db.Column(db.String(50), unique=True, nullable=False)
    id_cliente_registrado = db.Column(db.Integer, db.ForeingKey('clienteRegistrado.id_cliente_registrado'))
    clienteRegistrado     = db.relationship('ClienteRegistrado', backref='metodospagos')

    def __repr__(self):
        return '<payment method {} added>'.format(self.name_metodo)

class MetodoPagoSchema(ma.Schema):
    class Meta:
        fields = ('id_metodo', 'name_metodo', 'id_cliente_registrado')

class Venta(db.Model):
    """docstring for Venta"""

    id_venta              = db.Column(db.Integer, primary_key=True)
    fecha_venta           = db.Column(db.DateTime, unique=True, nullable=False)
    total_venta           = db.Column(db.Float, unique=True, nullable=False)
    id_cliente_registrado = db.Column(db.Integer, db.ForeingKey('cliente.id_cliente_registrado'))
    id_metodo             = db.Column(db.Integer, db.ForeingKey('metodo.id_metodo'))
    cliente               = db.relationship('ClienteRegistrado', backref='clienteRegistrado')
    metodo                = db.relationship('MetodoPago', backref='metodospagos')

    def __repr__(self):
        return 'New sale added'

class VentaSchema(ma.Schema):
    class Meta:
        fields = ('id_venta', 'fecha_venta', 'total_venta', 'id_cliente_registrado', 'id_metodo')

class ProductosVendidos(db.Model):
    """docstring for ProductosVendidos"""
    
    id_productos_vendidos = db.Column(db.Integer, primary_key=True)
    id_producto           = db.Column(db.Integer,db.ForeingKey('producto.id_producto'))
    id_venta              = db.Column(db.Integer, db.ForeingKey('venta.id_venta'))
    producto              = db.relationship('Producto', backref='productosVendidos')
    venta                 = db.relationship('Venta', backref='productosVenta')

    def __repr__(self):
        return 'New product sale added'

class ProductosVendidosSchema(ma.Schema):
    class Meta:
        fields = ('id_productos_vendidos', ' id_producto', 'id_venta')

class Factura(db.Model):
    """docstring for Factura"""
   
    id_factura = db.Column(db.Integer, primary_key=True)
    id_venta   = db.Column(db.Integer, db.ForeingKey('venta.id_venta'))
    venta      = db.relationship('Venta', backref='facturaVenta')

    def __repr__(self):
        return 'New bill added'
        
class FacturaSchema(ma.Schema):
    class Meta:
        fields = ('id_factura', 'id_venta')