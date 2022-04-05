//https://cdn-api.co-vin.in/api/v2/admin/location/states


var selectedstates=document.querySelector('#states')
var state_data=[]
var district_data=[]

fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`).then(res=>res.json()).then(data=>{

data.states.forEach(st=>{


    state_data.push(st)
    console.log(state_data);
    let option=document.createElement("option")
    option.text=st.state_name
    option.value=st.state_id
    selectedstates.appendChild(option)
})

})

function populateDistrict(){
    var selecteddistr=document.querySelector('#district')
    let state_Id=states.value
    fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_Id}`).then(res=>res.json()).then(data=>{
        data.districts.forEach(dt=>{
            district_data.push(dt)
            
            let option=document.createElement('option')
            option.text=dt.district_name
            option.value=dt.district_id
            
            selecteddistr.appendChild(option)
            
        })
    })
}

function populateSlotes(){
  
    
    var date=document.querySelector("#date").value
    districtId=district.value

    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}
    `).then(res=>res.json()).then(data=>populateValue(data))
        

}
var htmldata=``
function populateValue(data){
    console.log(data.sessions);
    data.sessions.forEach(st=>{
        
     htmldata += `
     <tbody>
     <tr>
     <td>${st?.center_id}</td>
     <td>${st?.name}</td>
     <td>${st?.block_name}</td>
     <td>${st?.available_capacity}</td>
     <td>${st?.available_capacity_dose1}</td>
     <td>${st?.available_capacity_dose2}</td>
     <td>${st?.vaccine}</td>
     <td>${st?.slots}</td>
     
     
     
     
     
     </tr>
        
     </tbody>
     
     `
    })




    let out=document.querySelector('#result')
    out.innerHTML=htmldata
}