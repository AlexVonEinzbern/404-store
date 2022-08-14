from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_session import Session

db   = SQLAlchemy()
ma   = Marshmallow()
sess = Session()
cors = CORS()

def init_app():
    """Construct the core app"""
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')
    cors.init_app(app, supports_credentials=True)
    #resources={r"/*": {"origins": "http://localhost:5000"}}
    db.init_app(app)
    ma.init_app(app)
    sess.init_app(app)

    with app.app_context():
        from . import routes #Import routes
        db.create_all()

        return app
