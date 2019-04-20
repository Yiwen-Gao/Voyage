import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProgramFinderComponent } from './program-finder/program-finder.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ApplicatoinTrackerComponent } from './application-tracker/application-tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProgramFinderComponent,
    UserProfileComponent,
    ApplicatoinTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProgramFinderComponent },
      { path: 'user-profile/:username', component: UserProfileComponent },
      {
        path: 'application-tracker/:username',
        component: ApplicatoinTrackerComponent
      }
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
