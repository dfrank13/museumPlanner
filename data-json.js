/**************************** Search bar ********************************************************/
	
function searchName() {
    var input, filter, ol, li, a, i;
    input = document.getElementById("museumName");
    filter = input.value.toUpperCase();
    ol = document.getElementById("museums");
    li = ol.getElementsByClassName("museumContent");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}	

// Reference:   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list 

/************************************************************ Search days in dropdown (doesn't work as is) ********************************************************/
  
    // find dropdown list
    var dropDown =  document.getElementById('searchDays');
    // find day selected from dropdown
   var daySelected = dropDown.options[dropDown.selectedIndex].value;
    // go through the master list of museums
    var museList = document.getElementsByClassName('museList');

dropDown.addEventListener('onchange', function() {
    
    for (var i = 0; i < museList.length; i++) {
            if (museList[i].getElementsByClassName(daySelected).length != 0) {
                museList[i].style.display = "block";
            } else {
                museList[i].style.display = "none";
            }
        } 
});
 

/********************************************************************** Activate search button ****************************************************************************************************************/



document.getElementById("search").addEventListener("click", function () {


/****************************************************************************** Search boroughs *****************************************************************/

    // search #bronx to see if box is checked
    if (document.getElementById('bronx').checked) {
       var bronxDiv = document.getElementsByClassName('bronx');
        var i;
        for (i=0; i<bronxDiv.length; i++){
            bronxDiv[i].style.display="";
        }
    } else {
       var bronxDiv = document.getElementsByClassName('bronx');
        var i;
        for (i=0; i<bronxDiv.length; i++){
            bronxDiv[i].style.display="none";
        }
    }
    
    // search #brooklyn to see if box is checked
    if (document.getElementById('brooklyn').checked) {
       var brooklynDiv = document.getElementsByClassName('brooklyn');
        var i;
        for (i=0; i<brooklynDiv.length; i++){
            brooklynDiv[i].style.display="";
        }
    } else {
       var brooklynDiv = document.getElementsByClassName('brooklyn');
        var i;
        for (i=0; i<brooklynDiv.length; i++){
            brooklynDiv[i].style.display="none";
        }
    }
    
    // search #manhattan to see if box is checked
    if (document.getElementById('manhattan').checked) {
       var manhattanDiv = document.getElementsByClassName('manhattan');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('manhattan');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #queens to see if box is checked
    if (document.getElementById('queens').checked) {
       var queensDiv = document.getElementsByClassName('queens');
        var i;
        for (i=0; i<queensDiv.length; i++){
            queensDiv[i].style.display="";
        }
    } else {
       var queensDiv = document.getElementsByClassName('queens');
        var i;
        for (i=0; i<queensDiv.length; i++){
            queensDiv[i].style.display="none";
        }
    }

    // search #staten to see if box is checked
    if (document.getElementById('staten').checked) {
       var statenDiv = document.getElementsByClassName('staten');
        var i;
        for (i=0; i<statenDiv.length; i++){
            statenDiv[i].style.display="";
        }
    } else {
       var statenDiv = document.getElementsByClassName('staten');
        var i;
        for (i=0; i<statenDiv.length; i++){
            statenDiv[i].style.display="none";
        }
    }
});


/************************************************************************ Enter selected museums to first lists (not finished, description included in comment) *********************************************************/

/*
// if #addto1 is selected then search through museum list for checked boxes. If #amnhBox is checked, add #amnh to #customList1

// List names in dropdown
var addto1 = document.getElementById('addto1');
var addto2 = document.getElementById('addto2');
var addto3 = document.getElementById('addto3');


// Button to enter museums into list
document.getElementById("enterSelected").addEventListener("click", function () {
    
    if (document.getElementById('amnhBox').checked) {
        var firstMuseum = document.getElementById('amnh');
        var listOne = document.getElementById('customList3');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
});
   
// Add to list 1
document.getElementById("addto1").addEventListener("click", function() {
    if (document.getElementById('amnhBox').checked) {
        var firstMuseum = document.getElementById('amnh');
        var listOne = document.getElementById('customList1');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
    });

// Add to list 2
document.getElementById("addto2").addEventListener("click", function() {
    if (document.getElementById('amnhBox').checked) {
        var firstMuseum = document.getElementById('amnh');
        var listOne = document.getElementById('customList2');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
    });

// Add to list 3
document.getElementById("addto3").addEventListener("click", function() {
    if (document.getElementById('amnhBox').checked) {
        var firstMuseum = document.getElementById('amnh');
        var listOne = document.getElementById('customList3');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
    });
*/

/************************************************************************call up museumList.json and attach to main page**********************************************************/

// This section wasn't finished since the code for the sample 10 museums wasn't complete still.

/*
$(function() { 
    var $museums = $('#museums');
    $.ajax({
       type: 'GET',
        url: 'museumList.json',
        success: function(museums) {
            console.log('success', data);
                $.each(museums, function(i, museum){
                    $museums.append('<li> museums.name </li>');
                });
        },
        error: function() {
            alert("can't find museum");
        }
    });
    document.getElementById("museums").innerHTML = $museums;
});
*/