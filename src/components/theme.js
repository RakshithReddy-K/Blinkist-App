
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        h6: {
            fontSize:15,
            fontFamily: ['"CeraPRO-Regular"', '"sans-serif"','"arial"'].join(','),
            color:'#042330'
         
        },
        h5:
        {
                 fontSize:16,
                fontFamily: ['"CeraPRO-Regular"', '"sans-serif"','"arial"'].join(','),
                color:'#042330',
                fontWeight:550
             
        },
        caption:
        {
            fontFamily: ['"CeraPRO-Regular"', '"sans-serif"','"arial"'].join(','),
            
        }

      }
    })

export default theme;

