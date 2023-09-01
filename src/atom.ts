import {atom} from 'recoil';
import {githubIssue} from './types/github';
import {AxiosError} from 'axios';

interface apiState<T> {
    isLoading: boolean;
    data?: T;
    error?: AxiosError;
}

interface IssuesState extends apiState<githubIssue[]> {
    hasNext: boolean;
    pageCount: number;
}

export const issuesState = atom<IssuesState>({
    key: 'issuesList',
    default: {
        isLoading: false,
        data: [],
        pageCount: 1,
        hasNext: true,
    },
});

export const issueDetailState = atom<apiState<githubIssue>>({
    key: 'issueDetail',
    default: {
        isLoading: false,
    },
});

export const beforeItemState = atom({
    key: 'beforeItemNumber',
    default: -1,
});
