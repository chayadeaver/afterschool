class Schedule{
    constructor(id, weekday, subject, content, child_id){
        this.id = id
        this.weekday = weekday
        this.subject = subject
        this.content = content
        this.child_id = child_id
        // creating and initializing objects of this class
    }


    renderSchedule() {
    //grabbing the math table
        let mondayArea = document.getElementById("monday-table"); 
        let tuesdayArea = document.getElementById("tuesday-table"); 
        let wednesdayArea = document.getElementById("wednesday-table"); 

        let currentWeekday = this.weekday
    
        const weekday = currentWeekday;
        
        let area;
         
        switch (weekday) {
          case 'Monday':
            area = mondayArea.innerHTML += 
                `<tr> <td> ${this.subject}</td> <td>${this.content}</td> </tr>`
            break;
          case 'Tuesday':
            area = tuesdayArea.innerHTML += 
                `<tr> <td> ${this.subject}</td> <td>${this.content}</td> </tr>`
            break;
          case 'Wednesday':
            area = wednesdayArea.innerHTML += 
                `<tr> <td> ${this.subject}</td> <td>${this.content}</td> </tr>`
            break;
        }
    }
        
}
                





