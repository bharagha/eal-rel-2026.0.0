# Use Predefined License Plate Recognition Pipeline Using API

This guide shows how to run LPR tests with the ViPPET REST API using an existing
predefined pipeline.

For architecture and pipeline details, see the
[License Plate Recognition pipeline guide](./license-plate-recognition-pipeline.md).

For endpoint and schema details, see the [API Reference](../api-reference.md).

![LPR pipeline](../_assets/lpr-pipeline.png)
*Figure 1: Predefined License Plate Recognition pipeline in ViPPET*

## API base URL

The OpenAPI server path is `/api/v1`.

Example local base URL:

```text
http://localhost:7860/api/v1
```

## Prerequisites

Before starting, verify API health and available resources:

```bash
# Check API health
curl -X GET "http://localhost:7860/api/v1/health"

# Check detailed status
curl -X GET "http://localhost:7860/api/v1/status"

# List available devices
curl -X GET "http://localhost:7860/api/v1/devices"

# List input videos
curl -X GET "http://localhost:7860/api/v1/videos"
```

## 1) Find a predefined LPR pipeline

List pipelines and find an LPR entry.

```bash
# List all pipelines
curl -X GET "http://localhost:7860/api/v1/pipelines" | jq '.'

# Filter probable LPR pipelines by name/description/tags
curl -X GET "http://localhost:7860/api/v1/pipelines" | jq '.[] |
  select(
    (.name // "" | ascii_downcase | contains("license")) or
    (.description // "" | ascii_downcase | contains("license")) or
    ((.tags // []) | tostring | ascii_downcase | contains("lpr"))
  ) |
  {id, name, description, tags}'
```

Save the selected `PIPELINE_ID`.

```bash
PIPELINE_ID="pipeline-abc123"
```

## 2) Select an existing variant

Get pipeline details and choose the variant to test, for example `CPU` or `GPU`.

```bash
# Show pipeline details (including variants)
curl -X GET "http://localhost:7860/api/v1/pipelines/$PIPELINE_ID" | jq '.'

# Example: pick variant ID by name
VARIANT_ID=$(curl -s -X GET "http://localhost:7860/api/v1/pipelines/$PIPELINE_ID" | jq -r '
  .variants[] | select((.name // "" | ascii_downcase) == "cpu") | .id
' | head -n 1)

echo "Selected variant: $VARIANT_ID"
```

If no CPU variant is available, pick any existing variant ID from the response.

## 3) Run a performance test with the predefined pipeline

Use `POST /tests/performance` and reference `source: "variant"`.

```bash
PERF_RESPONSE=$(curl -s -X POST "http://localhost:7860/api/v1/tests/performance" \
  -H "Content-Type: application/json" \
  -d @- << EOF
{
  "pipeline_performance_specs": [
    {
      "pipeline": {
        "source": "variant",
        "pipeline_id": "$PIPELINE_ID",
        "variant_id": "$VARIANT_ID"
      },
      "streams": 2
    }
  ],
  "execution_config": {
    "output_mode": "disabled",
    "max_runtime": 60
  }
}
EOF
)

PERF_JOB_ID=$(echo "$PERF_RESPONSE" | jq -r '.job_id')
echo "Performance job started: $PERF_JOB_ID"
```

## 4) Monitor performance job status

Use:

- `GET /jobs/tests/performance/{job_id}/status`
- `GET /jobs/tests/performance/{job_id}`

```bash
while true; do
  STATUS=$(curl -s "http://localhost:7860/api/v1/jobs/tests/performance/$PERF_JOB_ID/status")
  STATE=$(echo "$STATUS" | jq -r '.state')

  case "$STATE" in
    "COMPLETED")
      echo "Performance test completed"
      echo "Total FPS: $(echo "$STATUS" | jq '.total_fps')"
      echo "Per-stream FPS: $(echo "$STATUS" | jq '.per_stream_fps')"
      echo "Total streams: $(echo "$STATUS" | jq '.total_streams')"
      break
      ;;
    "FAILED")
      echo "Performance test failed"
      echo "$STATUS" | jq '.details'
      exit 1
      ;;
    "RUNNING")
      echo "Performance test running..."
      sleep 5
      ;;
    *)
      echo "State: $STATE"
      sleep 3
      ;;
  esac
done
```

## 5) Run density test on the same predefined variant

Use `POST /tests/density` to find maximum stream count at a target FPS floor.

```bash
DENSITY_RESPONSE=$(curl -s -X POST "http://localhost:7860/api/v1/tests/density" \
  -H "Content-Type: application/json" \
  -d @- << EOF
{
  "fps_floor": 25,
  "pipeline_density_specs": [
    {
      "pipeline": {
        "source": "variant",
        "pipeline_id": "$PIPELINE_ID",
        "variant_id": "$VARIANT_ID"
      },
      "stream_rate": 100
    }
  ],
  "execution_config": {
    "output_mode": "disabled",
    "max_runtime": 120
  }
}
EOF
)

DENSITY_JOB_ID=$(echo "$DENSITY_RESPONSE" | jq -r '.job_id')
echo "Density job started: $DENSITY_JOB_ID"
```

Monitor density status:

```bash
while true; do
  STATUS=$(curl -s "http://localhost:7860/api/v1/jobs/tests/density/$DENSITY_JOB_ID/status")
  STATE=$(echo "$STATUS" | jq -r '.state')

  case "$STATE" in
    "COMPLETED")
      echo "Density test completed"
      echo "Maximum streams: $(echo "$STATUS" | jq '.total_streams')"
      echo "Achieved per-stream FPS: $(echo "$STATUS" | jq '.per_stream_fps')"
      break
      ;;
    "FAILED")
      echo "Density test failed"
      echo "$STATUS" | jq '.details'
      exit 1
      ;;
    "RUNNING")
      echo "Density test running..."
      sleep 10
      ;;
    *)
      echo "State: $STATE"
      sleep 3
      ;;
  esac
done
```

## Troubleshooting

### Pipeline not found

- Verify `GET /pipelines` returns predefined pipelines.
- Confirm you selected a valid `PIPELINE_ID`.

### Variant not found

- Check `GET /pipelines/{pipeline_id}` and list available `variants`.
- Use an existing `variant_id` from that response.

### Performance is lower than expected

- Try a different predefined variant (for example GPU).
- Reduce input resolution and stream count.
- Check CPU, memory, and accelerator utilization.

## Related guides

- [License Plate Recognition pipeline guide](./license-plate-recognition-pipeline.md)
- [Configure pipelines guide](./configure-pipelines.md)
- [API Reference](../api-reference.md)
