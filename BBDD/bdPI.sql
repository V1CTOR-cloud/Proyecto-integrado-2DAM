CREATE DATABASE IF NOT EXISTS DailySense;

USE DailySense;

CREATE TABLE Dependents(
IdDependents INT(4) NOT NULL auto_increment,
Name VARCHAR(45) NOT NULL,
LastName VARCHAR(90)NOT NULL,
Address VARCHAR(45)NOT NULL,
Gender VARCHAR(10)NOT NULL,
Age INT(3) NOT NULL,
FamilyContact INT(20),
Diseases VARCHAR(200),
Allergies VARCHAR(200),
Assistant INT (4) NOT NULL,
DependencyLevel VARCHAR(200),                    
PRIMARY KEY(IdGrandpa),
FOREIGN KEY(IdGrandpa) references Attributes(Grandpa)   
);


CREATE TABLE Assistant(
IdAssitant INT(4) NOT NULL auto_increment,
User VARCHAR(30) NOT NULL,
Password VARCHAR(30) NOT NULL,
Gender VARCHAR(10),
Email VARCHAR(45),
PRIMARY KEY(IdAssitant),
FOREIGN KEY(IdAssistant) references Dependents(Assistant)
);

CREATE TABLE Attributes(
IdAtribute INT(4) NOT NULL auto_increment,
Type INT(1) NOT NULL,
Name VARCHAR(30) NOT NULL,
Description VARCHAR(400),
Grandpa INT (4)NOT NULL,           
Date DATETIME ,
PRIMARY KEY(IdAtribute)
);

INSERT INTO Assistant(User,Password,Dependents,Gender,Email )
VALUES ("admin","admin",0,"male","admin@gmail.com")
;
