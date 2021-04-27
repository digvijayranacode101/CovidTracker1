var animalContainer = document.getElementById('animal-info')
var districts = document.getElementById('districts')
var states = document.getElementById('states')
var counts = document.getElementById('counts')
var ourData ={}
var statenamearray=[]
//var counter = 1
 function loadText(){
    var ourRequest = new XMLHttpRequest()
    ourRequest.open('GET',`https://api.covid19india.org/state_district_wise.json` )
    ourRequest.onload = function(){
         ourData =JSON.parse(ourRequest.responseText)
        //renderHtml(ourData)
        itemsToDropMenu(Object.keys(ourData))
        statenamearray= Object.keys(ourData)
        //console.log(statenamearray)
       // console.log(ourData[statenamearray[1]] )
        console.log(ourData)
        //console.log(states)
        
    }
    ourRequest.send()
   // counter++
   /* if(counter>3){
        btn.disabled =truedocument 
    }*/
    
}

function itemsToDropMenu(data){
    var htmlString=""

    for(let i =0; i<data.length; i++){
        htmlString+= `<option value="${data[i]}">${data[i]}</option>`
    }

    states.insertAdjacentHTML('beforeend',htmlString)
}

 function getValue(){
    var districtnamearray= Object.keys(ourData[states.value].districtData)
   // console.log(districtnamearray)
    districts.innerHTML='<option value="">select</option>'
    var htmlString = ''
    function g(){
        
    for(let i =0; i<districtnamearray.length; i++){
        htmlString+= `<option value="${districtnamearray[i]}">${districtnamearray[i]}</option>`
    }
    districts.insertAdjacentHTML('beforeend',htmlString)
    }
    g()
    
}

function getCounts(){
    console.log(ourData[states.value].districtData[districts.value])
    var active= "<h2> Active: "+(ourData[states.value].districtData[districts.value].active)+"</h2>"
    var confirmed= "<h2> Confirmed: " +(ourData[states.value].districtData[districts.value].confirmed)+"</h2>"
    var deceased= "<h2> Deceased: " +(ourData[states.value].districtData[districts.value].deceased)+"</h2>"
    var recovered= "<h2> Recovered: "+(ourData[states.value].districtData[districts.value].recovered)+"</h2>"
    console.log(active,confirmed,deceased,recovered)
    counts.innerHTML=''
    counts.insertAdjacentHTML("beforeend", active)
    counts.insertAdjacentHTML("beforeend", confirmed)
    counts.insertAdjacentHTML("beforeend", deceased)
    counts.insertAdjacentHTML("beforeend", recovered)
}







/*function renderHtml(data){
    var htmlString = ""

    for(let i =0; i<data.length; i++){
        htmlString += "<p>" + data[i].name+" is a "+
        data[i].species + " that  likes to eat " 
        for(let ii =0; ii<data[i].foods.likes.length; ii++){
            if(ii==0){
                htmlString += data[i].foods.likes[ii]
            }else{
                htmlString += " and "+ data[i].foods.likes[ii]
            }
        }
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}*/