import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component={Link} to="/data-guru" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Data Guru
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component={Link} to="/data-siswa" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Data Siswa
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
