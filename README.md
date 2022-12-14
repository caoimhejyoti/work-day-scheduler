# Work Day Scheduler
Calendar application for users to save events for each hour of the work day.

## Description
### What was your motivation?
I wanted to create a simple web app for the user to create a daily schedule, usong code provided to me.

### Why did you build this project?
To develop and practise my jquery skills.

### What problem does it solve?
This app allows the user to easily plan thier schedules and organise the day ahead of them.

### What did you learn?
1. Learnt how to select specific parts of an element id
2. Pull time from day.js
3. Add style depending on the current time in relation to the timeblock.
4. How to traverse the DOM tree using jquery.


## Installation
https://caoimhejyoti.github.io/work-day-scheduler/


## Usage
![Screen shot of blank scheduler. All hours are grey due to the time being 9:34pm](Assets/img/blank%20schedulers.png)

User is able to insert events into the hour blocks and save them to the local storage for later use.

Each hour block changes colour in relation to the current time. if the time has past, the event block will be grey. Any future events will be in green. The current hour block will be in red. 

If the user wishes to use the scheduler on a different day, they are able to click the "Clear Schedule" button. This button triggers a clear of the local storage and refresh the window. 


![Close up screen shot of Clear Schedule button](Assets/img/Clear%20schedule%20button.png)


## Future Developments 
1. I would like to develop a message to the user to confirm with them that the event has been saved successfully
2. Look at the Clear Schedule button design. It is currently just a default design. It would be nice to add some colour and additional styling.


## Credits
### Sources
https://www.w3schools.com/jquery/jquery_dom_set.asp

https://api.jquery.com/category/manipulation/

https://stackoverflow.com/questions/58296281/how-do-i-get-an-array-from-local-storage-and-display-it-in-a-html

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

https://stackoverflow.com/questions/415602/set-value-of-textarea-in-jquery

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea

https://api.jquery.com/children/#children-selector

https://api.jquery.com/children/


## License
MIT License