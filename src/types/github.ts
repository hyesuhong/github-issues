export interface targetGithub {
    owner: string;
    repo: string;
}

interface githubUser {
    avatar_url: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
}

export interface githubIssue {
    user: githubUser;
    body: string;
    comments: number;
    created_at: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    reactions: {
        url: string;
        total_count: number;
        [key: string | number]: string | number;
    };
    repository_url: string;
    state: string;
    title: string;
    updated_at: string;
}
