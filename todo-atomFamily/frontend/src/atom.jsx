import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoAtomSelector",
    get: (id) => async () => {
      try {
        const res = await axios.get(`http://localhost:3000/todo?id=${id}`);
        return res.data.todo;
      } catch (error) {
        throw error;
      }
    }
  })
});