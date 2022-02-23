export default class Comment {
    commentId;
    commentCreatorId;
    commentDate;
    commentContent;
    commentThreadId;


    constructor(id, creatorId, date, content, threadId) {
        this.commentId = id;
        this.commentCreatorId = creatorId;
        this.commentDate = date;
        this.commentContent = content;
        this.commentThreadId = threadId;
    }

    getCommentId() {
        return this.commentId;
    }

    setCommentId(value) {
        this.commentId = value;
    }

    getCommentCreatorId() {
        return this.commentCreatorId;
    }

    setCommentCreatorId(value) {
        this.commentCreatorId = value;
    }

    getCommentDate() {
        return this.commentDate;
    }

    setCommentDate(value) {
        this.commentDate = value;
    }

    getCommentContent() {
        return this.commentContent;
    }

    setCommentContent(value) {
        this.commentContent = value;
    }

    getCommentThreadId() {
        return this.commentThreadId;
    }

    setCommentThreadId(value) {
        this.commentThreadId = value;
    }


}