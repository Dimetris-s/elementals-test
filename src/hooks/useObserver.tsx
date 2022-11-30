import { RefObject, useEffect, useRef } from 'react';

type UseObserverProps = {
  ref: RefObject<HTMLElement>;
  isLoading: boolean;
  callback: () => void;
}

export const useObserver = ({ ref, isLoading, callback}: UseObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();

    const cb: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      if(entries[0].isIntersecting) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [isLoading])
}
