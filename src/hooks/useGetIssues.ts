import {AxiosError} from 'axios';
import {useRecoilState} from 'recoil';
import {issuesState} from '../atom';
import {getIssuesList} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';

const useGetIssues = () => {
    const [issues, setIssues] = useRecoilState(issuesState);

    const getIssues = async (page: number) => {
        try {
            setIssues(prev => ({...prev, hasNext: false, isLoading: true}));

            const res = await getIssuesList({
                owner: TARGET_GITHUB.OWNER,
                repo: TARGET_GITHUB.REPO,
                page,
            });

            const relRegexp = /(rel="next")/;
            const pageRemain = res.headers.link && relRegexp.test(res.headers.link);
            if (pageRemain) {
                setIssues(prev => ({...prev, hasNext: true}));
            }

            if (res.status === 200) {
                setIssues(prev => {
                    const nextData = prev.data ? [...prev.data, ...res.data] : [...res.data];
                    const filterdData = nextData.filter((data, index, array) => {
                        const firstDataIndex = array.findIndex(item => item.number === data.number);
                        return index === firstDataIndex;
                    });
                    return {
                        ...prev,
                        data: filterdData,
                        error: undefined,
                    };
                });
            }
        } catch (error) {
            console.error(error);
            setIssues(prev => ({...prev, error: error as AxiosError}));
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
