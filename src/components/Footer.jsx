import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside className="flex flex-col items-center text-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22 9L12 1L2 9v2h2v10h5v-4a3 3 0 1 1 6 0v4h5V11h2z"></path>
        </svg>
        <p>
          Tiendo de productos.
          <br />
          Creada para ser un proyecto
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Servicios</h6>
      </nav>
      <nav>
        <h6 className="footer-title">Compañía</h6>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
      </nav>
    </footer>
  );
};

export default Footer;
