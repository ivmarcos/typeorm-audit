import {
    EventSubscriber,
    InsertEvent,
    EntitySubscriberInterface
 } from 'typeorm';


@EventSubscriber()
class Subscriber implements EntitySubscriberInterface{
      /**
     * Called before entity insertion.
     */
    beforeInsert(event: InsertEvent<any>) {
        console.log(`BEFORE ENTITY INSERTED: `, event.entity);
    }
}

export default Subscriber;