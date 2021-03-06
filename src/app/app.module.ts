import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { TreeModule } from '@circlon/angular-tree-component';
// import { GuiGridModule, GuiSearching, GuiColumn } from '@generic-ui/ngx-grid';
// // import { GuiColumn, GuiSearching } from '@generic-ui/ngx-grid';
// import { HermesModule } from '@generic-ui/hermes';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { TreeviewModule } from 'ngx-treeview';

import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { JdaComponent } from './components/jda/jda.component';
import { OutputComponent } from './components/output/output.component';
import { TcoHeaderComponent } from './shared/components/tco-header/tco-header.component';
import { TcoProgressComponent } from './shared/components/tco-progress/tco-progress.component';
import { TcoLayoutComponent } from './shared/components/tco-layout/tco-layout.component';
import { TcoFooterComponent } from './shared/components/tco-footer/tco-footer.component';
import { StartComponent } from './components/start/start.component';
import { LocalService } from './shared/services/local.service';
import { FormsModule } from '@angular/forms';
import { TCOService } from './shared/services/tco.service';
import { ChartsModule } from 'ng2-charts';
import { ShirtSizeComponent } from './components/shirt-size/shirt-size.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatamigrationFooterComponent } from './shared/components/datamigration-footer/datamigration-footer.component';
import { DatamigrationHeaderComponent } from './shared/components/datamigration-header/datamigration-header.component';
import { DatamigrationLayoutComponent } from './shared/components/datamigration-layout/datamigration-layout.component';
import { DatamigrationProgressComponent } from './shared/components/datamigration-progress/datamigration-progress.component';

import { OutputDataMigrationComponent } from './components/MigrationFactory/output-data-migration/output-data-migration.component';
import { ProcessDataMigrationComponent } from './components/MigrationFactory/process-data-migration/process-data-migration.component';
import { HomeDataMigrationComponent } from './components/MigrationFactory/home-data-migration/home-data-migration.component';
// tslint:disable-next-line:max-line-length
import { ConfigurationDataMigrationComponent } from './components/MigrationFactory/configuration-data-migration/configuration-data-migration.component';
import { AutomationComponent } from './components/MigrationFactory/automation/automation.component';
// tslint:disable-next-line:max-line-length
import { AppointmentSubTaskComponent } from './components/MigrationFactory/automation/AutomationSubTask/appointment-sub-task/appointment-sub-task.component';
// tslint:disable-next-line:max-line-length
import { AppointmentSummaryComponent } from './components/MigrationFactory/automation/AutomationSummary/appointment-summary/appointment-summary.component';
import { DatamigrationComponent } from './components/migrationfactory/datamigration/datamigration.component';
import { TcologinComponent } from './components/tcologin/tcologin.component';
import { DataMigrationService } from './shared/services/datamigration.service';
import { AutomationTaskCreationComponent } from './components/MigrationFactory/automation-task-creation/automation-task-creation.component';
import { DataMigrationTaskCreationComponent } from './components/MigrationFactory/data-migration-task-creation/data-migration-task-creation.component';
import { AutomationEnvironmentSetupComponent } from './components/MigrationFactory/automation-environment-setup/automation-environment-setup.component';
import { DataMigrationEnvironmentSetupComponent } from './components/MigrationFactory/data-migration-environment-setup/data-migration-environment-setup.component';
import { DataMigrationConfigurationComponent } from './components/MigrationFactory/data-migration-configuration/data-migration-configuration.component';
import { AutomatationConfigurationComponent } from './components/MigrationFactory/automatation-configuration/automatation-configuration.component';
import { HomemigrationComponent } from './components/MigrationFactory/homemigration/homemigration.component';
import { AutomationOutputComponent } from './components/MigrationFactory/automation-output/automation-output.component';
import { AutomationEnvironmentUpdateDeleteComponent } from './components/MigrationFactory/automation-environment-update-delete/automation-environment-update-delete.component';
import { DataMigrationEnvironmentUpdateOrDeleteComponent } from './components/MigrationFactory/data-migration-environment-update-or-delete/data-migration-environment-update-or-delete.component';
import { HomeAutomationMigrationComponent } from './components/MigrationFactory/home-automation-migration/home-automation-migration.component';
//import { DataMigrationOuputComponent } from './components/MigrationFactory/data-migration-ouput/data-migration-ouput.component';
// import { AutomationOuputComponent } from './components/MigrationFactory/automation-ouput/automation-ouput.component';
// import { AutomationOutputComponent } from './components/MigrationFactory/automation-output/automation-output.component';
// import { DataMigrationOutputComponent } from './components/MigrationFactory/data-migration-output/data-migration-output.component';

// tslint:disable-next-line:max-line-length
// import { Datasource } from './Model/Data/Datasource';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    LoginComponent,
    JdaComponent,
    OutputComponent,
    TcoHeaderComponent,
    TcoProgressComponent,
    TcoLayoutComponent,
    TcoFooterComponent,
    ShirtSizeComponent,
    StartComponent,
    DatamigrationFooterComponent,
    DatamigrationHeaderComponent,
    DatamigrationLayoutComponent,
    DatamigrationProgressComponent,
    OutputDataMigrationComponent,
    ProcessDataMigrationComponent,
    HomeDataMigrationComponent,
    ConfigurationDataMigrationComponent,
    AutomationComponent,
    AppointmentSubTaskComponent,
    AppointmentSummaryComponent,
    DatamigrationComponent,
    TcologinComponent,
    AutomationTaskCreationComponent,
    DataMigrationTaskCreationComponent,
    AutomationEnvironmentSetupComponent,
    DataMigrationEnvironmentSetupComponent,
    DataMigrationConfigurationComponent,
    AutomatationConfigurationComponent,
    HomemigrationComponent,
    AutomationOutputComponent,
    AutomationEnvironmentUpdateDeleteComponent,
    DataMigrationEnvironmentUpdateOrDeleteComponent,
    HomeAutomationMigrationComponent,
    // DataMigrationOuputComponent,
    // AutomationOuputComponent,
    // AutomationOutputComponent,
    // DataMigrationOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ChartsModule,
    TreeviewModule.forRoot(),
    TreeModule,
    BrowserAnimationsModule
  ],
  providers: [LocalService, TCOService, DataMigrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
