import React from 'react';
import Typography from '@material-ui/core/Typography';

const StickyFooter = ({ padding }) => (
    <footer style={padding ? { textAlign: 'center', paddingTop: padding } : { textAlign: 'center', marginTop: 'auto' }}>
        <Typography variant="body2">
            Built with love by Louie Williford, &copy; 2019
            </Typography>
    </footer>
);

export default StickyFooter;