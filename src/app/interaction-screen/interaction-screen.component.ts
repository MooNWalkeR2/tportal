import { Component, OnInit ,AfterViewInit ,NgZone} from '@angular/core';

export class MarkedHexagon{
    no:number;
    rowId:number;
    colId:number;
    text:string;
    top:number;
    left:number;
}


const MARKEDHEXAGONS1 : MarkedHexagon[] = [
    {no:1,rowId:1,colId:6,text:"One",top:0,left:0},
    {no:2,rowId:1,colId:7,text:"Two",top:0,left:0},
    {no:3,rowId:2,colId:8,text:"Three",top:0,left:0},
    {no:4,rowId:3,colId:8,text:"Four",top:0,left:0},
    {no:5,rowId:4,colId:8,text:"Five",top:0,left:0},
    {no:6,rowId:5,colId:8,text:"Six",top:0,left:0}
];

const MARKEDHEXAGONS2 : MarkedHexagon[] = [
    {no:1,rowId:1,colId:6,text:"One",top:0,left:0},
    {no:2,rowId:1,colId:7,text:"Two",top:0,left:0},
    {no:3,rowId:2,colId:7,text:"Three",top:0,left:0},
    {no:4,rowId:2,colId:8,text:"Four",top:0,left:0},
    {no:5,rowId:3,colId:6,text:"Three",top:0,left:0},
    {no:6,rowId:3,colId:7,text:"Four",top:0,left:0},
    {no:7,rowId:4,colId:7,text:"Three",top:0,left:0},
    {no:8,rowId:4,colId:8,text:"Four",top:0,left:0}
];

const MARKEDHEXAGONS3 : MarkedHexagon[] = [
    {no:1,rowId:2,colId:6,text:"One",top:0,left:0},
    {no:2,rowId:2,colId:7,text:"Two",top:0,left:0},
    {no:3,rowId:2,colId:8,text:"Three",top:0,left:0},
    {no:4,rowId:3,colId:8,text:"Four",top:0,left:0}
];

const MARKEDHEXAGONS4 : MarkedHexagon[] = [
    {no:1,rowId:2,colId:6,text:"One",top:0,left:0},
    {no:2,rowId:2,colId:7,text:"Two",top:0,left:0},
    {no:3,rowId:3,colId:7,text:"Three",top:0,left:0},
    {no:4,rowId:3,colId:8,text:"Four",top:0,left:0}
];

const MARKEDHEXAGONS5 : MarkedHexagon[] = [
    {no:1,rowId:2,colId:6,text:"One",top:0,left:0},
    {no:2,rowId:2,colId:7,text:"Two",top:0,left:0},
    {no:3,rowId:3,colId:7,text:"Three",top:0,left:0},
    {no:4,rowId:3,colId:8,text:"Four",top:0,left:0},
    {no:5,rowId:4,colId:6,text:"Three",top:0,left:0},
    {no:6,rowId:4,colId:7,text:"Four",top:0,left:0},
    {no:7,rowId:5,colId:7,text:"Three",top:0,left:0},
    {no:8,rowId:5,colId:8,text:"Four",top:0,left:0}
];


@Component({
  selector: 'app-interaction-screen',
  templateUrl: './interaction-screen.component.html',
  styleUrls: ['./interaction-screen.component.css']
})
export class InteractionScreenComponent implements OnInit,AfterViewInit{

    markedhexagons = MARKEDHEXAGONS1;
    private dragID:string;
    private hexWidth:number;
    private hexHeight:number;
    private width:number;
    private height:number;
    private wireframeHexNo:number;


    constructor(ngZone:NgZone){
        window.onresize = (e) =>
        {
            ngZone.run(() => {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                // Make website responsive
            });
        };
    }

    ngOnInit() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.hexWidth = 140;
        this.hexHeight = this.hexWidth;
        this.setTopAndLeft();
        this.wireframeHexNo = (parseInt(this.width / this.hexWidth)) - 1;
    }

    ngAfterViewInit(){
        this.setDropArea();
    }

    onDragStart(id:string):void{
        console.log("Received : " + id);
        this.dragID = id;
    }

    setMarkedLayout(id:String):void{
        if(this.dragID=="one"){
            this.markedhexagons = MARKEDHEXAGONS1; // SET BASED ON THE ID PASSED TO THIS
        }else if(this.dragID=="two"){
            this.markedhexagons = MARKEDHEXAGONS2; // SET BASED ON THE ID PASSED TO THIS
        }else if(this.dragID=="three"){
            this.markedhexagons = MARKEDHEXAGONS3; // SET BASED ON THE ID PASSED TO THIS
        }else if(this.dragID=="four"){
            this.markedhexagons = MARKEDHEXAGONS4; // SET BASED ON THE ID PASSED TO THIS
        }else if(this.dragID=="five"){
            this.markedhexagons = MARKEDHEXAGONS5; // SET BASED ON THE ID PASSED TO THIS
        }

        this.setTopAndLeft();
    }

    setTopAndLeft():void{
        this.markedhexagons.forEach(function(item,index){
            if(item.top==0 && item.left==0) {
                if (item.rowId % 2 == 0) {
                    item.left = this.hexWidth/2;
                    item.colId -= 1;
                }
                item.top += (item.rowId - 1) * (this.hexHeight/4)*3;
                item.left += (item.colId - 1) * this.hexWidth;
            }
        }.bind(this));
    }

    setDropArea():void{
        var el = document.getElementById("drop-area");
        // Implement all events for browser compatibility
        el.addEventListener(
            'dragover',
            function(e){
                if (e.stopPropagation) e.stopPropagation();
                e.dataTransfer.dropEffect = 'move';
                // allows us to drop
                if (e.preventDefault) e.preventDefault();
                document.getElementById("interactive-marked-hexagon").classList.add("drag-drop");
                return false;
            },
            false
        );

        el.addEventListener(
            'drop',
            (function(e) {
                // Stops some browsers from redirecting.
                if (e.stopPropagation) e.stopPropagation();
                if (e.preventDefault) e.preventDefault();

                /*this.classList.remove('over');*/ // Define remove styles in css

                var item = document.getElementById((e as DragEvent).dataTransfer.getData('text'));
                document.getElementById("interactive-marked-hexagon").classList.remove("drag-drop");

                //Check id and accordingly give position of hexagons
                this.setMarkedLayout();
                return false;
            }).bind(this),
            false
        );

        el.addEventListener(
            'dragenter',
            function(e) {
                // Stops some browsers from redirecting.
                if (e.stopPropagation) e.stopPropagation();
                this.classList.add('over');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragleave',
            function(e) {
                // Stops some browsers from redirecting.
                if (e.stopPropagation) e.stopPropagation();
                this.classList.remove('over');
                return false;
            },
            false
        );
    }

}

