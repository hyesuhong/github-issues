import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

interface GetIssues {
    owner: string;
    repo: string;
}

interface GetIssueContent extends GetIssues {
    issue_number: number;
}

// /repos/{owner}/{repo}/issues
export const getIssuesList = async ({owner, repo}: GetIssues) => {
    return await axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues?sort=comments`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};

// /repos/{owner}/{repo}/issues/{issue_number}
export const getIssueContent = async ({owner, repo, issue_number}: GetIssueContent) => {
    return await axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues/${issue_number}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};
