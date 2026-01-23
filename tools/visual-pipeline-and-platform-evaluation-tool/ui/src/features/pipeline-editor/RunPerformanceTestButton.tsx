import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type RunPipelineButtonProps = {
  onRun: () => void;
  isRunning?: boolean;
};

const RunPipelineButton = ({ onRun, isRunning }: RunPipelineButtonProps) => {
  return (
    <Button
      onClick={onRun}
      disabled={isRunning}
      title="Run Performance Test"
      className="w-[160px]"
      variant="default"
    >
      <Play />
      Run pipeline
    </Button>
  );
};

export default RunPipelineButton;
