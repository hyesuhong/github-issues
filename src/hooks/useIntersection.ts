import {useEffect, useRef} from 'react';

export type IntersectionCB = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
) => void;

type marginType = number | string;

// number => px, string => px or %
type IntersectionMargin =
    | [marginType]
    | [marginType, marginType]
    | [marginType, marginType, marginType]
    | [marginType, marginType, marginType, marginType];

interface IntersectionOption {
    root?: HTMLElement;
    rootMargin?: IntersectionMargin;
    thresholds?: number | number[]; // 0 ~ 1
}

export interface IUseIntersection extends IntersectionOption {
    handleIntersection: IntersectionCB;
}

export const useIntersection = <T extends HTMLElement>({
    root,
    rootMargin,
    thresholds,
    handleIntersection,
}: IUseIntersection) => {
    const ref = useRef<T>(null);
    const marginString = rootMargin ? getIntersectionMargin(rootMargin) : '0';
    const intersectionOpt = {
        root: root || null,
        rootMargin: marginString,
        threshold: thresholds || 0,
    };

    const observer = new IntersectionObserver(handleIntersection, intersectionOpt);

    useEffect(() => {
        if (!ref.current) return;
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    return {ref: ref, observer: observer};
};

const getIntersectionMargin = (marginOption: IntersectionMargin) => {
    // const type =
    //     marginOption.length === 1
    //         ? 'all'
    //         : marginOption.length === 2
    //         ? 'topBottom_leftRight'
    //         : marginOption.length === 3
    //         ? 'top_leftRight_bottom'
    //         : 'top_right_bottom_left';

    const setMarginAllString = marginOption.map(margin =>
        typeof margin === 'number' ? `${margin}px` : margin
    );

    return setMarginAllString.join(' ');
};
