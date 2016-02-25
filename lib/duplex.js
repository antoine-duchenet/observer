'use strict';

const Subject = require('./subject');
const Observer = require('./observer');

/**
 * Class representing a Duplex (both Subject and Observer).
 */
class Duplex extends Subject {
    /**
     * Create a Duplex.
     * @constructor
     * @param {string} [prefix] - The events prefix.
     */
    constructor(prefix) {
        super(prefix);

        // Observer manual mixin
        // TODO: generic / library
        const temp = new Observer();
        this.handlers = {};
        this.observe = temp.observe.bind(this);
        this.on = temp.on.bind(this);
        this.trigger = temp.trigger.bind(this);
    }
}

module.exports = Duplex;
