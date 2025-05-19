import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// 当路由组件来回跳转时，跳转后滚动条应该回到页面顶部
const AutoScorllTop = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default AutoScorllTop;
