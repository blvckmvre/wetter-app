import { useState } from "react";

export const useRequest = (cb:()=>Promise<any>) => {
    const [isLoading,toggleLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const makeRequest = async() => {
        try{
            toggleLoading(true);
            await cb();
        } catch(e: any) {
            setError(e.message);
        } finally {
            toggleLoading(false);
        }
    }
    return [makeRequest, isLoading, error] as const;
}