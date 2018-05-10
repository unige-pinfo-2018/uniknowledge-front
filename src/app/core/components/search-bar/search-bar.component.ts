import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UniKnowledgeConfigService } from '../../services/config.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'uniKnowledge-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls  : ['./search-bar.component.scss']
})
export class UniKnowledgeSearchBarComponent implements OnInit
{
    collapsed: boolean;
    toolbarColor: string;
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    onSettingsChanged: Subscription;

    constructor(
        private uniKnowledgeConfig: UniKnowledgeConfigService
    )
    {
        this.collapsed = false;
        this.onSettingsChanged =
            this.uniKnowledgeConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.toolbarColor = newSettings.colorClasses.toolbar;
                    }
                );
    }

    ngOnInit()
    {

    }

    collapse()
    {
        this.collapsed = true;
    }

    expand()
    {
        this.collapsed = false;
    }

    search(event)
    {
        const value = event.target.value;

        this.onInput.emit(value);
    }

}
