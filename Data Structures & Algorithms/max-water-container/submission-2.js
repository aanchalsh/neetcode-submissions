

class Solution {
  maxArea (height){
    for(let i =0; i< height.length ; i++){
      let left = 0;
      let right = height.length - 1;
      let maxWater = 0;
      while (left < right){
        let width = right - left; 
        let h = Math.min(height[left], height[right]);
        console.log("h", h);
        let area = h * width;
        console.log("Area:",area);
        maxWater = Math.max(maxWater, area);
        console.log("Maxwater:",maxWater);
        if(height[left]< height[right]){
          left ++ ;
        }
        else {
          right --;
        }
        }
     return maxWater;
    }
  }
}