import { Pipe, PipeTransform } from '@angular/core';
import { UniKnowledgeUtils } from '../uniKnowledgeUtils';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform
{
    transform(mainArr: any[], searchText: string, property: string): any
    {
        return UniKnowledgeUtils.filterArrayByString(mainArr, searchText);
    }
}
