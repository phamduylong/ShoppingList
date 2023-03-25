import { writable, Writable } from 'svelte/store';

function createModal() {
    const {subscribe, set} : Writable<boolean> = writable<boolean>(false);

    return {
        subscribe,
        open: () : void => set(true),
        close: () : void => set(false)
    }
}
const modalOpen = createModal();
export { modalOpen };