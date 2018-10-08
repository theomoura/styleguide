import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Column, Table as VirtualTable, AutoSizer } from 'react-virtualized'
import ArrowDown from '../icon/ArrowDown'
import ArrowUp from '../icon/ArrowUp'
const ARROW_SIZE = 11
const ROW_HEIGHT = 64
const HEADER_HEIGHT = 36

class SimpleTable extends PureComponent {
  toggleSortType = (key) => {
    const { sort: { sortOrder, sortedBy } } = this.props
    if (sortedBy !== key || (sortedBy === key && sortOrder !== 'ASC')) {
      return {
        sortOrder: 'ASC',
        sortedBy: key,
      }
    }
    return {
      sortOrder: 'DESC',
      sortedBy: key,
    }
  }

  render() {
    const {
      schema,
      items,
      indexColumnLabel,
      disableHeader,
      onRowClick,
      onRowMouseOver,
      onRowMouseOut,
      containerHeight,
      sort: { sortOrder, sortedBy },
      onSort,
      updateTableKey,
    } = this.props
    const properties = Object.keys(schema.properties)
    // hydrate items with index when 'indexColumn' prop is true
    const newItems = indexColumnLabel && items.length > 0
      ? items.map((item, index) => ({
        ...item,
        _reactVirtualizedIndex: index + 1,
      }))
      : items
    return (
      <div
        className="vh-100"
        style={containerHeight ? { height: containerHeight } : {}}>
        <AutoSizer>
          {({ width, height }) => (
            <VirtualTable
              updateTableKey={updateTableKey}
              width={width}
              height={height}
              headerHeight={HEADER_HEIGHT}
              rowHeight={ROW_HEIGHT}
              rowCount={newItems.length}
              rowGetter={({ index }) => newItems[index]}
              className="flex flex-column"
              headerClassName="c-muted-2 f6"
              disableHeader={disableHeader}
              onRowClick={({ event, index, rowData }) => {
                onRowClick({ event, index, rowData })
              }}
              onRowMouseOver={({ event, index, rowData }) => {
                onRowMouseOver({ event, index, rowData })
              }}
              onRowMouseOut={({ event, index, rowData }) => {
                onRowMouseOut({ event, index, rowData })
              }}
              rowClassName={({ index }) =>
                `flex flex-row items-center ${
                  index === -1 ? 'bt bb' : 'bb'
                } b--muted-4`
              }
            >
              {indexColumnLabel && (
                <Column
                  headerRenderer={() => (
                    <span className="ph4">{indexColumnLabel}</span>
                  )}
                  cellRenderer={({ cellData }) => (
                    <span className="ph4">{cellData}</span>
                  )}
                  dataKey="_reactVirtualizedIndex"
                  label={indexColumnLabel}
                  width={width / 10} // since index are only integers 10% of table width is enough
                />
              )}
              {properties.map((key, index) => {
                const label = schema.properties[key].title
                const cellWidthPercent = schema.properties[key].width || 25
                const cellWidth = (width * cellWidthPercent) / 100
                const headerRenderer = schema.properties[key].headerRenderer
                const cellRenderer = schema.properties[key].cellRenderer
                return (
                  <Column
                    key={index}
                    headerRenderer={
                      headerRenderer ||
                      (({ label }) => {
                        return (
                          <div className="truncate ph4">
                            {schema.properties[key].sortable
                              ? <span className="pointer c-muted-1 b f6"
                                onClick={() => {
                                  onSort(this.toggleSortType(key))
                                }}>
                                {`${label} `}
                                {sortOrder === 'ASC' && sortedBy === key
                                  ? <ArrowDown size={ARROW_SIZE} />
                                  : sortOrder === 'DESC' && sortedBy === key
                                    ? <ArrowUp size={ARROW_SIZE} />
                                    : null
                                }
                              </span>
                              : label
                            }
                          </div>
                        )
                      })
                    }
                    cellRenderer={
                      cellRenderer ||
                      (({ cellData }) => <div className="truncate ph4">{cellData}</div>)
                    }
                    dataKey={key}
                    label={label}
                    width={cellWidth}
                  />
                )
              })}
            </VirtualTable>
          )}
        </AutoSizer>
      </div>
    )
  }
}

SimpleTable.defaultProps = {
  indexColumnLabel: null,
  items: [],
  disableHeader: false,
  onRowClick: () => {},
  onRowMouseOut: () => {},
  onRowMouseOver: () => {},
  sort: {
    sortOrder: null,
    sortedBy: null,
  },
}

SimpleTable.propTypes = {
  /** Array of objects with data */
  items: PropTypes.array.isRequired,
  /** Json Schema data model for the items (example: https://jsonschema.net/) for custom examples see code from custom components */
  schema: PropTypes.object.isRequired,
  /** Activates a first column as row index (line count)  */
  indexColumnLabel: PropTypes.string,
  /** Do not render the table header (only the rows) */
  disableHeader: PropTypes.bool,
  /** Callback invoked when a user clicks on a table row. ({ event: Event, index: number, rowData: any }): void */
  onRowClick: PropTypes.func,
  /** Callback invoked when a user moves the mouse over a table row. ({ event: Event, index: number, rowData: any }): void */
  onRowMouseOver: PropTypes.func,
  /** Callback invoked when the mouse leaves a table row. ({ event: Event, index: number, rowData: any }): void */
  onRowMouseOut: PropTypes.func,
  /** Sort order and which property (key in schema) is table data sorted by. */
  sort: PropTypes.shape({
    sortOrder: PropTypes.oneOf(['ASC', 'DESC']),
    sortedBy: PropTypes.string,
  }),
  /** Callback to handle sort ({ sortOrder, sortedBy }) : object */
  onSort: PropTypes.func,
  /** Changing this key forces table to re-render (you will need this to handle locale changes if you use intl FormatedMessage inside cellRenderer) */
  updateTableKey: PropTypes.string,
  /** In case you need precise control of table container height (number in pixels)  */
  containerHeight: PropTypes.number,
}

export default SimpleTable