import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {PageLoginComponent} from './page-login/page-login.component';
import {PageMyTravelsComponent} from './page-my-travels/page-my-travels.component';
import {PageUserComponent} from './page-user/page-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import {PageRegisterComponent} from './page-register/page-register.component';

const routes: Routes = [
  { path: '', component: PageMyTravelsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: PageLoginComponent },
  { path: 'registrar', component: PageRegisterComponent },
  { path: 'minhas-viagens', component: PageMyTravelsComponent, canActivate: [AuthGuard]  },
  { path: 'user', component: PageUserComponent, canActivate: [AuthGuard]  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
