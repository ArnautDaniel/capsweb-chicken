window.onload = function (){
    var httpR;
    document.getElementById('searchbar').addEventListener('input', makeRequest);
    function makeRequest () {
	httpR = new XMLHttpRequest();

	if (!httpR) {
	    alert('Giving up :(');
	    return false;
	}
	httpR.onreadystatechange = alertContents;
	httpR.open('POST', '/searchjs?name=' + document.getElementById('searchbar').value);
	
	httpR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpR.send("name=steve")
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
		
