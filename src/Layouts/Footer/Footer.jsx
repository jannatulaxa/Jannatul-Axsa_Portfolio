import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <Grid  justifyContent="between" alignItems="center"  style={{ minHeight: '100px', width:'100%', backgroundColor: 'black' }}>
      <Grid item>
        <Typography variant="body2" color="white">
          <div className='w-[100%] border-t'>
          <div className='flex w-[90%] mx-auto py-10 '>
          <div className='flex-1'>copyright©2023jannatulaxsa</div>
          <div className='flex-1 space-x-5 flex justify-center'>
<span>          jannatulaxajanifa586@gmail.com
</span><span>          +8801996699586</span>
          </div>
          <div className='flex-1 space-x-5 text-3xl flex justify-end'>
          <a className='text-[#FD02FE]' href="http://www.facebook.com/profile.php?id=100078129848082" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          <a className='text-[#FD02FE]' href="https://www.linkedin.com/in/jannatul-axsa-9bba441b5/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          </div>
          </div>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
