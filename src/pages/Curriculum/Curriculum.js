import './Curriculum.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { data } from '../../assets/data.js'
import { CurriculumContainer } from './Curriculum.styled.js'
// const Curriculum2 = () => {
//   let file = {
//     name: 'data.xlsx',
//     lastModified: 1669034274997,
//     lastModifiedDate: 'Mon Nov 21 2022 13:37:54 GMT+0100 (West Africa Standard Time)',
//     webkitRelativePath: '',
//     size: 6095,
//   }
//   const [state, setState] = useState({ rows: null, cols: null })
//   const [loaded, setLoaded] = useState(false)
//   const fileHandler = event => {
//     let fileObj = event.target.files[0]
//
//     //just pass the fileObj as parameter
//     ExcelRenderer(file, (err, resp) => {
//       if (err) {
//         console.log(err)
//       } else {
//         setState({
//           cols: resp.cols,
//           rows: resp.rows,
//         })
//         // setLoaded(true)
//       }
//     })
//   }
//   console.log('state', state)
//   return (
//     <>
//       <input type='file' onChange={fileHandler} style={{ padding: '10px' }} />
//       {loaded && (
//         <OutTable
//           data={state.rows}
//           columns={state.cols}
//           tableClassName='ExcelTable2007'
//           tableHeaderRowClass='heading'
//         />
//       )}
//     </>
//   )
// }

const Curriculum2 = () => {
  return (
    <CurriculumContainer>
      <h1 style={{ paddingLeft: '25px' }}>Curriculum</h1>
      <TableContainer component={Paper} style={{ height: '88vh' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: 1, borderColor: '#f4f4f4' }}>Areas</TableCell>
              <TableCell sx={{ border: 1, borderColor: '#f4f4f4' }} align='left'>
                Activities
              </TableCell>
              <TableCell sx={{ border: 1, borderColor: '#f4f4f4' }} align='left'>
                Topics
              </TableCell>
              <TableCell sx={{ border: 1, borderColor: '#f4f4f4' }} align='left'>
                Duration
              </TableCell>
              <TableCell sx={{ border: 1, borderColor: '#f4f4f4' }} align='left'>
                Stage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data, i) => (
              <TableRow
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { borderRight: 1, borderColor: '#f4f4f4' },
                }}
              >
                <TableCell align='left' sx={{ border: 1, borderColor: '#f4f4f4' }}>
                  {data.Areas}
                </TableCell>
                <TableCell align='left' sx={{ border: 1, borderColor: '#f4f4f4' }}>
                  {data.Activities}
                </TableCell>
                <TableCell align='left' sx={{ border: 1, borderColor: '#f4f4f4' }}>
                  {data.Column3}
                </TableCell>
                <TableCell align='left' sx={{ border: 1, borderColor: '#f4f4f4' }}>
                  {data.Duration}
                </TableCell>
                <TableCell align='left' sx={{ border: 1, borderColor: '#f4f4f4' }}>
                  {data.Stage}
                </TableCell>
                {/* <TableCell align='right'>{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CurriculumContainer>
  )
}

export default Curriculum2
