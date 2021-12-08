import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Checkbox } from 'components';

import { ReactComponent as ArrowIcon } from 'static/icons/arrow.svg';
import { ReactComponent as FolderIcon } from 'static/icons/folder.svg';

import * as S from './folderTree.styled';

interface ITree {
  id: number;
  title: string;
  childCategories: ITree[] | any[];
}
interface FolderTreeProps {
  tree: ITree[];
  onSelectFolder: (id: number) => void;
  selectedFolder?: number;
  isSubcategories?: boolean;
  setIsSubcategories?: any;
  isThreeFilterable?: boolean;
}

const DEFAULT_OPEN_FOLDER = { 0: true };

export const FolderTree = ({
  tree,
  onSelectFolder,
  selectedFolder,
  isSubcategories,
  setIsSubcategories,
  isThreeFilterable = false,
}: FolderTreeProps) => {
  const [openedFolders, setOpenedFolders] =
    useState<{ [folderId: number]: boolean }>(DEFAULT_OPEN_FOLDER);

  const parseTreeRecursion = (tree: ITree[]) => {
    return tree.map(item => {
      const isOpen = openedFolders[item.id];
      const isChildrenExist = !!item.childCategories?.length;
      return (
        <div key={item.id}>
          <S.Item
            selected={item.id === selectedFolder}
            // onDoubleClick={() => onSelectFolder(item.id)} If you want double click without onClick
            onClick={() => onSelectFolder(item.id)}
            tabIndex={0}
          >
            <S.ArrowContainer
              active={isOpen}
              onClick={e => {
                e.stopPropagation();
                setOpenedFolders(old => ({ ...old, [item.id]: !old[item.id] }));
              }}
            >
              {isChildrenExist && <ArrowIcon width={22} height={13} />}
            </S.ArrowContainer>
            <S.FolderIconContainer>
              <FolderIcon />
            </S.FolderIconContainer>
            <S.Title>{item.title}</S.Title>
          </S.Item>
          {isChildrenExist ? (
            <Collapse in={isOpen} mountOnEnter>
              <S.Shift>{item.childCategories && parseTreeRecursion(item.childCategories)}</S.Shift>
            </Collapse>
          ) : null}
        </div>
      );
    });
  };

  const filterContainer = () => {
    const onChange = () => {
      setIsSubcategories && setIsSubcategories(!isSubcategories);
    };

    return (
      <S.FilterContainer>
        <div>
          <Checkbox
            checked={isSubcategories === true}
            label="Отобразить документы категории и подкатегорий"
            onChange={onChange}
            value={true}
          />
        </div>
        <div>
          <Checkbox
            checked={isSubcategories === false}
            label="Отобразить документы категории"
            onChange={onChange}
            value={false}
          />
        </div>
      </S.FilterContainer>
    );
  };

  return (
    <S.Container>
      {isThreeFilterable && filterContainer()}
      {parseTreeRecursion(tree)}
    </S.Container>
  );
};
