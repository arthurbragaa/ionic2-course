import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTabPage } from '../home-tab/home-tab';
import { ContatosTabPage } from '../contatos-tab/contatos-tab';

@Component({
  templateUrl: 'build/pages/tabs-test/tabs-test.html',
})
export class TabsTestPage {

  homePage: any = HomeTabPage;
  contatosPage: any = ContatosTabPage;

  constructor(private nav: NavController) {
  }

}
