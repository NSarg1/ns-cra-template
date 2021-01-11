import { useState } from "react";
//EFFECTS
import useUploadProgress from "effects/useUploadProgress.effect";

const useFileUpload = (INITIAL_STATE = [], isMulti) => {
    const { progressStatus, setProgressStatus, onUploadProgress } = useUploadProgress();
    const [filesState, setFilesState] = useState(INITIAL_STATE);
    const [isLoading, setIsLoading] = useState(false);

    const handleReset = () => {
        setFilesState(INITIAL_STATE);
        setProgressStatus(0);
    };

    const handleFiles = (event) => {
        event.preventDefault();
        if (!isMulti) handleReset();
        let files;
        if (event.dataTransfer?.files) files = event.dataTransfer.files;
        if (event.target?.files) files = event.target.files;

        if (files.length) {
            setIsLoading(true);
            for (let file of files) {
                setFilesState((prevState) => [...prevState, { preview: URL.createObjectURL(file), file }]);
            }
        }
    };

    const handleDelete = (idx) => {
        const filesStateCopy = [...filesState];
        filesStateCopy.splice(idx, 1);
        setFilesState(filesStateCopy);
    };

    return {
        progressStatus: !!filesState?.length && progressStatus,
        onUploadProgress,
        handleFiles,
        filesState,
        handleDelete,
        isLoading,
    };
};

export default useFileUpload;
