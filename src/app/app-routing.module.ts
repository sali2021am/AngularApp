import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotesComponent } from './components/notes/notes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  
  {path:"welcome",component:WelcomeComponent},
  {path:"notes",component:NotesComponent, canActivate:[AuthGuard]},
  {path:"**",redirectTo:"welcome",pathMatch:"full"},
  {path:"",redirectTo:"welcome",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
