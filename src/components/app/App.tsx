import { FC } from "react";

import Home from "pages/Home";
import User from "pages/User";
import Post from "pages/Post";

import routes from "urlRoutesConfig.json";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import "./reset.scss";
import "./fonts.scss";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={`${routes.user}/:id`} element={<User />} />
        <Route path={`${routes.post}/:id`} element={<Post />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
