import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlowWhistleComponent } from './blow-whistle/blow-whistle.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }, 
  {
    path: 'whistle', component: BlowWhistleComponent
  }, 
  {
    path: 'stories',
    component: StoriesComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
