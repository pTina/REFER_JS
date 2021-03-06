
/*
타입
값의 유형을 나타내는 의미

실제로 자바스크립트에서 타입을 어떻게 다루고
타입스크립트에서는 어떻게 다루는지


*/

// 자바스크립트
function addAge(age){
    if(typeof age === 'number'){
        return age+1;

    }else{
        throw 'ERROR!!';
    }
    
}

let age1 = addAge(30);
let age2 = addAge('30');

console.log(age1);   // 31
console.log(age2);   // 301

age1 = '11';
age1 = false;

/*

+ 연산자는
한쪽이 숫자가 아닌 문자열이면 모두 문자열로 취급하고
2개의 값을 합침

자바스크립트에서 변수 타입
: 실제로 값을 넣는 순간 결정이 되는 구조다.

변수의 타입을 매번 데이터가 들어가는 시점에 자유롭게 바꾼다는 매커니즘을 갖고 있다.
-> 타입을 매우 느슨하게 관리한다.
=> 편리함을 추구할 수도 있고 큰 불안정성으로도 볼 수 있다.

"의도와 다르게 수행될 수 있다, 목적이 허물어질 수 있다."
=> 버그를 쉽게 만들 수 있는 언어 환경
=> 방어코드를 끊임없이 작성해야한다.

동작 자체가 런타임(프로그램이 돌아가고 있을 때
    사용자가 해당 앱을 사용하고 있을 때)에 일어나기 때문에
오류가 일어났을 때 어떻게 처리하지?에 대한 고민을 많이 해야한다.
    => 매우 불안정하고 신경 써야 될 것들이 많다.

*/


// 타입스크립트
// function addAge(age:number): number{
//     return age + 1;
// }

// let age: number = addAge(30);

// console.log(age); // 31

// let age: number = addAge('30');
// 문자열은 받지 못한다고 알려주고 컴파일 자체가 되지 않는다.

/*

타입스크립트의 목적
어떤 변수가 어떤 유형의 데이터 타입만을 담을 수 있다고 정의하는 것

자바스크립트의 느슨한 타입 관리로 인한 불안정성을
타입스크립트가 온전하게 해결한다.

자바스크립트는 런타임 상황에서 발생하지만
타입스크립트는 런타임 상황에서 발생하지 않는다.
    => 개발자가 개발하고 있는 순간 발생한다. 
        "컴파일 타임에 오류를 잡아내 준다."
        개발하는 순간 타입 안정성을 잡아주는 것이 가장 중요하다.
*/