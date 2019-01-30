<?php
error_reporting(-1);
header('charset=utf-8');
mb_internal_encoding("UTF-8");
// header('Content-Type: text/html; charset=utf-8');
// $to = 'villian_2007@mail.ru';
// $subject = 'PHP test';
// $message = 'Hi, this message created automatically. Do not answer this message.';
// $filesToAttach = 'bgfaae0640.jpg;bias_of_time.xlsm;';		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $files_paths = get_files($filesToAttach);
require_once('config.php');


$to = $_POST['to'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$filesToAttach = $_POST['filesToAttach'];
$files_paths = if ($filesToAttach){ 
	get_files($filesToAttach);
} else {
	'';
}

function get_files($fNames_string){
	$fNames_path_array=[];
	$fNames_array = explode(";",$fNames_string);
	$nFiles = count($fNames_array);
	//$delay = 5;

	// while (count($fNames_path_array)<>$nFiles or $delay>=0){		
		// sleep(1.2);
	// 	$delay -= .5;
		$fNames_path_array = check_path($fNames_array);
	// }

	return $fNames_path_array;
}

function check_path($fNames_array){
	$fNames_path_array=[];
	$value = '';

	foreach($fNames_array as &$raw_value){
		$value = trim($raw_value);
		if ((file_exists('./uploadsDocPrepare/'.$value) && $value !== '')){
			$fNames_path_array[$value] = './uploadsDocPrepare/' . $value;
		}			
	}
	unset($value);
	return $fNames_path_array;
}

function delete_files($fNames_string){
	foreach($fNames_string as &$value){
		if ((file_exists($value) && $value !== '')){
			unlink($value);
		}			
	}
}


 function sendMail($to, $subject, $content, $files, $cc='', $bcc = '' ){
	$rn = "\r\n";
	$semi_rand = md5(time());
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
	global $filesToAttach;
	// Headers
	$headers = 'From: outsourcing@documentprepare.ru';
	$headers .= "\nMIME-Version: 1.0\n";
	$headers .= "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
	// Msg Body
	$msg = "This is a multi-part message in MIME format.\n\n" 
			. "--{$mime_boundary}\n" 
			. "Content-Type: text/plain; charset=\"UTF-8\"\n" 
			. "Content-Transfer-Encoding: 7bit\n\n" 
			. $content 
			. "\n\n";
	$msg .=  "--{$mime_boundary}\n";
	// Attachment
	if ($files !== ''){
		foreach($files as $x => $value){
			$file = fopen($files[$x],"rb");
			$data = fread($file,filesize($files[$x]));
			fclose($file);
			$data = chunk_split(base64_encode($data));
			$msg .= "Content-Type: {\"application/octet-stream\"};\n" 
					. " name=\"$files[$x]\"\n" 
					. "Content-Disposition: attachment;\n" 
					. " filename=\"$x\"\n" 
					. "Content-Transfer-Encoding: base64\n\n" 
					. $data 
					. "\n\n";
			$msg .= "--{$mime_boundary}\n";
		}
	}
	// Mail
	$ok = @mail($to, $subject, $msg, $headers);

	if (@ok){
		echo "mail sent to. filesToAttach" . $filesToAttach;
	} else {
		echo "mail could not be sent";
	}
}

sleep(1.2);
sendMail($to, $subject, $message, $files_paths);
delete_files($files_paths);

?>


