export default class Thread {
    threadId;
    threadTitle;
    threadCreator;
    threadCategory;
    threadContent;
    threadComments;

    constructor(id, title, creator, category, content) {
        this.threadId = id;
        this.threadTitle = title;
        this.threadCreator = creator;
        this.threadCategory = category;
        this.threadContent = content;
        this.threadComments = []
    }

    getThreadId() {
        return this.threadId;
    }

    setThreadId(value) {
        this.threadId = value;
    }

    getThreadTitle() {
        return this.threadTitle;
    }

    setThreadTitle(value) {
        this.threadTitle = value;
    }
    getThreadCreator() {
        return this.threadCreator;
    }

    setThreadCreator(value) {
        this.threadCreator = value;
    }
    getThreadCategory() {
        return this.threadCategory;
    }

    setThreadCategory(value) {
        this.threadCategory = value;
    }

    getThreadContent() {
        return this.threadContent;
    }

    setThreadContent(value) {
        this.threadContent = value;
    }

    getThreadComments() {
        return this.threadComments;
    }

    setThreadComments(value) {
        this.threadComments = value;
    }
    
}