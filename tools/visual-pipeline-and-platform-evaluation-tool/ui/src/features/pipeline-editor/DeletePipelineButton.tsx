import { Trash2 } from "lucide-react";
import { useDeletePipelineMutation } from "@/api/api.generated";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { isApiError } from "@/lib/apiUtils";
import { Button } from "@/components/ui/button";

interface DeletePipelineButtonProps {
  pipelineId: string;
  pipelineName: string;
}

const DeletePipelineButton = ({
  pipelineId,
  pipelineName,
}: DeletePipelineButtonProps) => {
  const [deletePipeline, { isLoading }] = useDeletePipelineMutation();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete pipeline "${pipelineName}"?`,
    );

    if (!confirmed) return;

    try {
      await deletePipeline({ pipelineId }).unwrap();
      toast.success(`Pipeline "${pipelineName}" deleted successfully`);
      navigate("/");
    } catch (error) {
      const errorMessage = isApiError(error)
        ? error.data.message
        : "Failed to delete pipeline";
      toast.error(errorMessage);
    }
  };

  return (
    <Button onClick={handleDelete} disabled={isLoading} variant="destructive">
      <Trash2 />
      {isLoading ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default DeletePipelineButton;
