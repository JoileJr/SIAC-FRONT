import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {FloatLabelModule} from 'primeng/floatlabel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputTextModule} from 'primeng/inputtext';
import {TopbarComponent} from './components/topbar/topbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {ReactiveFormsModule} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabMenuModule} from 'primeng/tabmenu';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TreeModule} from 'primeng/tree';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TableModule } from 'primeng/table';
import { FormPacienteComponent } from './pages/paciente/form-paciente/form-paciente.component';
import { PacienteService } from './services/paciente/paciente.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopbarComponent,
    SidebarComponent,
    SignUpComponent,
    PacienteComponent,
    AdminComponent,
    FormPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ToastModule,
    IconFieldModule,
    InputIconModule,
    AvatarModule,
    AvatarGroupModule,
    ToolbarModule,
    SidebarModule,
    MenubarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TieredMenuModule,
    TreeModule,
    DialogModule,
    ConfirmDialogModule,
    TabMenuModule,
    TableModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
