import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { DoublePwdComponent } from './user/double-pwd/double-pwd.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import {appRoutes} from './app.routes';
import {DataTableModule} from "angular2-datatable";
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { PaginationModule } from 'ng2-bootstrap';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ForgetPwdComponent,
    DoublePwdComponent,
    UserTableComponent
   
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    DataTableModule,
    Ng2SmartTableModule,
    PaginationModule.forRoot(),
    
 
    
    HttpModule,
    JsonpModule, 
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    SharedModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
