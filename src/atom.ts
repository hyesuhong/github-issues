import {atom} from 'recoil';
import {githubIssue} from './types/github';

type IssuesState = {
    isLoading: boolean;
    data: githubIssue[];
    pageCount: number;
};

export const issuesState = atom<IssuesState>({
    key: 'issuesList',
    default: {
        isLoading: false,
        data: [],
        pageCount: 1,
    },
});

export const pageState = atom({
    key: 'page',
    default: 0,
});
