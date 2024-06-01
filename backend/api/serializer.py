from rest_framework import serializers
from .models import Eleccion,Candidatos,Voto,UsuariosRegistrados

class EleccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eleccion
        fields = '__all__'

class CandidatosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidatos
        fields = '__all__'

class VotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voto
        fields = '__all__'

class UsuarioRegistradoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuariosRegistrados
        fields = '__all__'