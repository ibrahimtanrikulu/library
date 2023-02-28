import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './Library/card/card.module';
import { CheckboxComponent } from './Library/checkbox/checkbox.component';
import { DialogComponent } from './Library/dialog/dialog.component';
import { DialogModule } from './Library/dialog/dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckboxComponent, CardModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
