import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  //selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  Tasks: TaskModel[];
  Tasks1: TaskModel[];
  mredetails: TaskModel;
  iseditable: boolean = true;
  projddl: string;
  @ViewChild('Addpopup') Addpopup: Popup;
  @ViewChild('MoreDetailspopup') MoreDetailspopup: Popup;
  ngOnInit() {
    this.Tasks = [{
      Id: 101,
      ProjectTitle: 'Project1',
      TaskTitle: 'Popuptask',
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
    this.mredetails = new TaskModel();
    this.onChange(this.Tasks[0].ProjectTitle);
  
  }

  ProjectTaskDetails: boolean = false;
  toggleDetails(): void {
    this.ProjectTaskDetails = !this.ProjectTaskDetails;

  }
  AddTask() {
    this.Addpopup.options = {
      color: "#4CAF50",
      header: "Add Form",
      showButtons: false
    }
    this.Addpopup.show(this.Addpopup.options);
  }

  MoreDetails(item: TaskModel) {
    this.MoreDetailspopup.options = {
      color: "#4CAF50",
      header: "More Details",
      showButtons: false
    }
    this.MoreDetailspopup.show(this.MoreDetailspopup.options);
    this.mredetails = item;
  }

  onChange(projddl: string) {
    this.Tasks1 = this.Tasks.filter((val, i) => val.ProjectTitle == projddl);
  }


  editmoredetails() {
    this.iseditable = false;

  }

  CancelAdd() {
    this.Addpopup.hide();
  }

  CancelMreDetails() {
    this.MoreDetailspopup.hide();
  }

  allowDrop(event) {
    event.preventDefault();
  }
  drag(event) {
    event.dataTransfer.setData("item", event.target.id);
  }
  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("item");
    event.target.appendChild(document.getElementById(data));
  }
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
