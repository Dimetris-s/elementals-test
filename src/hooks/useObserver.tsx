import { RefObject, useEffect, useRef } from 'react';

type UseObserverProps = {
  ref: RefObject<HTMLElement>;
  isLoading: boolean;
  callback: () => void;
  canLoad?: boolean;
}

export const useObserver = ({ ref, isLoading, canLoad, callback}: UseObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if(isLoading || !canLoad) return;
    if(observer.current) observer.current.disconnect();

    const cb: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      if(entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [isLoading])
}
