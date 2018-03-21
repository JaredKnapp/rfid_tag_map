import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { TagComponent } from './tag/tag.component';
import { ReaderComponent } from './reader/reader.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    TagComponent,
    ReaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
