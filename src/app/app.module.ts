import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Library/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from './Directive/input.directive';
import { CheckboxComponent } from './Library/components/checkbox/checkbox.component';
import { CardComponent } from './Library/components/card/card.component';
import { DialogComponent } from './Library/components/dialog/dialog.component';
import { TableComponent } from './Library/components/table/table.component';
import { InputComponent } from './Library/components/input/input.component';
import { DropdownComponent } from './Library/components/dropdown/dropdown.component';
import { ListboxComponent } from './Library/components/listbox/listbox.component';
import { ToastComponent } from './Library/components/toast/toast.component';
import { TabviewComponent } from './Library/components/tabview/tabview.component';
import { TabComponent } from './Library/components/tabview/tab/tab.component';
import { AccordionComponent } from './Library/components/accordion/accordion.component';
import { ProgesbarComponent } from './Library/components/progesbar/progesbar.component';
import { CalenderComponent } from './Library/components/calender/calender.component';
import { FormComponent } from './Library/components/form/form.component';
import { DenemeComponent } from './Library/components/deneme/deneme.component';
import { PhoneDirective } from './Directive/phone.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //
    DropdownComponent,
    ListboxComponent,
    ToastComponent,
    TabviewComponent,
    TabComponent,
    InputDirective,
    AccordionComponent,
    ProgesbarComponent,
    CalenderComponent,
    CheckboxComponent,
    CardComponent,
    DialogComponent,
    TableComponent,
    ButtonComponent,
    InputComponent,
    FormComponent,
    DenemeComponent,
    PhoneDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
