// 2022-05-16
// [객체의 병합]
// n개의 객체를 다른 하나의 객체를 만들어서 합치는 과정을 많이 하게 됨

// -신경써야 하는 부분
// 객체는 참조용
//: 참조하고 있기 때문에 객체가 이동할 때 원본 데이터가 다른 데이터로 만들어지는 것이 아니라 위치값만 이동하는 것임
//  실제로 복사된 것 같지만 복사되지 않고 복사됐다고 생각한 데이터가 바뀌면 원본도 같이 바뀌는 상황이 발생할 수 있음
// => 모든 데이터가 바뀌어버리는 문제 발생할 수 있음 (버그로 이어질 수 있음)

const sourceObject = {
    traits: {
        first_name: {
            value: 'Bob',
            source_id: 1,
            updated_at: 1623238587468
        },
        emails_opened_last_30_days:{
            value: 33,
            source_id: 2,
            updated_at: 1623238601089
        }
    },
    cursor: {
        url: '/v1/spaces/lgJ4AAjFN4',
        has_more: false,
        next: ''
    }
};

// 객체=> 참조형
//      아무리 변수를 옮겨 다녀도 원본은 하나.
//      다른 곳에서 바뀌면 원본이 그대로 바뀐다.

// -깊은 복사 deep copy
// 객체를 완전하게 복사하는 것(ex. 기본 유형 값이 변수에 넣을 때 복사됨)
// 복사된 값이 원래 이동한 원본 값에 전혀 영향을 미치지 않는 것
// 참조를 끊어버리고, 안쪽에 있는 모든 뎁스를 새롭게 만든 객체로 완전하게 복사시킨다.
// (1) 객체를 문자열로 만든 다음에 다시 객체로 변환시키는 것
//      성능이 그렇게 좋지는 않다.(데이터가 크면 성능이 상당히 떨어진다.)
//      작은 객체를 깊은 복사할 때 가장 간단하게 사용할 수 있는 방법
const newObject1 = JSON.parse(JSON.stringify(sourceObject));

// -얕은 복사 shallow copy
// 1뎁스는 복사를 시키지만 안쪽에 있는 객체는 복사하지 않고 참조로 넘어간다.
// (1) Object.assign을 사용한다
//      새로운 객체를 만들고, 두번째 객체에 복사할 Object를 넘겨준다.
//      두번째 전달된 Object에 있는 속성을 새로 만든 객체로 옮기게 된다.
//      1뎁스 객체들만 복사하기 때문에 안에 들어있는 객체는 참조로 넘어가게 되는 문제를 갖고 있다.
const newObject2 = Object.assign({}, sourceObject);
// (2) 전개 연산사 사용한다.
const newObject3 = {...sourceObject};

console.log(sourceObject.traits.first_name.source_id);

newObject1.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject2.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject3.traits.first_name.source_id = 500;

console.log(sourceObject.traits.first_name.source_id);

function deepCopyObject(obj){
    const clone = {};
    for (const key in obj){
        if(typeof obj[key] == "object" && obj[key] != null){
            clone[key] = deepCopyObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id);

newObject4.traits.first_name.source_id = 1000;

console.log(sourceObject.traits.first_name.source_id);

const store = {
    user: null,
    cart: [],
    config: {
        multiDevice: false,
        lastLoginDate: 'Wed Jun 09 2021 20:46:55 GMT+0900',
    }
}

const newObject5 = {
    ...deepCopyObject(store),
    config:{
        ...store.config,
        lastLoginDate: new Date(),
    },
};

console.log(newObject5);

const DefaultStyle = {
    color: '#fff',
    contColor: '#999',
    fontSize:14,
    fontWeight: 200,
};

function createParagraph(config){
    config = {...DefaultStyle, ...config};

    console.log(config);
}

createParagraph({fontSize:12});