document.addEventListener("DOMContentLoaded", () => { 
    fetchSchedules()
})

const BASE_URL = "http://127.0.0.1:3000"

//read - index
function fetchSchedules(){
    fetch(`${BASE_URL}/schedules`)
    .then(resp => resp.json())
    .then(schedules => {})
    }


//create
//update