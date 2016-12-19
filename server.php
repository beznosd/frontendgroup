<?php

	function debug($data) {
		echo "<pre>";
		print_r($data);
		echo "</pre>";
	}

	echo '<h2>GET</h2>';
	debug($_GET);

	echo '<h2>POST</h2>';
	debug($_POST);

?>