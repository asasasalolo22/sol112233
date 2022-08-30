import React from "react";
import ResizeObserver from "resize-observer-polyfill";

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useResizeObserver = (
  ref: React.RefObject<HTMLElement>,
  callback?: (entry: DOMRectReadOnly) => void
) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleResize = React.useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }

      const entry = entries[0];
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      if (callback) {
        callback(entry.contentRect);
      }
    },
    [callback]
  );

  React.useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    let RO = new ResizeObserver((entries: any) => handleResize(entries) as any);
    RO.observe(ref.current);

    return () => {
      RO.disconnect();
    };
  }, [handleResize, ref]);

  return [width, height];
};
