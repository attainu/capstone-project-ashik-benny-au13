class ApiFeatures {
    constructor(query,queryString) {
        this.query = query
        this.queryString = queryString
    }
    search() {
        const keyword = this.queryString.keyword ? {
        name : {
            $regex : this.queryString.keyword,                     // match the charactor combination in strings
            $options : 'i'                                         // to avoid case sensitive problems in search
        }} : {}
        this.queryString = this.query.find({...keyword})
        return this;
    }
};


module.exports = ApiFeatures;

