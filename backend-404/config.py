"""Flak configuration variables"""

import datetime
from os import environ, path
from dotenv import load_dotenv
from flask_cors.extension import CORS
import redis

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Config:
    """Set Flask configuration from .env file"""

    #General config
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_APP = environ.get('FLASK_APP')
    FLASK_ENV = environ.get('FLASK_ENV')
    CORS_HEADERS = environ.get('CORS_HEADERS')

    #Database
    SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")
    SQLALCHEME_ECHO = False
    SQLALCHEME_TRACK_MODIFICATIONS = environ.get('SQLALCHEME_TRACK_MODIFICATIONS')

    SESSION_TYPE = "redis"
    PERMANENT_SESSION_LIFETIME = datetime.timedelta(minutes=10)
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.Redis(host='cache', port=6379, password='eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81')