from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..conexionDB.conexion_db import conexion_db
import json

# Variable global para almacenar la conexión
db_connection = None


class EstablecerConexionDBView(APIView):
    def post(self, request, *args, **kwargs):
        global db_connection
        try:
            data = request.data
            nombre = data.get("nombre")
            usuario = data.get("usuario")
            contrasena = data.get("contrasena")
            host = data.get("host")
            puerto = data.get("puerto")

            # Establecer la conexión a la base de datos
            db_connection = conexion_db(nombre, usuario, contrasena, host, puerto)
            cursor = db_connection.cursor()
            cursor.execute("SELECT version();")
            db_version = cursor.fetchone()

            return Response({"status": "success", "data": db_version[0]})
        except json.JSONDecodeError:
            return Response(
                {"status": "error", "message": "Error en el formato JSON"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"status": "error", "message": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class ObtenerRegistrosView(APIView):
    def get(self, request, *args, **kwargs):
        global db_connection
        if db_connection is None:
            return Response(
                {"status": "error", "message": "No se ha establecido una conexión"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        try:
            # Obtener el ID del usuario enviado en la solicitud
            user_id = request.query_params.get("id")

            if not user_id:
                return Response(
                    {"status": "error", "message": "El parámetro 'id' es requerido"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            cursor = db_connection.cursor()
            cursor.execute("SELECT * FROM estudiantes_umss WHERE id = %s;", [user_id])
            user = cursor.fetchone()
            cursor.close()

            if user:
                # Convertir el registro en un diccionario
                user_data = {
                    "id": user[0],
                    "nombre": user[1],
                    "carrera": user[2],
                    "codigo_sis": user[3],
                    "huella_dactilar": user[4],
                }
                return Response(user_data)
            else:
                return Response(
                    {"status": "error", "message": "Usuario no encontrado"},
                    status=status.HTTP_404_NOT_FOUND,
                )
        except Exception as e:
            return Response(
                {"status": "error", "message": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class VerificarUsuarioView(APIView):
    def get(self, request, *args, **kwargs):
        global db_connection
        if db_connection is None:
            return Response(
                {"status": "error", "message": "No se ha establecido una conexión"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user_id = request.query_params.get("id")

            cursor = db_connection.cursor()
            cursor.execute("SELECT * FROM estudiantes_umss WHERE id = %s;", [user_id])
            user = cursor.fetchone()

            if user:
                return Response(True, status=status.HTTP_200_OK)
            else:
                return Response(False, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                False,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
