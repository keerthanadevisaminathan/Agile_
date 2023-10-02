from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host='localhost',  
    user='root',       
    password='',      
    database='test'  
)

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.json
    print("Received data:", data)

    cursor = db.cursor()


    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')

    try:
        insert_query = "INSERT INTO book_appointment (name, email, phone) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (name, email, phone))
        db.commit()
        response_data = {'message': 'Form data received and stored successfully'}
    except Exception as e:
        print(str(e))
        db.rollback()
        response_data = {'message': 'Error storing form data'}

    cursor.close()

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
