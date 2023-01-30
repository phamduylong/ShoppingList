import { writable } from 'svelte/store';

function createModalResult() {
    const { subscribe, set } = writable(false);

    return {
        subscribe,
        setTrue: () => set(true),
        setFalse: () => set(false),
    }
}

export const modalResult = createModalResult();