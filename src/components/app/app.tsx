import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Welcome from '../../pages/welcome/welcome';
import ErrorPage from '../../pages/error/error';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import EditorPage from '../../pages/editor/editor';

import './app.scss';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="editor" element={<EditorPage />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
