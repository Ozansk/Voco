import { connect } from 'mongoose';
import * as vocoEntities from './entities';

export class Mongo {
    private config: any;
    static entities: any;

    setConfig(config: any) {
        this.config = config;
        return this;
    }

    private setUri() {
        return this.config.HOSTNAME + this.config.DATABASE;
    }

    async connectionDB() {
        connect(this.setUri())
            .then(() => {
                this.setEntities();
                console.log('MongoDB connected:', this.config.DATABASE);
            })
            .catch((error: any) => {
                console.log('MongoDB Connection error:', error);
            });
    }

    private setEntities() {
        this.vocoEntities();
    }

    private vocoEntities() {
        Mongo.entities = {
            users: vocoEntities.users,
            restaurants: vocoEntities.restaurants,
            orders: vocoEntities.orders
        };
    }
}
