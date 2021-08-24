import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loaderService/loader.service';
import { CoreHttpService } from './services/coreHttpServices/core-http.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers : [
    LoaderService,
    CoreHttpService,
  ]
})
export class CoreModule { }
