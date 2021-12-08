import { AlertDismissible, FolderTree, Loader } from 'components';
import { useLocation } from 'react-router-dom';
import { combineHashFromId, ROOT_ID, parseIdFromHash } from 'lib/categoryRouteHash';
import { useGetSafetyCategoriesQuery } from 'store/safety';

interface Props {
  isSubcategories?: boolean;
  setIsSubcategories?: (value: boolean) => void;
}

export const SafetyFolderTree = ({ isSubcategories, setIsSubcategories }: Props) => {
  const location = useLocation();
  const { hash } = location;
  const { data = [], isError, isLoading } = useGetSafetyCategoriesQuery();

  const handleSelectFolder = (id: number) => {
    window.location.hash = combineHashFromId(id);
  };
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <AlertDismissible content="Ошибка загрузки категорий..." />;
  }
  return (
    <FolderTree
      tree={[{ id: ROOT_ID, title: 'Все категории', childCategories: data }]}
      onSelectFolder={handleSelectFolder}
      selectedFolder={parseIdFromHash(hash)}
      isSubcategories={isSubcategories}
      setIsSubcategories={setIsSubcategories}
    />
  );
};
