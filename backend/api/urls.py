from django.urls import path,include
from rest_framework import routers
from api import views

router=routers.DefaultRouter()
router.register(r'Elecciones',views.EleccionesViewSet)
router.register(r'Candidatos',views.CandidatosViewSet)
router.register(r'Voto',views.VotoViewSet)
router.register(r'UsuariosRegistrados',views.UsuarioRegistradoViewSet)

urlpatterns = [
    path('',include(router.urls))
]
