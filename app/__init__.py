from flask import Flask

# Declare and configure application
app = Flask(__name__, static_url_path='/static')

from app import routes