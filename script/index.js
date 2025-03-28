<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Author" content="LeeSangmi">
    <meta property="og:type" content="website">
    <meta property="og:title" content="이상미 포트폴리오">
    <meta property="og:description" content="신입 디자이너 이상미의 포트폴리오입니다.">
    <meta property="og:image" content="https://iamyoures.github.io/sangmi-portfolio/img/pf_thumnail.png">
    <meta property="og:url" content="https://iamyoures.github.io/sangmi-portfolio/">
    <title>디자이너 이상미 포트폴리오</title>
    <link rel="icon" href="./img/favicon.png" type="image/png">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Barun+Gothic&display=swap" rel="stylesheet">
</head>

<body>
    <div class="mesh-bg"></div>

    <header class="main-header">
        <div class="logo"><a href="#"><img src="./img/logo.png" alt="logo"></a></div>
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav class="pc-nav">
            <ul>
                <li><a href="#">Main</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <nav class="mobile-menu" id="mobileMenu">
        <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <div class="section part1">
        <div class="intro-wrapper">
            <div class="intro-img">
                <img src="./img/egg.png" alt="알에서 깨어난 병아리" class="float-img" />
            </div>
            <div class="intro-text">
                <p>
                    <span class="line1">이제 막 <span class="highlight1">알을 깨고 나온</span></span><br />
                    <span class="line2">그래서 <span class="highlight1">틀에 박히지 않은</span><br />
                        <span class="title">신입 디자이너<br />이상미 입니다</span>
                </p>
            </div>
        </div>
    </div>

    <br /><br /><br /><br /><br />

    <div class="section part2" id="profile">
        <div class="profile-container">
            <img src="./img/profile.png" alt="이상미 아바타" /><br />
            <p class="profile-text">Sangmi Lee<br />1992.02.08<br />객관적인 분석가</p>
        </div>
        <div class="edu-career">
            <p><span class="highlight2">2011.03 - 2016.08<br />2019.01 - 2024.09<br />2024.11 - 2025.05</span></p>
            <p><span class="subinner">서경대학교 금융경제학과 졸업<br />
                    세무법인다솔 본점 재직 - 경영지원본부 대리<br />
                    방송정보국제교육원<br />
                    UI/UX디자인, 영상편집, 모션그래픽 과정 수료<br /></span></p>
        </div>
        <br />
        <br />
        <div class="licencetitle">자격사항</div>
        <br />
        <p class="licenceinner">GTQ (그래픽기술자격) 1급<br />
            GTQi (그래픽기술자격 일러스트) 1급<br />
            GTQid (그래픽기술자격 인디자인) 1급<br />
            컴퓨터그래픽기능사<br />
            웹디자인개발기능사</p>
        <br />
    </div>

    <div class="skill">
        <div class="skill-item" data-desc="Photoshop을 활용한 고급 그래픽 편집 및 디자인 작업이 가능합니다">
            <img src="./img/skill1.png" alt="Photoshop" />
        </div>
        <div class="skill-item" data-desc="Illustrator를 사용한 로고 및 벡터 디자인이 가능합니다">
            <img src="./img/skill2.png" alt="Illustrator" />
        </div>
        <div class="skill-item" data-desc="InDesign을 활용해 인쇄물 및 디지털 콘텐츠 편집 디자인 작업이 가능합니다">
            <img src="./img/skill3.png" alt="InDesign" />
        </div>
        <div class="skill-item" data-desc="HTML5 구조 마크업과 시맨틱 태그를 활용할 수 있습니다">
            <img src="./img/skill4.png" alt="HTML5" />
        </div>
        <div class="skill-item" data-desc="JavaScript를 활용해 동적 UI 기능을 구현할 수 있습니다">
            <img src="./img/skill5.png" alt="JavaScript" />
        </div>
        <div class="skill-item" data-desc="CSS3로 반응형 및 인터랙션 스타일링이 가능합니다">
            <img src="./img/skill6.png" alt="CSS" />
        </div>

        <div class="skill-desc-box" id="descBox"></div>
    </div>
    <br /><br /><br /><br /><br />
    <div class="section ashley" id="works">
        <img src="./img/example1.png" alt="애슐리 웹 리디자인 작업" class="project-img" />

        <p class="project-title">ASHLEY</p>
        <p class="project-sub">웹페이지 리디자인</p>
        <p class="project-desc">개인작업 100%<br />Photoshop, HTML, CSS, Javascript</p>

        <div class="button-group">
            <a href="https://www.myashley.co.kr/" class="btn outline" target="_blank">기존 페이지</a>
            <a href="#" class="btn fill" target="_blank">리뉴얼 페이지</a>
        </div>
    </div>

    <div class="section TEA&ME">
        <img src="./img/example2.png" alt="TEA&ME 팀작업" class="project-img" />

        <p class="project-title">TEA&ME</p>
        <p class="project-sub">반응형 페이지 디자인</p>
        <p class="project-desc">팀 작업 (기여도 80%)<br />Photoshop, HTML, CSS, Javascript</p>

        <div class="button-group">
            <a href="#" class="btn outline" target="_blank">작업 기획서</a>
            <a href="#" class="btn fill" target="_blank">작업 페이지</a>
        </div>
    </div>

    <div class="section design-works">
        <h2 class="design-title">DESIGN WORKS</h2>

        <div class="design-thumbs">
            <div class="thumb">썸네일 1</div>
            <div class="thumb">썸네일 2</div>
            <div class="thumb">썸네일 3</div>
            <div class="thumb">썸네일 4</div>

            <!-- 펼쳐질 썸네일 (초기 숨김) -->
            <div class="thumb hidden">썸네일 5</div>
            <div class="thumb hidden">썸네일 6</div>
            <div class="thumb hidden">썸네일 7</div>
            <div class="thumb hidden">썸네일 8</div>
        </div>

        <button class="more-btn" id="moreBtn">더보기</button>
    </div>

    <div class="message">
        뚜렷한 목표를 가지고 함께 나아갈 수 있는,<br />
        함께 성장할 수 있는 동료가 되고 싶습니다.<br />
        좋아하는만큼 더 잘하고 싶기에
        늘 배우고 노력하는 사람과 일해보세요.<br /><br />
        읽어주셔서 감사합니다
    </div>

    <div class="contact" id="contact">
        <p class="contact-title">CONTACT HERE 👇</p>
        <p class="email">iamyoures@gmail.com</p>
    </div>

    <br /><br /><br />

    <script src="./script/index.js"></script>
</body>

</html>
