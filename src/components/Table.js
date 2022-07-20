const React = require('react');
const { StyleSheet } = require('@react-pdf/renderer');
const { Table: LibTable, TableHeader, TableCell, TableBody, DataTableCell } = require('@david.kucsai/react-pdf-table');

const Table = ({ data, columns }) => {
    const generateColumns = (data, columns) => {
        let columnElements = Object.values(columns);
        if (!columnElements) {
            columnElements = Object.keys(data[0]).map(label => label.charAt(0).toUpperCase() + label.slice(1));
        }
        return columnElements.map((col, index) => <TableCell key={`table-header-${index}`}>{col}</TableCell>);
    };

    return (
        <LibTable data={data}>
            <TableHeader textAlign="center">
                {generateColumns(data, columns)}
            </TableHeader>
            <TableBody>
                <DataTableCell style={styles.tableCell} getContent={(r) => r.date} />
                <DataTableCell style={styles.tableCell} getContent={(r) => r.time} />
                <DataTableCell style={styles.tableCell} getContent={(r) => r.location} />
                <DataTableCell style={{ ...styles.tableCell, textAlign: 'center' }} getContent={(r) => r.homeClub ? 'Yes' : 'No'} />
            </TableBody>
        </LibTable>
    );
};

const styles = StyleSheet.create({
    tableCell: {
        color: 'gray',
        padding: 2
    }
});

module.exports = { Table };
