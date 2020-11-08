function bill(){

	let unit=document.getElementById('NoofUnit').value;
	
	let a;


	if(unit >= 1 && unit <=30)
	{
		a=unit * 7.85 + 480.00 ;
		

	}
	 else if(unit >=31 && unit <= 60)
	 {
	 	a=235.50 + ((unit -30) * 7.85)+480.00;
	 	

	 }

	 else if(unit >=61 && unit <= 90)
	 {
	 	a= 235.50+ 235.50  +((unit-60) * 10.00)+480.00;
	 	

	 }

	 else if(unit >=91 && unit <= 120)
	 {
	 	a=235.50 +235.50+300.00 + ((unit-90) * 27.75)+480.00;
	 	

	 }
	  else if(unit >=121 && unit <= 180)
	 {
	 	a=235.50 +235.50+300.00+832.50 + ((unit-120) * 32.00) + 480.00;
	 	

	 }
	 
     
	let Total=document.getElementById('amount');
	Total.innerHTML="Amount is:" + a ;
	

	

}