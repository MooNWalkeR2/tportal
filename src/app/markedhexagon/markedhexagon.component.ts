import { Component, OnInit,Input ,AfterViewInit,AfterContentChecked } from '@angular/core';

export class MarkedHexagon{
    no:number;
    rowId:number;
    colId:number;
    text:string;
    top:number;
    left:number;
}

@Component({
  selector: 'app-markedhexagon',
  templateUrl: './markedhexagon.component.html',
  styleUrls: ['./markedhexagon.component.css']
})
export class MarkedhexagonComponent implements OnInit,AfterViewInit,AfterContentChecked {

    @Input()
    markedhexagons:MarkedHexagon[];
    @Input()
    hexWidth:number;

    constructor() { }

    ngOnInit() {

    }

    ngAfterViewInit(){
        this.createMarkedHexagons();
    }

    ngAfterContentChecked(){
        this.createMarkedHexagons();
    }

    createMarkedHexagons():void{

        try {
            this.markedhexagons.forEach(function (item, index) {
                var hex = document.getElementById("clone-hex-" + item.no);
                hex.style.position = "absolute";
                hex.style.top = item.top + "px";
                hex.style.left = item.left + "px";
                hex.style.width = this.hexWidth + "px";
                hex.style.height = this.hexWidth + "px";
            }.bind(this));
        }catch(error){

        }
    }



}
