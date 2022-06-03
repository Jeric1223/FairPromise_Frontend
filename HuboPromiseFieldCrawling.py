import requests
from bs4 import BeautifulSoup

list_arr = []

url = 'https://www.fnnews.com/candidateCompare?can_1=1&can_2=2'

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    titles = soup.select('div.cell.c_cell.ft_16w')
    for title in titles:  
        list_arr.append(title.get_text())
else :
    print(response.status_code)

print(list_arr) 
""" ['사드배치', '종전선언', '전술핵 재배치', '한반도 비핵화∙남북 대화', '개성공단', '국방 개혁', '한일 위안부 협의', '경제 정책 방향', '정부 주도 일자리 창출', '비정규직', '임금 격차', '최저 임금', '증세', '복지', '가계 부채', '법인세', '금융 환경', '고소득자 증세', '부동산 보유세', '재벌 개혁', '코로나 경제 활성화', '복지 예산', '아동 수당', '보육 정책', '실생활', '누리과정 예산', '육아 휴직', '기초연금', '의료', '코로나 피해 지원', '교육 과정', '청소년 관련 법', '대입 정책', '외고∙자사고∙국제고', '교육부 개혁', '미세먼지 측정 기준', '미세먼지 국내 해외', '미세먼지 비교', '탄소 배출', '산업 구조 개편', '신산업 분야', '창업 지원', '가계통신비', '개헌', '검찰개혁'] """