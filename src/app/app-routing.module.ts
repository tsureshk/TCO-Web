import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { JdaComponent } from './components/jda/jda.component';
import { OutputComponent } from './components/output/output.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { ShirtSizeComponent } from './components/shirt-size/shirt-size.component';


const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
    children : [
      {
        path : 'client', 
        component :ClientComponent
      },
      {
        path : 'jda', 
        component :JdaComponent
      },
      {
        path : 'output', 
        component :OutputComponent
      },
      {
        path : 'login', 
        component :LoginComponent
      },
    ]
  },{
    path : '', 
    component :StartComponent
  },
  {
    path : 'shirt', 
    component :ShirtSizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
