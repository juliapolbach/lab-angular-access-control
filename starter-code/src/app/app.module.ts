import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component';
import { AccesControlLogService } from './acces-control-log.service'

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccesControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
