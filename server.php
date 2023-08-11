<?php
$out[] = json_decode(file_get_contents('php://input'));
echo json_encode($out);
?>