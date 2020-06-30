import { ContactingComponent } from './../../components/contacting/contacting.component';
import { DialogBodyComponent } from './../../dialog-body/dialog-body.component';
import { CopyrightsComponent } from './../../components/front/copyrights/copyrights.component';
import { NewsFieldComponent } from './../../components/news-events/news-field/news-field.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { CanActivateThisRoute } from '../Guard/RouterGuard';
import { MenuComponent } from '../../components/menu/menu.component';
import { NewsComponent } from '../../components/News/news.component';
import { TeacherComponent } from '../../components/Teacher/teacher.component';
import { FrontteacherComponent } from '../../components/frontteacher/frontteacher.component';
import { CalcDonComponent } from '../../components/donations/calc-don/calc-don.component';
import { FormMemberComponent } from '../../components/membership/form-member/form-member.component';
import { DonationsComponent } from '../../components/donations/donations.component';
import { MembershipComponent } from '../../components/membership/membership.component';
import { ResponsibilityComponent } from '../../components/lab-safety/responsibility/responsibility.component';
import { AccidentDuTravailComponent } from '../../components/lab-safety/accidents/accident-du-travail/accident-du-travail.component';
import { AccidentsComponent } from '../../components/lab-safety/accidents/accidents.component';
import { InformationComponent } from '../../components/lab-safety/formations-info/information/information.component';
import { FormationComponent } from '../../components/lab-safety/formations-info/formation/formation.component';
import { FormationsInfoComponent } from '../../components/lab-safety/formations-info/formations-info.component';
import { CollectiveComponent } from '../../components/lab-safety/protection/collective/collective.component';
import { IndividualComponent } from '../../components/lab-safety/protection/individual/individual.component';
import { ProtectionComponent } from '../../components/lab-safety/protection/protection.component';
import { RadioActiveComponent } from '../../components/lab-safety/risks/radio-active/radio-active.component';
import { PhysicsComponent } from '../../components/lab-safety/risks/physics/physics.component';
import { ChemistryComponent } from '../../components/lab-safety/risks/chemistry/chemistry.component';
import { BiologyComponent } from '../../components/lab-safety/risks/biology/biology.component';
import { RisksComponent } from '../../components/lab-safety/risks/risks.component';
import { LesAntennesComponent } from '../../components/the-association/les-antennes/les-antennes.component';
import { LeBureauComponent } from '../../components/the-association/le-bureau/le-bureau.component';
import { NosMissionsComponent } from '../../components/the-association/nos-missions/nos-missions.component';
import { PresentationComponent } from '../../components/the-association/presentation/presentation.component';
import { EmilieComponent } from '../../components/the-association/emilie/emilie.component';
import { BodyComponent} from '../../components/body/body.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { ActivityComponent } from '../../components/news-events/activity/activity.component';
import { ComingSoonComponent } from '../../components/main-menu/coming-soon/coming-soon.component';




export const routes: Routes = [
  {
    path: 'AideOuExpérience',
    pathMatch: 'full',
    component: ContactingComponent,

  },

 {
    path: 'ModeDeDéveloppement',
    pathMatch: 'full',
    component: ComingSoonComponent,

  },
  {
    path: 'MentionsLégales/RGPD',
    pathMatch: 'full',
    component: CopyrightsComponent,

  },
  {
    path: 'Activité',
    pathMatch: 'full',
    component: ActivityComponent,

  },
  {
    path: 'Nouvelles',
    pathMatch: 'full',
    component: NewsFieldComponent,

  },

  {
    path: 'CalcDons',
    pathMatch: 'full',
    component: CalcDonComponent,

  },
 

  {
    path:'FormulaireDePaiement',
    pathMatch: 'full',
    component: FormMemberComponent,

  },
  {
    path:'DesDons',
    pathMatch: 'full',
    component: DonationsComponent,
  },
  {
    path:'Adhésion',
    pathMatch: 'full',
    component: MembershipComponent,
  },
  {
    path:'Responsabilités',
    pathMatch: 'full',
    component: ResponsibilityComponent,
  },
  {
    path:'AccidentsDuTravail',
    pathMatch: 'full',
    component: AccidentDuTravailComponent,
  },
  {
    path:'AccidentsDuTravailEtMaladiesProfessionnelles',
    pathMatch: 'full',
    component: AccidentsComponent,
  },
  {
    path:'Information',
    pathMatch: 'full',
    component: InformationComponent,
  },
  {
    path:'Formation',
    pathMatch: 'full',
    component: FormationComponent,
  },
  {
    path:'FormationsEtInformations',
    pathMatch: 'full',
    component: FormationsInfoComponent,
  },
  {
    path:'ProtectionCollective',
    pathMatch: 'full',
    component: CollectiveComponent,
  },
  {
    path:'ProtectionIndividuelle',
    pathMatch: 'full',
    component: IndividualComponent,
  },
  {
    path:'Protection',
    pathMatch: 'full',
    component: ProtectionComponent,
  },
  {
    path:'RisqueRadioactif',
    pathMatch: 'full',
    component: RadioActiveComponent,
  },
  {
    path:'RisquePhysique',
    pathMatch: 'full',
    component: PhysicsComponent,
  },
  {
    path:'RisqueChimique',
    pathMatch: 'full',
    component: ChemistryComponent,
  },
  {
    path:'RisqueBiologique',
    pathMatch: 'full',
    component: BiologyComponent,
  },
  {
    path:'RisquesEtPrevention',
    pathMatch: 'full',
    component: RisksComponent,
  },
  {
    path:'LesAntennes',
    pathMatch: 'full',
    component: LesAntennesComponent,
  },
  {
    path:'LeBureau',
    pathMatch: 'full',
    component: LeBureauComponent,
  },

  {
    path:'NosMissions',
    pathMatch: 'full',
    component: NosMissionsComponent,
  },
  {
    path:'Presentation',
    pathMatch: 'full',
    component: PresentationComponent,
  },
  {
    path:'Emilie',
    pathMatch: 'full',
    component: EmilieComponent,
  },
  {
    path:'Login',
    pathMatch: 'full',
    component: LoginComponent,
  },

    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'news', component: NewsComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'frontteacher', component: FrontteacherComponent},
    {path: 'menu', component: MenuComponent, canActivate: [CanActivateThisRoute]},
    {path: '**', component: BodyComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class RoutingModule {}
