import {Profile } from './profile.model';

export class Question{
    id: number;
    slug: string;
    title: string;
    text: string;
    domain: string;
    followed: boolean;
    upvoteCount: number;
    author: Profile;
}