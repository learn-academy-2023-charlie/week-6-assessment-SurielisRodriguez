# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key can be added by adding a column called cohort_id:integer so that every student has a cohort and is able to be identified and referenced by that ID. Setting up the foreign Id helps link these two models to each other.

Researched answer: The foreign ID is a attribute passed that refers to the primary key of a different model. It will link both models and you will be able to access information on both tables. Tables only allow one primary key so this a tool used to build a relationship between both tables. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Create, Show, Edit, Update, and Destroy. These are used to create HTTP requests to the server. 

Researched answer: Parameters play an important part in communicating essential information the server needs to let it perform the specified task accurately. They provide extra information to the server so they can be used in a multitude of ways and can also modify the behavior of the API endpoint. 

3. Name three rails generator commands. What is created by each?

Your answer: rails g model ModelName: creates new model, rails g resource ResourceName: creates new resource with correct routes already set up, rails g controller ControllerName: creates new controller in your application. 

Researched answer: The generated model creates a file with the given name and a migration file to make the corresponding table for the database. The generated resource creates a model, controller, and other necessary files needed for your resource. It includes the RESTful routes, views, and migrations. The generated controller makes a new controller file that has the given name and has the associated view and helper files needed. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students index: displays all instances from model

action: "POST" location: /students create: this creates a new instance by saving the data from the new HTML form and putting it in the database

action: "GET" location: /students/new new: shows you a new HTML form that will takes user input to be able to create new instance in the database.

action: "GET" location: /students/2  show: shows you specified instance within the model

action: "GET" location: /students/2/edit edit: shows you HTML form that will let you modify the data associated with an instance and is used to update the value of the instance in the database. 

action: "PATCH" location: /students/2 update: takes the data within the HTML form used for the edit and actually modifies the instance.

action: "DELETE" location: /students/2 destroy: removes the specified instance from the database. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user, I can create a new task in my todo list.

As a user, I can mark a task as done on my todo list.

As a user, I can update a task in my todo list.

As a user, I can add a date and time that a task is due by.

As a user, I can see a list of my completed task.

As a user, I can see a list of my uncompleted task.

As a user, I can see my calendar and the task name on the correct date.

As a user, I can remove a task on my todo list.

As a user, I will receive a notification if a task is uncompleted and the due date is approaching. 

As a user, I can clear my completed tasks. 






