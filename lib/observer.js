'use strict';

/**
    @typedef Handler
    @description An event handler.
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
     * @summary Observe a Subject
     * @description Tells the Observer to observe (listen for event on) the provided Subject.
     * @param {Subject} subject - The observed Subject.
     */
    observe(subject) {
        subject.attach(this);
        return this;
    }

    /**
     * @summary Add an event handler to the Observer.
     * @description Tells the Observer to handle the provided event (when they are catched) with the provided handler.
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
     * @summary Trigger the provided event handler with the provided data.
     * @description Calls the provided event handler (if it exists for this Observer) with the provided data.
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
