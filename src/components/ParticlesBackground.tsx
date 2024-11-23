export const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      <div className="absolute left-1/3 right-0 top-0 -z-10 m-auto h-[250px] w-[250px] rounded-full bg-purple-600/20 opacity-20 blur-[100px]" />
    </div>
  );
};

export default ParticlesBackground;