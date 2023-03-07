import {render,screen,cleanup, getByText} from '@testing-library/react'
import Login from './Login'
test('should render login component',()=>{
    const {getByTestId,getByLabelText}=render(<Login/>);

    const nameLabel=getByText(/User Name/i)
    const passwordLabel=getByText(/Password/i)

    expect(nameLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()

    const input=getByLabelText(/User Name/i);
    expect(input().toHaveAttribute('type','String'))
    

})