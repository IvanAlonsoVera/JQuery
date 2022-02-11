<?php
	$num = $_GET['numero'];
	$pal = $_GET['nombre'];
	
	echo json_encode(array($num*$num,$pal.$pal));