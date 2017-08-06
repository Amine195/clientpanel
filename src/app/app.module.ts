import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Route Import
import { RouterModule, Routes } from '@angular/router';

// Form Import
import { FormsModule } from '@angular/forms';

// Flash Messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Service Imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';

// Setting Routes
const appRoutes: Routes = [
  { path:'', component:DashboardComponent, canActivate:[AuthGuard] },
  { path:'register', component:RegisterComponent, canActivate:[RegisterGuard] },
  { path:'login', component:LoginComponent },
  { path:'add-client', component:AddClientComponent, canActivate:[AuthGuard] },
  { path:'client/:id', component:ClientDetailsComponent, canActivate:[AuthGuard] },
  { path:'edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard] },
  { path:'settings', component:SettingsComponent, canActivate:[AuthGuard] },
  { path:'**', component:PageNotFoundComponent}
];

// Config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAv9DJ5QTk-w7Wyxzb4ubuK3puXCVcPS0I",
  authDomain: "clientpanel-2ddae.firebaseapp.com",
  databaseURL: "https://clientpanel-2ddae.firebaseio.com",
  storageBucket: "clientpanel-2ddae.appspot.com",
  messagingSenderId: "965778957878"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // Routes
    AngularFireModule.initializeApp(firebaseConfig), // AngularFire
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth, // AngularFireAuth
    AngularFireDatabase, // AngularFireDatabase
    ClientService,
    AuthService,
    AuthGuard,
    RegisterGuard,
    SettingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
