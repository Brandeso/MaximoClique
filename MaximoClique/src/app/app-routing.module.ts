import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreen } from 'src/screens/home/home.screen';
import { AlgorithmScreen } from 'src/screens/algorithm/algorithm.screen';
import { AboutScreen } from 'src/screens/about/about.screen';
import { ResultsComponent } from 'src/components/results/results.component';
import { InputComponent } from 'src/components/input/input.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AboutScreen},
  { path: 'algorithm', component: AlgorithmScreen},
  { path: 'input', component: InputComponent},
  { path: 'results', component: ResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
