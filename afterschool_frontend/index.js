document.addEventListener("DOMContentLoaded", () => { 
    fetchSchedules()
})

const BASE_URL = "http://127.0.0.1:3000"

//read - index
function fetchSchedules(){
    fetch(`${BASE_URL}/schedules`)
    .then(resp => resp.json())
    .then(schedules => {
        for (const schedule of schedules){
        
            let s = new Schedule(schedule.id, schedule.weekday, schedule.subject, schedule.content)
            
        }
    })
    }


//create
//update