import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Welcome from '../../pages/welcome/welcome';
import Editor from '../../pages/editor/editor';
import ErrorPage from '../../pages/error/error';
import Login from '../../pages/login/login';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="editor" element={<Editor />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
