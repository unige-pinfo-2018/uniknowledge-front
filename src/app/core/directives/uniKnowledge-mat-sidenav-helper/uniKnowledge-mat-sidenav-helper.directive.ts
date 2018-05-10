import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { UniKnowledgeMatchMedia } from '../../services/match-media.service';
import { UniKnowledgeMatSidenavHelperService } from './uniKnowledge-mat-sidenav-helper.service';

@Directive({
    selector: '[uniKnowledgeMatSidenavHelper]'
})
export class UniKnowledgeMatSidenavHelperDirective implements OnInit, OnDestroy
{
    matchMediaSubscription: Subscription;

    @HostBinding('class.mat-is-locked-open') isLockedOpen = true;

    @Input('uniKnowledgeMatSidenavHelper') id: string;
    @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

    constructor(
        private uniKnowledgeMatSidenavService: UniKnowledgeMatSidenavHelperService,
        private uniKnowledgeMatchMedia: UniKnowledgeMatchMedia,
        private observableMedia: ObservableMedia,
        private matSidenav: MatSidenav
    )
    {
    }

    ngOnInit()
    {
        this.uniKnowledgeMatSidenavService.setSidenav(this.id, this.matSidenav);

        if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
        {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }

        this.matchMediaSubscription = this.uniKnowledgeMatchMedia.onMediaChange.subscribe(() => {
            if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
            {
                this.isLockedOpen = true;
                this.matSidenav.mode = 'side';
                this.matSidenav.toggle(true);
            }
            else
            {
                this.isLockedOpen = false;
                this.matSidenav.mode = 'over';
                this.matSidenav.toggle(false);
            }
        });
    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[uniKnowledgeMatSidenavToggler]'
})
export class UniKnowledgeMatSidenavTogglerDirective
{
    @Input('uniKnowledgeMatSidenavToggler') id;

    constructor(private uniKnowledgeMatSidenavService: UniKnowledgeMatSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.uniKnowledgeMatSidenavService.getSidenav(this.id).toggle();
    }
}
