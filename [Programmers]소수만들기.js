const visited =  Array.from({length:3000}, ()=> false);
let sum = 0;
let answer = 0;
const getAllSosu = () =>{
    visited[1] = true;
    visited[0] = true;
    for (let i = 2; i <= Math.sqrt(3000); i++) {
        if(visited[i] == false){
            for (let j = i+i; j <= 3000; j+=i) {
                visited[j] = true;
            }
        }
    }
}

const combination = (nums,currentIdx,combVisited,count) => {
    if(count === 3){
        if(visited[sum] == false){
            answer++;
        }
    }
    else{
        for (let i = currentIdx; i < nums.length; i++) {
            if(combVisited[i] === false){
                combVisited[i] = true;
                sum+=nums[i];
                combination(nums,i+1,combVisited,count+1);
                sum-=nums[i];
                combVisited[i] = false;
            }
        }
    }

}

function solution(nums) {
    let len = nums.length;
    getAllSosu();
    const combVisited = Array.from({length:len}, ()=>false);
    combination(nums,0,combVisited,0);
    return answer;
}
const nums = [1,2,7,6,4];
solution(nums);