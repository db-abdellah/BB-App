import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";


//Components
import { DashboardComponent } from "../Container/dashboard-component.component";

//Module


@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        DashboardComponent,
    ],
    exports:[
        DashboardComponent
    ]
    
})

export class DashBoardModule{}