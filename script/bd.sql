CREATE DATABASE IF NOT EXISTS arkus;

USE arkus;

CREATE TABLE IF NOT EXISTS Usuarios(
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Correo VARCHAR(50),
    Contrasena VARCHAR(50),
    Curp VARCHAR(20),
    Telefono VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS Compania(
    idCompania INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Ubicacion VARCHAR(50),
    Descripcion VARCHAR(50),
    SitioWeb VARCHAR(50),
    Contacto VARCHAR(50)
);