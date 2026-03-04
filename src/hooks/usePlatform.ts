import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platform } = usePlatforms();

  return platform?.results.find((g) => g.id === id);
};

export default usePlatform;
