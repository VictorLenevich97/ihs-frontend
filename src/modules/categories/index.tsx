import React from 'react';
import { Title } from 'effects/typography';
import { useGetCategoriesQuery } from 'store/categories';
import { AlertDismissible } from 'components';
import { Three } from './components/three';
import { SearchInput } from './components/searchInput';
import { Container } from 'effects/container';

export const Categories = () => {
  const { data = [], isError } = useGetCategoriesQuery();

  return (
    <>
      {isError ? (
        <AlertDismissible content="Ошибка загрузки категорий..." />
      ) : (
        <Container>
          <Title size={16} center={false}>
            Категории
          </Title>
          <SearchInput />

          {[...data.filter(({ enabled }) => enabled)].map(({ id, title, departments, link }) => (
            <Three key={id} title={title} id={id} departments={departments} caregoryLink={link} />
          ))}
        </Container>
      )}
    </>
  );
};
