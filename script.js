<script>
  const thoughts = [
    "저쪽으로 가면 <span style='color: green;'>>>>지름길<<<</span>인 것 같은데",
    "저 카페 새로 생겼네? <a href='https://www.instagram.com/solsol_bakeshop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' style='color: yellow;'>맛있을까?</a>",
    "오늘까지 해야되는게 뭐였더라... <span style='color: red;'>∫∫∫</span>",
    "다이소에서 살 거 있었는데 <a href='https://www.daisomall.co.kr/ds' target='_blank' style='color: red;'>들어갈까?</a>",
    "붕어빵 왜이렇게 비쌈",
    "<span style='font-size: 1.5rem;'>◥█◤</span> 텐동 먹고싶다",
    "＼북-적／＼북-적／",
    "저 강아지 밍키 닮았다",
    "<a href='https://ko.aliexpress.com/?src=google&albch=fbrnd&acnt=304-410-9721&isdl=y&aff_short_key=UneMJZVf&albcp=17716100085&albag=139268141696&slnk=&trgt=kwd-303544729105&plac=&crea=681641093969&netw=g&device=c&mtctp=e&memo1=&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&isSmbActive=false&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gclid=EAIaIQobChMI24uU_OOPigMVpe0WBR1t_w5kEAAYASAAEgJSVPD_BwE&gatewayAdapt=glo2kor' target='_blank' style='color: cyan;'>여성 상의 9,900원</a>",
    "저기 원래 🍔집이었는데 바뀌었네",
    "🐦🐦🐦🐦🐦",
    "🌺🌻🌹우와 이 날씨에도 꽃이 펴있네🌷🥀🌼"
  ];

  const container = document.querySelector('.thoughts-container');

  // 랜덤 사념 박스를 생성하는 함수
  function createThought() {
    const thought = document.createElement('div');
    thought.className = 'thought';
    thought.innerHTML = thoughts[Math.floor(Math.random() * thoughts.length)]; // innerHTML 사용

    // 랜덤 초기 위치
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // 초기 위치 저장
    thought.dataset.x = x;
    thought.dataset.y = y;

    // 위치 설정
    thought.style.transform = `translate(${x}px, ${y}px)`;

    container.appendChild(thought);

    // 일정 시간 후 제거
    setTimeout(() => thought.remove(), 10000);
  }

  // 스크롤에 따른 사념 위치 업데이트
  function updateThoughtPositions() {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const thoughtsElements = document.querySelectorAll('.thought');
    thoughtsElements.forEach((thought) => {
      const initialX = parseFloat(thought.dataset.x);
      const initialY = parseFloat(thought.dataset.y);

      // 스크롤 반영 위치로 이동
      thought.style.transform = `translate(${initialX - scrollX}px, ${initialY - scrollY}px)`;
    });
  }

  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', updateThoughtPositions);

  // 일정 간격으로 사념 생성
  setInterval(createThought, 2000);
</script>
