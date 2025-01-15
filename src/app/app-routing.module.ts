import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSignComponent } from './single-sign/single-sign.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { SelectThemeComponent } from './select-theme/select-theme.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'theme', component:SelectThemeComponent},
  { path: 'dashboard', component:SingleSignComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
