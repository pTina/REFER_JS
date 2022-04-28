// 2022-04-28
// [컨텍스트]
// 1. execution
// 실행 컨텍스트, 기본 컨텍스트
// 실행 한다의 의미
// => 실제로 어떤 객체의 메소드에 접근한다.
// => 호출한다.

// this의 컨텍스트: 소유자
// => 실행하는 순간 결정된다.

// 2. lexical : 

const person = {
    name: 'gaeun',
    age: 20,
    getAge(){
        return this.age;
    }
};

person.age;
person.getAge(); // 20

// person 객체의 getAge 함수를 age에 넣음
const age = person.getAge;
// 호출하는 시점에서 맥락 랑 소유자를 확인할 수 없음
// 소유자가 벗겨짐
// this가 누군지 몰라서 연결이 되지 않음
age();  // undefined

// 컨텍스트 객체 지정하기
// .call(), .apply();

// 컨텍스트 객체가 person이라고 지정함
age.call(person);

class
