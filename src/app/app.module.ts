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
import { InputnumberComponent } from './Library/components/inputnumber/inputnumber.component';
import { TextareaComponent } from './Library/components/textarea/textarea.component'; 
import { InputMaskComponent } from './Library/components/inputmask/inputmask.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    CheckboxComponent,
    CardComponent,
    DialogComponent,
    TableComponent,
    ButtonComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    DropdownComponent,
    ListboxComponent,
    ToastComponent,
    TabviewComponent,
    TabComponent,
    InputnumberComponent,
    InputDirective,
    TextareaComponent,
    InputMaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
