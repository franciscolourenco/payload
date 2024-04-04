import type { FieldMap, MappedField } from '../../providers/ComponentMap/buildComponentMap/types.js'
import type { ColumnPreferences } from '../../providers/ListInfo/index.js'

export function fieldAffectsData(field: MappedField): boolean {
  return 'name' in field && field.type !== 'ui'
}

const getRemainingColumns = (fieldMap: FieldMap, useAsTitle: string): ColumnPreferences =>
  fieldMap.reduce((remaining, field) => {
    if (fieldAffectsData(field) && field.name === useAsTitle) {
      return remaining
    }

    if (!fieldAffectsData(field) && 'fieldMap' in field.fieldComponentProps) {
      return [...remaining, ...getRemainingColumns(field.fieldComponentProps.fieldMap, useAsTitle)]
    }

    if (field.type === 'tabs' && 'tabs' in field.fieldComponentProps) {
      return [
        ...remaining,
        ...field.fieldComponentProps.tabs.reduce(
          (tabFieldColumns, tab) => [
            ...tabFieldColumns,
            ...('name' in tab ? [tab.name] : getRemainingColumns(tab.fieldMap, useAsTitle)),
          ],
          [],
        ),
      ]
    }

    return [...remaining, field.name]
  }, [])

export const getInitialColumns = (
  fieldMap: FieldMap,
  useAsTitle: string,
  defaultColumns: string[],
): ColumnPreferences => {
  let initialColumns = []

  if (Array.isArray(defaultColumns) && defaultColumns.length >= 1) {
    initialColumns = defaultColumns
  } else {
    if (useAsTitle) {
      initialColumns.push(useAsTitle)
    }

    const remainingColumns = getRemainingColumns(fieldMap, useAsTitle)

    initialColumns = initialColumns.concat(remainingColumns)
    initialColumns = initialColumns.slice(0, 4)
  }

  return initialColumns.map((column) => ({
    accessor: column,
    active: true,
  }))
}
