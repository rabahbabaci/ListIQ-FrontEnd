interface ExampleItemsProps {
  labels: string[];
  onSelect: (index: number) => void;
}

const emojis = ["🧥", "👟", "👜", "👕"];

const ExampleItems = ({ labels, onSelect }: ExampleItemsProps) => (
  <div className="mt-6">
    <p className="text-sm text-stone-400 font-medium mb-3 text-center">Try an Example</p>
    <div className="flex flex-wrap justify-center gap-3">
      {labels.map((label, i) => (
        <button
          key={label}
          onClick={() => onSelect(i)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 text-sm font-medium text-stone-600 hover:border-[#5B4FD6] hover:text-[#5B4FD6] hover:bg-[#EDEAFC]/40 transition-all duration-200"
        >
          <span className="text-lg">{emojis[i]}</span>
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default ExampleItems;
