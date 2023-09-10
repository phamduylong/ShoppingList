type Item = {
    item: string,
    quantity: number,
    note?: string
};

type EventData<T> = { detail: T };

type ShoppingList = Item[];

export { Item, ShoppingList, EventData };