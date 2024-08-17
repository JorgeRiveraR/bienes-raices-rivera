<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolectar datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    
    // Configura los datos del correo electrónico
    $to = "JRRR100105@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $subject = "Nuevo registro de contacto desde tu sitio web";
    $message = "Nombre: $name\nNúmero de Teléfono: $phone\nCorreo Electrónico: $email";
    $headers = "From: JRRR100105@gmail.com"; // Reemplaza con un correo electrónico válido para "From"

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "Formulario enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el formulario.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
