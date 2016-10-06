import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DragulaModule , DragulaService} from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { InteractionScreenComponent } from './interaction-screen/interaction-screen.component';
import { WireframeHexagonComponent } from './wireframe-hexagon/wireframe-hexagon.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { MarkedhexagonComponent } from './markedhexagon/markedhexagon.component';
import { IslastComponent } from './islast/islast.component';
import { InteractivebottomComponent } from './interactivebottom/interactivebottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HexagonComponent,
    InteractionScreenComponent,
    WireframeHexagonComponent,
    WireframeComponent,
    MarkedhexagonComponent,
    IslastComponent,
    InteractivebottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
