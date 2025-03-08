document.querySelectorAll('.btn-complete').forEach(button => {
    button.addEventListener('click', function () {
        // for alert
        alert('The task assigned successfully.');

        // for disabled
        button.disabled = true;

        // for  Subtraction task value
        const taskAssigned = document.getElementById('task-assigned').innerText;
        const convertTaskValue = parseInt(taskAssigned);
        if (!isNaN(convertTaskValue)) {
            newValue = convertTaskValue - 1;
            document.getElementById('task-assigned').innerText = newValue;
        }

        // for addition nav number
        const navNumber = document.getElementById('nav-number').innerText;
        const convertNavValue = parseInt(navNumber);
        if (!isNaN(convertNavValue)) {
            newValue2 = convertNavValue + 1;
            document.getElementById('nav-number').innerText = newValue2;
        }

        // show live time in history with title
        const history = document.getElementById('history');
        const liveTime = new Date().toLocaleTimeString();
        const cardTitle = button.closest('.card').querySelector('.card-title').innerText;
        const newDiv = document.createElement('p');
        newDiv.innerHTML = `
            <div class="new-history p-6 flex flex-col bg-gray-200 rounded-xl mb-4 mx-4">
                <p>Task '${cardTitle}' completed at ${liveTime}. </p>
            </div>
        `
        history.appendChild(newDiv);

        // last button message
        const lastBtnMsg = document.querySelectorAll('.btn-complete:not(:disabled)').length
        console.log(lastBtnMsg);
        if(lastBtnMsg === 0){
            alert('All tasks assigned successfully.')
        }
    })

});

// history button clear history
document.getElementById('clearHistory').addEventListener('click', function(){
    const allHistory = document.querySelectorAll('.new-history');
    allHistory.forEach(element => {element.remove()
        
    });

});

//live date
const dateElements ={
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
}
const liveDate = new Date().toLocaleDateString('en-US', dateElements);
document.getElementById('liveDate').innerText = liveDate;
