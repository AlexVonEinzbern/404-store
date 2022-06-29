from flask import request
from flask import current_app as app
from .models import *

producto_schema = ProductoSchema()
@app.route('/crearProducto', methods=['POST'])
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
    color_imagen_hex          = request.json['color_imagen_hex'] 

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
        url_imagen_producto       = url_imagen_producto,
        color_imagen_hex          = color_imagen_hex
        )

    db.session.add(new_producto)
    db.session.commit()

    return producto_schema.jsonify(new_producto)

@app.route('/obtenerProducto/<id_producto>', methods=['GET'])
def obtenerProducto(id_producto):
    producto = Producto.query.filter_by(id_producto=id_producto).first()
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

    new_cliente = ClienteRegistrado(
        name_cliente_registrado = name_cliente_registrado,
        cedula_cliente_registrado = cedula_cliente_registrado,
        edad_cliente_registrado = edad_cliente_registrado,
        email_cliente_registrado = email_cliente_registrado,
        direccion_cliente_registrado = direccion_cliente_registrado,
        password_cliente_registrado = password_cliente_registrado,
        username_cliente_registrado  = username_cliente_registrado,
        telefono_cliente_registrado = telefono_cliente_registrado
    )

    db.session.add(new_cliente)
    db.session.commit()

    return cliente_registrado_schema.jsonify(new_cliente)


##                      FUTUROS CAMBIOS
##================================================================

# producto_imagen_schema = ProductoImagenSchema()
# @app.route('/crearProductoImagen', methods=['POST'])
# def crearProductoImagen():

#     url_imagen_producto = request.json['url_imagen_producto']
#     color_imagen_hex    = request.json['color_imagen_hex']
#     id_producto         = request.json['id_producto']

#     new_producto_imagen = ProductoImagen(
#         url_imagen_producto = url_imagen_producto,
#         color_imagen_hex    = color_imagen_hex,
#         id_producto         = id_producto
#         )
#     db.session.add(new_producto_imagen)
#     db.session.commit()

#     return producto_imagen_schema.jsonify(new_producto_imagen)

# @app.route('/obtenerProductoImagen/<id_producto>', methods=['GET'])
# def obtenerProductoImagen(id_producto):
#     productoimagen = ProductoImagen.query.filter_by(id_producto = id_producto).first()
#     return producto_imagen_schema.jsonify(productoimagen)





##                      GUIA
##================================================================


# @app.route('/createUser', methods=['POST'])
# def createUser():
#     id_user = request.json['id_user']
#     name_user = request.json['name_user']
#     _password = request.json['_password']

#     new_user = user(id_user=id_user, name_user=name_user, _password=_password)
#     db.session.add(new_user)
#     db.session.commit()
#     return user_schema.jsonify(new_user)


# @app.route('/getUsers', methods=['GET'])
# def getUsers():
#     users = user.query.all()
#     return users_schema.jsonify(users)

#@app.route('/createPeer', methods=['POST'])
#def createPeer():
#    host = request.json['host']
#    file = request.json['file']

#    new_peer = Peer(host=host, file=file)
#    db.session.add(new_peer)
#    db.session.commit()
#    return peer_schema.jsonify(new_peer)

#@app.route('/getPeers', methods=['GET'])
#def getPeers():
#    peers = Peer.query.all()
#    return peers_schema.jsonify(peers)

#@app.route('/getPeer/<file_name>', methods=['GET'])
#def getPeer(file_name):
#    peer = Peer.query.filter_by(file=file_name)
#    return peers_schema.jsonify(peer)
