import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page.component";
import {ResumePageComponent} from "./pages/resume/resume-page.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'resume', component: ResumePageComponent},
  // {path: 'about', component: ResumePageComponent},
  // {path: 'projects', component: ResumePageComponent},
  // {path: 'blog', component: ResumePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
