import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoadingPageComponent} from './loading-page.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TranslateModule.forChild(),
        RouterModule.forChild([{ path: '', component: LoadingPageComponent }])
    ],
    declarations: [LoadingPageComponent],
    exports: [
        LoadingPageComponent
    ]
})
export class LoadingPageModule {

}
