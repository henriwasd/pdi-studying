function ArrayList() {
  var array = [];

  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  this.bubbleSort = function () {
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };

  this.selectionSort = function () {
    var min;
    for (var i = 0; i < array.length - 1; i++) {
      min = i;
      for (var j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (min != i) {
        swap(array, i, min);
      }
    }
  };

  this.insertionSort = function () {
    var j, temp;
    for (var i = 1; i < array.length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  var mergeSortRec = function (array) {
    if (array.length == 1) {
      return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  var merge = function (left, right) {
    var result = [],
      l = 0,
      r = 0;

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    while (l < left.length) {
      result.push(left[l++]);
    }
    while (r < right.length) {
      result.push(right[r++]);
    }
    return result;
  };

  this.quickSort = function () {
    quickSortRec(array, 0, array.length - 1);
  };

  var quickSortRec = function (array, left, right) {
    var index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quickSortRec(array, left, index - 1);
      }
      if (index < right) {
        quickSortRec(array, index, right);
      }
    }
  };

  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };
  var swap = function (array, index1, index2) {
    var tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
  };
}

var al = new ArrayList();

al.insert(8);
al.insert(7);
al.insert(6);
al.insert(5);
al.insert(4);
al.insert(3);
al.insert(2);
al.insert(1);

// al.bubbleSort();
// al.selectionSort();
// al.insertionSort();
// al.mergeSort();
al.quickSort();

console.log(al.toString());