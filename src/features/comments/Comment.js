const Comment = ({comment}) => {
    if (comment) {
        const { author, role, text } = comment;
        return (
            <>
            <div>
                <h2>{author}, {role}</h2>
                {text}
            </div>
            </>
        );
    };
    return null;
};

export default Comment;