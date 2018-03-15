import { Component, OnInit,ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { Router } from '@angular/router';


@Component({
  //selector: 'projects',
  templateUrl: './projects.component.html'
})
export class ProjectComponent implements OnInit {
  Projects: ProjectModel[];
  editProj: ProjectModel;
  name: string = "Ravali";
  @ViewChild('addpopup') addpopup: Popup;
  @ViewChild('Editpopup') Editpopup: Popup;
  constructor(private router: Router) { }
  ngOnInit() {
    this.Projects = [{
      Id: 101,
      Title: 'Project1',
      Description: 'Healthcare',
      DueDate: '03-23-2018',
      ProjectManager: 'John',
      Team: ['A', 'B'],
      Status: 'Ongoing'
    },
    {
      Id: 102,
      Title: 'Project2',
      Description: 'Banking',
      DueDate: '03-24-2018',
      ProjectManager: 'Kate',
      Team: ['C', 'D'],
      Status: 'Initialstage'
    }]
  }
  AddProject() {
    this.addpopup.options = {
      color: "#4180ab",
      header: "Add Form",
      confirmBtnContent: "Save",
      cancleBtnContent: "Cancel"
    }
    this.addpopup.show(this.addpopup.options);
  }
  EditProject(item: ProjectModel) {
    alert(item.Title);
    this.Editpopup.options = {
      color: "#4180ab",
      header: "Edit Form",
      confirmBtnContent: "Update",
      cancleBtnContent: "Cancel",
      
    }
    this.Editpopup.show(this.Editpopup.options);
    this.editProj = item;

  }
  AddTask = function () {
    this.router.navigateByUrl('/home');
  };
 
    //EditProject(item: ProjectModel) {
    //  this.editProjDialog = true;
    //  this.editProj = new ProjectModel();
    //  this.editProj = item;
    //  this.mode = "Save";
    //}
  
}

export class ProjectModel {
  Id: number;
  Title: string;
  Description: string;
  DueDate: string;
  ProjectManager: string;
  Team: string[];
  Status: string;
}
