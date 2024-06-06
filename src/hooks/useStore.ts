import { useState, useEffect } from "react";
import { store } from "../lib/Store"; // Assuming the store is in a file named store.ts

export const useStore = <T>(key: string): [T, State] => {
  const [state, setState] = useState(
    () => key.split(".").reduce((acc, part) => acc[part], store.getState()) as T
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(key, () => {
      setState(
        () =>
          key.split(".").reduce((acc, part) => acc[part], store.getState()) as T
      );
    });

    return () => unsubscribe();
  }, [key]);

  return [state, store.getState()];
};
