import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'uniKnowledge-nav-vertical-group',
    templateUrl: './nav-vertical-group.component.html',
    styleUrls  : ['./nav-vertical-group.component.scss']
})
export class UniKnowledgeNavVerticalGroupComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-group nav-item';
    @Input() item: any;

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
