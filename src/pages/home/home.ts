import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  normal_items = [];
  virtual_items = [];

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
    
  }

  createNormalList(){
    this.virtual_items = [];
    this.initNormal();
  }
  createVirtualList(){
    this.normal_items = [];
    this.initVirtual();
  }

  initVirtual(){
    this.virtual_items = [];
    for(let i = 0; i < 1000; i++) {
      this.virtual_items.push({
        title: "virtual item#" + i,
        desc: "description of virtual item" + i
      });
    }
  }

  initNormal(){
    this.normal_items = [];
    for(let i = 0; i < 1000; i++) {
      this.normal_items.push({
        title: "normal item#" + i,
        desc: "description of normal item" + i
      });
    }
  }

  clearList(){
    this.normal_items = [];
    this.virtual_items = [];
  }
}
