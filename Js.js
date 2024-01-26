<script>	
		function calculate()
		{
			var amt,rate,time,si,total,pmi;
			amt=parseFloat(document.frm1.t1.value);
			rate=parseFloat(document.frm1.t2.value);
			time=parseFloat(document.frm1.t3.value);		
si=amt*rate*time/100/12;
          	document.frm1.t4.value=si.toFixed(2);
pmi=si/time; 
document.frm1.t6.value=pmi.toFixed(2);
          	total=amt+si;
          	document.frm1.t5.value=total.toFixed(2);
				}
		</script>
