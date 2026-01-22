import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress";
import type { LucideIcon } from "lucide-react";

interface DeviceUsageProgressProps {
  icon: LucideIcon;
  deviceLabel: string;
  deviceFullName?: string;
  value: number;
  note?: string;
}

export const DeviceUsageProgress = ({
  icon: Icon,
  deviceLabel,
  deviceFullName,
  value,
  note,
}: DeviceUsageProgressProps) => {
  return (
    <Progress value={value} max={100}>
      <>
        <div className="flex items-center justify-between">
          <ProgressLabel>
            <span className="flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0" />
              {deviceLabel}
              {deviceFullName && `: ${deviceFullName}`}
              {note && ` ${note}`}
            </span>
          </ProgressLabel>
          <ProgressValue>
            {(_, value) => `${value?.toFixed(2) ?? 0}%`}
          </ProgressValue>
        </div>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </>
    </Progress>
  );
};
