import {NgModule} from '@angular/core';
import {RegisterPageComponent} from './register-page.component';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        RegisterPageComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: RegisterPageComponent }])
    ],
    exports: [
        RegisterPageComponent
    ]
})
export class RegisterPageModule {

}
