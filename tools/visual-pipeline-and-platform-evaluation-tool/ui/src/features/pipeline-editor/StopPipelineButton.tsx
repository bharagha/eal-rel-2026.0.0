import { Square } from "lucide-react";
import { Button } from "@/components/ui/button";

type StopPipelineButtonProps = {
  isStopping: boolean;
  onStop: () => void;
};

const StopPipelineButton = ({
  isStopping,
  onStop,
}: StopPipelineButtonProps) => (
  <Button
    onClick={onStop}
    disabled={isStopping}
    variant="destructive"
    title="Stop Pipeline"
    className="w-[160px]"
  >
    <Square />
    Stop pipeline
  </Button>
);

export default StopPipelineButton;
