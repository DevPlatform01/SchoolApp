import { Component, NgModule } from "@angular/core";

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
    classForm = false;
    onAddClasses() //This method gets called in the plus button to add a class. 
    {
       this.classForm = true; 
    }

    onAddInstructors()
    {
        alert('Button is clicked!')
    }

    onAddStudents()
    {
        alert('Button is clicked!')
    }

    onAddSchedules()
    {
        alert('Button is clicked!')
    }
}