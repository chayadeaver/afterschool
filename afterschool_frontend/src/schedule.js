class Schedule{
    constructor(id, weekday, subject, content, child_id){
        this.id = id
        this.weekday = weekday
        this.subject = subject
        this.content = content
        this.child_id = child_id
        // creating and initializing objects of this class
    }
    renderSchedule(){

        let mondayArea = document.getElementById("monday-table"); 
        let tuesdayArea = document.getElementById("tuesday-table"); 
        let wednesdayArea = document.getElementById("wednesday-table"); 
        let thursdayArea = document.getElementById("thursday-table"); 
        let fridayArea = document.getElementById("friday-table"); 

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
            case 'Thursday':
              area = thursdayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> </tr>`
              break;
            case 'Friday':
              area = fridayArea.innerHTML += 
                  `<tr> <td> ${this.subject}</td> <td>${this.content}</td> </tr>`
              break;
        }
        
    }

    let newSchedForm = document.getElementById("schedule-form");

  
    let newWeekValue = document.createElement("value");
    newWeekValue.innerHTML += `${this.weekday}`;
    newSchedForm.appendChild(newWeekValue);


    let newSubject = document.createElement("value");
    newSubject.innerHTML += `${this.subject}`;
    newSchedForm.appendChild(newSubject);
}



//     //add review comment to element
//     reviewBodyElem.innerHTML += `${this.comment}`;

//     //create review comment footer
//     let reviewFooterElem = document.createElement("footer");
//     reviewFooterElem.classList.add("blockquote-footer");

//     //add review author to comment footer
//     reviewFooterElem.innerHTML += `${this.name}`;

//     // Add newly created elements to the DOM
//     //debugger;
//     reviewSection.appendChild(reviewDiv);

//     reviewDiv.appendChild(reviewCard);

//     reviewCard.appendChild(headerDiv);

//     reviewCard.appendChild(reviewBodyDiv);

//     reviewBodyDiv.appendChild(reviewBodyBlock);

//     reviewBodyBlock.appendChild(reviewBodyElem);

//     reviewBodyBlock.appendChild(reviewFooterElem);

//     const allReviewsModal = document.getElementById("all-modal");
//     $(allReviewsModal).modal("show", {
//       backdrop: "static"
//     });
//   }

//   showReviewsModal() {
//     // fetches reviews and inserts data into modal
//     renderReviews();
//     // opens camp reviews modal
//   }
// }
