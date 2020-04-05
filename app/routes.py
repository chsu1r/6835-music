from app import app
from flask import render_template, url_for, redirect, flash

## pyaudio imports

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/left_drum', methods=["POST"])
def left_drum():
    print("left_drum")
    return render_template("index.html")

@app.route('/right_drum', methods=["POST"])
def right_drum():
    print("right_drum")
    return render_template("index.html")