import { Component, OnInit } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  //selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  Tasks: TaskModel[];
  constructor(private popup: Popup) {}
  ngOnInit() {
    this.Tasks = [{
      Id: 101,
      ProjectTitle: 'Project1',
      TaskTitle:'Popuptask',
      Description: 'Healthcare',
      DueDate: '04-23-2018',
      AssignedTo: 'John',
      Status: 'ToDo',
      CreatedBy: 'Acvh',
      CreatedOn: '03-23-2018'
    },
    {
      Id: 102,
      ProjectTitle: 'Project2',
      TaskTitle: 'Modelbindingtask',
      Description: 'Finance',
      DueDate: '04-25-2018',
      AssignedTo: 'dskhsdk',
      Status: 'ToDo',
      CreatedBy: 'Acfdvdfvvh',
      CreatedOn: '03-15-2018'
    }]
  }

  MoreDetails: boolean = false;
  toggleDetails(): void {
    this.MoreDetails = !this.MoreDetails;
  }
  TaskDetails() {
    
  //  this.popup.options = {
  //    color: "#4180ab",
  //    header: "Add Form",
  //    confirmBtnContent: "Update",
  //    cancleBtnContent: "Cancel"
  //  }
  //  this.popup.show();
  //}
}

class TaskModel {
  Id: number;
  ProjectTitle: string;
  TaskTitle: string;
  Description: string;
  DueDate: string;
  AssignedTo: string;
  Status: string;
  CreatedBy: string;
  CreatedOn: string;
}
