CREATE DATABASE IF NOT EXISTS DailySense;

USE DailySense;

CREATE TABLE Grandpa(
IdGrandpa INT() NOT NULL auto_increment,
Name VARCHAR(45) NOT NULL,
LastName VARCHAR(90)NOT NULL,
Address VARCHAR(45)NOT NULL,
Gender VARCHAR(10)NOT NULL,
Age INT(3) NOT NULL,
FamilyContact INT(20),
Diseases VARCHAR(200),
Allergies VARCHAR(200),
DependencyLevel VARCHAR(200),                    
PRIMARY KEY(IdGrandpa),
FOREIGN KEY(IdGrandpa) references Atributes(Grandpa)   
);

CREATE TABLE Relation(
IdAssitant INT() NOT NULL ,
IdGrandpa INT() NOT NULL,
PRIMARY KEY(IdAssitant,IdGrandpa),
FOREIGN KEY(IdAssitant) references Assistant(IdAssitant),   
FOREIGN KEY(IdGrandpa) references Grandpa(IdGrandpa)        
);

CREATE TABLE Assistant(
IdAssitant INT() NOT NULL auto_increment,
User VARCHAR(30) NOT NULL,
Password VARCHAR(30) NOT NULL,
Dependents INT(3),
Gender VARCHAR(10),
Email VARCHAR(45),
PRIMARY KEY(IdAssitant)
);

CREATE TABLE Atributes(
IdAtribute INT() NOT NULL auto_increment,
Type INT NOT NULL,
Name VARCHAR(30) NOT NULL,
Description VARCHAR(400),
Grandpa VARCHAR(10),           
Date DATETIME(),
PRIMARY KEY(IdAtribute)
);

INSERT INTO Assistant(User,Password,Dependents,Gender,Email )
VALUES ("admin","admin",0,"male","admin@gmail.com")
;
