import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/card-test/card-test.html',
})
export class CardTestPage {

  constructor(private nav: NavController,
              private params: NavParams) {
    console.log('parametros recebidos', this.params.get('mensagem'));
  }

  voltar(){
    this.nav.pop();
  }


}
