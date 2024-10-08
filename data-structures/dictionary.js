import { defaultToString } from "../util.js";
import { ValuePair } from "./models/value-pair.js";

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    keyValues() {
        return Object.values(this.table);
    }

    forEach(callback) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callback(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return Object.keys(this.table).length;
    }

    clear() {
        this.table = {};
    }

    toString() {
        if (this.isEmpty()) {
          return "";
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
          objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}
