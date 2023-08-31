import {atom} from 'recoil';
import {githubIssue} from './types/github';

type IssuesState = {
    isLoading: boolean;
    data: githubIssue[];
    pageCount: number;
    hasNext: boolean;
};

export const issuesState = atom<IssuesState>({
    key: 'issuesList',
    default: {
        isLoading: false,
        data: [],
        pageCount: 1,
        hasNext: true,
    },
});

export const beforeItemState = atom({
    key: 'beforeItemNumber',
    default: -1,
});
