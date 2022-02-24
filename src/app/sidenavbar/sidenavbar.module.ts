import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { sideNavRoutes } from "./sidenavbar-routing.routing";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild(sideNavRoutes),
    ],
    providers: [],
    declarations: [
      DashboardComponent
    ],
})

export class SideNavModule { }