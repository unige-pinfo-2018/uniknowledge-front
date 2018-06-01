import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UniKnowledgeConfigService } from '../../core/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models';
import { SimpleChanges } from '@angular/core';

@Component({
    selector: 'uniKnowledge-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class UniKnowledgeToolbarComponent implements OnInit {
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    loginFormErrors: any;
    currentUserInfos;

    constructor(
        private router: Router,
        private uniKnowledgeConfig: UniKnowledgeConfigService,
        private translate: TranslateService,
        private userService: UserService,
        private currentUser: User
    ) {
        
        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

        this.uniKnowledgeConfig.onSettingsChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
        });

    }

    ngOnInit(): void {
        this.getUser();
    }

    setLanguage(lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }

    getUser() {
        this.userService
        .getUserInfos()
        .subscribe(
            data => {
                console.log(data);
                this.currentUser = data;
                this.userService.user = this.currentUser;
            },
            err => {
                console.log(err);
            }
        );
    }

    logout() {

        this.userService
            .attemptLogout()
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigateByUrl('/login');
                },
                err => {
                    this.loginFormErrors = err;
                }
            );
    }
}
