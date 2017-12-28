String.prototype.insert = function (index, string){
    return this.substring(0, index) + string + this.substring(index, this.length);
};
