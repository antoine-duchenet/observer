'use strict';

/**
    @typedef Handler
    @desc An event handler.
    @type {Function}
    @param {Object} [data] - The handled event data.
    @param {String} [event] - The handled event.
*/

/**
 * Class representing a Observer (event watcher/listener).
 */
class Observer {

    /**
     * Create an Observer.
     * @constructor
     */
    constructor() {
        this.handlers = {};
    }

    /**
     * Tells the Observer to observe the provided Subject.
     * @param {Subject} subject - The observed Subject.
     */
    observe(subject) {
        subject.attach(this);
        return this;
    }

    /**
     * Add an event handler to the Observer.
     * @param {String} event - The event to handle.
     * @param {Handler} handler - The handler associated to the provided event; an handler is a Function following the handler(data, event) signature.
     */
    on(event, handler) {
        if (event) {
            this.handlers[event] = handler;
        }
        return this;
    }

    /**
     * Trigger the provided event handler with the provided data.
     * @param {String} event - The event to handle.
     * @param {Object} data - The event related data.
     */
    trigger(event, data) {
        const handler = this.handlers[event];
        if (handler) {
            handler(data, event);
        }
        return this;
    }
}

module.exports = Observer;
