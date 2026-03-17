# License Plate Recognition with ViPPET

License Plate Recognition (LPR) systems have evolved from specialized hardware solutions to
flexible, software-defined pipelines that can adapt to various deployment scenarios.

The Visual Pipeline and Platform Evaluation Tool (ViPPET) introduces a powerful approach to LPR
through its **Simple Video Structurization (D-T-C)** pipeline - a versatile, use case-agnostic
solution that delivers enterprise-grade performance across Intel® hardware platforms.

Unlike traditional LPR solutions that require expensive proprietary hardware, ViPPET's pipeline
architecture leverages GStreamer video processing and OpenVINO™ optimized inference to deliver
superior performance on standard Intel® computing platforms.

## ViPPET's Pipeline Architecture

![LPR pipeline](../_assets/lpr-pipeline.png)
*Figure 1: License Plate Recognition pipeline in ViPPET*

This architecture provides:

- **Modular Design**: Each component can be optimized independently.
- **Hardware Flexibility**: Seamless scaling across CPU, GPU, and NPU.
- **Real-time Processing**: GStreamer-based pipeline for low-latency inference.

## Pipeline Component Deep Dive

In ViPPET UI, this LPR pipeline is represented by the following components:

### 1) Input

- Defines the input source for the pipeline (file or stream in other scenarios).
- Decodes raw video frames before AI processing starts.
- Supports efficient ingest on Intel® platforms.

### 2) Object Detection

- Detects license plate regions in each frame.
- Supports device selection across CPU, GPU, and NPU.
- Uses interval and batching parameters for performance tuning.

### 3) Tracking

- Maintains object identity across consecutive frames.
- Reduces flicker and duplicate detections for the same plate.
- Helps stabilize ROI handoff to downstream classification.

### 4) Image Classification

- Performs OCR on detected plate regions.
- Uses ROI-based inference to focus computation on relevant areas.
- Supports reclassification control for stable text recognition.

### 5) Output

- Visualizes detections on video frames.
- Converts metadata to structured JSON format.
- Publishes results to selected output targets.

## Conclusion

ViPPET's License Plate Recognition solution represents a paradigm shift in video analytics,
combining the flexibility of software-defined pipelines with the performance of Intel®-optimized
hardware acceleration.

The Simple Video Structurization (D-T-C) architecture provides:

### Key Advantages

- Unmatched Flexibility: Deploy across CPU, GPU, and NPU with identical codebase.
- Production-Ready Performance: GStreamer-based pipeline for enterprise reliability.
- Cost-Effective Scaling: Leverage standard Intel® hardware instead of specialized equipment.
- Future-Proof Architecture: Seamless integration with emerging Intel® technologies.

## LPR Test Views in ViPPET

### Performance Test

![LPR performance setup](../_assets/lpr-perform.png)
*Figure 2: LPR performance test configuration*

![LPR performance execution](../_assets/lpr-perfom-exec.png)
*Figure 3: LPR performance test execution*

![LPR performance results](../_assets/lpr-perform-results.png)
*Figure 4: LPR performance test results*

### Density Test

![LPR density setup](../_assets/lpr-density.png)
*Figure 5: LPR density test configuration*

![LPR density execution](../_assets/lpr-density-exec.png)
*Figure 6: LPR density test execution*

![LPR density results](../_assets/lpr-density-results.png)
*Figure 7: LPR density test results*

Whether you're implementing smart parking systems, traffic enforcement solutions, or logistics
automation, ViPPET provides the foundation for building world-class license plate recognition
applications that scale with your business needs.

## Next Steps

You can use the predefined License Plate Recognition pipeline described in this guide,
or configure your own custom pipeline in ViPPET:

- [Configure your own pipeline](./configure-pipelines.md)
- [Build LPR pipeline using API](./license-plate-recognition-api.md)
