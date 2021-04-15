export const staticList = [
    { id: 1, title: 'Frogs', type: 'Amphibian', stock: 6, rate: 5, like: true }, 
    { id: 2, title: 'Newts', type: 'Amphibian', stock: 3, rate: 5, like: false }, 
    { id: 3, title: 'Salamanders', type: 'Amphibian', stock: 5, rate: 5, like: false }, 
    { id: 4, title: 'Toads', type: 'Amphibian', stock: 7, rate: 5, like: false }, 
    { id: 5, title: 'Albatrosses', type: 'Bird', stock: 7, rate: 5, like: false }, 
    { id: 6, title: 'Chickens', type: 'Bird', stock: 7, rate: 5, like: false }, 
    { id: 7, title: 'Hummingbirds', type: 'Bird', stock: 7, rate: 5, like: false }, 
    { id: 8, title: 'Falcons', type: 'Bird', stock: 7, rate: 5, like: false }, 
    { id: 9, title: 'Flamingoes', type: 'Bird', stock: 7, rate: 5, like: false }, 
    { id: 10, title: 'Eels', type: 'Fish', stock: 7, rate: 5, like: false }, 
    { id: 11, title: 'Hagfish', type: 'Fish', stock: 7, rate: 5, like: false }, 
    { id: 12, title: 'Lampreys', type: 'Fish', stock: 7, rate: 5, like: false }, 
    { id: 13, title: 'Minnows', type: 'Fish', stock: 1, rate: 5, like: false } 
];

export function getStaticList() {
    return staticList.filter(s => s);
}