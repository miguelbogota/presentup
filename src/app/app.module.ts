import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Additionals
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
// Routing
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
// Main app
import { environment } from '@app-env/environment';
import { AppComponent } from './app.component';
// Modules
import { FireModule } from './fire.module';
import { ToolbarModule } from '@app-components/toolbar/toolbar.module'; // Toolbar will be use in all the views
import { CoreModule } from '@app-core/core.module';
import { SharedModule } from '@app-shared/shared.module';
import { DesignsModule } from '@app-designs/designs.module';
import { ViewsModule } from '@app-views/views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Additionals
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Modules
    FireModule,
    ToolbarModule,
    CoreModule,
    SharedModule,
    DesignsModule,
    ViewsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
