import React from 'react';
import { AppBar, Toolbar, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Dropdown } from 'react-bootstrap';
import GridLayout from 'react-grid-layout';

export default function MainContent() {

    // Sample data for the table
    const rows = [
        { vendor: 'Faison Construction Inc', organization: 'Portland Parks and Recreation', contractDetails: '300078', status: 'ACTIVE', certifications: 'COBID, NMSDC, WBEC' },
        
        // ... add other rows here
    ];

    return (
        <div className="MainContent">
            <AppBar position="static" color="default">
            </AppBar>

            <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                <div key="a" data-grid={{ x: 0, y: 0, w: 12, h: 2 }}>
                    {/* Vendor Directory Title */}
                    <Typography variant="h5" gutterBottom>
                        Vendor Directory
                    </Typography>
                </div>

                <div key="b" data-grid={{ x: 0, y: 2, w: 12, h: 10 }}>
                    {/* Table */}
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Vendor Name</TableCell>
                                <TableCell>Organization Name</TableCell>
                                <TableCell>Contract Details</TableCell>
                                <TableCell>Contract Status</TableCell>
                                <TableCell>Certifications</TableCell>
                                <TableCell>Availability</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.vendor}</TableCell>
                                    <TableCell>{row.organization}</TableCell>
                                    <TableCell>{row.contractDetails}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color={row.status === 'ACTIVE' ? "primary" : "default"}>
                                            {row.status}
                                        </Button>
                                    </TableCell>
                                    <TableCell>{row.certifications}</TableCell>
                                    <TableCell>
                                        {/* Availability icon here */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </GridLayout>
        </div>
    );
}
