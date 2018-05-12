import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniKnowledgeConfigService } from '../../../core/services/config.service';
import { uniKnowledgeAnimations } from '../../../core/animations';
import { TranslateService } from '@ngx-translate/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';


@Component({
    selector: 'uniKnowledge-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: uniKnowledgeAnimations
})
export class UniKnowledgeLoginComponent implements OnInit {
    loginForm: FormGroup;
    loginFormErrors: any;
    languages: any;
    selectedLanguage: any;

    constructor(
        private uniKnowledgeConfig: UniKnowledgeConfigService,
        private formBuilder: FormBuilder,
        private router: Router,
        private translationLoader: UniKnowledgeTranslationLoaderService,
        private translate: TranslateService,
        private userService: UserService,
    ) {

        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'fr',
                'title': 'Français',
                'flag': 'fr'
            }
        ];

        this.selectedLanguage = this.languages[0];
        this.translationLoader.loadTranslations(english, french);
        this.uniKnowledgeConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });

        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    setLanguage(lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }

    onLoginFormValuesChanged() {
        for (const field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    submitForm() {

        const credentials = this.loginForm.value;
        this.userService
            .attemptAuth('login', credentials)
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigateByUrl('/');
                },
                err => {
                    this.loginFormErrors = err;
                    this.router.navigateByUrl('/login');
                }
            );
    }
}
