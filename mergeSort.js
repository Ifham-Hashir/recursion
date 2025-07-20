function mergeSort(array){
  //Base Case
  if (array.length <= 1) return array;

  //Recursive Case
  let mid = Math.floor(array.length/2);
  let leftHalf = array.slice(0, mid);
  let rightHalf = array.slice(mid);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}


function merge(leftHalf, rightHalf){
  let leftIndex = 0, rightIndex = 0, resultIndex = 0;
  let result = [];
  while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
    if(leftHalf[leftIndex] < rightHalf[rightIndex]){
      result[resultIndex++] = leftHalf[leftIndex++];
    }
    else{
      result[resultIndex++] = rightHalf[rightIndex++]
    }
  }
  //If leftHalf or rightHalf has elements remaining
  for(; leftIndex < leftHalf.length; leftIndex++){
    result[resultIndex++] = leftHalf[leftIndex]
  }

  for(; rightIndex < rightHalf.length; rightIndex++){
    result[resultIndex++] = rightHalf[rightIndex]
  }
  return result
}

console.log(mergeSort([0, 1, 1, 2, 3, 5, 8, 13]));