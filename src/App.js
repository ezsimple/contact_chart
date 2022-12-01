import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import fname0 from 'static/images/월별 입사자수.png';
import fname1 from 'static/images/월별 퇴사자수.png';
import fname2 from 'static/images/월별 고용 성장율.png';
import fname3 from 'static/images/부서별 입사자수 .vs. 퇴사자수.png';
import fname4 from 'static/images/직급별 입사자수,퇴사자수.png';
import fname5 from 'static/images/부서별 바로 퇴사자수.png';
import fname7 from 'static/images/직급별 바로 퇴사자수.png';
import fname6 from 'static/images/전체 입사자수 .vs. 퇴사자수.png';
import fname9 from 'static/images/전체 입사율, 퇴사율.png';
import fname8 from 'static/images/인력 변경율, 채용 성공율.png';

function App() {
  const period = '21/11 ~ 22/11';

  const fetchPeriod = () => {
    const periodCsv = 'static/images/period.csv';
    return fetch(periodCsv).then(function (res) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  };

  useEffect(() => {
    const data = fetchPeriod();
    console.log(data);
  }, []);

  return (
    <div class="flex justify-center">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3>Recruiting Statistics</h3>
          <div class="text-center">
            <h4>({period})</h4>
          </div>
        </div>
      </header>
      <div class="outline w-25 pa3 mr2">
        <img src={fname0} alt="월별 입사자수" />
      </div>
      <div class="outline w-25 pa3 mr2">
        <img src={fname1} alt="월별 퇴사자수" />
      </div>
      <div class="outline w-25 pa3 mr2">
        <img src={fname2} alt="월별 고용 성장율" />
      </div>
      <div class="outline w-25 pa3 mr2">
        <img src={fname3} alt="부서별 입사자수 .vs. 퇴사자수" />
      </div>
      <div class="outline w-25 pa3">
        <img src={fname4} alt="직급별 입사자수,퇴사자수" />
      </div>
      <div class="outline w-25 pa3">
        <img src={fname5} alt="부서별 바로 퇴사자수" />
      </div>
      <div class="outline w-25 pa3">
        <img src={fname7} alt="직급별 바로 퇴사자수" />
      </div>
      <div class="outline w-25 pa3">
        <img src={fname6} alt="전체 입사자수 .vs. 퇴사자수" />
      </div>
      <div class="outline w-25 pa3">
        <img src={fname9} alt="전체 입사율, 퇴사율" />
      </div>
      <div class="outline w-25 pa3">
        <img src={fname8} alt="인력 변경율, 채용 성공율" />
      </div>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>made by mhlee</p>
          <p>월별 직원연락망 분석용, 시각화 자료입니다</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
