window.onload = function (){
    var httpR;
    var httpL;
    document.getElementById('searchbar').addEventListener('input', makeRequest);
    document.getElementById('addshowbtn').addEventListener('click', showRequest);
    
    function showRequest () {
	httpL = new XMLHttpRequest();
	if (!httpL) {
	    alert('Giving up :(');
	    return false;
	}
	httpL.onreadystatechange = addShow;
	httpL.open('POST', '/addshowjs?name=' + document.getElementById('searchbar').value);
	httpL.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpL.send("name=wojack");
    }

    
    function addShow () {
	if (httpL.status === 200 && httpL.readyState === 4){
	    var httpResponse = httpL.responseText;
	    console.log(httpResponse);
	    iziToast.info({
		title: 'Success!',
		message: document.getElementById('searchbar').value + ' added to database',
	    });
	}
	else if (httpL.readyState === 4)
	
	{
	    
	    iziToast.error({
		title: 'Error',
		message: 'Couldn\'t add to database.'
	    });
	}}
	    

    
    function makeRequest () {
	
	httpR = new XMLHttpRequest();
	
	if (!httpR) {
	    alert('Giving up :(');
	    return false;
	}
	httpR.onreadystatechange = alertContents;
	httpR.open('POST', "/searchjs?name=" + document.getElementById('searchbar').value);
	httpR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpR.send("name=steve")
    }
    
    
    function tableJS (e) {
	console.log(this.textContent);
	var child = document.getElementById("jsonTable")
	child.parentNode.removeChild(child);
	document.getElementById('searchbar').removeEventListener('input', makeRequest);
	document.getElementById('searchbar').addEventListener('input', makeRequest);
    }
    function alertContents (){
	if (httpR.readyState === XMLHttpRequest.DONE){
	    if (httpR.status === 200){
		var jsonData = JSON.parse(httpR.responseText);
		console.table(jsonData);
		
		if (document.getElementById('jsonTable')){
		    var child = document.getElementById("jsonTable");
		    child.parentNode.removeChild(child);
		    
		} 
		var table = document.createElement("table");
		table.id = 'jsonTable';
		table.className = 'table is-striped is-hoverable';
		
		for (var i = 0; i < jsonData.length; i++) {
		    var row = table.insertRow(-1);
		    var dataCell  = row.insertCell(-1);
		    dataCell.onclick = tableJS;
		    dataCell.appendChild(document.createTextNode(jsonData[i]));
		}
		document.getElementById("jsonTableDiv").appendChild(table);


	    }
	    else {
		alert('There was a problem with request.');
	    }
	}
    }
}
		
