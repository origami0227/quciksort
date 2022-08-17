//快速排序 递归思路
let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2); //设定基准数的下标
  let pivot = arr.splice(pivotIndex, 1)[0]; //拿出基准数，因为会返回一个数组所以要标注第零项
  let left = []; //比标准数字小的数组
  let right = []; //比标准数大的数组
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else [right.push(arr[i])];
  }
  return quickSort(left).concat([pivot], quickSort(right)); //实现排序
};
