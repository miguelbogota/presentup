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
// import { AngularFireFunctionsModule } from '@angular/fire/functions';

// Keys
import { environment } from '../environments/environment';

// Services
import { UserService } from './core/services/user.service';


// Main components
import { AppComponent } from './app.component';

// Shared module
import { SharedModule } from './components/shared/shared.module';
// Module for the page
import { PageModule } from './components/shared/page/page.module';
// Module for the settings
import { SettingsModule } from './components/shared/settings/settings.module';
// Modules for the animations
import { AnimationsModule } from './core/animations/animations.module';
// Modules for the designs
import { BasicModule } from './components/designs/basic/basic.module';

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
    AngularFireModule.initializeApp(environment.firebase, 'Portfolio'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireAuthModule,

    SharedModule, // Shared
    PageModule, // Page
    SettingsModule, // Settings
    AnimationsModule, // Animations
    BasicModule // Designs
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
