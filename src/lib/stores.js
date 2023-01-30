import { writable } from 'svelte/store';

function createModalResult() {
    const { subscribe, set } = writable(false);

    return {
        subscribe,
        setTrue: () => set(true),
        setFalse: () => set(false),
    }
}

function createModal() {
    const {subscribe, set} = writable(false);

    return {
        subscribe,
        open: () => set(true),
        close: () => set(false)
    }
}
const modalResult = createModalResult();
const modalOpen = createModal();
export {modalResult, modalOpen};