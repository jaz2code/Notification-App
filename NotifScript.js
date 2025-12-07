
window.addEventListener('DOMContentLoaded', () =>{
  const todayBtn = document.getElementById('today');
  const weekBtn = document.getElementById('week');
  const allBtn = document.getElementById('all');
  const contentBox = document.getElementById('content');
  const addNewReminderBtn = document.getElementById('open-button');
  const addReminderDialog = document.getElementById('add-reminder');
  const closeReminderBtn = document.getElementById('close-button');
  const reminderForm = document.querySelector('#add-reminder form');
  const reminderMenu = document.getElementById('reminder-menu');

 

  reminders = [];
  let reminderIdCounter = 0;


  function renderReminders(reminders) {

    let html = '<h1>Your reminders:</h1> <br>'
    if (reminders.length === 0) {
      html += '<p> No reminders yet!</p>';
    } else {
      html += '<ul>';
      reminders.forEach(data => {
        html += `<li>
        <strong>${data.newTitle}</strong> -
         ${data.newDate} at ${data.newTime}
         <br> ${data.newDescription}
         <button class='burger-menu' data-id = ${data.id} > ⋮ </button>
        
        </li>`;

      });
      html += '</ul>';
    }
    contentBox.innerHTML = html;
  }



// Dialog Open/close event listeners 

  addNewReminderBtn.addEventListener('click', () => {
    addReminderDialog.showModal();
  })

  closeReminderBtn.addEventListener('click', () => {
    addReminderDialog.close();
  })



// Stop form refresh event listener

  reminderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newReminder = {
      newTitle : document.getElementById('title').value,
      newDate : document.getElementById('date').value,
      newTime : document.getElementById("time").value,
      newDescription : document.getElementById("description").value,
      id : reminderIdCounter++

    };
    
    console.log(newReminder);
    reminders.push(newReminder);
    addReminderDialog.close()
    renderReminders(reminders);
    reminderForm.reset();
  });


  // Burger menu loader for the content 
  
  // Filtering array based on id for deletion



  contentBox.addEventListener('click', (e) =>{
    if (e.target.classList.contains('burger-menu')) {
      const reminderIdTarget = e.target.dataset.id;
      if (confirm("Do you want to delete this reminder? ")){
        reminders = reminders.filter(reminder => reminder.id != reminderIdTarget)
        console.log("Deleting reminder: ", reminderIdTarget);
        renderReminders(reminders);

      }
    }
  }
  )

});