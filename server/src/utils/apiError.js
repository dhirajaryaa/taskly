export class ApiError extends Error {
    constructor(statusCode,message,errors=[],isError=true,isSuccess=false) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ApiError';
        this.errors= errors;
        this.isError = isError;
        this.isSuccess = isSuccess;
        Error.captureStackTrace(this, this.constructor);
    }
}