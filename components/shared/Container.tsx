const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 lg:px-10 xl:px-15">
      {children}
    </div>
  );
};
export default Container;

