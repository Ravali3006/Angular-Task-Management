import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PopupModule } from 'ng2-opd-popup';
//import { DialogModule } from 'primeng/primeng';

import { NavComponent } from './components/navigation/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/projects/projects.component';
@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ProjectComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpModule,
      RouterModule.forRoot([
        //{ path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'projects', component: ProjectComponent },
        { path: '**', redirectTo: 'home' }
      ]),
      PopupModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
