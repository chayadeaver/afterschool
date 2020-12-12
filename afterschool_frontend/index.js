document.addEventListener("DOMContentLoaded", () => { 
    fetchSchedules()

    const createScheduleForm = document.querySelector('#new-schedule-form');
    createScheduleForm.addEventListener("submit", (e) => createScheduleFormHandler(e));
})

const BASE_URL = "http://127.0.0.1:3000"

//read - index
function fetchSchedules(){
    fetch(`${BASE_URL}/schedules`)
    .then(resp => resp.json())
    .then(json => renderSchedules(json))
    
    // {
    //     for (const schedule of schedules){
        
    //         let s = new Schedule(schedule.id, schedule.weekday, schedule.subject, schedule.content)
    //         //for each schedule in this array we are creating a new schedule passing in the attribute listed
    //         document.querySelector('#schedules-container'.innerHTML += new Schedule)
    //     }
    }

    // function renderSchedules(schedules) {
    //     const schedulesDiv = document.querySelector('schedules-container')
    //     schedules.forEach(schedule => {
    //       const h2 = document.createElement('h2')
    //       h2.innerHTML = schedule.weekday
    //       schedulesDiv.appendChild(h2)
    //     })
    //   }


    // function renderSchedules
    


//create
//update