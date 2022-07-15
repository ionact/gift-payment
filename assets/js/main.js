/** 연결된 계좌 리스트 **/
let connectedAccounts = [
    {
        img: "assets/images/account1.svg",
        name: 'NH농협은행',
        detail: '마이페이보릿어카운트',
        cardNo: '12345-12345-12345',
        price: 994878
    },
    {img: "assets/images/account21.svg", name: '카카오뱅크', detail: '마이카카오', cardNo: '12345-12345-12345', price: 4878},
    {img: "assets/images/account4.svg", name: '우리은행', detail: '하하호호꾸꾸까까', cardNo: '12345-12345-12345', price: 1},
    {img: "assets/images/account11.svg", name: '새마을금고', detail: '하하호호꾸꾸까까', cardNo: '12345-12345-12345', price: 1},
    {img: "assets/images/account1.svg", name: 'NH농협', detail: '하하호호꾸꾸까까', cardNo: '12345-12345-12345', price: 1},
    {img: "assets/images/account2.svg", name: 'KB국민', detail: '하하호호꾸꾸까까', cardNo: '12345-12345-12345', price: 1},
    {img: "assets/images/account3.svg", name: '신한', detail: '하하호호꾸꾸까까', cardNo: '12345-12345-12345', price: 1},
];

/** 연결된 계좌 리스트 **/
let paymentAccounts = [
    {img: 'assets/images/account28.svg', name: '케이뱅크'},
    {img: 'assets/images/account1.svg', name: 'NH농협'},
    {img: 'assets/images/account2.svg', name: 'KB국민'},
    {img: 'assets/images/account3.svg', name: '신한'},
    {img: 'assets/images/account4.svg', name: '우리'},
    {img: 'assets/images/account5.svg', name: 'KEB하나'},
    {img: 'assets/images/account6.svg', name: 'IBK기업'},
    {img: 'assets/images/account7.svg', name: 'SC제일'},
    {img: 'assets/images/account8.svg', name: '씨티'},
    {img: 'assets/images/account9.svg', name: 'KDB산업'},
    {img: 'assets/images/account10.svg', name: '저축은행'},
    {img: 'assets/images/account11.svg', name: '새마을금고'},
    {img: 'assets/images/account12.svg', name: '대구'},
    {img: 'assets/images/account13.svg', name: '광주'},
    {img: 'assets/images/account14.svg', name: '우체국'},
    {img: 'assets/images/account15.svg', name: '신협'},
    {img: 'assets/images/account16.svg', name: '전북'},
    {img: 'assets/images/account17.svg', name: '경남'},
    {img: 'assets/images/account18.svg', name: '부산'},
    {img: 'assets/images/account19.svg', name: '수협'},
    {img: 'assets/images/account20.svg', name: '제주'},
    {img: 'assets/images/account21.svg', name: '카카오뱅크'},
    {img: 'assets/images/account22.svg', name: '토스뱅크'},
    {img: 'assets/images/account23.svg', name: '산림조합'},
    {img: 'assets/images/account24.svg', name: '키움증권'},
    {img: 'assets/images/account25.svg', name: 'KB증권'},
    {img: 'assets/images/account26.svg', name: '미래에셋'},
    {img: 'assets/images/account27.svg', name: '삼성증권'},
    {img: 'assets/images/account29.svg', name: 'NH투자'},
    {img: 'assets/images/account30.svg', name: '대신증권'},
    {img: 'assets/images/account31.svg', name: '한국투자'},
    {img: 'assets/images/account32.svg', name: '신한금융'},
    {img: 'assets/images/account33.svg', name: '유진추자'},
    {img: 'assets/images/account34.svg', name: '한화투자'},
    {img: 'assets/images/account35.svg', name: 'DB금융투자'},
    {img: 'assets/images/account36.svg', name: '하나금융투자'},
    {img: 'assets/images/account37.svg', name: '하이투자'},
    {img: 'assets/images/account38.svg', name: '현대차증권'},
    {img: 'assets/images/account39.svg', name: '이베스트'},
    {img: 'assets/images/account40.svg', name: '교보증권'},
    {img: 'assets/images/account41.svg', name: '메리츠증권'},
    {img: 'assets/images/account42.svg', name: '다올투자'},
    {img: 'assets/images/account43.svg', name: 'SK증권'},
];

/** 계좌번호 확인시 오류 메시지 컨텐츠 **/
let Error_Messages = [
    {first: '유효한 계좌가 아닙니다.', second: '계좌번호를 다시 확인 해 주세요.'},
    {first: '계좌를 확인할 수 없습니다.', second: '입력하신 계좌를 다시 한번 확인 해 주세요.'},
    {first: '잠시 서비스를 사용할 수 없습니다.', second: '잠시 후 다시 시도 해 주세요.'},
    {first: '이미 연결해서 사용중인 계좌입니다.', second: '다른 계좌번호를 입력해 주세요.'},
    {first: '계좌연결 진행 중인 계좌입니다.', second: '이어서 연결하기 진행합니다.'},
];
$(document).ready(function() {

});
