import {useRecoilState} from 'recoil';
import ListContainer from '../containers/ListContainer';
import {getIssuesList} from '../apis/github';
import {IntersectionCB, useIntersection} from '../hooks/useIntersection';
import {issuesState} from '../atom';
import {TARGET_GITHUB} from '../constants/github';

const List = () => {
    const [{isLoading, pageCount}, setIssues] = useRecoilState(issuesState);

    const getIssues = async (page: number) => {
        setIssues(prev => {
            return {...prev, isLoading: true};
        });

        await getIssuesList({owner: TARGET_GITHUB.OWNER, repo: TARGET_GITHUB.REPO, page})
            .then(res => {
                if (res.status === 200) {
                    setIssues(prev => {
                        return {
                            ...prev,
                            data: [...prev.data, ...res.data],
                        };
                    });
                }
            })
            .catch(console.error)
            .finally(() => {
                changeLoadingState();
            });
    };

    const changeLoadingState = () =>
        setIssues(prev => {
            return {...prev, isLoading: !prev.isLoading};
        });

    // const increasePageNum = () =>
    //     setIssues(prev => {
    //         console.info(pageCount);
    //         return {...prev, pageCount: prev.pageCount + 1};
    //     });

    // TODO: 페이지 업데이트 안되고 있음 고칠 것
    const callbackIntersection: IntersectionCB = async ([entry], observer) => {
        const {isIntersecting, target} = entry;

        if (!isLoading && isIntersecting) {
            observer.unobserve(target);

            // changeLoadingState();

            await getIssues(pageCount);

            // increasePageNum();

            // observer.observe(target);
        }
    };

    const ref = useIntersection<HTMLDivElement>({callbackIntersection});

    return (
        <>
            <ListContainer intersectionRef={ref} />
        </>
    );
};

export default List;
