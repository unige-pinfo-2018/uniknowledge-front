import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { UniKnowledgeNavigationService } from './navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'uniKnowledge-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UniKnowledgeNavigationComponent implements OnDestroy
{
    navigationModel: any[];
    navigationModelChangeSubscription: Subscription;

    @Input('layout') layout = 'vertical';

    constructor(private uniKnowledgeNavigationService: UniKnowledgeNavigationService)
    {
        this.navigationModelChangeSubscription =
            this.uniKnowledgeNavigationService.onNavigationModelChange
                .subscribe((navigationModel) => {
                    this.navigationModel = navigationModel;
                });
    }

    ngOnDestroy()
    {
        this.navigationModelChangeSubscription.unsubscribe();
    }

}
