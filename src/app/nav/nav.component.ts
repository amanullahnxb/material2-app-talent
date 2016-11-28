
import { Component, OnInit, Output, EventEmitter, ViewChild, Renderer } from '@angular/core';
import {MdSidenav, MdListItem} from '@angular/material';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    isDarkTheme: boolean = false;

    @Output() sideNavOpened: EventEmitter<any> = new EventEmitter();
    @Output() sideNavClosed: EventEmitter<any> = new EventEmitter();

    @ViewChild('sidenav') sidenav1: MdSidenav;

    @ViewChild('dashboard')dashboard;
    @ViewChild('knowledgeBase')knowledgeBase;
    @ViewChild('courses')courses;
    @ViewChild('trainings')trainings;
    @ViewChild('specialists')specialists;

    constructor(
        private renderer: Renderer
    ) { }

    ngOnInit() {
        this.renderElement(this.dashboard, "active", true);
    }

    toggleSlide(){
        this.sidenav1.toggle();

        if(this.sidenav1._isOpening){
            console.log("emitting sideNavOpened");
            this.sideNavOpened.emit();
        }else{
            this.sideNavClosed.emit();
        }
    }

    selectMe($event, navItem){
        this.renderNavigation(navItem);
    }
    renderNavigation(itemSelected){
        this.renderReset();
        this.renderElement(itemSelected, "active", true);
    }
    renderReset(){
        console.log(this.dashboard);
        this.renderElement(this.dashboard, "active", false);
        this.renderElement(this.knowledgeBase, "active", false);
        this.renderElement(this.courses, "active", false);
        this.renderElement(this.trainings, "active", false);
        this.renderElement(this.specialists, "active", false);
    }
    renderElement(el: any, className: string, state: boolean){
        this.renderer.setElementClass(el._element.nativeElement.children[0], className, state);
    }
}
