import { ModelBase } from './base';

export interface Reminder extends ModelBase {
    title: string;
    description: string;
}