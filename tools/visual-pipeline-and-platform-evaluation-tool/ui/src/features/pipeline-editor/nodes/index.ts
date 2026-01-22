import {
  FileSrcNode,
  QtdemuxNode,
  H264ParseNode,
  VAH264DecNode,
  AvDecH264Node,
  GVAFpsCounterNode,
  GVADetectNode,
  Queue2Node,
  GVATrackNode,
  GVAWatermarkNode,
  GVAMetaConvertNode,
  GVAMetaPublishNode,
  FakeSinkNode,
  VideoXRawNode,
  VAPostProcNode,
  VideoXRawWithDimensionsNode,
  Mp4MuxNode,
  FileSinkNode,
  VAH264EncNode,
  Decodebin3Node,
  QueueNode,
  GVAClassifyNode,
  VaapiDecodebinNode,
  TeeNode,
  SplitmuxsinkNode,
  VideoScaleNode,
} from "./nodes";

// ============================================================================
// NODE WIDTH CONSTANTS
// ============================================================================

export const GVAFpsCounterNodeWidth = 250;
export const GVADetectNodeWidth = 250;
export const GVAClassifyNodeWidth = 242;
export const GVAWatermarkNodeWidth = 243;
export const GVAMetaConvertNodeWidth = 273;
export const GVAMetaPublishNodeWidth = 268;

// ============================================================================
// NODE TYPE REGISTRY
// ============================================================================

export const nodeTypes = {
  filesrc: FileSrcNode,
  qtdemux: QtdemuxNode,
  h264parse: H264ParseNode,
  vah264dec: VAH264DecNode,
  avdec_h264: AvDecH264Node,
  gvafpscounter: GVAFpsCounterNode,
  gvadetect: GVADetectNode,
  queue2: Queue2Node,
  gvatrack: GVATrackNode,
  gvawatermark: GVAWatermarkNode,
  gvametaconvert: GVAMetaConvertNode,
  gvametapublish: GVAMetaPublishNode,
  fakesink: FakeSinkNode,
  "video/x-raw(memory:VAMemory)": VideoXRawNode,
  vapostproc: VAPostProcNode,
  "video/x-raw": VideoXRawWithDimensionsNode,
  mp4mux: Mp4MuxNode,
  filesink: FileSinkNode,
  vah264enc: VAH264EncNode,
  decodebin3: Decodebin3Node,
  queue: QueueNode,
  gvaclassify: GVAClassifyNode,
  vaapidecodebin: VaapiDecodebinNode,
  tee: TeeNode,
  splitmuxsink: SplitmuxsinkNode,
  videoscale: VideoScaleNode,
};

export const nodeWidths: Record<string, number> = {
  gvadetect: GVADetectNodeWidth,
  gvaclassify: GVAClassifyNodeWidth,
  gvametaconvert: GVAMetaConvertNodeWidth,
  gvametapublish: GVAMetaPublishNodeWidth,
  gvafpscounter: GVAFpsCounterNodeWidth,
  gvawatermark: GVAWatermarkNodeWidth,
};

export const nodeHeights: Record<string, number> = {
  filesrc: 100,
  gvadetect: 180,
  gvaclassify: 180,
  gvatrack: 130,
  "video/x-raw(memory:VAMemory)": 150,
};

export const defaultNodeWidth = 220;
export const defaultNodeHeight = 60;

export default nodeTypes;
