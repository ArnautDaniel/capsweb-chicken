window.onload = function (){
    var httpR;
    var httpL;
    var jsb = function(){
	      makeRequest("name", "select-shows", alertContents, "");};
    var fsb = function(){
	      showCreate("show");};

    $('#searchbar').bind("enterKey", function (e){
        jsb();
    });
    $('#searchbar').keyup(function(e){
        if(e.keyCode == 13)
        { $(this).trigger("enterKey");
        }
    });

    //document.getElementById('searchbar').addEventListener('input', jsb,  false);
    document.getElementById('addshowbtn').addEventListener('click', fsb, false);
    var context = "show";

    function showCreate (type) {
	      httpL = new XMLHttpRequest();
	      if (!httpL) {
	          alert('Giving up :(');
	          return false;
	      }
	      httpL.onreadystatechange = addShow;
	      httpL.open('POST', '/addshowjs?name=' + document.getElementById('searchbar').value
		               + "&type=" + type);
	      httpL.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	      httpL.send("name=wojack");
    };

    function addShow () {
	      if (httpL.status === 200 && httpL.readyState === 4){
	          var httpResponse = httpL.responseText;
	          console.log(httpResponse);
	          iziToast.info({
		            title: 'Success!',
		            message: document.getElementById('searchbar').value + ' added to database'
	          });
	      }
	      else if (httpL.readyState === 4)
	      {
	          iziToast.error({
		            title: 'Error',
		            message: 'Couldn\'t add to database.'
	          });
	      }}
    function fillInfo(arry, context){
        var infobox = $('#info-js-hook');
        console.log(infobox);
    };
    function makeRequest (item, type, funct, pastpreamble) {
	      httpR = new XMLHttpRequest();
	      if (!httpR) {
	          alert('Giving up :(');
	          return false;
	      }
	      httpR.onreadystatechange = funct;
	      httpR.open('POST', "/general-js-query?" + "constraint=" + "like-" + item + "-" + document.getElementById('searchbar').value
                   + pastpreamble
		               + "&preamble=" + type);
	      httpR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	      httpR.send("showname=steve");
    };

    function tableJS (e, arry) {
	      console.log(this.textContent);
	      var idl = e.target.id;
        console.log(arry);
        console.log(e);
	      var child = document.getElementById("jsonTable");
	      child.parentNode.removeChild(child);
	      document.getElementById('searchbar').removeEventListener('input', jsb);
	      document.getElementById('addshowbtn').removeEventListener('click', fsb);
	      if (context === "show"){
	          context = "set";
	          jsb = function () {
		            makeRequest("name", "select-sets", alertContents, "::=-showid-" + arry[0].toString());
	          };
            getDataFromUrl("generate-html?context=infobox&constraint=select-shows&preamble=-showid-" + arry[0].toString());
	          fsb = function () {
		            showCreate("set&id=" + idl);
	          };}
	      else {
		        jsb = function ()
		        { makeRequest("description", "select-items", alertContents, "::=-setid-" + arry[0].toString());};
		        fsb = function ()
		        { showCreate("item&id="  + idl); };
	      }
	      document.getElementById('addshowbtn').addEventListener('click', fsb);
	      document.getElementById('searchbar').addEventListener('input', jsb);
	      var breadbar = document.getElementById('breadbar-ul');
	      var idadd = document.createElement("li");
	      var idahref = document.createElement('a');
	      idahref.appendChild(document.createTextNode(e.target.id));
	      idadd.appendChild(idahref);
	      breadbar.appendChild(idadd);
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
                createTable(jsonData);
            }
	          else {
		            alert('There was a problem with request.');
	          }
        }
	  }
    function createTable(tableData) {
        var table = document.createElement('table');
        table.id = 'jsonTable';
        table.className = 'table is-striped is-hoverable';
        var row = {};
        var cell = {};
        tableData.forEach(function(rowData) {
            row = table.insertRow(-1);
            rowData.forEach(function(cellData) {
                cell = row.insertCell();
               	cell.textContent = cellData;
                cell.id = cellData;
                cell.onclick = function(e){
                    tableJS(e, rowData);
                }
            });
        });
        document.getElementById("jsonTableDiv").appendChild(table);
    }
    function getDataFromUrl(urlLink){
        $.ajax(
            {url: urlLink,
             dataType: "html",
             success: function (data) {
                 $('#info-js-hook').html(data);
             },
             error: function (e)
             {
                 alert('Error: ' + e);
             }
            });
    }

    
}


