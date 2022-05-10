// 2022-05-10
// [이터러버블, 이터레이터 프로토콜]

/*
-이터레이션: 반복 가능한, 반복자

-반복이 가능한 구조
ex. 배열
자바스크립트는 배열 말고도 반복 가능한 구조가 많다.
map, set, 배열, 객체, ...
제너레이터 -> 무한히 생성되는 값을 생성하는 함수
=> 이터레이션 프로토콜에 기반하여 작동되는 매커니즘이다.

-이터레이션 프로토콜
자바스크립트 객체들이 이터레이션 동작을 정의하거나 사용자 정의하는 것을 허용한다.
반환 값 객체에 next 메소드가 있어야 하고
next 함수가 반환하는 객체는 done이라 하는 boolean 속성과 value 속성이 있어야 한다.
(제너레이터 함수가 반환하는 제너레이터 안에 있는 next, done, value와 똑같은 상황)
    => 제너레이터가 이터레이션 프로토콜을 구현한 구현체라서 그렇다.
*/

const myIterable = [];

// myIterable에 Symbol.iterator key를 추가한다.
// Symbol
//  유일한 값을 만들어내는 기능
//  유니크한 value를 만들어내는 용도의 기본값
//      시스템으로 정의된 값들 중 iterator를 사용한 것임
// 이터레이션 프로토콜을 준수하는 함수를 넣어줌
myIterable[Symbol.iterator] = function(){
    let i = 1;
    while(i<=100){
        // yield로 반환하고 있음
        // 제너레이터 함수이기 때문에 yield 할 때마다
        // 바깥쪽으로 나가고 다시 대기하고
        // next하면 다시 들어오고,
        yield i++;
    }
};

// 반복문을 사용할 수 있음
// next 함수가 없는데 어떻게 제너레이터 함수 안에
// yield를 계속 재개시킬 수 있을까?
// => for of가 이터레이션 프로토콜을 준수하는 문이기 때문에 그렇다.
// for of해서 값을 꺼내 올 때 next를 꺼내 오고
// next안에 value라고 하는 값을 참조하여
// 값을 n에다가 넣는것임
// 그리고 done이 true인지 false인지에 따라
// for of의 반복을 결정함
// => 이터레이션 프로토콜을 준수함으로써 문 자체가 깔끔해지고 불필요한 구성 요소가 없는 상태로 만들어지게 되는 것이다.
for(const n of myIterable){
    console.log(n);
}