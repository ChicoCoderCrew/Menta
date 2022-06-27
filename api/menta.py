from flask import Flask
from user import user

def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

if __name__ == "__main__":
    app = Flask(__name__)
    app.route("/")(hello)
    app.route("/user_hello")(user.user_hello)

    app.run(host='0.0.0.0')
