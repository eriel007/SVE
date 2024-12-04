import psycopg2
from psycopg2 import OperationalError

def conexion_db(nombre, usuario, contrasena, host, puerto):
    try:
        connection = psycopg2.connect(
            dbname=nombre,
            user=usuario,
            password=contrasena,
            host=host,
            port=puerto
        )
        return connection
    except OperationalError as e:
        raise Exception(f"Error al conectar con la base de datos: {e}")
