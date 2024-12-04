from django.db import models

# Create your models here.


class Facultades(models.Model):
    nombre = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre


class Carreras(models.Model):
    nombre = models.CharField(max_length=200)
    id_facultad = models.ForeignKey(
        Facultades, related_name="facultades", on_delete=models.CASCADE
    )


class Eleccion(models.Model):
    nombre = models.CharField(max_length=300)
    fecha = models.DateField(auto_now_add=True)
    carrera = models.ForeignKey(
        Carreras,
        on_delete=models.CASCADE,
        related_name="elecciones",
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.nombre


class Candidatos(models.Model):
    nombre = models.CharField(max_length=300)
    descripcion = models.TextField()
    fecha = models.DateField(auto_now_add=True)
    eleccion = models.ForeignKey(
        Eleccion, related_name="candidatos", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.nombre


class Voto(models.Model):
    id_estudiante = models.IntegerField()
    id_candidato = models.ForeignKey(
        Candidatos, on_delete=models.CASCADE, null=True, blank=True
    )
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Voto de {self.id_estudiante.nombre} para {self.id_candidato.nombre} en {self.fecha}"


class UsuariosRegistrados(models.Model):
    nombre = models.CharField(max_length=200)
    codigoSis = models.IntegerField(unique=True)
    id_elecciones = models.ManyToManyField(
        Eleccion, related_name="usuarios_registrados"
    )

    def __str__(self):
        return self.nombre


class Rol(models.Model):
    nombre_rol = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_rol


class User(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=128)
    id_rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class Jurado(models.Model):
    usuario = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="jurado"
    )
    eleccion = models.ForeignKey(
        Eleccion, on_delete=models.CASCADE, related_name="jurados"
    )

    def __str__(self):
        return f"Jurado: {self.usuario.nombre} - Elección: {self.eleccion.nombre}"


class Tecnico(models.Model):
    usuario = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="tecnico"
    )
    facultad = models.ForeignKey(
        Facultades, on_delete=models.CASCADE, related_name="tecnicos"
    )

    def __str__(self):
        return f"Técnico: {self.usuario.nombre} - Facultad: {self.facultad.nombre}"
