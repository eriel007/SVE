from rest_framework import viewsets
from .serializer import EleccionSerializer,CandidatosSerializer,VotoSerializer,UsuarioRegistradoSerializer
from .models import Eleccion,Candidatos,Voto,UsuariosRegistrados
# Create your views here.

class EleccionesViewSet(viewsets.ModelViewSet):
    queryset = Eleccion.objects.all()
    serializer_class = EleccionSerializer

class CandidatosViewSet(viewsets.ModelViewSet):
    queryset = Candidatos.objects.all()
    serializer_class = CandidatosSerializer

class VotoViewSet(viewsets.ModelViewSet):
    queryset= Voto.objects.all()
    serializer_class = VotoSerializer

class UsuarioRegistradoViewSet(viewsets.ModelViewSet):
    queryset = UsuariosRegistrados.objects.all()
    serializer_class = UsuarioRegistradoSerializer