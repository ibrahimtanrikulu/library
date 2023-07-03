import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneDirective } from './Directive/phone.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ToastComponent } from './components/toast/toast.component';
import { TabviewComponent } from './components/tabview/tabview.component';
import { TabComponent } from './components/tabview/tab/tab.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgesbarComponent } from './components/progesbar/progesbar.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { CalenderComponent } from './components/calender/calender.component';
import { InputpasswordComponent } from './components/inputpassword/inputpassword.component';
import { CardComponent } from './components/card/card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { InputnumberComponent } from './components/inputnumber/inputnumber.component';
import { FormComponent } from './components/form/form.component';
import { DenemeComponent } from './components/deneme/deneme.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CheckboxListComponent } from './components/checkboxList/checkboxList.component';
import { ListboxComponent } from './components/listbox/listbox.component';
import { LayoutModule } from './Layout/layout.module';
import { SpinnerComponent } from './components/spinner/spinner.component'; 

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
    LayoutModule,
    SpinnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
