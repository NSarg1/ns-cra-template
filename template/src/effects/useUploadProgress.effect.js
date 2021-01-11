import { useState } from "react";

const useUploadProgress = () => {
    const [progressStatus, setProgressStatus] = useState();
    const onUploadProgress = (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgressStatus(percentCompleted);
    };

    return { progressStatus, setProgressStatus, onUploadProgress };
};

export default useUploadProgress;
