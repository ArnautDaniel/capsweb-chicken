window.onload = function () {
    var httpR;
    document.getElementById('addshowbtn').addEventListener('click', showRequest);
 
    function showRequest () {
	httpR = new XMLHttpRequest();
	if (!httpR) {
	    alert('Giving up :(');
	    return false;
	}
	httpR.onreadystatechange = addShow;
	httpR.open('POST', '/addshowjs?name=' + document.getElementById('searchbar').value);
	httpR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpR.send("name=wojack");
    }
    
    function addShow () {
	if (httpR.status === 200 && httpR.readyState === 4){
	    var httpResponse = httpR.responseText;
	    console.log(httpResponse);
	    iziToast.info({
		title: 'Success!',
		message: document.getElementById('searchbar').value + ' added to database',
	    });
	}
	else if (httpR.readyState === 4)
	
	{
	    
	    iziToast.error({
		title: 'Error',
		message: 'Couldn\'t add to database.'
	    });
	}}}
	    
