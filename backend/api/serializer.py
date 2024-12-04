from rest_framework import serializers
from .models import (
    Eleccion,
    Candidatos,
    Voto,
    UsuariosRegistrados,
    User,
    Facultades,
    Carreras,
    Rol,
    Jurado,
    Tecnico,
)


class EleccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eleccion
        fields = "__all__"


class CandidatosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidatos
        fields = "__all__"


class VotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voto
        fields = "__all__"


class UsuarioRegistradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuariosRegistrados
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = "__all__"


class FacultadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facultades
        fields = "__all__"


class CarrerasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carreras
        fields = "__all__"


class JuradoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jurado
        fields = "__all__"


class TecnicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tecnico
        fields = "__all__"
