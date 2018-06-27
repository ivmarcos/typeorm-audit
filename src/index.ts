import Manager from './manager';

/**
 * Marks a column to generate a value on entity insertion.
 * There are two types of generation strategy - increment and uuid.
 * Increment uses a number which increases by one on each insertion.
 * Uuid generates a special UUID token.
 *
 * Note, some databases do not support non-primary generation columns.
 */
export function Audited(tableName: string): Function {
    return function (target: Function) {

        Manager.targets.push(target);
       
    };
}