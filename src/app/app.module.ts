import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlowWhistleComponent } from './blow-whistle/blow-whistle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    BlowWhistleComponent,
    HomeComponent,
    InfoComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatChipsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
