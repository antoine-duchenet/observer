'use strict';

/**
 * Class representing a Subject (event notifier/emitter).
 */
class Subject {

    /**
     * Create a Subject.
     * @constructor
     * @param {String} [prefix] - The events prefix.
     */
    constructor(prefix) {
        this.observers = [];
        this.prefix = prefix;
    }

    /**
     * @summary Attach an observer to this Subject.
     * @description Tells the Subject to notify the provided Observer with events; attached observers will be notified by the Subject.notify(event, data) method.
     * @param {Observer} observer - The Observer to attach.
     */
    attach(observer) {
        this.observers.push(observer);
        return this;
    }

    /**
     * @summary Notify observers with an event and data.
     * @description Notify attached observers with the provided event and data.
     * @param {String} event - The emitted/notified event.
     * @param {Object} data - The event related data.
     */
    notify(event, data) {
        this.observers.forEach((observer) => {
            const _event = this.prefix ? `${this.prefix}:${event}` : event;
            observer.trigger(_event, data);
        });
        return this;
    }
}

module.exports = Subject;
