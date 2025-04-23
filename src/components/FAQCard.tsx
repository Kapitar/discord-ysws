interface FAQCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children: React.ReactNode;
}

export default function FAQCard({ title, children, ...rest }: FAQCardProps) {
  return (
    <div className="w-full bg-indigo-700/80 px-7 py-8 rounded-xl border-2 border-dashed border-white">
      <h2 className="text-3xl font-medium mb-2 text-white">
        {title}
      </h2>
      <p className="text-lg text-gray-200">{children}</p>
    </div>
  );
}
