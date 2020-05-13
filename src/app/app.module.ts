import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Additionals
import { RouterModule } from '@angular/router';
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
// Main application
import { environment } from '@app-env/environment'; // Environment keys
import { AppRoutes } from './app.routes'; // App routes
import { AppComponent } from './app.component'; // App component
// Modules from the app
import { CoreModule } from '@app-core/core.module';
import { SharedModule } from '@app-shared/shared.module';
// Modules folder
import { AuthenticationModule } from '@app-module/authentication/authentication.module';
import { HandlersModule } from '@app-module/handlers/handlers.module';
import { HomeModule } from '@app-module/home/home.module';
import { LegalModule } from '@app-module/legal/legal.module';
import { SettingsModule } from '@app-module/settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Additionals
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
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
    // Modules folder
    AuthenticationModule,
    // ControlsModule,
    HandlersModule,
    HomeModule,
    LegalModule,
    // LoadersModule,
    SettingsModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
