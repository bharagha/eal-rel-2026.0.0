import { BaseNode } from "./BaseNode";
import type { GvaTrackingType } from "@/features/pipeline-editor/nodes/GVATrackNode.config.ts";
import type { DeviceType } from "@/features/pipeline-editor/nodes/shared-types.ts";

// ============================================================================
// SOURCE NODES
// ============================================================================

type FileSrcNodeProps = {
  data: {
    location: string;
  };
};

export const FileSrcNode = ({ data }: FileSrcNodeProps) => (
  <BaseNode
    title="FileSrc"
    category="Source"
    color="blue"
    nodeId="filesrc"
    hasOutputHandle
    properties={[
      {
        label: "Location",
        value: data.location,
        isMono: true,
        breakAll: true,
        formatValue: (val) => val.toString().split("/").pop() || val.toString(),
      },
    ]}
  />
);

// ============================================================================
// DEMUXER / PARSER NODES
// ============================================================================

export const QtdemuxNode = () => (
  <BaseNode
    title="QtDemux"
    category="Demuxer"
    color="green"
    description="QuickTime demultiplexer"
    nodeId="qtdemux"
    hasInputHandle
    hasOutputHandle
  />
);

export const H264ParseNode = () => (
  <BaseNode
    title="H264Parse"
    category="Parser"
    color="purple"
    description="H.264 stream parser"
    nodeId="h264parse"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// DECODER NODES
// ============================================================================

export const VAH264DecNode = () => (
  <BaseNode
    title="VAH264Dec"
    category="Decoder"
    color="indigo"
    description="VA-API H.264 decoder"
    nodeId="vah264dec"
    hasInputHandle
    hasOutputHandle
  />
);

export const AvDecH264Node = () => (
  <BaseNode
    title="AvDecH264"
    category="Decoder"
    color="indigo"
    description="libav H.264 decoder"
    nodeId="avdec_h264"
    hasInputHandle
    hasOutputHandle
  />
);

export const Decodebin3Node = () => (
  <BaseNode
    title="Decodebin3"
    category="Decoder"
    color="lime"
    description="Auto decoder bin"
    nodeId="decodebin3"
    hasInputHandle
    hasOutputHandle
  />
);

export const VaapiDecodebinNode = () => (
  <BaseNode
    title="VaapiDecodebin"
    category="Decoder"
    color="lime"
    description="VA-API decode bin"
    nodeId="vaapidecodebin"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// GVA PROCESSING NODES
// ============================================================================

export const GVAFpsCounterNode = () => (
  <BaseNode
    title="GVAFpsCounter"
    category="Counter"
    color="red"
    description="GStreamer VA FPS counter"
    nodeId="gvafpscounter"
    hasInputHandle
    hasOutputHandle
  />
);

type GVADetectNodeProps = {
  data: {
    model?: string;
    device?: string;
    "object-class": string;
  };
};

export const GVADetectNode = ({ data }: GVADetectNodeProps) => (
  <BaseNode
    title="GVADetect"
    category="Detection"
    color="indigo"
    description="GStreamer VA detection"
    nodeId="gvadetect"
    hasInputHandle
    hasOutputHandle
    minWidth="250px"
    properties={[
      {
        label: "Model",
        value: data.model,
        className: "bg-indigo-50 dark:bg-indigo-900/30",
        isMono: true,
        breakAll: true,
        formatValue: (val) => val.toString().split("/").pop() || val.toString(),
      },
      {
        label: "Device",
        value: data.device,
        className: "bg-indigo-50 dark:bg-indigo-900/30",
      },
      {
        label: "Pre-process Backend",
        value: data["object-class"],
        className: "bg-indigo-50 dark:bg-indigo-900/30",
      },
    ]}
  />
);

type GVAClassifyNodeProps = {
  data: {
    model?: string;
    device?: DeviceType;
  };
};

export const GVAClassifyNode = ({ data }: GVAClassifyNodeProps) => (
  <BaseNode
    title="GVAClassify"
    category="Classification"
    color="purple"
    description="Intel DL Streamer classification"
    nodeId="gvaclassify"
    hasInputHandle
    hasOutputHandle
    properties={[
      {
        label: "Model",
        value: data.model,
        className: "bg-purple-50 dark:bg-purple-900/30",
        isMono: true,
        formatValue: (val) => val.toString().split("/").pop() || val.toString(),
      },
      {
        label: "Device",
        value: data.device,
        className: "bg-purple-50 dark:bg-purple-900/30",
        isMono: true,
      },
    ]}
  />
);

type GVATrackNodeProps = {
  data: {
    "tracking-type": GvaTrackingType;
  };
};

export const GVATrackNode = ({ data }: GVATrackNodeProps) => (
  <BaseNode
    title="GVATrack"
    category="Tracking"
    color="yellow"
    description="GStreamer VA tracking"
    nodeId="gvatrack"
    hasInputHandle
    hasOutputHandle
    properties={[
      {
        label: "Tracking type",
        value: data["tracking-type"],
        className: "bg-yellow-50 dark:bg-yellow-900/30",
        isMono: true,
        breakAll: true,
      },
    ]}
  />
);

export const GVAWatermarkNode = () => (
  <BaseNode
    title="GVAWatermark"
    category="Overlay"
    color="pink"
    description="GStreamer VA watermark"
    nodeId="gvawatermark"
    hasInputHandle
    hasOutputHandle
  />
);

export const GVAMetaConvertNode = () => (
  <BaseNode
    title="GVAMetaConvert"
    category="Converter"
    color="cyan"
    description="GStreamer VA meta converter"
    nodeId="gvametaconvert"
    hasInputHandle
    hasOutputHandle
    minWidth="270px"
  />
);

export const GVAMetaPublishNode = () => (
  <BaseNode
    title="GVAMetaPublish"
    category="Publisher"
    color="emerald"
    description="GStreamer VA meta publisher"
    nodeId="gvametapublish"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// BUFFER / QUEUE NODES
// ============================================================================

export const Queue2Node = () => (
  <BaseNode
    title="Queue2"
    category="Buffer"
    color="teal"
    description="Simple data queue"
    nodeId="queue2"
    hasInputHandle
    hasOutputHandle
  />
);

export const QueueNode = () => (
  <BaseNode
    title="Queue"
    category="Buffer"
    color="sky"
    description="Data buffering element"
    nodeId="queue"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// TRANSFORM / POST-PROCESSING NODES
// ============================================================================

export const VAPostProcNode = () => (
  <BaseNode
    title="VAPostProc"
    category="Transform"
    color="amber"
    description="VA-API video postprocessor"
    nodeId="vapostproc"
    hasInputHandle
    hasOutputHandle
  />
);

export const VideoScaleNode = () => (
  <BaseNode
    title="VideoScale"
    category="PostProc"
    color="amber"
    description="Video frame resizing element"
    nodeId="videoscale"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// CAPABILITIES NODES
// ============================================================================

export const VideoXRawNode = () => (
  <BaseNode
    title="Video/x-raw"
    category="Caps"
    color="slate"
    description="Raw video capabilities"
    nodeId="video/x-raw(memory:VAMemory)"
    hasInputHandle
    hasOutputHandle
    properties={[
      {
        label: "Memory",
        value: "VAMemory",
        isMono: true,
      },
    ]}
  />
);

export const VideoXRawWithDimensionsNode = () => (
  <BaseNode
    title="video/x-raw"
    category="Caps"
    color="stone"
    description="Raw video caps"
    nodeId="video/x-raw"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// MUXER NODES
// ============================================================================

export const Mp4MuxNode = () => (
  <BaseNode
    title="Mp4Mux"
    category="Muxer"
    color="violet"
    description="MP4 muxer"
    nodeId="mp4mux"
    hasInputHandle
    hasOutputHandle
  />
);

export const SplitmuxsinkNode = () => (
  <BaseNode
    title="Splitmuxsink"
    category="Muxer"
    color="sky"
    description="File splitting muxer sink"
    nodeId="splitmuxsink"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// ENCODER NODES
// ============================================================================

export const VAH264EncNode = () => (
  <BaseNode
    title="VAH264Enc"
    category="Encoder"
    color="rose"
    description="VA-API H.264 encoder"
    nodeId="vah264enc"
    hasInputHandle
    hasOutputHandle
  />
);

// ============================================================================
// SINK NODES
// ============================================================================

export const FakeSinkNode = () => (
  <BaseNode
    title="FakeSink"
    category="Sink"
    color="gray"
    description="Black hole for data"
    nodeId="fakesink"
    hasInputHandle
  />
);

export const FileSinkNode = () => (
  <BaseNode
    title="FileSink"
    category="Sink"
    color="gray"
    description="Write to file"
    nodeId="filesink"
    hasInputHandle
  />
);

// ============================================================================
// UTILITY NODES
// ============================================================================

export const TeeNode = () => (
  <BaseNode
    title="Tee"
    category="Splitter"
    color="sky"
    description="Stream splitting element"
    nodeId="tee"
    hasInputHandle
    hasOutputHandle
  />
);
