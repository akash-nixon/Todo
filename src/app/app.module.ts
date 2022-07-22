import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import {TaskService} from "./task.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button'
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { AppRoutingModule } from './app-routing.module';
import {Routes,RouterModule} from "@angular/router";
import { CreatingComponent } from './creating/creating.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import { UpdateComponent } from './update/update.component';
import {MatDialogModule} from '@angular/material/dialog';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'create',component:CreatingComponent},
  {path:'task',component:TaskComponent},
  {path:'login',component:LoginComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    CreatingComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
