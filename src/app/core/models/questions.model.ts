import {Profile } from './profile.model';

export class Question{
    id: number;
    created: Date;
    slug: string;
    title: string;
    text: string;
    domain: string;
    followed: boolean;
    popularity: number;
    author: Profile;
}