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
import { ClipComponent } from './components/clip/clip.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FbTimestampPipe } from './pipes/fbTimestamp.pipe';
import { ClipListComponent } from './components/clip/clip-list/clip-list.component';
import { PriceComponent } from './components/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ClipComponent,
    NotfoundComponent,
    ClipListComponent,
    FbTimestampPipe,
    PriceComponent,     
  ],
  imports: [
    BrowserModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
