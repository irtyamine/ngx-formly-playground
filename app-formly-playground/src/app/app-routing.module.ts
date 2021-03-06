import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/components';
import {
  ExerciseOneComponent,
  ExerciseTwoComponent,
  ExerciseThreeComponent,
  ExerciseFourComponent,
  ExerciseFiveComponent,
  ExerciseSixComponent,
  ExerciseSevenComponent
} from '@app/components/exercises-formly';
import {
  ExerciseOneRfComponent,
  ExerciseTwoRfComponent,
  ExerciseThreeRfComponent,
  ExerciseFourFtComponent,
  ExerciseFiveFtComponent
} from '@app/components/exercises-reactive-forms';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'formly',
    children: [
      {
        path: 'exerciseOne',
        component: ExerciseOneComponent
      },
      {
        path: 'exerciseTwo',
        component: ExerciseTwoComponent
      },
      {
        path: 'exerciseThree',
        component: ExerciseThreeComponent
      },
      {
        path: 'exerciseFour',
        component: ExerciseFourComponent
      },
      {
        path: 'exerciseFive',
        component: ExerciseFiveComponent
      },
      {
        path: 'exerciseSix',
        component: ExerciseSixComponent
      },
      {
        path: 'exerciseSeven',
        component: ExerciseSevenComponent
      }
    ]
  },
  {
    path: 'reactivForms',
    children: [
      {
        path: 'exerciseOne',
        component: ExerciseOneRfComponent
      },
      {
        path: 'exerciseTwo',
        component: ExerciseTwoRfComponent
      },
      {
        path: 'exerciseThree',
        component: ExerciseThreeRfComponent
      },
      {
        path: 'exerciseFour',
        component: ExerciseFourFtComponent
      },
      {
        path: 'exerciseFive',
        component: ExerciseFiveFtComponent
      },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
