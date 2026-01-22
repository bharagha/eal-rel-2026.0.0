import { Slider } from "@/components/ui/slider.tsx";

interface NumberSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
}

export const NumberSlider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  unit,
}: NumberSliderProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground min-w-[2ch] text-center">
        {min}
      </span>
      <Slider
        value={[value]}
        onValueChange={(val) => onChange(val[0])}
        min={min}
        max={max}
        step={1}
        className="flex-1"
      />
      <span className="text-sm text-muted-foreground min-w-[3ch] text-center">
        {max}
      </span>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value, 10);
          if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            onChange(newValue);
          }
        }}
        min={min}
        max={max}
        className="w-[4rem] px-2 py-1 text-sm font-medium border bg-background [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        style={{ textAlign: "center" }}
        disabled={true}
      />
      {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
    </div>
  );
};
