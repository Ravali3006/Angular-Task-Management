import { Component, OnInit/*,ViewChild*/ } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
//import { DialogModule } from 'primeng/primeng';

@Component({
  //selector: 'projects',
  templateUrl: './projects.component.html'
})
export class ProjectComponent implements OnInit {
  Projects: ProjectModel[];
  //editProjDialog;
  //editProj;
  //mode;
  //@ViewChild('popup1') popup1: Popup;
  constructor(private popup: Popup) { }
  ngOnInit() {
    this.Projects = [{
      Id: 101,
      Title: 'Project1',
      Description: 'Healthcare',
      DueDate: '15th March 2018',
      ProjectManager: 'John',
      Team: ['A', 'B'],
      Status: 'Ongoing'
    },
    {
      Id: 102,
      Title: 'Project2',
      Description: 'Banking',
      DueDate: '15th March 2018',
      ProjectManager: 'Kate',
      Team: ['C', 'D'],
      Status: 'Initialstage'
    }]
  }
  EditProject(){
    this.popup.options = {
      color: "#4180ab",
      header: "Single Popup on a page"
    }
    this.popup.show();
  }

  //EditClick() {
  //  this.popup1.show();
  //}
  //EditProject(item: ProjectModel) {
  //  this.editProjDialog = true;
  //  this.editProj = new ProjectModel();
  //  this.editProj = item;
  //  this.mode = "Save";

  //}

}
class ProjectModel {
  Id: number;
  Title: string;
  Description: string;
  DueDate: string;
  ProjectManager: string;
  Team: string[];
  Status: string;

}
