import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfigComponent } from './components/config/config.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutService } from './service/layout.service';
import { CheckboxListComponent } from '../components/checkboxList/checkboxList.component';
import { ButtonComponent } from '../components/button/button.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        LayoutRoutingModule,
        CheckboxListComponent,
        ButtonComponent,
        CheckboxComponent,
        TableComponent,
        LayoutComponent
    ],
    providers: [LayoutService], 
    exports: [LayoutComponent]
})
export class LayoutModule { }
