import React, { useEffect, useState } from 'react';
import {
  EditTextArea,
  EmptyMessage,
  ErrorMessage,
  FixedColumn,
  InputGrid,
  OperationButton,
  OperationsContainer,
  Pagination,
  SelectedRowContainer,
  SelectedRowTable,
  SqlTextArea,
  StyledAdminDatabase,
  StyledInput,
  StyledLabel,
  StyledTH,
  StyledTable,
  StyledTableButton,
  SuccessMessage,
  TableActions,
  TableContainer,
  TableHeader,
} from './adminDatabase.styles';
import {
  useExecuteSqlMutation,
  useGetTableDataQuery,
  useInsertRowMutation,
} from '../../generated/graphql';
import Loading from '../loading/loading';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoAdd, IoFilter, IoRefresh, IoRemove } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SpringModal from './modal/BasicModal';
import { useIsUserAdmin } from '../../hooks/useIsUserAdmin';
import LogoLoading from '../logo-loading/logoLoading';

const AdminDatabase = () => {
  const [tableName, setTableName] = useState<string>('users');
  const [sqlError, setSQLError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const [totalRowsCount, setTotalRowsCount] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newRowData, setNewRowData] = useState<Record<string, string>>({});
  const [sqlStatement, setSqlStatement] = useState<string>('');
  const [tableData, setTableData] = useState<any[]>([]);
  const [sortedColumn, setSortedColumn] = useState<string>('');
  const [editing, setEditing] = useState(false);
  const [editedRow, setEditedRow] = useState<any>(null);
  const [sortColumn, setSortColumn] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const [{ data, fetching, error }] = useGetTableDataQuery({
    variables: { tableName, page },
  });

  const { isAdminOrMod, loading, adminError } = useIsUserAdmin();

  const [, executeSQLStatement] = useExecuteSqlMutation();
  const [, executeINSERTStatement] = useInsertRowMutation();

  const generateSqlStatement = (updatedRow: any) => {
    const keys = Object.keys(updatedRow);
    const values = Object.values(updatedRow);

    const setStatement = keys
      .map(
        (key, index) =>
          `"${key}" = ${
            Array.isArray(values[index])
              ? `{${(values[index] as any).join(',')}}`
              : `'${
                  typeof values[index] === 'string'
                    ? (values[index] as any).replace(/'/g, "''")
                    : values[index]
                }'`
          }`,
      )
      .join(', ');

    const sqlStatement = `UPDATE "${tableName}" SET ${setStatement} WHERE id = '${selectedRow.id.replace(
      /'/g,
      "''",
    )}'`;

    setSqlStatement(sqlStatement);
  };

  const sortData = (data: any[], column: string, direction: 'asc' | 'desc') => {
    return [...data].sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewRowData({});
  };

  const handleNewRowDataChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    columnName: string,
  ) => {
    setNewRowData((prevData: Record<string, string>) => ({
      ...prevData,
      [columnName]: event.target.value,
    }));
  };

  const handleAddNewRow = async () => {
    // Ensure all column data is filled
    for (let columnName of columnNames) {
      if (
        !['createdAt', 'updatedAt', 'deletedAt'].includes(columnName) &&
        (newRowData[columnName] === undefined || newRowData[columnName] === '')
      ) {
        alert(`Please fill in the data for ${columnName}`);
        return;
      }
    }

    // Construct the SQL query
    const keys = Object.keys(newRowData)
      .map(key => `"${key}"`)
      .join(', ');
    const values = Object.values(newRowData)
      .map(value => `'${value.replace(/'/g, "''")}'`)
      .join(', ');

    const sqlStatement = `INSERT INTO "${tableName}" (${keys}) VALUES (${values})`;
    console.log({ sqlStatement });
    // Execute the SQL query
    const response = await executeINSERTStatement({
      sql: sqlStatement,
      params: [],
    });

    // Handle the response
    if (response.error) {
      alert(response.error.message);
    } else {
      alert('Row added successfully!');
      // Clear newRowData for next entry
      setNewRowData({});
      // Refresh the table data
      setTableData([...tableData, newRowData]);
      handleCloseAddModal();
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setEditedRow({ ...selectedRow });
  };

  const handleChange = (event: any, columnName: string) => {
    const updatedRow = { ...editedRow, [columnName]: event.target.value };
    setEditedRow(() => updatedRow);
    generateSqlStatement(updatedRow);
  };

  const handleSubmit = async () => {
    setSQLError(null);
    const response = await executeSQLStatement({
      sql: sqlStatement,
      params: [],
    });

    if (response.error) {
      setSQLError(response.error.message);
      setTimeout(() => setSQLError(null), 5000);
    } else {
      setSuccessMessage('Update successful!');
      setTimeout(() => setSuccessMessage(null), 5000);
    }

    setSelectedRow(editedRow);
    setEditing(false);
    setSQLError(null);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedRow(null);
    setSQLError(null);
  };

  const tables = [
    {
      name: 'Version',
      id: 'version',
    },
    {
      name: 'Admin User',
      id: 'admin_user',
    },
    {
      name: 'Admin Notifications',
      id: 'admin_notifications',
    },
    {
      name: 'Comment',
      id: 'comment',
    },
    {
      name: 'Comment Report',
      id: 'comment_report',
    },
    {
      name: 'Comment Stats',
      id: 'comment_stats',
    },
    {
      name: 'Contact',
      id: 'contact',
    },
    {
      name: 'Follow',
      id: 'follow',
    },
    {
      name: 'Follow Notifications',
      id: 'follow_notifications',
    },
    {
      name: 'Like Notifications',
      id: 'like_notifications',
    },
    {
      name: 'Movie',
      id: 'movie',
    },
    {
      name: 'Movie Stats',
      id: 'movie_stats',
    },
    {
      name: 'Platform',
      id: 'platform',
    },
    {
      name: 'Profile',
      id: 'profile',
    },
    {
      name: 'Reply',
      id: 'reply',
    },
    {
      name: 'Reply Report',
      id: 'reply_report',
    },
    {
      name: 'Reply Stats',
      id: 'reply_stats',
    },
    {
      name: 'Title',
      id: 'title',
    },
    {
      name: 'Users',
      id: 'users',
    },
    {
      name: 'Visited',
      id: 'visited',
    },
  ];

  const handleRowSelect = (row: any) => {
    setSelectedRow(row);
    setEditing(false);
  };

  const handleTableSelect = (id: any) => {
    setTableName(() => id);
    setPage(() => 1);
    setSelectedRow(() => null);
    setEditing(false);
  };

  const handleSort = (columnName: string) => {
    setSortColumn(prev => {
      if (prev && prev.key === columnName) {
        return {
          key: columnName,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        return { key: columnName, direction: 'asc' };
      }
    });
    setSortedColumn(() => columnName);
  };

  useEffect(() => {
    if (!fetching && data) {
      const _data = data.getTableData;
      const _columnNames = _data.columnNames;
      const rowsCount = _data.totalRows;
      setTotalRowsCount(() => rowsCount);
      setColumnNames(() => _columnNames);
      let columnData = JSON.parse(_data.data);

      if (sortColumn) {
        columnData = sortData(columnData, sortColumn.key, sortColumn.direction);
      }

      setTableData(() => columnData);
    }
  }, [tableName, data, fetching, sortColumn]);

  if (loading) {
    return <LogoLoading />;
  }

  if (adminError) {
    return (
      <div>
        Error fetching admins and moderators. Please try refreshing the page.
      </div>
    );
  }
  if (!isAdminOrMod) return <div>You do not have access to this page</div>;
  return (
    <StyledAdminDatabase>
      <div className="database-options">
        {tables.map(table => (
          <div
            key={table.id}
            className="table-title"
            onClick={() => handleTableSelect(table.id)}
          >
            {table.name}
          </div>
        ))}
      </div>
      {tableName && (
        <TableHeader>
          <h2>
            {tables.find(table => table.id === tableName)?.name} (
            {totalRowsCount})
          </h2>
          <TableActions>
            <Pagination>
              <button
                onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
              >
                <IoIosArrowBack />
              </button>
              <span>
                Page {page}/
                {Math.ceil(totalRowsCount / 10) === 0
                  ? 1
                  : Math.ceil(totalRowsCount / 10)}
              </span>
              <button
                onClick={() => {
                  if (Math.ceil(totalRowsCount / 10) > page)
                    setPage(prevPage => prevPage + 1);
                }}
              >
                <IoIosArrowForward />
              </button>
            </Pagination>
            <StyledTableButton onClick={handleOpenAddModal}>
              <IoAdd /> Add
            </StyledTableButton>
            <StyledTableButton>
              <IoRemove /> Drop
            </StyledTableButton>
            <StyledTableButton>
              <IoRefresh /> Clear
            </StyledTableButton>
          </TableActions>
        </TableHeader>
      )}
      {fetching ? (
        <Loading />
      ) : tableData.length > 0 ? (
        <div className="data-container">
          <TableContainer>
            <StyledTable>
              <thead>
                <tr>
                  {columnNames.map((columnName, index) => (
                    <StyledTH
                      isSorted={columnName === sortedColumn}
                      key={index}
                      onClick={() => handleSort(columnName)}
                    >
                      {columnName}{' '}
                      <span>
                        <IoFilter />
                      </span>
                    </StyledTH>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} onClick={() => handleRowSelect(row)}>
                    {columnNames.map((columnName, index) => (
                      <td key={index}>{String(row[columnName])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableContainer>

          {editing && (
            <>
              <h4>Query:</h4>
              <SqlTextArea
                value={sqlStatement}
                onChange={e => setSqlStatement(() => e.target.value)}
              />
            </>
          )}
          {sqlError && <ErrorMessage>{sqlError}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {selectedRow && (
            <SelectedRowContainer>
              <div className="selected-row-header">
                <h3>Selected Row</h3>
                <OperationsContainer>
                  {editing ? (
                    <>
                      <OperationButton onClick={handleSubmit}>
                        <AiFillEdit /> Submit
                      </OperationButton>
                      <OperationButton delete onClick={handleCancel}>
                        <AiFillDelete /> Cancel
                      </OperationButton>
                    </>
                  ) : (
                    <>
                      <OperationButton onClick={handleEdit}>
                        <AiFillEdit /> Edit
                      </OperationButton>
                      <OperationButton
                        delete
                        onClick={() => console.log('Delete Row')}
                      >
                        <AiFillDelete /> Delete
                      </OperationButton>
                    </>
                  )}
                </OperationsContainer>
              </div>
              <SelectedRowTable>
                <tbody>
                  {columnNames.map((columnName, index) => (
                    <tr key={index}>
                      <FixedColumn>{columnName}</FixedColumn>
                      <td>
                        {editing ? (
                          <EditTextArea
                            value={editedRow[columnName]}
                            onChange={e => handleChange(e, columnName)}
                          />
                        ) : (
                          String(selectedRow[columnName])
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </SelectedRowTable>
            </SelectedRowContainer>
          )}
        </div>
      ) : (
        <EmptyMessage>No data available for the selected table.</EmptyMessage>
      )}
      <SpringModal open={isAddModalOpen} handleClose={handleCloseAddModal}>
        <h2>Add new row to {tableName}</h2>
        {columnNames
          .filter(
            columnName =>
              !['createdAt', 'updatedAt', 'deletedAt'].includes(columnName),
          )
          .map((columnName, index) => (
            <InputGrid key={index}>
              <StyledLabel className="spring-modal-title">
                {columnName}
              </StyledLabel>
              <StyledInput
                type="text"
                value={newRowData[columnName] || ''}
                onChange={e => handleNewRowDataChange(e, columnName)}
              />
            </InputGrid>
          ))}
        <StyledTableButton style={{ float: 'right' }} onClick={handleAddNewRow}>
          Add Row
        </StyledTableButton>
      </SpringModal>
    </StyledAdminDatabase>
  );
};

export default AdminDatabase;
