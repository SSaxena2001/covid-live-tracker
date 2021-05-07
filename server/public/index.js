// const { response } = require("express");
const uri="https://api.rootnet.in/covid19-in/stats/latest";
const form = document.querySelector('form');
const confirmed=document.querySelector(".confirm");
const recovered=document.querySelector(".recovered");
const deaths=document.querySelector(".deaths");
const getStateData=async()=>{
    fetch(uri)
    .then(response=>response.json())
    .then(data=>{
        const {summary, unofficial, regional}=data.data;
        const regions=[];
        regional.forEach((s)=>{
            regions.push(s.loc);
        });
        form.addEventListener('submit',(event)=>{
            const loc=form.elements['state'].value;

            if(!regions.includes(loc)){
                confirmed.innerHTML="";
                recovered.innerHTML="";
                deaths.innerHTML="";
                document.querySelector(".Not-found").innerHTML="State name is invalid Please try again";
            } 
            else{
                regional.forEach(state=>{
                    if(state.loc===loc){
                        confirmed.innerHTML=state.totalConfirmed;
                        recovered.innerHTML=state.discharged;
                        deaths.innerHTML=state.deaths;
                        document.querySelector(".Not-found").innerHTML="";
                    }
                });
            }
            event.preventDefault();
        });
    });
}
getStateData();

