import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { JdaComponent } from './components/jda/jda.component';
import { OutputComponent } from './components/output/output.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { ShirtSizeComponent } from './components/shirt-size/shirt-size.component';
import { HomeDataMigrationComponent } from './components/MigrationFactory/home-data-migration/home-data-migration.component';
import { ConfigurationDataMigrationComponent } from './components/MigrationFactory/configuration-data-migration/configuration-data-migration.component';
import { ProcessDataMigrationComponent } from './components/MigrationFactory/process-data-migration/process-data-migration.component';
import { OutputDataMigrationComponent } from './components/MigrationFactory/output-data-migration/output-data-migration.component';
import { AutomationComponent } from './components/MigrationFactory/automation/automation.component';
import { TcologinComponent } from './components/tcologin/tcologin.component';
//import { MigrationFactoryComponent } from './components/migration-factory/migration-factory.component';


const routes: Routes = [
  {
      path: '',
      component: TcologinComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'jda',
        component: JdaComponent
      },
      {
        path: 'output',
        component: OutputComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'Start',
    component: StartComponent
  },
  {
    path: 'shirt',
    component: ShirtSizeComponent
  },
  {
    path: 'homeDataMigration',
    component: HomeDataMigrationComponent,
  },
  {
    path: 'Automation',
    component: AutomationComponent,
  },
  {
    path: 'Configuration',
    component: ConfigurationDataMigrationComponent,
  },
  {
    path: 'OutputDataMigration',
    component: OutputDataMigrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
