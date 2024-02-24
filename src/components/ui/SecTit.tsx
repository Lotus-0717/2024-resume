interface SecTitProps {
  children: React.ReactNode;
}
function SecTit({ children }: SecTitProps) {
  return (
    <div className="relative left-4">
      <span className="font-outline-2 absolute -left-4 -top-4 text-4xl font-bold uppercase italic text-transparent">
        {children}
      </span>
      <span className="font-outline-2 absolute -left-2 -top-2 text-4xl font-bold uppercase italic text-transparent">
        {children}
      </span>
      <p className="relative z-10 text-4xl font-bold uppercase italic text-secondary">
        {children}
      </p>
    </div>
  );
}

export default SecTit;
