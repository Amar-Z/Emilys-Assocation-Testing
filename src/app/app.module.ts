import { ContactingComponent } from './components/contacting/contacting.component';
import { SendFormsService } from './send-forms.service';
import { CalcDonComponent } from './components/donations/calc-don/calc-don.component';
import { FormMemberComponent } from './components/membership/form-member/form-member.component';
import { DonationsComponent } from './components/donations/donations.component';
import { MembershipComponent } from './components/membership/membership.component';
import { BodyComponent } from './components/body/body.component';
import { NewsFieldComponent } from './components/news-events/news-field/news-field.component';
import { ActivityComponent } from './components/news-events/activity/activity.component';
import { NotionComponent } from './components/lab-safety/responsibility/notion/notion.component';
import { ActeursComponent } from './components/lab-safety/responsibility/acteurs/acteurs.component';
import { DelitsComponent } from './components/lab-safety/responsibility/delits/delits.component';
import { FauteInexcusableComponent } from './components/lab-safety/accidents/faute-inexcusable/faute-inexcusable.component';
import { MaladieProfessionelleComponent } from './components/lab-safety/accidents/maladie-professionelle/maladie-professionelle.component';
import { AccidentDuTravailComponent } from './components/lab-safety/accidents/accident-du-travail/accident-du-travail.component';
import { InformationComponent } from './components/lab-safety/formations-info/information/information.component';
import { FormationComponent } from './components/lab-safety/formations-info/formation/formation.component';
import { CollectiveComponent } from './components/lab-safety/protection/collective/collective.component';
import { IndividualComponent } from './components/lab-safety/protection/individual/individual.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageUploadModule } from 'angular2-image-upload';
import { AgmCoreModule } from '@agm/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS , HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Proxy } from './core/services/proxy.service';
import { CommonService } from './core/services/common.service';
import { CanActivateThisRoute } from './core/Guard/RouterGuard';
import { MaterialModule } from './core/Material/material.module';
import { RoutingModule } from './core/Routing/routing.module';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MyHttpInterceptor } from './core/Interceptor/interceptor.service';
import { DirectionsMapDirective } from './core/Directives/DirectionsMapDirective';
import { MenuComponent } from './components/menu/menu.component';
import { SignalRService } from './core/Services/SignalRService';
import { NewsComponent } from './components/News/news.component';
import { TeacherComponent } from './components/Teacher/teacher.component';
import { FrontteacherComponent } from './components/frontteacher/frontteacher.component';
import { FrontComponent } from './components/front/front.component';
import {TheAssociationComponent} from './components/the-association/the-association.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LabSafetyComponent } from './components/lab-safety/lab-safety.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { EmilieComponent } from './components/the-association/emilie/emilie.component';
import { PresentationComponent } from './components/the-association/presentation/presentation.component';
import { NosMissionsComponent } from './components/the-association/nos-missions/nos-missions.component';
import { LeBureauComponent } from './components/the-association/le-bureau/le-bureau.component';
import { LesAntennesComponent } from './components/the-association/les-antennes/les-antennes.component';
import { RisksComponent } from './components/lab-safety/risks/risks.component';
import { ProtectionComponent } from './components/lab-safety/protection/protection.component';
import { FormationsInfoComponent } from './components/lab-safety/formations-info/formations-info.component';
import { AccidentsComponent } from './components/lab-safety/accidents/accidents.component';

import { ResponsibilityComponent } from './components/lab-safety/responsibility/responsibility.component';
import { UsefulLinksComponent } from './components/lab-safety/useful-links/useful-links.component';

import { BiologyComponent } from './components/lab-safety/risks/biology/biology.component';
import { ChemistryComponent } from './components/lab-safety/risks/chemistry/chemistry.component';
import { PhysicsComponent } from './components/lab-safety/risks/physics/physics.component';
import { RadioActiveComponent } from './components/lab-safety/risks/radio-active/radio-active.component';
import { CopyrightsComponent } from './components/front/copyrights/copyrights.component';
import { ComingSoonComponent } from './components/main-menu/coming-soon/coming-soon.component';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MemberDialogComponent } from './member-dialog/member-dialog.component';
import { DontaionsDialogComponent } from './dontaions-dialog/dontaions-dialog.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DeleteConfirmationComponent,
    DirectionsMapDirective,
    MenuComponent,
    NewsComponent,
    TeacherComponent,
    FrontteacherComponent,
    FrontComponent,
    TheAssociationComponent,
    MainMenuComponent,
    LabSafetyComponent,
    NewsEventsComponent,
    EmilieComponent,
    PresentationComponent,
    NosMissionsComponent,
    LeBureauComponent,
    LesAntennesComponent,
    RisksComponent,
    ProtectionComponent,
    FormationsInfoComponent,
    AccidentsComponent,
    ResponsibilityComponent,
    UsefulLinksComponent,
    BiologyComponent,
    ChemistryComponent,
    PhysicsComponent,
    RadioActiveComponent,
    IndividualComponent,
    CollectiveComponent,
    FormationComponent,
    InformationComponent,
    AccidentDuTravailComponent,
    MaladieProfessionelleComponent,
    FauteInexcusableComponent,
    DelitsComponent,
    ActeursComponent,
    NotionComponent,
    ActivityComponent,
    NewsFieldComponent,
    BodyComponent,
    MembershipComponent,
    DonationsComponent,
    FormMemberComponent,
    CalcDonComponent,
    CopyrightsComponent,
    ComingSoonComponent,
    DialogBodyComponent,
    ContactingComponent,
    MemberDialogComponent,
    DontaionsDialogComponent
  ],
  entryComponents: [
    DeleteConfirmationComponent,
     DialogBodyComponent,
     DontaionsDialogComponent,
     MemberDialogComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkBsM4-NKYM-ivEHOLrFJCxL00fhcQsMY'
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    SendFormsService,
            Proxy,
            CommonService,
            CanActivateThisRoute,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: MyHttpInterceptor,
              multi: true
            },
            SignalRService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
