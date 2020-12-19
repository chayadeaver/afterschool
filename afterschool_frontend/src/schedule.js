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
        let readingArea = document.getElementById("reading-table"); 
        let creativeArea = document.getElementById("creative-table"); 
        let physicalEdArea = document.getElementById("physicale-table"); 
        let musicArea = document.getElementById("music-table"); 
            
        //creating a new table row
        let row = mathArea.insertRow(0);
        let row1 = readingArea.insertRow(0);
        let row2 = creativeArea.insertRow(0);
        let row3 = physicalEdArea.insertRow(0);
        let row4 = musicArea.insertRow(0);

        //inserting cells into the rows
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        //add content to cell
        cell1.innerHTML = "Test Cell 1";
        cell2.innerHTML = "Test Cell 2";
        cell3.innerHTML = "Test Cell 3";
    
        // let mathRow = document.createElement('tr');
        // mathContent = document.innertext("");
        // mathContent = document.getElementById("class");
        // row = table.insertRow(0)

           
    }


   
}


    