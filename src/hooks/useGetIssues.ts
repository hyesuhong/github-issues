import {useRecoilState} from 'recoil';
import {issuesState} from '../atom';
import {getIssuesList} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';

const useGetIssues = () => {
    const [issues, setIssues] = useRecoilState(issuesState);

    const getIssues = async (page: number) => {
        try {
            setIssues(prev => ({...prev, hasNext: false}));

            const res = await getIssuesList({
                owner: TARGET_GITHUB.OWNER,
                repo: TARGET_GITHUB.REPO,
                page,
            });

            if (res.status === 200) {
                setIssues(prev => ({
                    ...prev,
                    data: [...prev.data, ...res.data],
                    hasNext: res.data.length > 0,
                }));
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIssues(prev => ({...prev, isLoading: false}));
        }
    };

    const getNextIssues = () => {
        const nextPageCount = issues.pageCount + 1;
        setIssues(prev => ({...prev, isLoading: true, pageCount: nextPageCount}));
        getIssues(nextPageCount);
    };

    return {getIssues, getNextIssues};
};

export default useGetIssues;
