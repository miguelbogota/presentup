import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Additionals
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

// Keys
import { environment } from '../environments/environment';
// Main components
import { AppComponent } from './app.component';
// Modules from the app
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './modules/landing/landing.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SettingsModule } from './modules/settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Firebase
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase, 'presentup-me'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    // Modules
    CoreModule,
    SharedModule,
    LandingModule,
    ProfileModule,
    SettingsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
