import { Outlet } from 'react-router-dom';
import './layout.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}