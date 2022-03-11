/*

-식
연산, 계산, expression

정의
기본적으로 자바스크립트나 타입스크립트가 제공하는 '연산자'를 이용해서
값을 만들어내는 코드다.

1. 식
하나의 값으로 수렴
값이라고도 할 수 있다.
맨 마지막에 세미콜론으로 찍어야해용
계산을 하는 것임

=> 자바스크립트에서 값이라고 명령한 것들은 모두 식일 수 있다.
=> 함수 심화 학습할 때 중요한 정의가 된다.

2. 문
값으로 환원되지 않는 코드
반복문, 비교문, ...
세미콜론으로 끝나지 않음

[연산자] : 어떤 계산을 할 것인지 역할을 부여하는 것
-할당(=)
값을 변수로 옮기는 것

-복합 할당 연산자 (축약형)
x = x + y
-> x += y

-구조 분해 할당
많이 쓰인다.
오른쪽에 있는 구조를 분해한 다음에 왼쪽으로 하나씩 할당하는 연산자.
편리하고 실무에서도 많이 사용함
ES6에 추가된 문법 모던한 자바스크립트의 대표적인 문법

-비교 연산식
boolean값 true or false로 수렴하는 식

-비교 연산
동등 == 
일치 === 

a = 10;
b = '10';

a == b -> true
숫자와 문자열 비교할 수 없음
하지만 '10'을 숫자로 변환해서 같은지 확인한다.

엄밀하게 비교하고 싶다면?
a === b -> false

일치 연산자를 쓰도록 한다.
의도하지 않은 비교의 결과로 버그를 만들어 내지 않을 수 있다.
=> 자바스크립트의 느슨한 문법 체계에서 기인하는 연산자

-논리 연산자
비교 연산자가 많은 경우 사용

-문자열 연산자 + 
concatenate (컨케트네이트) 결합 
양쪽 중에 한 쪽이 문자열이 나올 경우 양쪽을 모두 문자로 바꾼 다음 붙인다.
'str1'+'str2'
=> str1str2

-조건 삼항 연산자
비교 ? 참일 때 : 거짓일 때
a = (a===b) ? a : b

-typeof
자바스크립트에서 많이 쓰임
실행 시간에 타입을 확인해볼 필요가 있기 때문에 방어코드를 작성할 때 많이 쓰인다.
typeof 피연산자
-> 피연산자의 타입을 문자열로 리턴함
완벽하지는 않음
많은 object 유형이 있는데 모두 object로 반환함
객체 중에 특정 객체를 확인해야 한다면 좀 더 다른 테크닉을 사용해야 하는 미묘함이 있다.

[연산자 우선순위]
하나의 식에 여러 개의 연산자가 동시에 등장할 때 어떤 연산자부터 계산하는 가
연산자의 우선순위를 명확하게 명시해주는 것이 좋음 () 괄호 사용


*/

const colors = ['red', 'yellow', 'black'];

colors[1];  // -> 의미가 불분명함

// 그래서 변수에 넣어 사용함
// 명확하게 사용할 수 있음
// => 매번 빼서 써야하기 때문에 불편함, 코드 양도 늘어남
const yellow = colors[1]; 
yellow; 

// red에는 'red' 문자열이 들어가고
// yellow에는 'yellow' 문자열이 들어가고
// black 에는 'black' 문자열이 들어가게 됨 
// yellow만 쓰고싶다? 밑에처럼 사용 가능 
// const [, yellow] = colors;

const [red, yellow, black] = colors;

// 오른쪽이 객체인 경우?
// { } 요거 사용 
const Colors = {
    blue: 'blue',
    green: 'green',
    white: 'white'
}

// 이름으로 찾기 때문에 순서 상관없이 사용 가능하다.
const {green, white} = Colors;

// 괄호의 특별한 용법
// "어떤 유형의 데이터를 값으로 묶는 역할을 한다."
// 특별하게 값으로 만들고 싶은 것이 있을 때 
// 그것을 괄호로 감싸서 값으로 만들 수 있는 용법이 있음
// 값이 될 수 있는 것을 값이 아닌 상황에서 괄호로 값을 만들 수 있다.
// 임의의 값의 영역으로 지정할 수 있다.

// 함수 문을 괄호로 감싸줬음 => 함수 자체가 값이 됨
// 변수에 넣을 수 있게 된다.
(function foo(){

})


