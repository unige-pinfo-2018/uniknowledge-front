import { Component, ElementRef, HostBinding, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UniKnowledgeConfigService } from '../core/services/config.service';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector     : 'uniKnowledge-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UniKnowledgeMainComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    uniKnowledgeSettings: any;
    @HostBinding('attr.uniKnowledge-layout-mode') layoutMode;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private uniKnowledgeConfig: UniKnowledgeConfigService,
        private platform: Platform,
        private router: Router,
        @Inject(DOCUMENT) private document: any
    )
    {
        this.onSettingsChanged =
            this.uniKnowledgeConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.uniKnowledgeSettings = newSettings;
                        this.layoutMode = this.uniKnowledgeSettings.layout.mode;
                    }
                );

        if ( this.platform.ANDROID || this.platform.IOS )
        {
            this.document.body.className += ' is-mobile';
        }
    }

    ngOnInit()
    {
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }

    addClass(className: string)
    {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string)
    {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
