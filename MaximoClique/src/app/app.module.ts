import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Screens
import { HomeScreen } from 'src/screens/home/home.screen';
import { AboutScreen } from 'src/screens/about/about.screen';
import { AlgorithmScreen } from 'src/screens/algorithm/algorithm.screen';

// Components
import { InfoComponent } from 'src/components/about/about.component';
import { InputComponent } from 'src/components/input/input.component';
import { ResultsComponent } from 'src/components/results/results.component';
import { VideoComponent } from 'src/components/video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreen,
    AboutScreen,
    AlgorithmScreen,
    InfoComponent,
    InputComponent,
    ResultsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
