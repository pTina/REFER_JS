// 2022-05-02
// [@types]

// 필요로 하는 라이브러리가 타입스크립트를 지원하지 않는 경우
// 

type UniqObject = {
    id: string;
    [key: string]: string | number | boolean;
}

// UniqObject 객체를 생성하는 함수
const makeObject = (): UniqObject =>({
    id: '1234',
});

console.log(makeObject());
console.log(makeObject());
