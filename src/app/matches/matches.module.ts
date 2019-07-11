import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MatchesPage} from './matches.page';
import {PipeModule} from "../pipe/pipe.module";

const routes: Routes = [
    {
        path: '',
        component: MatchesPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipeModule,
        RouterModule.forChild(routes),
    ],
    declarations: [MatchesPage]
})
export class MatchesPageModule {
}
