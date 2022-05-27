from os import name
from flask import request
from flask import current_app as app
from .models import db, user, userSchema

user_schema = userSchema()
users_schema = userSchema(many=True)


@app.route('/', methods=['GET'])
def home():
    return "Hola"

@app.route('/createUser', methods=['POST'])
def createUser():
    id_user = request.json['id_user']
    name_user = request.json['name_user']
    _password = request.json['_password']

    new_user = user(id_user=id_user, name_user=name_user, _password=_password)
    db.session.add(new_user)
    db.session.commit()
    return user_schema.jsonify(new_user)


@app.route('/getUsers', methods=['GET'])
def getUsers():
    users = user.query.all()
    return users_schema.jsonify(users)

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
