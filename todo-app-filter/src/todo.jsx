import { atom, selector } from 'recoil'

export const todoAtom = atom({
    key: "todoAtom",
    default: [
    ]
})


export const filterAtom = atom({
    key: "filterAtom",
    default: {
        filterWord: ""
    }
})


export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({get}) => {
        const originalTodos = get(todoAtom)
        const { filterWord } = get(filterAtom);
        
        if (!filterWord.trim()) return originalTodos;

        return originalTodos.filter( (x) => x.title.toLowerCase().includes(filterWord.toLowerCase()) || x.description.toLowerCase().includes(filterWord.toLowerCase()) );
    }
})

