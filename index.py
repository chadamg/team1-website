from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/submit', methods=['GET', 'POST'])
def hello():
    return render_template('indexBootstrap.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()