import { LifeCycle } from "./LifeCycle";

export class InheritDemo implements LifeCycle {
    init() {
        console.log('init');
    }

    destroy() {
        console.log('destroy');
    }
}