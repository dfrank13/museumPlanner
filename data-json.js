// Days of the week as divs in the Museum list
var sunday = document.getElementsByClassName("sunday");
var monday = document.getElementsByClassName("monday");
var tuesday = document.getElementsByClassName("tuesday");
var wednesday = document.getElementsByClassName("wednesday");
var thrusday = document.getElementsByClassName("thursday");
var friday = document.getElementsByClassName("friday");
var saturday = document.getElementsByClassName("saturday");
var manhattan = document.getElementsByClassName("manhattan");


/********************************************************************** Add museums to custom lists ********************************************************/

// Add to list 1
document.getElementById("addto1").addEventListener("click", function() {
    if (document.getElementById('input1').checked) {
        var firstMuseum = document.getElementById('div1');
        var listOne = document.getElementById('customList1');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
    });

// Add to list 2
document.getElementById("addto2").addEventListener("click", function() {
    if (document.getElementById('input1').checked) {
        var firstMuseum = document.getElementById('div1');
        var listOne = document.getElementById('customList2');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
    });

// Add to list 3
document.getElementById("addto3").addEventListener("click", function() {
    if (document.getElementById('input1').checked) {
        var firstMuseum = document.getElementById('div1');
        var listOne = document.getElementById('customList3');
        listOne.innerHTML = firstMuseum.innerHTML;
    }
    else {}
    });




/********************************************************************** Activate search button ****************************************************************************************************************/


document.getElementById("search").addEventListener("click", function () {
    
/************************************************************Start of Days in search (needs to be fixed) ********************************************************/
   
    // search #sunday to see if box is checked
    if (document.getElementById('sunday').checked) {
        var manhattanDiv = document.getElementsByClassName('sunday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('sunday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #monday to see if box is checked
    if (document.getElementById('monday').checked) { 
        var manhattanDiv = document.getElementsByClassName('monday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('monday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #tuesday to see if box is checked
    if (document.getElementById('tuesday').checked) {
       var manhattanDiv = document.getElementsByClassName('tuesday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('tuesday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #wednesday to see if box is checked
    if (document.getElementById('wednesday').checked) {
        var manhattanDiv = document.getElementsByClassName('wednesday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('wednesday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #thursday to see if box is checked
    if (document.getElementById('thursday').checked) {
        var manhattanDiv = document.getElementsByClassName('thursday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('thursday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #friday to see if box is checked
    if (document.getElementById('friday').checked) {
       var manhattanDiv = document.getElementsByClassName('friday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('friday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #saturday to see if box is checked
    if (document.getElementById('saturday').checked) {
       var manhattanDiv = document.getElementsByClassName('saturday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('saturday');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    

/************************************************************Start of Boroughs in search ************************************************/

    // search #bronx to see if box is checked
    if (document.getElementById('bronx').checked) {
       var manhattanDiv = document.getElementsByClassName('bronx');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('bronx');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    
    // search #brooklyn to see if box is checked
    if (document.getElementById('brooklyn').checked) {
       var manhattanDiv = document.getElementsByClassName('brooklyn');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('brooklyn');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }

    
    // search #manhattan to see if box is checked
    if (document.getElementById('manhattan').checked) {
       var manhattanDiv = document.getElementsByClassName('manhattan');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
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
       var manhattanDiv = document.getElementsByClassName('queens');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('queens');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }

    // search #staten to see if box is checked
    if (document.getElementById('staten').checked) {
       var manhattanDiv = document.getElementsByClassName('staten');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('staten');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }

/*************************************************************************** Discount checkbox (needs to be fixed)********************************************************/
    /*
    if (document.getElementById('discount').checked) {
       var manhattanDiv = document.getElementsByClassName('discount');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="block";
        }
    } else {
       var manhattanDiv = document.getElementsByClassName('discount');
        var i;
        for (i=0; i<manhattanDiv.length; i++){
            manhattanDiv[i].style.display="none";
        }
    }
    */
    
});

/*
// call up museumList.json and attach to main page
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