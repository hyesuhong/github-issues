import {useCallback, useEffect, useMemo, useRef} from 'react';
import {IntersectionHandler, IntersectionMargin, IntersectionOption} from '../types/intersection';

export interface IUseIntersection extends IntersectionOption {
    callbackIntersection: IntersectionHandler;
}

export const useIntersection = <T extends HTMLElement>({
    root,
    rootMargin,
    thresholds,
    callbackIntersection,
}: IUseIntersection) => {
    const ref = useRef<T>(null);
    const marginString = rootMargin ? getIntersectionMargin(rootMargin) : '0px';
    const intersectionOpt = useMemo(
        () => ({
            root: root || null,
            rootMargin: marginString,
            threshold: thresholds || 0,
        }),
        [marginString, root, thresholds]
    );

    const intersectionHandler = useCallback(callbackIntersection, [callbackIntersection]);

    useEffect(() => {
        const observer = !ref.current
            ? undefined
            : new IntersectionObserver(intersectionHandler, intersectionOpt);

        if (observer && ref.current) observer.observe(ref.current);

        return () => {
            observer && observer.disconnect();
        };
    }, [ref, intersectionHandler, intersectionOpt]);
    return ref;
};

const getIntersectionMargin = (marginOption: IntersectionMargin) => {
    const setMarginAllString = marginOption.map(margin =>
        typeof margin === 'number' ? `${margin}px` : margin
    );

    return setMarginAllString.join(' ');
};
