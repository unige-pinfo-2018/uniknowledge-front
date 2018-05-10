import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { UniKnowledgeConfigService } from '../../services/config.service';
import { uniKnowledgeAnimations } from '../../animations';
import { UniKnowledgeNavigationService } from '../navigation/navigation.service';

@Component({
    selector   : 'uniKnowledge-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss'],
    animations : uniKnowledgeAnimations
})
export class UniKnowledgeThemeOptionsComponent implements OnInit, OnDestroy
{
    @ViewChild('openButton') openButton;
    @ViewChild('panel') panel;
    @ViewChild('overlay') overlay: ElementRef;

    public player: AnimationPlayer;
    uniKnowledgeSettings: any;

    onSettingsChanged: Subscription;

    @HostBinding('class.bar-closed') barClosed: boolean;

    constructor(
        private animationBuilder: AnimationBuilder,
        private uniKnowledgeConfig: UniKnowledgeConfigService,
        private uniKnowledgeNavigationService: UniKnowledgeNavigationService,
        private renderer: Renderer2
    )
    {
        this.barClosed = true;

        this.onSettingsChanged =
            this.uniKnowledgeConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.uniKnowledgeSettings = newSettings;
                    }
                );

        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        const navModel = this.uniKnowledgeNavigationService.getNavigationModel();

        navModel.push({
            'id'      : 'settings-appearance',
            'title'   : 'Settings & Appearance',
            'type'    : 'group',
            'children': [
                {
                    'id'      : 'customize-display',
                    'title'   : 'Customize Display',
                    'type'    : 'item',
                    'icon'    : 'settings',
                    'function': () => {
                        this.openBar();
                    }
                }
            ]
        });
    }

    ngOnInit()
    {
        this.renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });
    }

    onSettingsChange()
    {
        this.uniKnowledgeConfig.setSettings(this.uniKnowledgeSettings);
    }

    closeBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();

        this.player.onDone(() => {
            this.barClosed = true;
        });
    }

    openBar()
    {
        this.barClosed = false;

        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
