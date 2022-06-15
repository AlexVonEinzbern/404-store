from os import name
from flask import request
from flask import current_app as app
from .models import *


# @app.route('/', methods=['GET'])
# def home():
#     return "Hola"

productoschema = ProductoSchema()
@app.route('/crearProducto', methods=['POST'])
def crearProducto():

    id_producto            = request.json['id_producto']       
    name_producto          = request.json['name_producto']
    categoria_producto     = request.json['categoria_producto']
    subcategoria_producto  = request.json['subcategoria_producto']
    descripcion_producto   = request.json['descripcion_producto']
    talla_producto         = request.json['talla_producto']
    calificacion_producto  = request.json['calificacion_producto']
    stock_producto         = request.json['stock_producto']
    stock_vendido_producto = request.json['stock_vendido_producto']
    precio_producto        = request.json['precio_producto']

    new_producto = Producto(id_producto=id_producto, 
        name_producto=name_producto, 
        categoria_producto=categoria_producto,
        subcategoria_producto=subcategoria_producto,
        descripcion_producto=descripcion_producto,
        talla_producto=talla_producto,
        calificacion_producto=calificacion_producto,
        stock_producto=stock_producto,
        stock_vendido_producto=stock_vendido_producto,
        precio_producto=precio_producto)

    db.session.add(new_producto)
    db.session.commit()

    return productoschema.jsonify(new_producto)

@app.route('/obtenerProducto/<file_name>', methods=['GET'])
def obtenerProducto(file_name):
    producto = Producto.query.filter_by(file=file_name)
    return productoschema.jsonify(producto)

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
