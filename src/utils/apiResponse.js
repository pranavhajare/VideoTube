class apiResponse {
    constructor(statusCode, data, message="Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = true;
        this.error = false;
    }
}

export {apiResponse}