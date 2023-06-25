<?php
if (isset($_POST['submit'])) {
    $mailto = "patryk.staniszewski76@wp.pl";
    $date = $_POST['date-638'];
    $phonenum = $_POST['tel'];
    $fromEmail = $_POST['your-email'];
    $name = $_POST['your-subject'];
    $text = $_POST['your-message'];

    $message = "Data złożenia: " . $date . "\n"
    . "Numer telefonu: " . $phonenum . "\n"
    . "Adres e-mail: " . $fromEmail . "\n"
    . "Imię: " . $name . "\n"
    . "Wiadomość: " . $text . "\n";

    // Wysyłka wiadomości do odbiorcy
    $subject = "Nowa wiadomość ze strony";
    $headers = "From: " . $fromEmail . "\r\n" .
        "Reply-To: " . $fromEmail . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($mailto, $subject, $message, $headers)) {
        // Wysyłka potwierdzenia do osoby wysyłającej formularz
        $confirmationMessage = "Drogi/Droga " . $name . ",\n\n"
            . "Dziękujemy za skontaktowanie się z nami. Odezwiemy się niebawem.";
        $confirmationSubject = "Potwierdzenie wysłania wiadomości";
        $confirmationHeaders = "From: " . $mailto . "\r\n" .
            "Reply-To: " . $mailto . "\r\n" .
            "X-Mailer: PHP/" . phpversion();
        mail($fromEmail, $confirmationSubject, $confirmationMessage, $confirmationHeaders);

        echo "Wiadomość została wysłana pomyślnie.";
    } else {
        echo "Wysłanie wiadomości nie powiodło się.";
    }
}
?>
