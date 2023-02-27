import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './Library/card/card.module';
import { CheckboxComponent } from './Library/checkbox/checkbox.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckboxComponent, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
