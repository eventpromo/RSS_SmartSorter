class Sorter {
  constructor() {
    this.data = [];
    this.comparator = function(a, b){
      return a - b;
    };
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    indices = this.clearIndices(indices);
    var temp = this.sortableData(indices);
    var isPart = temp != this.data;
    temp = temp.sort(this.comparator);
    if(isPart){
      this.updatePart(indices, temp);
    }else{
      this.data = temp;
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;    
  }

  clearIndices(indices){
    if(!indices){
      return indices;
    }
    var data = this.data;
    return indices.filter(i => {
      return this.data[i] !== void 0;
    }).sort();
  }

  sortableData(indices){
    if(!indices || indices.length == 0){
      return this.data;
    }
    var part = [];  
    indices.forEach(i => {
      part.push(this.data[i]);
    });    
    return part;
  }

  updatePart(indices, part){
    var index = 0;
    indices.forEach(i => {
      this.data[i] = part[index++];      
    }); 
    this.data
  }
}

module.exports = Sorter;