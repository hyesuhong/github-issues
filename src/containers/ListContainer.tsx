import {useRecoilState} from 'recoil';
import IssueList from '../components/issues/IssueList';
import {issuesState} from '../atom';
import {IntersectionCB, useIntersection} from '../hooks/useIntersection';
import {useEffect} from 'react';
import {getIssuesList} from '../apis/github';
import {TARGET_GITHUB} from '../constants/github';

const ListContainer = () => {
    const [{data, isLoading, pageCount}, setIssues] = useRecoilState(issuesState);

    const getIssues = async (page: number) => {
        setIssues(prev => {
            return {...prev, isLoading: true};
        });
        try {
            const res = await getIssuesList({
                owner: TARGET_GITHUB.OWNER,
                repo: TARGET_GITHUB.REPO,
                page,
            });

            if (res.status === 200) {
                setIssues(prev => {
                    const newState = {...prev, data: [...prev.data, ...res.data]};
                    return newState;
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIssues(prev => {
                return {...prev, isLoading: false};
            });
        }
    };

    const callbackIntersection: IntersectionCB = async ([entry], observer) => {
        const {isIntersecting, target} = entry;

        if (!isLoading && isIntersecting) {
            console.info('handler', data.length);
            observer.unobserve(target);
            await getIssues(pageCount);
            // observer.observe(target);
        }
    };

    const ref = useIntersection<HTMLDivElement>({
        callbackIntersection,
    });

    useEffect(() => {
        console.info('effect', pageCount);
    }, [pageCount]);

    return (
        <>
            <ul>
                {data &&
                    data.map((issue, idx) => (
                        <IssueList index={idx} {...issue} key={issue.node_id} />
                    ))}
            </ul>
            <div ref={ref} style={{height: 8}}></div>
        </>
    );
};
export default ListContainer;
