import {Profile} from './profile.model'

export class answers {
    id: number;
    body: string;
    createdAt: string;
    author: Profile;
    upvotes: number;
}