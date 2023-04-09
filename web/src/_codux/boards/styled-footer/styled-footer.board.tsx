import { createBoard } from '@wixc3/react-board';
import { StyledFooter } from '../../../pages/welcome/footer/footer.styles';

export default createBoard({
  name: 'StyledFooter',
  Board: () => <StyledFooter />,
});
