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
        let mathArea = document.getElementById("math-table"); 
            
        //creating a new table row
        let row = mathArea.insertRow(0);

        //inserting cells into the rows
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        //add content to cell
        cell1.innerHTML = "Test Cell 1";
        cell2.innerHTML = "Test Cell 2";
        // let mathRow = document.createElement('tr');
        // mathContent = document.innertext("");
        // mathContent = document.getElementById("class");
        // row = table.insertRow(0)

           
    }


   
}


    