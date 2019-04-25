import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProgramFinderComponent } from './program-finder/program-finder.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { ApplicatoinTrackerComponent } from './application-tracker/application-tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ApplicantProgramsComponent } from './applicant-programs/applicant-programs.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdmissionComponent } from './admission/admission.component';
import { MatDividerModule } from '@angular/material/divider';
import { PendingApplicantsComponent } from './pending-applicants/pending-applicants.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramFinderComponent,
    ApplicantProfileComponent,
    ApplicatoinTrackerComponent,
    ApplicantProgramsComponent,
    ApplicantComponent,
    HomeComponent,
    AdmissionComponent,
    PendingApplicantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'applicants', component: ApplicantComponent },
      { path: 'admissions', component: AdmissionComponent },
      { path: 'program-finder', component: ProgramFinderComponent },
      { path: 'applicant/:username', component: ApplicantComponent }
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTabsModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
