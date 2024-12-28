import { atom, selector } from 'recoil'

export const countAtom = atom({
    key: "countAtom",
    default: 0
});
//defining atom

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom)         //depends on count, when count valure changes it will give the output as either true or false
        return count%2 == 0; 
    }
})

//defining selector
//selector: A selector represents a piece of derived state. Similar to useMemmo, which gives the data when the dependency is changed