export interface InfoProps {
    useProfile?: boolean;
    user: {login: string; avatar_url: string};
    title: string;
    created_at: string;
    comments: number;
    issueNumber: number;
}
