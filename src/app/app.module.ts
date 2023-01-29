import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './components/user/user.module';
import { NavComponent } from './components/shared/nav/nav.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { FbTimestampPipe } from './pipes/fbTimestamp.pipe';
import { PriceComponent } from './components/price/price.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageAddComponent } from './components/images/image-add/image-add.component';
import { ImageManageComponent } from './components/images/image-manage/image-manage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    FbTimestampPipe,
    PriceComponent,
    ImagesComponent,
    ImageAddComponent,
    ImageManageComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: BUCKET, useValue: 'gs://vip-car-3f9fa.appspot.com' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
