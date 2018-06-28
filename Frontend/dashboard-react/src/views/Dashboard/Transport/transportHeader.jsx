import React from 'react';
export const busHeader = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Transport Type' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Bus Name' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Direction' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Number of vehicles' },
    { id: 'latitude', numeric: true, disablePadding: false, label: 'Coordinates' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Radius' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];
/*
export class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        };
    }

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.props.getCheckboxState(newSelected)
        this.setState({ selected: newSelected });
    };

    render(){
        const {classes} = this.props;
        const n = this.props.tableValues;
        const isSelected =this.props.classValues;
        return (
        <TableRow
        hover
        onClick={event => this.handleClick(event, n.id)}
        role="checkbox"
        aria-checked={isSelected}
        tabIndex={-1}
        key={n.id}
        selected={isSelected}
    >
        <TableCell padding="checkbox">
            <Checkbox checked={isSelected} />
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
            {n.transportType}
        </TableCell>
        <TableCell numeric>{n.transportLine}</TableCell>
        <TableCell numeric>{n.direction}</TableCell>
        <TableCell numeric>{n.transportAmount}</TableCell>
        <TableCell numeric>{n.latitudeX},{n.longitudeY}</TableCell>
        <TableCell numeric>{n.radius}</TableCell>
        <TableCell numeric>{n.status}</TableCell>
    </TableRow>)
    } ;
}*/
