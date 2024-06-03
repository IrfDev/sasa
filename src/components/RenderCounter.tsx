import { useRef } from "react";

import { createRenderCounter } from "../lib/RenderCounter";

const useRenderCounter = () => {
  const renderCounterRef = useRef(createRenderCounter());

  renderCounterRef.current?.increment();

  return renderCounterRef.current?.count;
};

const RenderCounterComponent = () => {
  const renderCount = useRenderCounter();

  return <>{renderCount}</>;
};

export default RenderCounterComponent;
