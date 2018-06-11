import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';
import { FlashMessagesService } from 'angular2-flash-messages';


import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { ChoiceComponent } from './choice/choice.component';
import { OfferarideComponent } from './offeraride/offeraride.component';
import { BookarideComponent } from './bookaride/bookaride.component';
import { ViewridesofferedbyyouComponent } from './viewridesofferedbyyou/viewridesofferedbyyou.component';
import { ViewridestravelledbyyouComponent } from './viewridestravelledbyyou/viewridestravelledbyyou.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'choice', component: ChoiceComponent },

  { path: 'offeraride', component: OfferarideComponent },
  { path: 'bookaride', component: BookarideComponent },
  { path: 'viewridesofferedbyyou', component: ViewridesofferedbyyouComponent },
  { path: 'viewridestravelledbyyou', component: ViewridestravelledbyyouComponent },
  { path: 'logout', component: WelcomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    ChoiceComponent,
    OfferarideComponent,
    BookarideComponent,
    ViewridesofferedbyyouComponent,
    ViewridestravelledbyyouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot(
      {
        apiKey:"AIzaSyBaRjCn1ljM2OIHAs2_qa_4P4p-ypv-kCg",
        libraries:["places"]
      }
    )
  ],
  providers: [AppService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}