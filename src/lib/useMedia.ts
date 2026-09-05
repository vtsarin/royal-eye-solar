import { useEffect, useState } from 'react';

export function useMedia(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? defaultValue : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export const useIsMobile = () => useMedia('(max-width: 767px)');
