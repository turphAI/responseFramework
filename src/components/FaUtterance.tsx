interface FaUtteranceProps {
  utteranceText: string;
}

export default function FaUtterance({ utteranceText }: FaUtteranceProps) {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon on the left */}
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#acdaeb]"></div> {/* Correct color */}
      
      {/* Text content on the right */}
      <div className="rounded px-2">
        <p className="text-sm font-semibold">{utteranceText}</p>
      </div>
    </div>
  );
} 