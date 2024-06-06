type RenderCounterHandler = {
  get: (target: {}, prop: string) => number | any;
  increment: () => void;
};

export const createRenderCounter = (): {
  count: number;
} & RenderCounterHandler => {
  let renderCount = 0;

  const handler: RenderCounterHandler = {
    get(target, prop): number | any {
      if (prop === "count") {
        return renderCount;
      }

      if (prop === "increment") {
        return () => {
          this.increment();
        };
      }
      return (target as any)[prop];
    },
    increment() {
      renderCount++;
    },
  };

  return new Proxy({}, handler) as {
    count: number;
  } & RenderCounterHandler;
};
