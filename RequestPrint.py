from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        # Traiter la requête POST ici
        print('Donnée form: ')
        print(request.form)
        for key in request.form:
            print(f"{key}: {request.form[key]}")
        print('Donnée json: ')
        print(request.json)
        print('Donnée brute: ')
        print(request.data)
        print('Donnée headers: ')
        print(request.headers)


        return 'Requête POST reçue!'
    else:
        # Retourner le contenu de votre index.html pour les requêtes GET
        with open('index.html', 'r') as file:
            return file.read()

if __name__ == '__main__':
    app.run(debug=True, port=8000)