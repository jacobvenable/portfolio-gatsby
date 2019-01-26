import React from 'react';

function Footer() {
  let today = new Date();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__copy">Copyright &copy; {today.getFullYear()} Jacob Venable</p>
      </div>
    </footer>
  );
}

export default Footer;