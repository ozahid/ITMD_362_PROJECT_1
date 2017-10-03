function button()
{ if( document.getElementById('emailaddress').value === '' ){
      alert('Please insert your Email Address');
    } 
	else if 
	(document.getElementById('password').value === '' ){
      alert('Please insert your Password');
	}
	  else if 
	(document.getElementById('date').value === '' ){
      alert('Please insert your Date of Birth');
	}
	  else {
		  alert('Congrats On Subscribing!');
	  }
}