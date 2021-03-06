/*
2022-03-12
[조건문]
1. if
2. switch
    특정한 패턴인 경우 switch문으로 작성했을 때
    가독성이 높은 조건문 분기를 나타낼 수 있을 때 사용

[if]
else -> 1개만 만들거나 생략 가능
실행되는 코드가 한 줄이면 브레이스 {} 생략 가능
브레이스를 생략하지 않는 것이 컨벤션(생략하지 않는 것을 추천)
기본적인 형 변환, 타입캐스트 룰에 의해서 

-숫자
0 : false
나머지 모든 숫자: true

-문자열
'' : 비어있는 경우 false
나머지 모든 문자열: true

-객체
모든 객체: true

if(비교식){
    비교식 참이면 실행
}else{
    비교식 거짓이면 실행
}   

if문 확장
else if -> n개로 확장 가능

if(비교식a){
    비교식a 참이면 실행
}elsf if(비교식b){
    비교식b 참이면 실행
}...{ }else{
    나머지 케이스 실행
}

[switch]
어떤 값을 계속 비교하면서 그 값의 유형이 일치하는 것을 비교한다.
그 값이 이럴땐 뭐하고, 이럴땐 뭐하고,...
검사하는 대상이 동일하고 일치하는지를 검사할 때 사용한다.

value와 case에 있는 값과 일치하는지 확인
break 키워드를 만날 때 까지 순차적으로 실행하게 된다.
코드의 중단점을 break로 명확하게 설정해주어야 한다.

switch(value){
    case 1:
        코드1;
        break;
    case 2:
        코드2;
        break;
    case 3:
        코드3;
        break;
    default:
        코드4;
        break;

}


*/