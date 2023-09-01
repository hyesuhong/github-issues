export type IntersectionHandler = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
) => void;

type marginType = number | string;

// number => px, string => px or %
export type IntersectionMargin =
    | [marginType]
    | [marginType, marginType]
    | [marginType, marginType, marginType]
    | [marginType, marginType, marginType, marginType];

export interface IntersectionOption {
    root?: HTMLElement;
    rootMargin?: IntersectionMargin;
    thresholds?: number | number[]; // 0 ~ 1
}
