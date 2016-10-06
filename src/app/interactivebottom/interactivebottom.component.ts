import { Component, OnInit ,AfterViewInit ,Output  , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interactivebottom',
  templateUrl: './interactivebottom.component.html',
  styleUrls: ['./interactivebottom.component.css']
})
export class InteractivebottomComponent implements OnInit,AfterViewInit {

    @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

    ngAfterViewInit(){
        this.makeDraggable();
    }

    makeDraggable():void{
        var el = document.getElementsByClassName("can-draggable");

        for(var i=0;i<el.length;i++){

            el[i].addEventListener(
                'dragstart',
                (function(e) {
                    if (e.stopPropagation) e.stopPropagation();
                    //console.log(e);
                    (e as DragEvent).dataTransfer.effectAllowed = 'move';
                    (e as DragEvent).dataTransfer.setData('text/plain', this.id);
                    var t = e.target;
                    while(t && !t.id) t=t.parentNode;
                    this.notify.emit(t.id);
                    console.log("Emitted  : " + t.id);
                    return false;
                }).bind(this),
                false
            );

            el[i].addEventListener(
                'dragend',
                function(e) {
                    //console.log(e);
                    if (e.stopPropagation) e.stopPropagation();
                    this.classList.remove('drag');
                    return false;
                },
                false
            );
        }

    }
}
