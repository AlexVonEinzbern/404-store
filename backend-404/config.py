"""Flak configuration variables"""

from os import environ, path
from dotenv import load_dotenv
import redis

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Config:
    """Set Flask configuration from .env file"""

    #General config
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_APP = environ.get('FLASK_APP')
    FLASK_ENV = environ.get('FLASK_ENV')

    #Database
    SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABESE_URI")
    SQLALCHEME_ECHO = False
    SQLALCHEME_TRACK_MODIFICATIONS = False

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.Redis(host='cache', port=6379, password='eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81', decode_responses=True)