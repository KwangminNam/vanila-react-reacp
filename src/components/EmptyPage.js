import { Link } from "react-router-dom";

import React from 'react';

const EmptyPage = () => {
  return (
    <div>
      <div>잘못된 접근입니다.</div>
      <Link to="/">홈으로</Link>
    </div>
  );
};

export default EmptyPage;