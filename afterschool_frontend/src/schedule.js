class Schedule{
    constructor(id, weekday, subject, content){
        this.id = id
        this.weekday = weekday
        this.subject = subject
        this.content = content
        // creating and initializing objects of this class
    }

    // renderSchedules() {

    //     let schedulesDiv = document.getElementById("schedules-container")
    //     //will collect any current and future schedules

    renderSchedule() {

        const col = document.querySelector('tr');
        const newSchedule = document.createElement('th');
        document.body.appendChild(newSchedule)
        newSchedule.textContent = "Test"
        


        //  schedulesDiv = document.getElementById("schedules-container")

        // schedulesDiv.innerHTML +=

            //  <ul>
            //  <h4>Day: ${this.weekday}</h4>
            //  <li>Subject: ${this.subject}</li>
            //  <li>Content: ${this.content}</li>
            //  </ul>
        
        
        // return (
            // `<div id=${this.id}>
            //     <h4>Day: ${this.weekday}</h4>
            //     <h4>Subject: ${this.subject}</h4>
            //     <h4>Content: ${this.content}</h4>
            //     <br>     
            //     <button onclick="delSched(${this.id})">Delete Schedule</button>
            // </div>
            // <hr>`
        
    }
}

// Schedule.all = [];





        // const newSchedule = document.createElement("div")
        // newSchedule.innerHTML;
        // div.appendChild(newSchedule)
        // newSchedule.textContent = "Weekday", "Subject", "Content"

        // const scheduleDiv = document.createElement("div");
        // const newContent = document.createTextNode("weekday")
        // scheduleDiv.appendChild(newContent);
        // const currentDiv = document.getElementById("div"); 
        // document.body.insertBefore(schedulesDiv, currentDiv); 
        
    
