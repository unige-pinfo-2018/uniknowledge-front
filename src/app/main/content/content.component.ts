import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { uniKnowledgeAnimations } from '../../core/animations';
import { UniKnowledgeConfigService } from '../../core/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector   : 'uniKnowledge-content',
    templateUrl: './content.component.html',
    styleUrls  : ['./content.component.scss'],
    animations : uniKnowledgeAnimations
})
export class UniKnowledgeContentComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    uniKnowledgeSettings: any;

    @HostBinding('@routerTransitionUp') routeAnimationUp = false;
    @HostBinding('@routerTransitionDown') routeAnimationDown = false;
    @HostBinding('@routerTransitionRight') routeAnimationRight = false;
    @HostBinding('@routerTransitionLeft') routeAnimationLeft = false;
    @HostBinding('@routerTransitionFade') routeAnimationFade = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private uniKnowledgeConfig: UniKnowledgeConfigService
    )
    {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe((event) => {
                switch ( this.uniKnowledgeSettings.routerAnimation )
                {
                    case 'fadeIn':
                        this.routeAnimationFade = !this.routeAnimationFade;
                        break;
                    case 'slideUp':
                        this.routeAnimationUp = !this.routeAnimationUp;
                        break;
                    case 'slideDown':
                        this.routeAnimationDown = !this.routeAnimationDown;
                        break;
                    case 'slideRight':
                        this.routeAnimationRight = !this.routeAnimationRight;
                        break;
                    case 'slideLeft':
                        this.routeAnimationLeft = !this.routeAnimationLeft;
                        break;
                }
            });

        this.onSettingsChanged =
            this.uniKnowledgeConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.uniKnowledgeSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {

    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
