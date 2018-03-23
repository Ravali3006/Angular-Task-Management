import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PopupModule } from 'ng2-opd-popup';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DragDropModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropDirectiveModule } from "angular4-drag-drop";


import { NavComponent } from './components/navigation/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    DragDropModule,
    DragDropDirectiveModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'projects', component: ProjectComponent },
      { path: '**', redirectTo: 'home' }
    ]),
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
