interface TempProps {
  children: React.ReactNode;
}

function Temp({ children }: TempProps) {
  return <>{children}</>;
}

export default Temp;
