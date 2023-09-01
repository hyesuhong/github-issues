import {useCallback} from 'react';
import {AxiosError} from 'axios';
import {useSetRecoilState} from 'recoil';
import {issueDetailState} from '../atom';
import {getIssueContent} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';

const useGetIssueDetail = () => {
    const setIssueDetail = useSetRecoilState(issueDetailState);

    const getIssue = useCallback(
        async (issue_number: number) => {
            try {
                setIssueDetail(prev => ({...prev, isLoading: true}));

                const res = await getIssueContent({
                    owner: TARGET_GITHUB.OWNER,
                    repo: TARGET_GITHUB.REPO,
                    issue_number,
                });

                if (res.status === 200) {
                    setIssueDetail(prev => ({...prev, data: res.data, error: undefined}));
                }
            } catch (error) {
                console.error(error);
                setIssueDetail(prev => ({...prev, error: error as AxiosError}));
            } finally {
                setIssueDetail(prev => ({...prev, isLoading: false}));
            }
        },
        [setIssueDetail]
    );
    return {getIssue};
};

export default useGetIssueDetail;
