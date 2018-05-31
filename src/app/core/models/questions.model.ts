import {Profile } from './profile.model';

export class Question{
    slug: string;
    title: string;
    text: string;
    domains: Array<string>;
    followed: boolean;
    upvoteCount: number;
    author: Profile;
}