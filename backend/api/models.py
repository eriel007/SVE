from django.db import models

# Create your models here.

class Eleccion(models.Model):
    nombre = models.CharField(max_length=300)
    fecha = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.nombre

class Candidatos(models.Model):
    nombre = models.CharField(max_length=300)
    descripcion = models.TextField()
    fecha = models.DateField(auto_now_add=True)
    eleccion = models.ForeignKey(Eleccion,related_name = 'candidatos',on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre
    
class Voto(models.Model):
    id_usuario = models.IntegerField(unique=True)
    id_candidato = models.ForeignKey(Candidatos,on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Voto de {self.id_usuario.nombre} para {self.id_candidato.nombre} en {self.fecha}"

class UsuariosRegistrados(models.Model):
    nombre = models.CharField(max_length=200)
    codigoSis = models.IntegerField(unique=True)
    foto = models.ImageField(upload_to='fotos/')
    huella_dactilar= models.BinaryField()

    def __str__(self):
        return self.nombre