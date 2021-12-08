import { AlertDismissible, FolderTree, Loader } from 'components';
import { useLocation } from 'react-router-dom';
import { useGetPublicationCategoriesQuery } from 'store/publications';
import { combineHashFromId, ROOT_ID, parseIdFromHash } from 'lib/categoryRouteHash';

interface Props {
  isSubcategories?: boolean;
  setIsSubcategories?: (value: boolean) => void;
}

export const PublicationsFolderTree = ({ isSubcategories, setIsSubcategories }: Props) => {
  const location = useLocation();
  const { hash } = location;
  const { data = [], isError, isLoading } = useGetPublicationCategoriesQuery();

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
      tree={[{ id: ROOT_ID, title: 'Все публикации', childCategories: data }]}
      onSelectFolder={handleSelectFolder}
      selectedFolder={parseIdFromHash(hash)}
      isSubcategories={isSubcategories}
      setIsSubcategories={setIsSubcategories}
    />
  );
};
