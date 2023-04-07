import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Library/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { InputnumberComponent } from './Library/components/inputnumber/inputnumber.component';
import { InputpasswordComponent } from './Library/components/inputpassword/inputpassword.component';
import { TextareaComponent } from './Library/components/textarea/textarea.component';
import { SwitchComponent } from './Library/components/switch/switch.component';
import { CheckboxComponent } from './Library/components/checkbox/checkbox.component';
import { CheckboxListComponent } from './Library/components/checkboxList/checkboxList.component'; 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownComponent,
    ListboxComponent,
    ToastComponent,
    TabviewComponent,
    TabComponent,
    AccordionComponent,
    ProgesbarComponent,
    TextareaComponent,
    CalenderComponent,
    InputpasswordComponent,
    CardComponent,
    DialogComponent,
    TableComponent,
    ButtonComponent,
    InputComponent,
    InputnumberComponent,
    FormComponent,
    DenemeComponent,
    PhoneDirective,
    CheckboxComponent,
    SwitchComponent,
    CheckboxListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
