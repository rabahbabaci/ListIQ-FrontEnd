interface ExampleItemsProps {
  labels: string[];
  onSelect: (index: number) => void;
}

const emojis = ["🧥", "👟", "👜", "👕"];

const ExampleItems = ({ labels, onSelect }: ExampleItemsProps) => (
  <div className="mt-6">
    <p className="text-sm text-muted-foreground mb-3 text-center font-medium">Try an Example</p>
    <div className="flex justify-center gap-3">
      {labels.map((label, i) => (
        <button
          key={label}
          onClick={() => onSelect(i)}
          className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/50 transition-colors shadow-sm"
        >
          <span className="text-lg">{emojis[i]}</span>
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default ExampleItems;
