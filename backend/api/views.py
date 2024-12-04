from rest_framework import viewsets
from .serializer import (
    EleccionSerializer,
    CandidatosSerializer,
    VotoSerializer,
    UsuarioRegistradoSerializer,
    UserSerializer,
    RolSerializer,
    JuradoSerializer,
    TecnicoSerializer,
    FacultadesSerializer,
    CarrerasSerializer,
)
from .models import (
    Eleccion,
    Candidatos,
    Voto,
    UsuariosRegistrados,
    User,
    Rol,
    Jurado,
    Tecnico,
    Facultades,
    Carreras,
)
from rest_framework.response import Response
from rest_framework.decorators import action

# Create your views here.


class EleccionesViewSet(viewsets.ModelViewSet):
    queryset = Eleccion.objects.all()
    serializer_class = EleccionSerializer

    @action(detail=True, methods=["get"])
    def candidatos(self, request, pk=None):
        eleccion = self.get_object()
        candidatos = Candidatos.objects.filter(eleccion=eleccion)
        serializer = CandidatosSerializer(candidatos, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def indices(self, request):
        elecciones = Eleccion.objects.all()
        ids = elecciones.values_list("id", flat=True)
        return Response(ids)


class CandidatosViewSet(viewsets.ModelViewSet):
    queryset = Candidatos.objects.all()
    serializer_class = CandidatosSerializer


class VotoViewSet(viewsets.ModelViewSet):
    queryset = Voto.objects.all()
    serializer_class = VotoSerializer


class UsuarioRegistradoViewSet(viewsets.ModelViewSet):
    queryset = UsuariosRegistrados.objects.all()
    serializer_class = UsuarioRegistradoSerializer

    @action(detail=False, methods=["get"], url_path="yaVoto/(?P<codigoSis>[^/.]+)")
    def yaVoto(self, request, codigoSis=None):
        existe = UsuariosRegistrados.objects.filter(codigoSis=codigoSis).exists()
        return Response({"existe": existe})


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=["GET"], url_path="getUsuarioRol/(?P<id_rol>[0-9]+)")
    def getUsuarioRol(self, request, id_rol):
        usuarios = User.objects.filter(id_rol=id_rol)
        serializer = self.get_serializer(usuarios, many=True)
        return Response(serializer.data)


class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer


class JuradoViewSet(viewsets.ModelViewSet):
    queryset = Jurado.objects.all()
    serializer_class = JuradoSerializer

    @action(detail=False, methods=["GET"], url_path="getJuradoDetalles")
    def get_jurado_detalles(self, request):
        # Seleccionar las relaciones necesarias (usuario, eleccion, y carrera relacionada con eleccion)
        jurados = Jurado.objects.select_related(
            "usuario",  # Relación con Usuario
            "eleccion",  # Relación con Elección
            "eleccion__carrera",  # Relación con Carrera de la Elección
        ).all()

        # Serializar los datos manualmente (o puedes utilizar un serializador si prefieres)
        data = []
        for jurado in jurados:
            detalles_jurado = {
                "id_jurado": jurado.id,
                "nombre_usuario": jurado.usuario.nombre,
                "email_usuario": jurado.usuario.email,
                "rol": jurado.usuario.id_rol.nombre_rol,
                "eleccion": {
                    "id_eleccion": jurado.eleccion.id,
                    "nombre_eleccion": jurado.eleccion.nombre,
                    "fecha": jurado.eleccion.fecha,
                },
                "carrera": {
                    "id_carrera": jurado.eleccion.carrera.id,
                    "nombre_carrera": jurado.eleccion.carrera.nombre,
                    "facultad": jurado.eleccion.carrera.id_facultad.nombre,
                },
            }
            data.append(detalles_jurado)

        return Response(data)


class TecnicoViewSet(viewsets.ModelViewSet):
    queryset = Tecnico.objects.all()
    serializer_class = TecnicoSerializer

    @action(detail=False, methods=["GET"], url_path="getTecnicosFacultades")
    def get_tecnicosFacultades(self, request):
        tecnicos = Tecnico.objects.select_related(
            "usuario", "facultad"
        ).all()  # Optimiza las relaciones para consultas
        # Serializar los datos
        data = [
            {
                "id": tecnico.id,
                "nombre_usuario": tecnico.usuario.nombre,
                "contraseña": tecnico.usuario.contraseña,
                "email_usuario": tecnico.usuario.email,
                "facultad": tecnico.facultad.nombre,
            }
            for tecnico in tecnicos
        ]
        return Response(data)


class FacultadesViewSet(viewsets.ModelViewSet):
    queryset = Facultades.objects.all()
    serializer_class = FacultadesSerializer


class CarrerasViewSet(viewsets.ModelViewSet):
    queryset = Carreras.objects.all()
    serializer_class = CarrerasSerializer
