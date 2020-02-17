import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageMyTravelsComponent } from './page-my-travels/page-my-travels.component';
import { FormLoginComponent } from './page-login/form-login/form-login.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MyTravelsComponent } from './page-my-travels/my-travels/my-travels.component';
import {MatTableModule} from '@angular/material/table';
import { MyTravelsTableComponent } from './page-my-travels/my-travels-table/my-travels-table.component';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './jwt-interceptor';
import { FormTravelComponent } from './page-my-travels/form-travel/form-travel.component';
import { FormRegisterComponent } from './page-register/form-register/form-register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTravelComponent } from './page-my-travels/dialog-travel/dialog-travel.component';
import { MatIconModule } from '@angular/material/icon';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageUserComponent } from './page-user/page-user.component';
import { WavesComponent } from './waves/waves.component';
import { FormUserComponent } from './page-user/form-user/form-user.component';
import { DialogEditTravelComponent } from './page-my-travels/dialog-edit-travel/dialog-edit-travel.component';
import { FormEditTravelComponent } from './page-my-travels/form-edit-travel/form-edit-travel.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    PageLoginComponent,
    PageMyTravelsComponent,
    FormLoginComponent,
    MyTravelsComponent,
    MyTravelsTableComponent,
    FormTravelComponent,
    FormRegisterComponent,
    DialogTravelComponent,
    PageRegisterComponent,
    PageUserComponent,
    WavesComponent,
    FormUserComponent,
    DialogEditTravelComponent,
    FormEditTravelComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
