const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-neon-cyan/20 bg-cyber-surface/90 backdrop-blur-md py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-mono text-text-secondary text-sm tracking-wide">
            &copy; {new Date().getFullYear()} ManYu Kuo. All rights reserved.
          </p>
          <p className="font-mono text-text-secondary text-sm tracking-wide">
            Level 1 Junior Developer · Quest in Progress
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
