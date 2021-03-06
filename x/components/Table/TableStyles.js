import { StyleSheet } from 'react-native';

export default (theme) => {
    let TableStyles = {
        defaultTypeTable: {
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,.05)',
            borderRadius: 20,
            display: 'flex',
            width: '100%',
        },
    };

    // Assign Table Sizes
    Object.keys(theme.table.sizes).map((size) => {
        TableStyles[`${ size }SizeTable`] = {
            height: theme.table.sizes[size],
        }
    })

    // Assign Table Spacing
    Object.keys(theme.table.spacing).map((spacing) => {
        TableStyles[`${ spacing }SpacingTable`] = {
            marginBottom: theme.table.spacing[spacing],
        }
    })

    // Assign Table Padding
    Object.keys(theme.table.padding).map((padding) => {
        TableStyles[`${ padding }PaddingTable`] = {
            padding: theme.table.padding[padding],
        }
    })

    // Assign Table Colors
    Object.keys(theme.table.colors).map((color) => {
        TableStyles[`${ color }ColorTable`] = {
            backgroundColor: theme.table.colors[color],
        }
    })

    // Assign Table Direction
    Object.keys(theme.table.directions).map((direction) => {
        TableStyles[`${ direction }DirectionTable`] = {
            flex: 1,
            flexDirection: theme.table.directions[direction],
        }
    })

    return StyleSheet.create(TableStyles);
}
