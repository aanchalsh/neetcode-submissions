class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        for(let i =0 ; i<heights.length; i++){
            let left = 0;
            let maxWater =0;
            let right = heights.length - 1;
            while( left < right ){
                let width = right - left; 
                let h = Math.min(heights[right],heights[left]);
                let area = h * width;
                maxWater = Math.max(maxWater,area);
                if(heights[left]< heights[right]){
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

