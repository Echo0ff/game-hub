import useData from "./useData";

export interface FilterPlatform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const {data: platforms, error, isLoading} = useData<FilterPlatform>("/platforms");
    return {platforms, error, isLoading};
}

export default usePlatforms;    