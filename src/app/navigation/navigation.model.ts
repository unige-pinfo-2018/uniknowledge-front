import { UniKnowledgeNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class UniKnowledgeNavigationModel implements UniKnowledgeNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'general',
                'title'   : 'General',
                'translate': 'NAV.GENERAL',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'allQuestions',
                        'title': 'AllQuestions',
                        'translate': 'NAV.ALL_QUESTIONS.TITLE',
                        'type' : 'item',
                        'icon' : 'allQuestions',
                        'url'  : '/allQuestions',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.ALL_QUESTIONS.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'informations',
                        'title': 'Informations',
                        'translate': 'NAV.INFORMATIONS.TITLE',
                        'type' : 'item',
                        'icon' : 'info',
                        'url'  : '/informations',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.INFORMATIONS.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                ]
            }
        ];
    }
}
