import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreen } from 'src/screens/home/home.screen';
import { AlgorithmScreen } from 'src/screens/algorithm/algorithm.screen';
import { AboutScreen } from 'src/screens/about/about.screen';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AboutScreen},
  { path: 'algorithm', component: AlgorithmScreen}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
