CREATE DATABASE IF NOT EXISTS Proyecto;

USE Proyecto;

CREATE TABLE Dependiente(
Id INT(4) NOT NULL auto_increment,
Usuario VARCHAR(30) NOT NULL,
Contrasenya VARCHAR(30) NOT NULL,
Nombre VARCHAR(40) NOT NULL,
Apellidos VARCHAR(40)NOT NULL,
Direccion VARCHAR(40)NOT NULL,
Sexo VARCHAR(10)NOT NULL,
Edad INT(3) NOT NULL,
Telefono_Familiar INT(9),
Enfermedades VARCHAR(200),
Alergias VARCHAR(200),
Nivel_Dependencia VARCHAR(200),
Id_Cuidador INT(3),
PRIMARY KEY(Id),
FOREIGN KEY(Id_Cuidador) references Cuidador(Id)
);

CREATE TABLE Cuidador(
Id INT(4) NOT NULL auto_increment,
Usuario VARCHAR(30) NOT NULL,
Contrasenya VARCHAR(30) NOT NULL,
Nombre VARCHAR(40),
Sexo VARCHAR(10),
PRIMARY KEY(Id)
);

CREATE TABLE Tareas(
Id INT(4) NOT NULL auto_increment,
Id_Dependiente INT(4) NOT NULL,
Titulo VARCHAR(40) NOT NULL,
DEscripcion VARCHAR(200) NOT NULL,
PRIMARY KEY(Id),
foreign key(Id_Dependiente) references Dependiente(Id)
);

CREATE TABLE Pastillas(
Id INT(4) NOT NULL auto_increment,
Id_Pastilla INT(4) NOT NULL,
Pastilla VARCHAR(200) NOT NULL,
PRIMARY KEY(Id),
foreign key(Id_Pastilla) references Dependiente(Id_Pastillas)
);

CREATE TABLE Recordatorio(
Id INT(4) NOT NULL auto_increment,
Id_Recordatorio INT(4) NOT NULL,
Recordatorio VARCHAR(200) NOT NULL,
PRIMARY KEY(Id),
foreign key(Id_Recordatorio) references Dependiente(Id_Recordatorio)
);


