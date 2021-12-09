function solution(numbers) {
    return 45-numbers.reduce((acc,val) => acc+val)
}

const numbers = [1,2,3,4,6,7,8,0];
solution(numbers);
