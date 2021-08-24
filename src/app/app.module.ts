import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { HttpHeaderInterceptorService } from './core/interceptors/http-header.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
