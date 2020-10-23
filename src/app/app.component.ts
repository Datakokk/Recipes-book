import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipes-book';

  @Input() mostrarR: boolean;
  @Input() mostrarL: boolean;

  onShowR(recibido: boolean){
    this.mostrarR = recibido;
  }

  onShowL(recibido: boolean){
    this.mostrarL = recibido;
  }
}
