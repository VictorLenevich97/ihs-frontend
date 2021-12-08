import _ from 'lodash';

interface IDescriptors<T> {
  fieldName: string;
}

export function modifyEntities<T>(entities: T[], descriptors: IDescriptors<T>[]) {
  if (!entities) {
    return entities;
  }
  let modificationResult = entities;

  descriptors.forEach(descriptor => {
    modificationResult = modifyEntitiesField<T>(modificationResult, descriptor);
  });

  return modificationResult;
}

function modifyEntitiesField<T>(entities: T[], modificationDescriptor: IDescriptors<T>) {
  const modificationEntitiesMap = new Map();
  const modificationResult: T[] = [];

  entities.forEach((entity: any) => {
    const modificationFieldValue = entity[modificationDescriptor.fieldName];
    if (
      _.isPlainObject(modificationFieldValue) &&
      !modificationEntitiesMap.has(modificationFieldValue.id)
    ) {
      modificationEntitiesMap.set(modificationFieldValue.id, modificationFieldValue);
    }

    if (modificationEntitiesMap.has(modificationFieldValue)) {
      modificationResult.push({
        ...entity,
        [modificationDescriptor.fieldName]: modificationEntitiesMap.get(modificationFieldValue),
      });
    } else {
      modificationResult.push(entity);
    }
  });
  return modificationResult;
}
