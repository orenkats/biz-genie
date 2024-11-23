const HeroPattern = () => {
    return (
      <div className="hero-pattern">
        <div className="hero-pattern-gradient" />
        <svg
          className="hero-pattern-svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={100}
              height={100}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" strokeWidth={2} />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-[#b2c8ba96]">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
        <div className="hero-pattern-overlay" />
      </div>
    );
  };
  
  export default HeroPattern;