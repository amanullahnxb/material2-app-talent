import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component';
import { NavComponent } from './nav/nav.component';
import { HoverDirective } from './directives/hover/hover.directive';
// import {

//   NavComponent

// } from '../app';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    Material2AppAppComponent, DialogContent,

    NavComponent,
    HoverDirective

  ],
  entryComponents: [DialogContent],
  bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
