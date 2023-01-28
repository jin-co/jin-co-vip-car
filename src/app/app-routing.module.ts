import { NgModule } from '@angular/core';
import { async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ImageAddComponent } from './components/images/image-add/image-add.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PriceComponent } from './components/price/price.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },  
  { path: 'price', component: PriceComponent },  
  { path: 'image-add', component: ImageAddComponent },  
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
