from flask import request, jsonify, session
from flask import current_app as app
from marshmallow.types import StrSequenceOrSet
from .models import *
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_cors import cross_origin
import sys

producto_schema = ProductoSchema()
@app.route('/crearProducto', methods=['POST'])
#@cross_origin(origins='*',allow_headers=['Content-Type','Authorization'])
def crearProducto():

    name_producto             = request.json['name_producto']
    genero_producto           = request.json['genero_producto']
    categoria_producto        = request.json['categoria_producto']
    subcategoria_producto     = request.json['subcategoria_producto']
    descripcion_producto      = request.json['descripcion_producto']
    talla_producto            = request.json['talla_producto']
    calificacion_producto     = request.json['calificacion_producto']
    stock_producto            = request.json['stock_producto']
    stock_vendido_producto    = request.json['stock_vendido_producto']
    precio_producto           = request.json['precio_producto']
    url_imagen_producto       = request.json['url_imagen_producto']

    new_producto = Producto(
        name_producto             = name_producto, 
        genero_producto           = genero_producto,
        categoria_producto        = categoria_producto,
        subcategoria_producto     = subcategoria_producto,
        descripcion_producto      = descripcion_producto,
        talla_producto            = talla_producto,
        calificacion_producto     = calificacion_producto,
        stock_producto            = stock_producto,
        stock_vendido_producto    = stock_vendido_producto,
        precio_producto           = precio_producto,
        url_imagen_producto       = url_imagen_producto
        )

    db.session.add(new_producto)
    db.session.commit()
    db.session.close()

    return producto_schema.jsonify(new_producto)

@app.route('/actualizarProducto/<name_producto>', methods=['PUT'])
def actualizarProducto(name_producto):
    Producto.query.filter_by(name_producto=name_producto).update({
        'name_producto':          request.json['name_producto'],
        'genero_producto':        request.json['genero_producto'],
        'categoria_producto':     request.json['categoria_producto'],
        'subcategoria_producto':  request.json['subcategoria_producto'],
        'descripcion_producto':   request.json['descripcion_producto'],
        'talla_producto':         request.json['talla_producto'],
        'stock_producto':         request.json['stock_producto'],
        'stock_vendido_producto': request.json['stock_vendido_producto'],
        'precio_producto':        request.json['precio_producto'],
        'url_imagen_producto':    request.json['url_imagen_producto'],
        })
    db.session.commit()
    db.session.close()
    return {'msg': 'Producto actualizado'}

@app.route('/obtenerProducto/<name_producto>', methods=['GET'])
def obtenerProducto(name_producto):
    producto = Producto.query.filter_by(name_producto=name_producto).first()

    return producto_schema.jsonify(producto)

productos_schema = ProductoSchema(many=True)
@app.route('/obtenerProductos', methods=['GET'])
def obtenerProductos():
    productos = Producto.query.all()

    return productos_schema.jsonify(productos)


cliente_registrado_schema = ClienteRegistradoSchema()
@app.route('/crearClienteRegistrado', methods=['POST'])
def crearClienteRegistrado():

    name_cliente_registrado      = request.json['name_cliente_registrado']
    cedula_cliente_registrado    = request.json['cedula_cliente_registrado']
    edad_cliente_registrado      = request.json['edad_cliente_registrado']
    email_cliente_registrado     = request.json['email_cliente_registrado']
    direccion_cliente_registrado = request.json['direccion_cliente_registrado']
    password_cliente_registrado  = request.json['password_cliente_registrado']
    username_cliente_registrado  = request.json['username_cliente_registrado']
    telefono_cliente_registrado  = request.json['telefono_cliente_registrado']
    estado_cliente_registrado    = request.json['estado_cliente_registrado']

    email_existe    = ClienteRegistrado.query.filter_by(email_cliente_registrado=email_cliente_registrado).first() is not None
    username_existe = ClienteRegistrado.query.filter_by(username_cliente_registrado=username_cliente_registrado).first() is not None

    if email_existe:
        return jsonify({ "error" : "Email ya existe"}), 409

    if username_existe:
        return jsonify({ "error" : "Usuario ya existe"}), 409

    hashed_password = generate_password_hash(password_cliente_registrado).decode('utf-8')

    new_cliente = ClienteRegistrado(
        name_cliente_registrado      = name_cliente_registrado,
        cedula_cliente_registrado    = cedula_cliente_registrado,
        edad_cliente_registrado      = edad_cliente_registrado,
        email_cliente_registrado     = email_cliente_registrado,
        direccion_cliente_registrado = direccion_cliente_registrado,
        password_cliente_registrado  = hashed_password,
        username_cliente_registrado  = username_cliente_registrado,
        telefono_cliente_registrado  = telefono_cliente_registrado,
        estado_cliente_registrado    = estado_cliente_registrado
    )

    db.session.add(new_cliente)
    db.session.commit()
    db.session.close()
    return cliente_registrado_schema.jsonify(new_cliente)

@app.route('/actualizarClienteRegistrado/<name_cliente_registrado>', methods=['PUT'])
def actualizarClienteRegistrado(name_cliente_registrado):
    ClienteRegistrado.query.filter_by(name_cliente_registrado=name_cliente_registrado).update({
        'name_cliente_registrado':      request.json['name_cliente_registrado'],
        'cedula_cliente_registrado':    request.json['cedula_cliente_registrado'],
        'edad_cliente_registrado':      request.json['edad_cliente_registrado'],
        'email_cliente_registrado':     request.json['email_cliente_registrado'],
        'direccion_cliente_registrado': request.json['direccion_cliente_registrado'],
        'password_cliente_registrado':  request.json['password_cliente_registrado'],
        'username_cliente_registrado':  request.json['username_cliente_registrado'],
        'telefono_cliente_registrado':  request.json['telefono_cliente_registrado'],
        'estado_cliente_registrado':    request.json['estado_cliente_registrado']
        })

    db.session.commit()
    db.session.close()
    return {'msg': 'Cliente actualizado'}

admin_schema = AdministradorSchema()
@app.route('/crearAdmin', methods=['POST'])
def crearAdmin():

    name_administrador      = request.json['name_administrador']
    username_administrador  = request.json['username_administrador']
    password_administrador  = request.json['password_administrador']
    telefono_administrador  = request.json['telefono_administrador']
    direccion_administrador = request.json['direccion_administrador']
    cedula_administrador    = request.json['cedula_administrador']
    email_administrador     = request.json['email_administrador']

    email_existe    = Administrador.query.filter_by(email_administrador=email_administrador).first() is not None
    username_existe = Administrador.query.filter_by(username_administrador=username_administrador).first() is not None

    if email_existe:
        return jsonify({ "error" : "Email ya existe"}), 409

    if username_existe:
        return jsonify({ "error" : "Usuario ya existe"}), 409

    hashed_password = generate_password_hash(password_administrador).decode('utf-8')

    new_admin = Administrador(
        name_administrador      = name_administrador,
        username_administrador  = username_administrador,
        password_administrador  = password_administrador,
        telefono_administrador  = telefono_administrador,
        direccion_administrador = direccion_administrador,
        cedula_administrador    = cedula_administrador,
        email_administrador     = email_administrador
        )

    db.session.add(new_admin)
    db.session.commit()
    db.session.close()
    return admin_schema.jsonify(new_admin)

@app.route('/obtenerAdmin/<username_administrador>', methods=['GET'])
def obtenerAdmin(username_administrador):
    administrador = Administrador.query.filter_by(username_administrador=username_administrador).first()

    return admin_schema.jsonify(administrador)

@app.route('/actualizarAdmin/<name_administrador>', methods=['PUT'])
def actualizarAdmin(name_administrador):
    Administrador.query.filter_by(name_administrador=name_administrador).update({
        'name_administrador':      request.json['name_administrador'],
        'username_administrador':  request.json['username_administrador'],
        'password_administrador':  request.json['password_administrador'],
        'telefono_administrador':  request.json['telefono_administrador'],
        'direccion_administrador': request.json['direccion_administrador'],
        'cedula_administrador':    request.json['cedula_administrador'],
        'email_administrador':     request.json['email_administrador']
    })

    db.session.commit()
    db.session.close()
    return {'msg': 'Administrador actualizado'}

@app.route('/eliminarAdmin<name_administrador>', methods=['DELETE'])
def eliminarAdmin(name_administrador):
    Administrador.query.filter_by(name_administrador=name_administrador).delete()
    db.session.commit()
    db.session.close()
    return {'msg': 'Administrador eliminado'}

@app.route('/@me')
def get_current_user():

    print(session.get('user_id'), file=sys.stderr)
    user_id = session.get('user_id')

    if not user_id:
        return jsonify({ "error" : "Unauthorized" }), 401

    user = ClienteRegistrado.query.filter_by(id_cliente_registrado=user_id).first()

    return cliente_registrado_schema.jsonify(user)

@app.route("/logout", methods=["POST"])
def logout():
    session.pop('user_id')
    return "200"

##Ruta para el Login
@app.route('/login', methods=['POST'])
def login():

    password_cliente_registrado  = request.json['password_cliente_registrado']
    username_cliente_registrado  = request.json['username_cliente_registrado']

    username_existe = ClienteRegistrado.query.filter_by(username_cliente_registrado=username_cliente_registrado).first()

    if username_existe is None:
        return jsonify({ "error" : "Unauthorized" }), 401

    if not check_password_hash(username_existe.password_cliente_registrado, password_cliente_registrado):
        return jsonify({ "error" : "Unauthorized" }), 401

    session['user_id'] = username_existe.id_cliente_registrado
    print(session.get('user_id'), file=sys.stderr)
    return cliente_registrado_schema.jsonify(username_existe)

@app.route('/obtenerClienteRegistrado/<username_cliente_registrado>', methods=['GET'])
def obtenerClienteRegistrado(username_cliente_registrado):
    cliente_registrado = ClienteRegistrado.query.filter_by(username_cliente_registrado=username_cliente_registrado).first()

    return cliente_registrado_schema.jsonify(cliente_registrado)

clientes_registrados_schema = ClienteRegistradoSchema(many=True)
@app.route('/obtenerClientesRegistrados', methods=['GET'])
def obtenerClientesRegistrados():
    clientes_registrados = ClienteRegistrado.query.all()
    return clientes_registrados_schema.jsonify(clientes_registrados)

@app.route('/eliminarProducto<name_producto>', methods=['DELETE'])
def eliminarProducto(name_producto):
    Producto.query.filter_by(name_producto=name_producto).delete()
    db.session.commit()
    db.session.close()
    return {'msg': 'Producto eliminado'}


@app.route('/obtenerProductoGenero/<genero_producto>', methods=['GET'])
def obtenerProductoGenero(genero_producto):
    productos = Producto.query.filter_by(genero_producto=genero_producto)
    #productos.headers.add("Access-Control-Allow-Origin", "*")
    return productos_schema.jsonify(productos)

@app.route('/obtenerProductoCategoria/<categoria_producto>', methods=['GET'])
def obtenerProductoCategoria(categoria_producto):
    productos = Producto.query.filter_by(categoria_producto=categoria_producto)
    #productos.headers.add("Access-Control-Allow-Origin", "*")
    return productos_schema.jsonify(productos)

@app.route('/obtenerProductoFiltrado/<genero>/<categoria>/<subcategoria>/<talla>', methods=["GET"])
def obtenerProductoFiltrado(genero,categoria,subcategoria,talla):   
    aux={}
    if genero!="%":
        aux["genero_producto"]=genero
    if categoria!="%":
        aux["categoria_producto"]=categoria
    if subcategoria!= "%":
        aux["subcategoria_producto"]=subcategoria
    if talla!="%":
        aux["talla_producto"]=talla
    productos = db.session.query(Producto)
    for attr in aux:
        productos=productos.filter(getattr(Producto,attr).like("%%%s%%" % aux[attr]))
    return productos_schema.jsonify(productos)

metodopago_schema = MetodoPagoSchema()
@app.route('/crearMetodoPago', methods=['POST'])
def crearMetodoPago():

    name_metodo           = request.json['name_metodo']
    id_cliente_registrado = request.json['id_cliente_registrado']

    new_metodopago = MetodoPago(
        name_metodo = name_metodo,
        id_cliente_registrado = id_cliente_registrado
    )

    db.session.add(new_metodopago)
    db.session.commit()
    db.session.close()
    return metodopago_schema.jsonify(new_metodopago)

metodopagos_schema = MetodoPagoSchema(many=True)
@app.route('/obtenerMetodoPago/<id_cliente_registrado>', methods=['GET'])
def obtenerMetodoPago(id_cliente_registrado):
    metodopago = MetodoPago.query.filter_by(id_cliente_registrado=id_cliente_registrado)
    return metodopagos_schema.jsonify(metodopago)
