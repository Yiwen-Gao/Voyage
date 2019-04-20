import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProgramFinderComponent } from './program-finder/program-finder.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProgramTrackerComponent } from './program-tracker/program-tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ProgramFinderComponent,
    UserProfileComponent,
    ProgramTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProgramFinderComponent },
      { path: 'user-profile/:username', component: UserProfileComponent },
      { path: 'program-tracker/:username', component: ProgramTrackerComponent }
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
