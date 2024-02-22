interface SecTitProps {
  children: React.ReactNode;
}
function SecTit({ children }: SecTitProps) {
  return (
    <p className="text-4xl font-bold uppercase italic text-secondary ">
      {children}
    </p>
  );
}

export default SecTit;
