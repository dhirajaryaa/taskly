export class ApiResponse {
    constructor(
        statusCode=200,
        message="successful",
        data=null,
        isError=false,
        isSusses=true
    ){
        this.statusCode=statusCode;
        this.message=message;
        this.data=data;
        this.isError=isError;
        this.isSusses=isSusses;
    }
}