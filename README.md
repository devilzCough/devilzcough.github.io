현재 테마 : minimal-mistakes-jekyll

속성: _config.yml 파일 수정하기

- minimal_mistakes_skin : 스킨 색상 지정
- avatar : 프로필 사진. 링크 형태로 지정하기
- 그 외 기타 값들 변경해야함

**dir. _data/navigation.yml**

오른쪽 상단에 카테고리 메뉴 지정하는 파일

**dir. _layouts**

각 카테고리 별로 레이아웃을 생성해야 함

category-dev.html 을 카피해서 `{% for post in site.categories['dev'] %}`

위 코드 부분의 `'dev'` 만 변경하여 레이아웃 사용 가능

ex. ml 카테고리 → category-ml.html 파일 생성,  `{% for post in site.categories['ml'] %}` 로 변경

**dir._pages**

- [404.md](http://404.md) : 없는 페이지
- about.md : About 페이지
- tag-archive.md : tag 별로 페이지 분류
- category-archive.md : category 별로 분류
- 그 외 카테고리 생성 : category-[category_name].md

    Ex.

    - category-dev.md

            ---
            title: "Development"
            layout: category-dev
            permalink: /dev/
            author_profile: true
            ---

        - title : 카테고리 제목
        - layout : 해당 카테고리가 사용할 레이아웃
        - permalink : 블로그 링크 뒤에 사용할 링크명
        - author_profile : 오른쪽에 메뉴 형태로 보여질지에 대한 여부

        위 형태로 파일을 생성해야 함.



**dir._posts**

- dir.img : 이미지 저장 폴더. 필요 시, 하위 폴더 생성 후 이미지 저장하기
- 포스트 포맷 : yyyy-mm-dd-title.md

    Ex. 2020-03-15-test.md
