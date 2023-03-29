type ItemType = {
    item: string,
    quantity: number,
    note?: string
};

type EventData<T> = { detail: T };

type ShoppingListType = ItemType[];

export { ItemType, ShoppingListType, EventData };