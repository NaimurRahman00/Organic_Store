const Footer = () => {
  return (
    <footer className="footer bg-black p-10 max-w-[1440px] mx-auto">
      <aside>
        <h2 className="text-white text-3xl">
          <span className="text-emerald-500">Organ</span>Store
        </h2>
        <p className="text-white/50">
          Organic Healthy Product.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className="text-white/60 space-y-2">
        <h6 className="footer-title">Features</h6>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Login </a>
        <a className="link link-hover">Sign Up</a>
      </nav>
      <nav className="text-white/60">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="text-white/60">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
