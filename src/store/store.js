import { create } from 'zustand'

export const useCitiesStore = create(()=>({
    cities:[],

}))
export const useInputStore = create((set)=>({
    input:"",
    setter: (value) => set( state => ({
        input: value
    }))
}))