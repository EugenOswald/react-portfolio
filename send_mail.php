<?php

########### CONFIG ###############

$recipient = import.meta.env.VITE_EMAIL;

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        header("Access-Control-Allow-Origin: *"); // Erlaubt CORS-Anfragen von jeder Quelle.
        exit;
    case ("POST"): // Send the email
        $data = json_decode(file_get_contents("php://input"), true);

        $subject = "Contact From " . $data['firstName'] . ' ' . $data['lastName'];
        $headers = "From: " . $data['email'];
        $message = "Phone Number: " . $data['phoneNumber'] . "\n\n" . $data['message'];

        if ($data['termsAccepted']) { // Überprüft, ob die Nutzungsbedingungen akzeptiert wurden.
            if (mail($recipient, $subject, $message, $headers)) {
                echo json_encode(["message" => "Email successfully sent"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Failed to send email"]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Terms not accepted"]);
        }

        break;
    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

?>
