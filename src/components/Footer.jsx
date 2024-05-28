import '../styles/Footer.css';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer-container'>
           <p className='footer-text'> &copy; TODOS LOS DERECHOS RESERVADOS - {year} - MAISTERRA DIGITAL DESINGS </p>
        </footer>
    )
};
