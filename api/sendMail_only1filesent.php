<?php


$to = 'villian_2007@mail.ru';
$subject = 'PHP test';
$message = 'Hi, this message created automatically. Do not answer this message now.';
$conAttached = '';
// $headers = 'From: outsourcing@documentprepare.ru' . "\r\n" .
// 			'X-Mailer: PHP/' . phpversion();



// mail($to, $subject, $message, $headers);
$filesToAttach = 'bgfaae0640.jpg2;bias_of_time.xlsm';
// $path = "";

function attach_file($file){
	// echo "\n./uploadsDocPrepare/" . $file . "<br/>\r\n";
	$path = './uploadsDocPrepare/' . $file;
	$rn = "\r\n";	
	global $conAttached;

	if (file_exists($path)) {
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$ftype = finfo_file($finfo, $path);
		$file = fopen($path, "r");
		$attachment = fread($file, filesize($path));
		$attachment = chunk_split(base64_encode($attachment));
		fclose($file);
		$msg = 'Content-Type: \'' . $ftype . '\'; name="' . basename($path) . '"' . $rn;
		$msg .= "Content-Transfer-Encoding: base64" . $rn;
		$msg .= 'Content-ID: <' . basename($path) . '>' . $rn;
		$msg .= $rn . $attachment . $rn . $rn;
		// echo $msg;
		$conAttached .= $msg;
		return $msg;

	} else {
		return false;
	}
}

 function sendMail($to, $subject, $content, $filesToAttach = '', $cc='', $bcc = '' ){
	$rn = "\r\n";
	$boundary = md5(rand());
	$boundary_content = md5(rand());
	global $conAttached;
	
	// Headers
	$headers = 'From: outsourcing@documentprepare.ru' . $rn;
	$headers .= 'Mime-Version: 1.0' . $rn;
	$headers .= 'Content-Type: multipart/related;boundary=' . $boundary . $rn;
	// adresses cc and c1
	if ($cc != ''){
		$headers .= 'Cc: ' . $cc . $rn;
	}
	if ($bcc != ''){
		$headers .= 'Bcc: ' . $bcc . $rn;
	}
	$headers .= $rn;
	// Msg Body
	$msg = $rn . '--' . $boundary . $rn;
	$msg .= "Content-Type: multipart/alternative;" . $rn;
	$msg .= " boundary=\"$boundary_content\"" . $rn;
	// Body Mode text
	$msg .= $rn . "--" . $boundary_content . $rn;
	$msg .= 'Content-Type: text/plain; charset="UTF-8"' . $rn;
	$msg .= strip_tags($content) . $rn;
	// Attachment
	if ($filesToAttach != ''){
		$files = explode(';', $filesToAttach);
		array_walk($files, 'attach_file');
		if($conAttached !== false){
			$msg .= $rn . '--' . $boundary . $rn;
			$msg .= $conAttached;
			echo $conAttached;
		}
	}
	// Fin
	$msg .=$rn . '--' . $boundary . '--' . $rn;
	// Mail
	mail($to, $subject, $msg, $headers);
}

// $files1 = explode(';', $filesToAttach);
// $conAttached1 = array_walk($files1, 'attach_file');
// echo $conAttached1;

sendMail($to, $subject, $message, $filesToAttach, $headers)

?>