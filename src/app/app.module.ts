import { SignOutPage } from './../pages/sign-out/sign-out';
import { BrMaskerModule } from 'brmasker-ionic-3';


import { BusinessuserPage } from './../pages/businessuser/businessuser';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth , AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapsPage} from '../pages/maps/maps';
import { ShowdetailPage } from '../pages/showdetail/showdetail';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { MainAgendPage } from '../pages/main-agend/main-agend';
import { CalendarModule } from 'ion2-calendar';
import { AgendamentoAddPage } from '../pages/agendamento-add/agendamento-add';
import { HistoricoAgendamentosPage } from '../pages/historico-agendamentos/historico-agendamentos';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { Geolocation } from '@ionic-native/geolocation';
import { ConsuAgendPage } from '../pages/consu-agend/consu-agend';
import { ModalroutePage } from '../pages/modalroute/modalroute';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


export const firebaseConfig ={
  apiKey: "AIzaSyC86zmYLnopKJXSgH1MIft4BLa_KkDORYQ",
    authDomain: "vizzu-1551537438643.firebaseapp.com",
    databaseURL: "https://vizzu-1551537438643.firebaseio.com",
    projectId: "vizzu-1551537438643",
    storageBucket: "vizzu-1551537438643.appspot.com",
    messagingSenderId: "974071111605"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MapsPage,
    BusinessuserPage,
    SignOutPage,
    ShowdetailPage,
    AgendamentoPage,
    MainAgendPage,
    AgendamentoAddPage,
    HistoricoAgendamentosPage,
    CadastroPage,
    ConsuAgendPage,
    ModalroutePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrMaskerModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MapsPage,
    BusinessuserPage,
    SignOutPage,
    ShowdetailPage,
    AgendamentoPage,
    MainAgendPage,
    AgendamentoAddPage,
    HistoricoAgendamentosPage,
    CadastroPage,
    ConsuAgendPage,
    ModalroutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireDatabase,
    Geolocation,
    LaunchNavigator
  ]
})
export class AppModule {}