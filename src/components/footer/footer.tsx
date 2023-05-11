import './footer.scss';
import lang from './footer.lang.json';
import React from 'react';

export default function Footer() {
  const text = lang.en;

  return (
    <footer className="footer">
      <p className=" d-f gap20">
        <span className="nowrap f-bold">App developers:</span>{' '}
        <a href="https://github.com/SkynerSany" className="github-link">
          SkynerSany
        </a>
        <a href="https://github.com/YuliyaBondar" className="github-link">
          YuliyaBondar
        </a>
        <a href="https://github.com/PavelPoleshchuk" className="github-link">
          PavelPoleshchuk
        </a>
      </p>
      <p className="f-bold">2022</p>
      <a className="rss-link" href="https://rs.school/react/">
        <img
          src="https://raw.githubusercontent.com/YuliyaBondar/christmas-data/main/assets/svg/rss.svg"
          alt="rs_school_js"
          width="95"
        />
      </a>
    </footer>
  );
}
