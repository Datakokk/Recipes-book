import { from } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    @Output() enlacesR = new EventEmitter<boolean>();
    @Output() enlacesL = new EventEmitter<boolean>();

    collapsed = true;
    showRecipes = false;
    showShoppingList = false;
    count=0;

    constructor(){}

    onLoadRecipes(){
        this.count+=1;
        this.count %2 === 0 ? this.showRecipes = false : this.showRecipes = true;
        this.enlacesR.emit(this.showRecipes);
    }
    
    onLoadShoppingList(){
        this.count+=1;
        this.count % 2 === 0 ? this.showShoppingList = true : this.showShoppingList = false;
        this.enlacesL.emit(this.showShoppingList);
    }
} 