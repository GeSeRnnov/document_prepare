<?php

// $to = 'villian_2007@mail.ru';
// $subject = 'PHP test';
// $message = 'Hi, this message created automatically. Do not answer this message.';
// $filesToAttach = 'bgfaae0640.jpg;bias_of_time.xlsm;';		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $files_paths = get_files($filesToAttach);

function get_files($fNames_string){
	$fNames_path_array=[];
	if ($fNames_string != ''){
		$fNames_array = explode(";",$fNames_string);
		foreach($fNames_array as &$value){
			if ((file_exists('./uploadsDocPrepare/'.$value) && $value !== '')){
				$fNames_path_array[$value] = './uploadsDocPrepare/' . $value;
			}			
		}
		unset($value);
		return $fNames_path_array;
	}
}



 function sendMail($to, $subject, $content, $files, $cc='', $bcc = '' ){
	$rn = "\r\n";
	$semi_rand = md5(time());
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
	
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
	if ($files){
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
		echo "mail sent to";
	} else {
		echo "mail could not be sent";
	}
}

// sendMail($to, $subject, $message, $files_paths);

?>


