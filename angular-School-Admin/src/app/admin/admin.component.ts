import { ThisReceiver } from "@angular/compiler";
import { Component, NgModule, OnInit } from "@angular/core";

@Component
(
    {
        //This tells Angular what to do with this class. 
        selector: 'app-admin', //Allows us to use the admin 
        templateUrl: './admin.component.html',
        styleUrls:['./admin.component.css']
    } 

)

export class AdminComponent
{
    
}
// export class AdminComponent implements OnInit
// {

//     enteredValue = '';
//     createdClass = '';
//     onSubmitClass()
//     {
//         this.createdClass=this.enteredValue; //Displays the value of input on click submit
//     }


//     // classForm = '';
//     onAddClasses() //This method gets called in the plus button to add a class. 
//     {
//       alert('button Clicked');
//     //   return this.classForm = 'form';
//     }

//     onAddInstructors()
//     {
//         alert('Button is clicked!')
//     }

//     onAddStudents()
//     {
//         alert('Button is clicked!')
//     }

//     onAddSchedules()
//     {
//         alert('Button is clicked!')
//     }

//     ngOnInit()
//     {
        
//     }
// }