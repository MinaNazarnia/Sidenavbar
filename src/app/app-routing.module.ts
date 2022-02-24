import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // canActivate: [DashboardGuard],
    loadChildren: () => import('../app/sidenavbar/sidenavbar.module').then(sideNav => sideNav.SideNavModule),
  },
  // {
  //   path: 'signIn',
  //   component: SignInComponent,
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
