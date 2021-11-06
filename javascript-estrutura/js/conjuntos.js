function Set() {
  var items = {};

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.has = function (value) {
    return items.hasOwnProperty(value);
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.values = function () {
    var values = [];
    keys = Object.keys(items);
    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.union = function (otherSet) {
    var unionSet = new Set(),
    values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
}

var set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

console.log(set.size());