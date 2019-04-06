import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TabsPage} from './tabs/tabs.page';

const routes: Routes = [
  { path: '', loadChildren: './pages/loading-page/loading-page.module#LoadingPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
