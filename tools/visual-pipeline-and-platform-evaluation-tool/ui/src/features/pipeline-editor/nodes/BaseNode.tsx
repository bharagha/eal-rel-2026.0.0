import { Handle, Position } from "@xyflow/react";
import { getHandleLeftPosition } from "../utils/graphLayout";
import type { ReactNode } from "react";

export interface NodeProperty {
  label: string;
  value: string | number | undefined;
  className?: string;
  isMono?: boolean;
  breakAll?: boolean;
  formatValue?: (value: string | number) => string;
}

interface BaseNodeProps {
  title: string;
  category: string;
  color:
    | "blue"
    | "gray"
    | "sky"
    | "purple"
    | "indigo"
    | "yellow"
    | "lime"
    | "green"
    | "teal"
    | "cyan"
    | "emerald"
    | "red"
    | "rose"
    | "pink"
    | "violet"
    | "amber"
    | "slate"
    | "stone";
  description?: string;
  properties?: NodeProperty[];
  nodeId: string;
  hasInputHandle?: boolean;
  hasOutputHandle?: boolean;
  minWidth?: string;
  children?: ReactNode;
}

const colorClasses = {
  blue: {
    border: "border-blue-400",
    title: "text-blue-700 dark:text-blue-300",
    badge: "bg-blue-100 dark:bg-blue-900",
    handle: "bg-blue-500!",
    propertyBg: "bg-blue-50 dark:bg-blue-900/30",
  },
  gray: {
    border: "border-gray-400",
    title: "text-gray-700 dark:text-gray-300",
    badge: "bg-gray-100 dark:bg-gray-800",
    handle: "bg-gray-500!",
    propertyBg: "bg-gray-50 dark:bg-gray-800",
  },
  sky: {
    border: "border-sky-400",
    title: "text-sky-700 dark:text-sky-300",
    badge: "bg-sky-100 dark:bg-sky-900",
    handle: "bg-sky-500!",
    propertyBg: "bg-sky-50 dark:bg-sky-900/30",
  },
  purple: {
    border: "border-purple-400",
    title: "text-purple-700 dark:text-purple-300",
    badge: "bg-purple-100 dark:bg-purple-900",
    handle: "bg-purple-500!",
    propertyBg: "bg-purple-50 dark:bg-purple-900/30",
  },
  indigo: {
    border: "border-indigo-400",
    title: "text-indigo-700 dark:text-indigo-300",
    badge: "bg-indigo-100 dark:bg-indigo-900",
    handle: "bg-indigo-500!",
    propertyBg: "bg-indigo-50 dark:bg-indigo-900/30",
  },
  yellow: {
    border: "border-yellow-400",
    title: "text-yellow-700 dark:text-yellow-300",
    badge: "bg-yellow-100 dark:bg-yellow-900",
    handle: "bg-yellow-500!",
    propertyBg: "bg-yellow-50 dark:bg-yellow-900/30",
  },
  lime: {
    border: "border-lime-400",
    title: "text-lime-700 dark:text-lime-300",
    badge: "bg-lime-100 dark:bg-lime-900",
    handle: "bg-lime-500!",
    propertyBg: "bg-lime-50 dark:bg-lime-900/30",
  },
  green: {
    border: "border-green-400",
    title: "text-green-700 dark:text-green-300",
    badge: "bg-green-100 dark:bg-green-900",
    handle: "bg-green-500!",
    propertyBg: "bg-green-50 dark:bg-green-900/30",
  },
  teal: {
    border: "border-teal-400",
    title: "text-teal-700 dark:text-teal-300",
    badge: "bg-teal-100 dark:bg-teal-900",
    handle: "bg-teal-500!",
    propertyBg: "bg-teal-50 dark:bg-teal-900/30",
  },
  cyan: {
    border: "border-cyan-400",
    title: "text-cyan-700 dark:text-cyan-300",
    badge: "bg-cyan-100 dark:bg-cyan-900",
    handle: "bg-cyan-500!",
    propertyBg: "bg-cyan-50 dark:bg-cyan-900/30",
  },
  emerald: {
    border: "border-emerald-400",
    title: "text-emerald-700 dark:text-emerald-300",
    badge: "bg-emerald-100 dark:bg-emerald-900",
    handle: "bg-emerald-500!",
    propertyBg: "bg-emerald-50 dark:bg-emerald-900/30",
  },
  red: {
    border: "border-red-400",
    title: "text-red-700 dark:text-red-300",
    badge: "bg-red-100 dark:bg-red-900",
    handle: "bg-red-500!",
    propertyBg: "bg-red-50 dark:bg-red-900/30",
  },
  rose: {
    border: "border-rose-400",
    title: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-100 dark:bg-rose-900",
    handle: "bg-rose-500!",
    propertyBg: "bg-rose-50 dark:bg-rose-900/30",
  },
  pink: {
    border: "border-pink-400",
    title: "text-pink-700 dark:text-pink-300",
    badge: "bg-pink-100 dark:bg-pink-900",
    handle: "bg-pink-500!",
    propertyBg: "bg-pink-50 dark:bg-pink-900/30",
  },
  violet: {
    border: "border-violet-400",
    title: "text-violet-700 dark:text-violet-300",
    badge: "bg-violet-100 dark:bg-violet-900",
    handle: "bg-violet-500!",
    propertyBg: "bg-violet-50 dark:bg-violet-900/30",
  },
  amber: {
    border: "border-amber-400",
    title: "text-amber-700 dark:text-amber-300",
    badge: "bg-amber-100 dark:bg-amber-900",
    handle: "bg-amber-500!",
    propertyBg: "bg-amber-50 dark:bg-amber-900/30",
  },
  slate: {
    border: "border-slate-400",
    title: "text-slate-700 dark:text-slate-300",
    badge: "bg-slate-100 dark:bg-slate-900",
    handle: "bg-slate-500!",
    propertyBg: "bg-slate-50 dark:bg-slate-900/30",
  },
  stone: {
    border: "border-stone-400",
    title: "text-stone-700 dark:text-stone-300",
    badge: "bg-stone-100 dark:bg-stone-900",
    handle: "bg-stone-500!",
    propertyBg: "bg-stone-50 dark:bg-stone-900/30",
  },
};

export const BaseNode = ({
  title,
  category,
  color,
  description,
  properties = [],
  nodeId,
  hasInputHandle = false,
  hasOutputHandle = false,
  minWidth = "220px",
  children,
}: BaseNodeProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`px-4 py-2 shadow-md bg-background border-2 ${colors.border}`}
      style={{ minWidth }}
    >
      <div className="flex flex-col">
        {/* Node Header */}
        <div className="flex items-center justify-between mb-2">
          <div className={`text-lg font-bold ${colors.title}`}>{title}</div>
          <div
            className={`text-xs text-gray-500 dark:text-gray-400 px-2 py-1 ${colors.badge} rounded`}
          >
            {category}
          </div>
        </div>

        {/* Properties */}
        {properties.map((prop, idx) => {
          if (!prop.value) return null;

          const displayValue = prop.formatValue
            ? prop.formatValue(prop.value)
            : prop.value;

          return (
            <div
              key={idx}
              className="text-xs text-gray-600 dark:text-gray-300 mb-2"
            >
              <span className="font-medium">{prop.label}:</span>
              <div
                className={`mt-1 p-2 rounded text-xs ${prop.className || "bg-gray-50 dark:bg-gray-800"} ${prop.isMono ? "font-mono" : ""} ${prop.breakAll ? "break-all" : ""}`}
              >
                {displayValue}
              </div>
            </div>
          );
        })}

        {/* Children (for custom content) */}
        {children}

        {/* Description */}
        {description && (
          <div className="text-xs text-gray-600 dark:text-gray-300">
            {description}
          </div>
        )}
      </div>

      {/* Input Handle */}
      {hasInputHandle && (
        <Handle
          type="target"
          position={Position.Top}
          className={`w-3 h-3 ${colors.handle}`}
          style={{ left: getHandleLeftPosition(nodeId) }}
        />
      )}

      {/* Output Handle */}
      {hasOutputHandle && (
        <Handle
          type="source"
          position={Position.Bottom}
          className={`w-3 h-3 ${colors.handle}`}
          style={{ left: getHandleLeftPosition(nodeId) }}
        />
      )}
    </div>
  );
};
