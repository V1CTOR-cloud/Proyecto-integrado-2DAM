<?php
if (isset($_POST["id"])) {
    $id = $_POST["id"];
    $nombre = $_POST["nombre"];
    $avatar_url = $_POST["avatar_url"];
    $url_perfil = $_POST["url_perfil"];
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $dbname = "apiperfil";
    $conexion = mysqli_connect($servidor, $usuario, $password, $dbname);
    if (!$conexion) {
        echo "Error en la conexion a MySQL: " . mysqli_connect_error();
        exit();
    }
    $sql = "INSERT INTO perfil (id,nombre,avatar_url,url_perfil) VALUES ($id, '$nombre','$avatar_url','$url_perfil')";
    if (mysqli_query($conexion, $sql)) {
        echo "Registro insertado correctamente.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
    }
}
