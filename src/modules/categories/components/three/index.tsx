import { Link } from 'react-router-dom';
import { PAGE } from 'constant/routes';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { Title } from 'effects/typography';
import { IDepartment } from 'types';

import * as S from './three.styled';
import { Collapse } from 'react-bootstrap';
import { Arrow } from './three.styled';

interface Props {
  id?: number;
  title: string;
  departments: IDepartment[];
  caregoryLink: string;
}

export const Three = ({ title, departments = [], caregoryLink }: Props) => {
  const [viewDepartments, setViewDepartments] = useState(false);

  return (
    <S.Container>
      <Title
        id="title"
        onClick={() => setViewDepartments(!viewDepartments)}
        size={16}
        color="#000"
        fontWeight={500}
        lineHeight={30}
      >
        {title} {!isEmpty(departments) && <Arrow active={viewDepartments ? 1 : 0} />}
      </Title>
      <Collapse in={viewDepartments} mountOnEnter>
        <div>
          {[...departments.filter(({ enabled }) => enabled)].map(({ id, title, link }) => (
            <div key={id} className={'ml-3'}>
              <Link
                to={`${PAGE}/${caregoryLink}/${link}?departmentId=${id}&departmentTitle=${title}`}
              >
                <S.SubTitle>{title}</S.SubTitle>
              </Link>
            </div>
          ))}
        </div>
      </Collapse>
    </S.Container>
  );
};
