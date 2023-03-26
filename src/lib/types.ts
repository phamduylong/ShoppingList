type Item = {
    item: string,
    quantity: number,
    note?: string
};

type ShoppingListType = Item[];

export { Item, ShoppingListType };