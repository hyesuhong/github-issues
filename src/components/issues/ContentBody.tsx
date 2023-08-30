interface Props {
    body: string;
}

const ContentBody = ({body}: Props) => {
    return (
        <>
            <div>{body}</div>
        </>
    );
};

export default ContentBody;
