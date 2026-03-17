# How To Use ViPPET

The [gvapython modules article](./how-to-guides/use-gvapython-scripts.md) explains how to
add user-defined Python scripts that can be loaded as modules by the `gvapython` element.

The [video generator article](./how-to-guides/use-video-generator.md) explains how to
use the video generator to create composite videos from images stored in subdirectories.

The [pipeline configuration article](./how-to-guides/configure-pipelines.md) explains step-by-step how to configure
and test AI pipelines using ViPPET's Pipeline Builder, from creating a new pipeline, editing the pipeline elements,
to demonstrating running pipelines on both CPU and GPU to compare performance.

The [performance testing article](./how-to-guides/performance-testing.md) covers performance testing of single pipelines
as well as multiple pipelines running concurrently.

## Example: Real-Time License Plate Recognition (LPR)

![LPR pipeline](./_assets/lpr-pipeline.png)
*Figure 1: License Plate Recognition pipeline in ViPPET*


This use case mirrors a common smart city workload and can be reproduced in ViPPET to compare Intel® platforms for
license plate analytics.

**Goal**: Detect vehicles, localize license plates, and read plate text from live or recorded video in real time.

For the complete architecture, hardware variants (CPU/GPU/GPU+NPU), pipeline examples, and benchmark guidance, see:

- [License Plate Recognition Pipeline Guide](docs/user-guide/how-to-guides/license-plate-recognition-pipeline.md)

Use ViPPET's built-in **Performance Test** and **Density Test** to collect measured platform-specific throughput,
latency, utilization, and sustainable stream density.

<!--hide_directive
:::{toctree}
:maxdepth: 2
:hidden:

./how-to-guides/use-gvapython-scripts
./how-to-guides/use-video-generator
./how-to-guides/configure-pipelines
./how-to-guides/performance-testing
./how-to-guides/density-testing.md
./how-to-guides/license-plate-recognition-pipeline.md
./how-to-guides/license-plate-recognition-api.md

:::
hide_directive-->