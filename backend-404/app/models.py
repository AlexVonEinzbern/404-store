"""Data models"""

from . import db, ma

class user(db.Model):
    id_user   = db.Column(db.Integer, primary_key=True)
    name_user = db.Column(db.String(50), unique=True, nullable=False)
    _password = db.Column(db.String(128), unique=True, nullable=False)

    def __repr__(self):
        return '<user {}>'.format(self.host)

    
class userSchema(ma.Schema):
    class Meta:
        fields = ('id_user', 'name_user', '_password')