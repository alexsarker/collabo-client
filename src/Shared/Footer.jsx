import LogoWhite from "/src/assets/logo-white.svg";
const Footer = () => {
  return (
    <footer className="footer bg-main text-white p-40">
      <aside>
        <img src={LogoWhite} alt="logo-white" />
        <p className="max-w-96">
          Collaborate, create, achieve. Join us in fostering a supportive
          learning community where students collaborate on assignments, share
          knowledge, and succeed together.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title font-normal">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Development</a>
        <a className="link link-hover">Advertisement</a>
        <a className="link link-hover">FAQ</a>
      </nav>
      <nav>
        <h6 className="footer-title font-normal">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Products</a>
      </nav>
      <nav>
        <h6 className="footer-title font-normal">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
