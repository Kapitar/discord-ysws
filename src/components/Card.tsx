interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  step: number;
  children: React.ReactNode;
}

export default function Card({ title, step, children, ...rest }: CardProps) {
  return (
    <div className="w-full bg-white px-7 py-8 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-5 text-indigo-500">
        Step {step}
      </h1>
      <h2 className="text-3xl font-medium mb-2">{title}</h2>
      <p className="text-lg text-indigo-800">
        {children}
      </p>
    </div>
  );
}
