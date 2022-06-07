import Button from '@mui/material/Button';


export default function SMbuttons(props) {
    const { label ,onClick} = props
    return (

        <Button id='buttons' onClick={onClick} variant="contained">{label}</Button>

    )
}