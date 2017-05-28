import { ModelBase } from './../../models/base';

import { DatabaseAccessProvider } from './../database-access/database-access';


export abstract class BaseEntityProvider<T extends ModelBase> {

    constructor(private params: {
        databaseAccessProvider: DatabaseAccessProvider,
        blankDefaults: (item: T) => void,
        databaseAccessKey: string
    }) {

    }

    async getAll() {
        let items = await this.params.databaseAccessProvider.get<T[]>(this.params.databaseAccessKey);
        if (items === undefined || items === null) {
            return [];
        }
        return items.filter(i => !i.deleted);
    }

    async get(id: string) {

        if (id === undefined || id === '') {
            let blank = this.create();
            return blank;
        }

        let item = (await this.getAll()).filter(s => s.id === id)[0];
        return item;
    }

    private create() {
        let guid = () => {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());

        };

        let item = <T><ModelBase>{ id: guid() };

        this.params.blankDefaults(item);

        return item;
    }

    async save(data: T) {
        let all = (await this.getAll()).filter(a => a.id !== data.id);
        all.push(data);
        this.params.databaseAccessProvider.set(this.params.databaseAccessKey, all);
    }

    async remove(id: string) {
        let item = await this.get(id);
        item.deleted = true;
        await this.save(item);
    }


}