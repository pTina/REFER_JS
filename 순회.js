// 2022-05-04
// [순회]


// 순회(반복)
// 배열, 객체와 같은 데이터에 있는 값 하나하나를 어떤 연산을 수행하는 방식

// 데이터 변환 또는 처리할 때 많이 사용한다.

// [1,2,3,4] => 2배


// 명령형 코드
const arr = [];

for(const n of [1,2,3,4]){
    arr.push(n*2);
}

console.log(arr);

// *함수형 프로그래밍
const arr2 = [1,2,3,4].map(n=>n*2);
console.log(arr2);

// N개의 연산
// 3개의 연산을 각각 하나하나의 노드에 적용함
//      연산이 독립적으로 분리되어 있음 => 재활용성 좋음
const arr3 = [1,2,3,4]
    .map(n=>n*3)
    .filter(n=>n%2!==0)
    .map(n=>`<li>${n}</li>`);

// 연산은 재활용 하기 위해서는 작게 유지하는 게 중요하고
// 작게 유지된 연산 함수들은 재활용할 수 있는 가능성이 더 커짐
// => 어떤 데이터를 조작한다고 하면
//      어떻게 조작할 것인가
//          데이터가 복잡해질수록 순차적으로 연산할 수 있는 작은 단위로 로직 분리
//          분리된 로직을 다시 연산을 결합할 수 있는 체이닝 방식으로 조합을 하면
//          훨씬 로직이 깔끔하고 손쉽게 풀릴 수 있다.