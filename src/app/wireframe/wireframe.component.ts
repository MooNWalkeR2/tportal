import { Component , Input , OnInit ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css']
})
export class WireframeComponent implements OnInit,AfterViewInit  {

    @Input()
    hexWidth:number;
    @Input()
    hexHeight:number;
    @Input()
    wireframeHexNo:number;

    private odditems:number[];
    private evenitems:number[];
    private leftpad:number;

    constructor() { }

    ngOnInit() {
        this.odditems = Array(this.wireframeHexNo).fill(4);
        this.evenitems = Array(this.wireframeHexNo-1).fill(4);
        this.leftpad = this.hexWidth / 2;
        console.log(this.leftpad);
    }

    ngAfterViewInit(){
        this.createWireframe();
    }

    createWireframe():void{
        var offset = (this.hexHeight / 4) ;
        for(var i=2;i<=6;i++){
            var el : any  = document.getElementsByClassName("line-"+i);
            for(var index=0;index<el.length;index++){
                el[index].style.position = "relative";
                el[index].style.top = "-" + (offset*(i-1)) + "px";
            }
        }
    }

}
