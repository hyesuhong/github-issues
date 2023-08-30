import {GetIssueContent, GetIssues} from '../types/api';
import {instance} from './axios';

// /repos/{owner}/{repo}/issues
/* 
200	OK
301	Moved permanently
404	Resource not found
422	Validation failed, or the endpoint has been spammed.
*/
export const getIssuesList = async ({owner, repo, page}: GetIssues) => {
    const basicQuery = 'sort=comments';
    const query = page ? `${basicQuery}&page=${page}` : basicQuery;
    return await instance.get(`/repos/${owner}/${repo}/issues?${query}`);
};

// /repos/{owner}/{repo}/issues/{issue_number}
/* 
200	OK
301	Moved permanently
304	Not modified
404	Resource not found
410	Gone
*/
export const getIssueContent = async ({owner, repo, issue_number}: GetIssueContent) => {
    return await instance.get(`/repos/${owner}/${repo}/issues/${issue_number}`);
};
