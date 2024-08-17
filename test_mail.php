<?php
$to = "JRRR100105@gmail.com"; // Reemplaza con tu dirección de correo electrónico
$subject = "Prueba de envío de correo";
$message = "Este es un correo de prueba.";
$headers = "From: JRRR100105@gmail.com"; // Reemplaza con un correo electrónico válido para "From"

if (mail($to, $subject, $message, $headers)) {
    echo "Correo enviado correctamente.";
} else {
    echo "Error al enviar el correo.";
}
?>
