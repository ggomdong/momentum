const quotes = [
    {
        quote: "주식시장은 인내심이 없는 자로부터 인내심이 많은 자에게로 돈이 넘어가도록 설계되어 있다.",
        author: "워렌 버핏",
    },
    {
        quote: "우량주 몇 종목을 산 다음 수면제를 먹고 몇 년 동안 푹 자라.",
        author: "앙드레 코스톨라니",
    },
    {
        quote: "장기적으로 뛰어난 투자 성적을 얻으려면, 단기적으로 나쁜 성적을 견뎌내야 한다.",
        author: "찰리 멍거",
    },
    {
        quote: "가치에 대한 확고한 신념이 있어야만 수익이 없는 기간을 버텨낼 수 있다.",
        author: "하워드 막스",
    },
    {
        quote: "기업을 공부하지 않고 투자하는 것은 포커를 칠 때 카드를 보지 않고 배팅하는 것과 같다.",
        author: "피터 린치",
    },
    {
        quote: "강세장에서 최대의 도박으로 최대 이익을 얻은 자는 필연적으로 뒤따르는 약세장에서 가장 큰 손실을 본다.",
        author: "벤저민 그레이엄",
    },
    {
        quote: "최적의 매수 타이밍은 시장에 피가 낭자할 때이다. 그것이 당신의 피일지라도.",
        author: "존 템플턴",
    },
    {
        quote: "당신이 잠자는 동안에도 돈이 들어오는 방법을 찾지 못한다면, 당신은 죽을때까지 일을 해야할 것이다.",
        author: "워렌 버핏",
    },
    {
        quote: "당신이 옳고 그름은 중요하지 않다. 중요한것은 옳았을때 얼마나 많이 벌고, 틀렸을때 얼마나 적게 잃는가이다.",
        author: "조지 소로스",
    },
    {
        quote: "가장 큰 위험은 아무것도 하지 않는 것이다.",
        author: "멜로디 홉슨",
    },
    {
        quote: "남들이 두려워할때 욕심을 내고, 남들이 욕심을 낼때 두려워하라.",
        author: "워렌 버핏",
    },
    {
        quote: "투자는 경영의 원칙을 따르고, 투기는 시세차익을 노린다.",
        author: "벤저민 그레이엄",
    },
    {
        quote: "과거의 성과가 미래의 성공을 보장하지 않는다.",
        author: "존 템플턴",
    },
    {
        quote: "모든 주식을 소유하라.",
        author: "존 보글",
    },
    {
        quote: "고통과 성찰은 진보와 같다.",
        author: "레이 달리오",
    },
    {
        quote: "매우 뛰어날 필요는 없다. 다른 사람들보다 아주 조금만 더 현명하라. 단, 매우 오랫동안.",
        author: "찰리 멍거",
    },
    {
        quote: "위험은 최소화하면서도 최대의 수익을 올려라.",
        author: "모니시 파브라이",
    },
    {
        quote: "고통받을 준비가 되어야 한다.",
        author: "장마리 에베이랴르",
    },
    {
        quote: "부자가 되려면 천천히 가야 한다.",
        author: "겸손",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `\"${todaysQuote.quote}\"`;
author.innerText = `- ${todaysQuote.author}`;