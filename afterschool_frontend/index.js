document.addEventListener("DOMContentLoaded", () => { 
    fetchSchedules()
    let newScheduleBtn = document.querySelector('#create-schedule');  // identifies the button 
    newScheduleBtn.addEventListener("click", (event) => showScheduleModal(event), false); // adds event listener to button and redirects to open modal function 

})

const BASE_URL = "http://127.0.0.1:3000"

//read - index
function fetchSchedules(){
    fetch(`${BASE_URL}/schedules`)
    .then(resp => resp.json())
    .then(schedules => {
    
    for (const schedule of schedules){
        //for each schedule, create a new schedule object with the following properties.
        let s = new Schedule(schedule.id, schedule.weekday, schedule.subject, schedule.content, schedule.date)
        s.renderSchedule();
    }
})
    
}
// shows modal 
    function showScheduleModal() {
    // debugger;
    //references the modal in html
    const addScheduleModal = document.getElementById("add-modal");
// opening the modal 
        $(addScheduleModal).modal("show", {
            backdrop: "static"
    });
// debugger;
        addScheduleModal.addEventListener("submit", createSchedule);
}

// create schedules
function createSchedule(event) {
    event.preventDefault();
    debugger;
    // let child_id = event.target.child_id.value
    const schedule = {
      subject: event.target.subject.value,
      weekday: event.target.weekday.value,
      content: event.target.content.value,
    //   week: parseInt(event.target.week.value),
    //   child_id: parseInt(child_id)
    };
  
    fetch(`${BASE_URL}/schedules`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(schedule),
    })
    .then(resp => resp.json())
    .then(schedule => {
        let s = new Schedule(schedule.id, schedule.weekday, schedule.subject, schedule.content, schedule.date)
        s.renderSchedule();
})
    

// function deleteSchedule(){}

  
}
//delete
// function deleteSchedule(){}


