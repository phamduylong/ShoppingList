type Item = {
    item: string,
    quantity: number,
    note?: string
};

type EventData<T> = { detail: T };

type ShoppingListType = Item[];

export { Item, ShoppingListType, EventData };