class CommentView {
    parentElement;
    commentData;

    setParentElement() {
        this.parentElement = document.querySelector('.thread-comment-section');
    }

    clear() {
        this.parentElement.innerHTML = '';
    }

    generateMarkup() {
        let htmlComments = '';
        for (let comment of this.commentData) {
            htmlComments += `
            <div class="comment-content">
                <div class="post-user-data">
                    <img class="user-avatar" src="${comment.getCommentCreatorId().userAvatar}">
                    <a>${comment.getCommentCreatorId().username}</a>
                </div>
                <div class="post-content-data">
                    ${comment.getCommentContent()}
                </div>
            </div>`;
        }

        return htmlComments;
    }

    render(comments) {
        this.commentData = comments;
        this.setParentElement();
        this.clear();
        this.parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup());
    }
}

export default new CommentView();