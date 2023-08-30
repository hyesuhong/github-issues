interface BasicIssue {
    owner: string;
    repo: string;
}

export interface GetIssues extends BasicIssue {
    per_page?: number;
    page?: number;
}

export interface GetIssueContent extends BasicIssue {
    issue_number: number;
}
