import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  //selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  Tasks: TaskModel[];
  Tasks1: TaskModel[];
  taskModel: TaskModel;
  mredetails: TaskModel;
  ToDoList: TaskModel[];
  InProgress: TaskModel[];
  CompletedList: TaskModel[];
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
    this.ToDoList = this.Tasks1;
  }

  ProjectTaskDetails: boolean = false;
  toggleDetails(): void {
    this.ProjectTaskDetails = !this.ProjectTaskDetails;

  }
  AddTask() {
    this.Addpopup.options = {
      color: "#4180ab",
      header: "Add Form",
      showButtons: false
    }
    this.Addpopup.show(this.Addpopup.options);
  }

  MoreDetails(item: TaskModel) {
    this.MoreDetailspopup.options = {
      color: "#4180ab",
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

  dragStart(event: any, task: TaskModel) {
    this.taskModel = task;
  }
  inProgressdragStart(event: any, task: TaskModel) {
    this.taskModel = task;
  }
  drop(event: any, source: string) {
    if (this.taskModel) {
      if (source == "inprogress") {
        if (this.InProgress.filter((val, i) => val == this.taskModel).length == 0) {
          this.InProgress = [...this.InProgress, this.taskModel];
        }
      }
      else {
        if (this.CompletedList.filter((val, i) => val == this.taskModel).length == 0) {
          this.CompletedList = [...this.CompletedList, this.taskModel];
        }
      }
      let draggedCarIndex = this.findIndex(this.taskModel);
      this.ToDoList = this.ToDoList.filter((val, i) => i != draggedCarIndex);
      this.taskModel = null;
    }
  }

  dragEnd(event: any) {
    this.taskModel = null;
  }

  findIndex(task: TaskModel) {
    let index = -1;
    for (let i = 0; i < this.ToDoList.length; i++) {
      if (task.ProjectTitle == this.ToDoList[i].ProjectTitle) {
        index = i;
        break;
      }
    }
    return index;
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
