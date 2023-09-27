import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TestErrorComponent } from './core/test-error/test-error.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'shop', loadChildren:()=> import('./shop/shop.module').then(mod=>mod.ShopModule)},
  {path: 'contact', component: ContactComponent},
  {path: 'test-error', component:TestErrorComponent},
  {path:'**', redirectTo:'', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
