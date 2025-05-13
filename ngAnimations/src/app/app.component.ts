import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounce, shakeX, tada } from 'ng-animate';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    animations:[
      trigger("shake", [
        transition(":increment", [
          useAnimation(shakeX, { params: { timing: 2.0 } })])
        ]),
      trigger("bounce", [
        transition(":increment", [
          useAnimation(bounce, {params:{timing:4.0}})])        
      ]),
      trigger("tada", [
        transition(":increment", [
          useAnimation(tada, {params:{timing:3.0}})])        
      ])
      
    ]
})
export class AppComponent {
  title = 'ngAnimations';

  ng_rouge = 0;
  ng_vert = 0;
  ng_bleu = 0;
  rotate = false;

  constructor() {
  }

   rotateCube() {
    if(this.rotate == false){
      this.rotate = true;
      setTimeout(() => {this.rotate = false;},2000);
    }
  }


// utilisation d'une seule fonction pour l'animation en boucle  et sans boucle 
  playAnimations(forever:boolean) {
    this.ng_rouge++;
    setTimeout(() => {
      this.ng_vert++;
      setTimeout(() => {
        this.ng_bleu++;
        if(forever)
        {
          setTimeout(() => {
            this.playAnimations(true);
          },3000);
        }
      },3000);
    },2000);
  }


  // utilisation d'une fonction pour l'animation sans boucle

  playAnimations1() {
    this.ng_rouge++;
    setTimeout(() => {
      this.ng_vert++;
    }, 2000); // commence juste après la 1ere animation qui dure 2s 
    setTimeout(() => {
      this.ng_bleu++;
    }, 5000); // commence 1s avant la fin de la 2eme animation qui dure 4s+2s-1s = 5s 
  }

  // utilisation de plusieurs fonctions pour l'animation en boucle
  playAnimations2() {
    this.playShake(); // 
}
// 1ere animation appelle la 2eme
  playShake() {
    this.ng_rouge++;
    setTimeout(() =>{
      this.playBounce();

    },2000)
  }
  // 2eme animation appelle la 3eme
  playBounce() {
    this.ng_vert++;
    setTimeout(() =>{
      this.playTada();
    },3000)
  }
// 3eme animation appelle la 1ere
  playTada() {
    this.ng_bleu++;
    setTimeout(() =>{
      this.playShake();
    },3000)
  }

 
}
