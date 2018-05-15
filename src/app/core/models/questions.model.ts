import {Profile } from './profile.model';

export class question{
    slug: string;
    title: string = '';
    body: string = '';
    domainList: Array<string> = [];
    followed: boolean;
    upvoteCount: number;
    author: Profile;
}