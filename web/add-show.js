window.onload = function () {
    var httpR;
    document.getElementById('addshowbtn').addEventListener('click', makeRequest);
 
    function makeRequest () {
	httpR = new XMLHttpRequest();

	if (!httpR) {
	    alert('Giving up :(');
	    return false;
	}
	httpR.onreadystatechange = alertContents;
	httpR.open('POST', '/addshowjs?name=' + document.getElementById('addshowinput').value);
	httpR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpR.send("name=wojack");
    }
    function alertContents () {
	if (httpR.status === 200 && httpR.readyState === 4){
	    var httpResponse = httpR.responseText;
	    console.log(httpResponse);
	    iziToast.info({
		title: 'Success!',
		message: document.getElementById('addshowinput').value + ' added to database',
	    });
	}
	else if (httpR.readyState === 4)
	
	{
	    
	    iziToast.error({
		title: 'Error',
		message: 'Couldn\'t add to database.'
	    });
	}}}
	    
