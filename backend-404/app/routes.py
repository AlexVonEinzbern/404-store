from flask import request
from flask import current_app as app
from .models import *

producto_schema = ProductoSchema()
@app.route('/crearProducto', methods=['POST'])
def crearProducto():

    name_producto          = request.json['name_producto']
    categoria_producto     = request.json['categoria_producto']
    subcategoria_producto  = request.json['subcategoria_producto']
    descripcion_producto   = request.json['descripcion_producto']
    talla_producto         = request.json['talla_producto']
    calificacion_producto  = request.json['calificacion_producto']
    stock_producto         = request.json['stock_producto']
    stock_vendido_producto = request.json['stock_vendido_producto']
    precio_producto        = request.json['precio_producto']

    new_producto = Producto(
        name_producto          = name_producto, 
        categoria_producto     = categoria_producto,
        subcategoria_producto  = subcategoria_producto,
        descripcion_producto   = descripcion_producto,
        talla_producto         = talla_producto,
        calificacion_producto  = calificacion_producto,
        stock_producto         = stock_producto,
        stock_vendido_producto = stock_vendido_producto,
        precio_producto        = precio_producto)

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

producto_imagen_schema = ProductoImagenSchema()
@app.route('/crearProductoImagen', methods=['POST'])
def crearProductoImagen():

    url_imagen_producto = request.json['url_imagen_producto']
    color_imagen_hex    = request.json['color_imagen_hex']
    id_producto         = request.json['id_producto']

    new_producto_imagen = ProductoImagen(
        url_imagen_producto = url_imagen_producto,
        color_imagen_hex    = color_imagen_hex,
        id_producto         = id_producto
        )
    db.session.add(new_producto_imagen)
    db.session.commit()

    return producto_imagen_schema.jsonify(new_producto_imagen)

@app.route('/obtenerProductoImagen/<id_url_imagen>', methods=['GET'])
def obtenerProductoImagen(id_url_imagen):
    productoimagen = ProductoImagen.query.filter_by(id_url_imagen=id_url_imagen).first()
    return producto_imagen_schema.jsonify(productoimagen)



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
