export default class ApiError extends Error {
    public code: number;

    constructor(code: number, msg: string) {
        super(msg);
        this.message = msg;
        this.code = code;
    }

    static badRequest(msg: string) {
        return new ApiError(400, msg);
    }

    static internal(msg: string) {
        return new ApiError(500, msg);
    }
}