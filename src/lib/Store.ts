type Listener = (state: State) => void;

interface State {
  isLoading: boolean;
  persons?: string[] | null;
  [key: string]: unknown;
}

class Store {
  private listeners: { [key: string]: Set<Listener> };
  private state: State;

  constructor(initialState: State) {
    this.listeners = {};
    this.state = this.createProxy(initialState) as State;
  }

  private createProxy(target: any, parentKey: string = ""): any {
    const handler = {
      set: (obj: any, prop: string, value: any) => {
        obj[prop] = value;
        this.notify(parentKey ? `${parentKey}.${prop}` : prop);
        return true;
      },
      deleteProperty: (obj: any, prop: string) => {
        delete obj[prop];
        this.notify(parentKey ? `${parentKey}.${prop}` : prop);
        return true;
      },
    };

    for (const key in target) {
      if (typeof target[key] === "object" && target[key] !== null) {
        target[key] = this.createProxy(
          target[key],
          parentKey ? `${parentKey}.${key}` : key
        );
      }
    }

    return new Proxy(target, handler);
  }

  public subscribe(key: string, listener: Listener): () => void {
    if (!this.listeners[key]) {
      this.listeners[key] = new Set();
    }
    this.listeners[key].add(listener);
    return () => this.listeners[key].delete(listener);
  }

  private notify(key: string): void {
    const listenersToNotify = key
      .split(".")
      .reduce((listeners, part, index, arr) => {
        const subKey = arr.slice(0, index + 1).join(".");
        if (this.listeners[subKey]) {
          this.listeners[subKey].forEach((listener) => listeners.add(listener));
        }
        return listeners;
      }, new Set<Listener>());

    listenersToNotify.forEach((listener) => listener(this.state));
  }

  public getState(): State {
    return this.state;
  }
}

export const store = new Store({ isLoading: false });
