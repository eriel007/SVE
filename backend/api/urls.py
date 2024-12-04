from django.urls import path, include
from rest_framework import routers
from api import views
from .utils.umss_estudiantes.establecer_conexion import (
    EstablecerConexionDBView,
    ObtenerRegistrosView,
    VerificarUsuarioView,
)

router = routers.DefaultRouter()
router.register(r"Elecciones", views.EleccionesViewSet)
router.register(r"Candidatos", views.CandidatosViewSet)
router.register(r"Voto", views.VotoViewSet)
router.register(r"UsuariosRegistrados", views.UsuarioRegistradoViewSet)
router.register(r"Usuarios", views.UserViewSet)
router.register(r"Roles", views.RolViewSet)
router.register(r"Jurado", views.JuradoViewSet)
router.register(r"Tecnico", views.TecnicoViewSet)
router.register(r"Facultades", views.FacultadesViewSet)
router.register(r"Carreras", views.CarrerasViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("conectiondb", EstablecerConexionDBView.as_view(), name="conectar_bd"),
    path("informacionumss/", ObtenerRegistrosView.as_view(), name="obtener_registros"),
    path("verificar/", VerificarUsuarioView.as_view(), name="verificar"),
]
