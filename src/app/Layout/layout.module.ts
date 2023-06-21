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
import { InputComponent } from '../components/input/input.component';

@NgModule({
    declarations: [LayoutComponent, FooterComponent, SidebarComponent, ConfigComponent, NavbarComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        LayoutRoutingModule,
        InputComponent
    ],
    providers: [LayoutService],
    bootstrap: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutModule { }
