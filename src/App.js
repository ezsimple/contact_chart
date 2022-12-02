import React, { useEffect, useState } from 'react';
import { readString } from 'react-papaparse';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import fname0 from 'static/media/월별 입사자수.png';
import fname1 from 'static/media/월별 퇴사자수.png';
import fname2 from 'static/media/월별 고용 성장율.png';
import fname3 from 'static/media/부서별 입사자수 .vs. 퇴사자수.png';
import fname4 from 'static/media/직급별 입사자수,퇴사자수.png';
import fname5 from 'static/media/부서별 바로 퇴사자수.png';
import fname7 from 'static/media/직급별 바로 퇴사자수.png';
import fname6 from 'static/media/전체 입사자수 .vs. 퇴사자수.png';
import fname9 from 'static/media/전체 입사율, 퇴사율.png';
import fname8 from 'static/media/인력 변경율, 채용 성공율.png';
import fname10 from 'static/media/부서별 입사율 .vs. 퇴사율.png';

import periodCsv from 'static/media/period.txt';

function App() {
  const [period, setPeriod] = useState('');

  const papaConfig = {
    complete: (results, file) => {
      const { data } = results;
      setPeriod(data[1][1]);
    },
    download: true,
    error: (error, file) => {},
  };

  useEffect(() => {
    readString(periodCsv, papaConfig);
  }, [readString]);

  return (
    <div className="container">
      <header>
        <div className="text-center">
          <h2 className="mb-1">Recruiting Statistics</h2>
          <h4 className="mb-3">({period})</h4>
        </div>
      </header>
      <div className="row"></div>

      <div className="row">
        <div className="text-center">
          <div>
            <img src={fname0} alt="월별 입사자수" />
          </div>
          <div>
            <img src={fname1} alt="월별 퇴사자수" />
          </div>
          <div>
            <img src={fname2} alt="월별 고용 성장율" />
          </div>
          <div>
            <img src={fname3} alt="부서별 입사자수 .vs. 퇴사자수" />
          </div>
          <div>
            <img src={fname4} alt="직급별 입사자수,퇴사자수" />
          </div>
          <div>
            <img src={fname5} alt="부서별 바로 퇴사자수" />
          </div>
          <div>
            <img src={fname7} alt="직급별 바로 퇴사자수" />
          </div>
          <div>
            <img src={fname6} alt="전체 입사자수 .vs. 퇴사자수" />
          </div>
          <div>
            <img src={fname10} alt="부서별 입사율 .vs. 퇴사율" />
          </div>
          <div>
            <img src={fname9} alt="전체 입사율, 퇴사율" />
          </div>
          <div>
            <img src={fname8} alt="인력 변경율, 채용 성공율" />
          </div>
        </div>
      </div>

      <div className="row">
        <footer>
          <div className="text-center">
            <p>made by mhlee</p>
            <p>월별 직원연락망 분석용, 시각화 자료입니다</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
