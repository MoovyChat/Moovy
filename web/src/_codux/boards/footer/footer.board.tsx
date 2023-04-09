import { createBoard } from '@wixc3/react-board';
import Footer from '../../../pages/welcome/footer/footer';

export default createBoard({
  name: 'Footer',
  Board: () => <Footer />,
  environmentProps: {
    windowBackgroundColor: '#000000',
  },
});
