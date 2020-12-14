class Schedule{
    constructor(id, weekday, subject, content, week){
        this.id = id
        this.weekday = weekday
        this.subject = subject
        this.content = content
        this.week = week
        // creating and initializing objects of this class
    }

        renderSchedule() {
            //grabbing the math table
            let mathArea = document.querySelector("math-table"); 
            mathArea.classList.add("table");
            mathArea.classList.add("table-success");
            mathArea.classList.add("table-striped");
        
            //creating a new table row
            let mathRow = document.createElement('th');
           
        }
}


    