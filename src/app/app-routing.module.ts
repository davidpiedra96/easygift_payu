import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestPageComponent} from './components/request-page/request-page.component';
import {ResponsePageComponent} from './components/response-page/response-page.component';
import {ConfirmationPageComponent} from './components/confirmation-page/confirmation-page.component';

const routes: Routes = [
  {path: 'request', component: RequestPageComponent },
  {path: 'response', component: ResponsePageComponent },
  {path: 'confirmation', component: ConfirmationPageComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'request' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
