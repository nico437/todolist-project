// Factory Function creating toDo object
let createToDo = function (title, description, duedate, priority, notes, checklist) {
    // creating toDo object
    let toDo = {};
    // parameters as keys to this object
    toDo.title = title
    toDo.description = description;
    toDo.duedate = duedate;
    toDo.priority = priority;
    toDo.notes = notes;
    toDo.checklist = checklist;
    return toDo;
 };
 let toDo1 = createToDo('English exam', 'Study for exam', 'April 25', 'High', 'Highlight key points', 'Not complete yet');
 console.log(toDo1);



