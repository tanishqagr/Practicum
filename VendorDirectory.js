import React from 'react';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function VendorDirectory() {
    const vendors = [
        { name: 'Faison Construction Inc', org: 'Portland Parks and Recreation', contract: '300078', status: 'Active', certification: 'COBID, NMDC, WBEC', availability: true },
        // Add other vendors here...
    ];

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Vendor Directory</Typography>
            <TableContainer component={Paper}>
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
                        {vendors.map((vendor, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{vendor.name}</TableCell>
                                <TableCell>{vendor.org}</TableCell>
                                <TableCell>{vendor.contract}</TableCell>
                                <TableCell>{vendor.status}</TableCell>
                                <TableCell>{vendor.certification}</TableCell>
                                <TableCell>{vendor.availability ? 'Available' : 'Not Available'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default VendorDirectory;
